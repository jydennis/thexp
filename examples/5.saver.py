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


from thexp import Saver

saver = Saver("./sav",max_to_keep=3)
for i in range(10):
    saver.save_keypoint(i,{"a":i},{"b":i})
for i in range(10):
    saver.save_checkpoint(i,{"a":i},{"b":i})
for i in range(10):
    saver.save_model(i,{"a":i},{"b":i})

print(saver.find_keypoints())
print(saver.find_checkpoints())
print(saver.find_models())