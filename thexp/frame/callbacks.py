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

import os
import warnings
from functools import wraps

from .meter import AvgMeter
from .meter import Meter
from .params import Params

from ..base_classes.trickitems import NoneItem, AvgItem
from ..globals import _ML
from ..utils.timeit import format_second


class BaseCallback():
    """
    回调基类，实现了基本的回调接口

    因为绑定的方法只会调用on_begin()和on_end()，因此对于具体的方法需要进行判断进行方法的分流
    """
    priority = 0  # 所有内部实现的Callback优先级均在 [0-100] 以内

    def __new__(cls, *_, **__):
        self = super().__new__(cls)
        self.enable = True
        self._trainer = None

        def ecp_wrap(func):
            """同一个异常第一次调用的时候运行"""

            @wraps(func)
            def on_exception(trainer: 'BaseTrainer', tfunc, params: Params, e: BaseException, *args, **kwargs):
                self.ecp = getattr(self, "ecp", None)
                res = None
                if self.ecp != e:
                    res = self.on_first_exception(trainer, tfunc, params, e, *args, **kwargs)
                    self.ecp = e

                eres = func(trainer, tfunc, params, e, *args, **kwargs)
                if res is None:
                    return eres
                else:
                    return res

            return on_exception

        self.on_exception = ecp_wrap(self.on_exception)
        return self

    def on_hooked(self, trainer: 'BaseTrainer', params: Params):
        """called when callback hooked trainer"""
        pass

    def on_first_exception(self, trainer: 'BaseTrainer', func, params: Params, e: BaseException, *args, **kwargs):
        """
        when an exception was raised in some function, on_exception() will be called.

        如果异常发生在一个嵌套调用的函数中，那么该异常会在每一层函数都raise一次。

        该方法将被调用当该异常第一次raise出来的时候。
        该方法在 __new__ 中作了处理逻辑，不受继承关系影响
        """
        pass

    def on_exception(self, trainer: 'BaseTrainer', func, params: Params, e: BaseException, *args, **kwargs):
        """called when exception raised in some function"""
        return False

    def on_hook_failed(self, trainer, message):
        """Any reason when callback cannot hook on trainer"""
        pass

    def on_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        """called before trainer.func is called"""
        pass

    def on_end(self, trainer: 'BaseTrainer', func, params: Params, meter, *args, **kwargs):
        pass

    def __le__(self, other):
        return self.priority <= other.priority

    def __lt__(self, other):
        return self.priority < other.priority

    def hook(self, trainer: 'BaseTrainer'):
        """自动将自己已有的on_func_begin/on_func_end方法绑定"""
        # trainer.add_callback(self)
        trainer.reload_callback(self)

    def unhook(self):
        self._trainer.remove_callback(self)

    def _repr_by_val(self, *vals):
        vstr = "; ".join(["{}={}".format(val, str(getattr(self, val, None))) for val in vals])
        return "<{}([{}]) at 0x{:016X}>".format(self.__class__.__name__, vstr, id(self))

    def __repr__(self) -> str:
        return self._repr_by_val("priority")


