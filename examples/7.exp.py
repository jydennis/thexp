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
import sys
sys.path.insert(0,"../")
from thexp import __VERSION__
print(__VERSION__)
import time

from thexp import Experiment

exp = Experiment("expname")
print(exp.make_exp_dir("explevel"))
print(exp.makedir("testlevel"))

from thexp import Params

params = Params()
exp.regist_plugin("params",dict(
    _param_hash = params.hash(),
    data = params.inner_dict.jsonify()
))

from thexp import Logger

logger = Logger()
fn = logger.add_log_dir(exp.makedir('logger'))
exp.regist_plugin('logger',dict(
    fn = fn,
))



time.sleep(1)
try:
    raise Exception("dddd")
except:
    pass

exp.end()


