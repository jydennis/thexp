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

sys.path.insert(0, "../")
from thexp import __VERSION__

print(__VERSION__)

import torch.nn as nn


class MyModel(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc = nn.Linear(28 * 28, 10)

    def forward(self, x):
        x = x.view(x.shape[0], -1)
        x = self.fc(x)
        return x


from thexp.frame import Meter, Params, Trainer


class MyTrainer(Trainer):
    __exp_name__ = "DemoExp2"

    def callbacks(self, params: Params):
        from thexp import callbacks
        callbacks.LoggerCallback().hook(self)
        callbacks.AutoRecord().hook(self)

    def datasets(self, params: Params):
        from torchvision import transforms
        from torchvision.datasets import FakeData
        from thexp.torch.data import DataLoader

        dataset = FakeData(size=32 * 10, image_size=(28, 28), transform=transforms.ToTensor())
        train_loader = eval_loader = test_loader = DataLoader(dataset, shuffle=True, batch_size=32, drop_last=True)

        self.regist_databundler(
            train=train_loader,
            test=test_loader,
            eval=eval_loader,
        )

    def models(self, params: Params):
        from torch.optim import SGD
        self.model = MyModel()
        self.optim = SGD(self.model.parameters(), lr=params.optim.lr)
        self.cross = nn.CrossEntropyLoss()

    def train_batch(self, eidx, idx, global_step, batch_data, params, device):
        optim, cross = self.optim, self.cross
        meter = Meter()
        xs, ys = batch_data

        # 训练逻辑
        logits = self.model(xs)
        meter.loss = cross(logits, ys)

        # 反向传播
        meter.loss.backward()
        optim.step()
        optim.zero_grad()

        return meter


params = Params()
params.epoch = 3

for p in params.grid_search("optim.lr", [0.1, 0.001, 0.0001]):
    trainer = MyTrainer(params)
    trainer.train()


MyTrainer.__exp_name__ = "DemoExp"
for p in params.grid_search("optim.lr", [0.1, 0.001, 0.0001]):
    trainer = MyTrainer(params)
    trainer.train()

# params.lr = 0.01