class TrainCallback(BaseCallback):
    """
    实现了一般训练过程中的函数函数回调，主要将 on_begin() / on_end() 方法分发到各具体的回调方法中
    """

    def on_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        if func.__name__ == "train":
            self.on_train_begin(trainer, func, params, *args, **kwargs)
        elif func.__name__ == "train_epoch":
            self.on_train_epoch_begin(trainer, func, params, *args, **kwargs)
        elif func.__name__ == "train_batch":
            self.on_train_batch_begin(trainer, func, params, *args, **kwargs)
        elif func.__name__ == "test":
            self.on_test_begin(trainer, func, params, *args, **kwargs)
        elif func.__name__ == "eval":
            self.on_eval_begin(trainer, func, params, *args, **kwargs)
        # elif func.__name__ in ""

    def on_train_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        pass

    def on_train_epoch_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        pass

    def on_test_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        pass

    def on_eval_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        pass

    def on_train_batch_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        pass

    def on_end(self, trainer: 'BaseTrainer', func, params: Params, meter, *args, **kwargs):
        if func.__name__ == "train":
            self.on_train_end(trainer, func, params, meter, *args, **kwargs)
        elif func.__name__ == "train_epoch":
            self.on_train_epoch_end(trainer, func, params, meter, *args, **kwargs)
        elif func.__name__ == "train_batch":
            self.on_train_batch_end(trainer, func, params, meter, *args, **kwargs)
        elif func.__name__ == "test":
            self.on_test_end(trainer, func, params, meter, *args, **kwargs)
        elif func.__name__ == "eval":
            self.on_eval_end(trainer, func, params, meter, *args, **kwargs)

    def on_train_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        pass

    def on_train_epoch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        pass

    def on_test_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        pass

    def on_eval_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        pass

    def on_train_batch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        pass


class EvalCallback(TrainCallback):
    """
    决定在训练过程中，eval 和 test 的频率，当 Trainer 中没有注册训练集或测试集时，相应的过程会被跳过
    """

    def __init__(self, eval_per_epoch=1, test_per_epoch=10):
        self.eval_in_per_epoch = eval_per_epoch
        self.test_in_per_epoch = test_per_epoch

    def on_train_epoch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        if params.eidx % self.eval_in_per_epoch == self.eval_in_per_epoch - 1:
            trainer.eval()
        if params.eidx % self.test_in_per_epoch == self.test_in_per_epoch - 1:
            trainer.test()

    def on_train_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        if params.eidx % self.eval_in_per_epoch != self.eval_in_per_epoch - 1:
            trainer.eval()
        if params.eidx % self.test_in_per_epoch != self.test_in_per_epoch - 1:
            trainer.test()

    def __repr__(self):
        return self._repr_by_val("eval_in_per_epoch", "test_per_epoch")


class LoggerCallback(TrainCallback):
    """
    用于日志输出的回调，当 Trainer 在 epoch / batch 等级别的训练结束、异常发生等过程后，Logger 会对这些事件，
    或方法返回的结果进行输出。

    一般情况下 Logger 支持所有类型输出，但如果使用 Meter 类进行包装，会有更好的输出形式
    """

    def __init__(self, avg=True):
        self.avg = avg

    def on_hooked(self, trainer: 'BaseTrainer', params: Params):
        super().on_hooked(trainer, params)
        trainer.logger.info("Exp BaseDir", os.path.abspath(trainer.experiment.exp_dir))
        trainer.logger.info("Exp Trainer", trainer.__class__.__name__)
        trainer.logger.info("Exp Params", params)
        self.start = 0

    def on_train_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        from ..utils.timeit import TimeIt

        self.start = params.eidx
        self.traintime = TimeIt()
        self.traintime.start()
        super().on_train_begin(trainer, func, params, *args, **kwargs)

    def on_train_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        self.traintime.end()
        if meter is None:
            meter = ""
        trainer.logger.info("train end", meter)
        trainer.logger.info("train time: {}".format(format_second(self.traintime["use"])))

    def on_train_epoch_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        from ..utils.timeit import TimeIt

        if self.avg:
            self.meter = AvgMeter()
        self.epochtime = TimeIt()
        self.epochtime.start()
        trainer.logger.info("{}/{}".format(params.eidx, params.epoch))

    def on_train_epoch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        self.traintime.mark("epoch")
        self.epochtime.end()

        avg = self.traintime["use"] / (params.eidx - self.start + 1)
        last = (params.epoch - params.eidx) * avg

        tm = Meter()
        tm.train = format_second(self.traintime["use"])
        tm.epoch = format_second(self.epochtime["use"])
        tm.avg = format_second(avg)
        tm.last = format_second(last)
        trainer.logger.info(tm)

        super().on_train_epoch_end(trainer, func, params, meter, *args, **kwargs)

    def on_train_batch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        if meter is None:
            meter = ""
        else:
            if self.avg:
                self.meter.update(meter)
                meter = self.meter
        trainer.logger.inline("{}/{}".format(params.idx + 1, len(trainer.train_dataloader)), meter, fix=1)

    def on_first_exception(self, trainer: 'BaseTrainer', func, params: Params, e: BaseException, *args, **kwargs):
        trainer.logger.error("{} raised".format(e.__class__.__name__))

    def on_test_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        trainer.logger.info("tests start")

    def on_eval_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        trainer.logger.info("eval start")

    def on_eval_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        if meter is None:
            meter = ""
        trainer.logger.info("eval end", meter)

    def on_test_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        if meter is None:
            meter = ""
        trainer.logger.info("tests end", meter)


