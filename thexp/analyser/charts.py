"""
    Copyright (C) 2020 Shandong University

    This program is licensed under the GNU General Public License 3.0 
    (https://www.gnu.org/licenses/gpl-3.0.html). 
    Any derivative work obtained under this license must be licensed 
    under the GNU General Public License as published by the Free 
    Software Foundation, either Version 3 of the License, or (at your option) 
    any later version, if this derivative work is distributed to a third party.

    The copyright for the program is owned by Shandong University. 
    For commercial projects that require the ability to distribute 
    the code of this program as part of a program that cannot be 
    distributed under the GNU General Public License, please contact 
            
            sailist@outlook.com
             
    to purchase a commercial license.
"""
import bisect
from collections import defaultdict
from itertools import chain

from pyecharts import charts
from pyecharts import options as opts


class Chart:
    def echarts(self):
        raise NotImplementedError

    def matplotlib(self):
        raise NotImplementedError


class Curve(Chart):

    def __init__(self, curve_values: dict,title="-",x_key='x', y_key='y', name_key='name') -> None:
        super().__init__()
        self.title = title
        self.curve_values = curve_values
        self.x_key = x_key
        self.y_key = y_key
        self.name_key = name_key
        self._xaxis = None
        self._aligned = False

    @property
    def x_axis(self):
        if self._xaxis is None:
            self._xaxis = sorted(set(chain(*[v[self.x_key] for v in self.curve_values.values()])))
        return self._xaxis

    def _align_data(self):
        if self._aligned:
            return
        for k in self.curve_values.keys():
            v = self.curve_values[k]
            x_map = {x:y for x,y in zip(v[self.x_key],v[self.y_key])}
            new_ys = []
            for x in self.x_axis:
                if x in x_map:
                    new_ys.append(x_map[x])
                else:
                    new_ys.append(None)
            v[self.y_key] = new_ys

        self._aligned = True

    def echarts(self):
        self._align_data()
        c = charts.Line()

        for k, v in self.curve_values.items():
            c.add_xaxis([str(i) for i in self.x_axis])
            break
        for k, v in self.curve_values.items():
            c.add_yaxis(
                v[self.name_key],
                v[self.y_key],
                label_opts=opts.LabelOpts(is_show=False),
                is_symbol_show=False,
            )

        c.set_global_opts(title_opts=opts.TitleOpts(title=self.title),
                          tooltip_opts=opts.TooltipOpts(is_show=True, trigger='axis'), )

        return c

    def matplotlib(self):
        pass


class Bar(Chart):
    pass


class Parallel(Chart):
    def __init__(self, names: list, params_dicts: dict, metric_dicts: dict, title: str = 'Parallel'):
        super().__init__()
        self.names = names
        self.params_dicts, self.metric_dicts = params_dicts, metric_dicts
        self.title = title

    def _echarts_axis_opts(self):
        """
        ([{'epoch': 3,
   'eidx': 1,
   'idx': 0,
   'global_step': 0,
   'device': 'cpu',
   'optim.lr': 0.1},
  {'epoch': 3,
   'eidx': 1,
   'idx': 0,
   'global_step': 0,
   'device': 'cpu',
   'optim.lr': 0.001}],
 [{'auto_train_loss': 3.7000625133514404},
  {'auto_train_loss': 2.3023736476898193}])
        :return:
        """
        str_opts = defaultdict(list)
        for i, (k, v) in enumerate(chain(self.params_dicts[0].items(), self.metric_dicts[0].items())):
            if isinstance(v, str):
                str_opts[k].append(v)

        res = []
        for i, (k, _) in enumerate(chain(self.params_dicts[0].items(), self.metric_dicts[0].items())):
            if k in str_opts:
                res.append(opts.ParallelAxisOpts(dim=i, name=k, type_="category", data=str_opts[k]))
            else:
                res.append(opts.ParallelAxisOpts(dim=i, name=k))

        return res

    def _echarts_data(self):
        res = []
        for (test_name, params_dict, metric_dict) in zip(self.names, self.params_dicts,
                                                         self.metric_dicts):  # type:(dict,dict)
            data = test_name, [[v for _, v in chain(params_dict.items(), metric_dict.items())]]
            res.append(data)
        return res

    def echarts(self):
        c = charts.Parallel().add_schema(self._echarts_axis_opts())
        for name, data in self._echarts_data():
            c.add(name, data, is_smooth=True)
        c.set_global_opts(title_opts=opts.TitleOpts(title=self.title))

        return c

    def matplotlib(self):
        pass


class Table:
    pass