class ModelCheckpoint(TrainCallback):
    """
    用于检视训练过程中模型的某个指标，并根据其提升进行 checkpoint 类型的保存
    该类参考了 Keras 中相应的实现。
    """

    def __init__(self, monitor, mode="train", lower=True, start_epoch=0):
        self.monitor = monitor
        self.mode = mode
        self.lower = lower
        self.last_val = NoneItem()
        self.start_epoch = start_epoch

    def on_train_epoch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        self.update("train", trainer, params, meter)

    def update(self, cur_mode, trainer, param, meter):
        if cur_mode != self.mode:
            return
        if param.eidx > self.start_epoch:
            item = meter[self.monitor]
            if isinstance(item, AvgItem):
                item = item.avg
            if isinstance(item, NoneItem):
                return

            if self.lower:
                if self.last_val > item:
                    trainer.logger.info("model imporved from {} to {}".format(self.last_val, item))
                    trainer.save_checkpoint(meter.serialize())
                    self.last_val = item
            else:
                if self.last_val < item:
                    trainer.logger.info("model imporved from {} to {}".format(self.last_val, item))
                    trainer.save_checkpoint(meter.serialize())
                    self.last_val = item

    def on_test_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        self.update("test", trainer, params, meter)

    def on_eval_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        self.update("eval", trainer, params, meter)

    def __repr__(self) -> str:
        return self._repr_by_val("monitor", "mode", "lower", "start_epoch")


class TimingCheckpoint(TrainCallback):
    """
    在 Trainer 训练过程中定时保存模型
    """

    def __init__(self, per_epoch=50):
        self.per_epoch = per_epoch

    def on_train_epoch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        if params.eidx % self.per_epoch == 0 and params.eidx > 0:
            trainer.save_keypoint(meter.serialize(), replacement=True)

    def __repr__(self) -> str:
        return self._repr_by_val("per_epoch")


class KeyErrorSave(TrainCallback):
    priority = -1

    def __init__(self, wait_input=False):
        self.wait_input = wait_input

    def on_first_exception(self, trainer: 'BaseTrainer', func, params: Params, e: BaseException, *args, **kwargs):
        if isinstance(e, (KeyboardInterrupt)):
            trainer.logger.info("KeyErrorSave trigged, save checkpoint")
            trainer.save_keypoint({"mode": "KeyboardInterrupt"})

            tp = "n"
            if self.wait_input:
                tp = input("continue train step? (y/other)")

            if tp.lower() == "y":
                return True


class CUDAErrorHold(TrainCallback):
    """
    当 CUDA out of memory 出现时，挂住程序。

    一般而言，程序运行过程中 CUDA 会分配到最大显存，程序的显存占用一般会比较稳定，
    但仍然存在一些例外情况，显存的占用会飘忽不定，此时可以使用该 Callback 解决这一问题。
    """
    priority = -1

    def __init__(self, wait_input=False):
        self.wait_input = wait_input

    def on_first_exception(self, trainer: 'BaseTrainer', func, params: Params, e: BaseException, *args, **kwargs):
        if isinstance(e, (RuntimeError)):
            if "cuda" in str(e).lower() and 'out of memory' in str(e).lower():
                trainer.logger.info("CUDA Error trigged, enter to continue or type any to exit")
                tp = input("enter to continue or any other type to exit?")

                if len(tp.strip()) == 0:
                    return True


class AutoRecord(TrainCallback):
    """
    自动记录训练过程中的所有变量到 tensorboard 中（epoch 级）
    """
    def __init__(self) -> None:
        super().__init__()
        from collections import defaultdict
        self._ignore_dict = defaultdict(set)

    def on_hooked(self, trainer: 'BaseTrainer', params: Params):
        self.start = 0
        trainer.experiment.add_tag("record", 'writer')

    def ignore_key(self, mode, key):
        self._ignore_dict[mode].add(key)

    def _key_name(self, mode, key):
        return "auto_{}_{}".format(mode, key)

    def on_test_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        if isinstance(meter, Meter):
            for k, v in meter.numeral_items():
                if k in self._ignore_dict[_ML.test]:
                    continue
                trainer.writer.add_scalar(self._key_name("test", k), v, params.eidx)

    def on_train_begin(self, trainer: 'BaseTrainer', func, params: Params, *args, **kwargs):
        self.start = params.eidx

    def on_eval_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        if isinstance(meter, Meter):
            for k, v in meter.numeral_items():
                if k in self._ignore_dict[_ML.eval]:
                    continue
                trainer.writer.add_scalar(self._key_name("evel", k), v, params.eidx)

    def on_train_epoch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: AvgMeter, *args, **kwargs):
        if isinstance(meter, Meter):
            for k, v in meter.numeral_items():
                if k in self._ignore_dict[_ML.train]:
                    continue
                trainer.writer.add_scalar(self._key_name("train", k), v, params.eidx)


class BoardRecord(TrainCallback):
    """
    手动选择训练过程中产生的指标进行记录
    """
    def __init__(self, unit="epoch", empty_mode="zero"):
        """
        :param unit: epoch or global_step
        :param empty_mode: 'zero': default = 0 or 'ignore' :not record
        """
        self.watch_dict = dict(
            train=dict(),
            test=dict(),
            eval=dict(),
        )
        self.unit = unit
        self.empty_mode = empty_mode

    def watch_scalar(self, mode, name, tag):
        assert tag not in self.watch_dict[mode], "{} exists in {} watch dict".format(tag, mode)
        self.watch_dict[mode][tag] = name

    def _find_value(self, meter: Meter, key):
        if isinstance(meter[key], AvgItem):
            return meter[key].avg
        elif isinstance(meter[key], NoneItem):
            if self.empty_mode == "zero":
                return 0
            else:
                return None
        elif isinstance(meter[key], (str)):
            warnings.warn("tensorboard scalar types can't be str, but meter.{} is".format(key))
            return None
        return meter[key]

    def on_train_epoch_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        self.update(trainer, meter, params, "train")

    def update(self, trainer, meter, params, mode):
        from thexp.utils.generel_util import iter2pair
        step = params.eidx if self.unit == "epoch" else params.global_step

        for tag, names in self.watch_dict[mode].items():
            if isinstance(names, str):
                val = self._find_value(meter, names)
                if val is not None:
                    trainer.writer.add_scalar(tag, val, step)
            else:
                scalar_dict = {}
                for k, v in iter2pair(names):
                    val = self._find_value(meter, k)
                    if val is not None:
                        scalar_dict[v] = val
                trainer.writer.add_scalars(tag, scalar_dict, step)

    def on_eval_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        self.update(trainer, meter, params, "eval")

    def on_test_end(self, trainer: 'BaseTrainer', func, params: Params, meter: Meter, *args, **kwargs):
        self.update(trainer, meter, params, "test")