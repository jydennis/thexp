(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{194:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[s._m(0),s._v(" "),a("p",[s._v("该模块位于 "),a("a",{attrs:{href:"https://github.com/sailist/thexp/blob/master/thexp/frame/params.py",target:"_blank",rel:"noopener noreferrer"}},[s._v("thexp.frame.params"),a("OutboundLink")],1),s._v(" 。"),a("code",[s._v("Params")]),s._v("用于记录各种超参数和配置变量，支持Json、命令行参数等多种方法定义参数。")]),s._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),a("p",[s._v("该节介绍的功能的全部示例位于 "),a("a",{attrs:{href:"https://github.com/sailist/thexp/blob/master/examples/8.params.py",target:"_blank",rel:"noopener noreferrer"}},[s._v("examples/8.params.py"),a("OutboundLink")],1),s._v(" 中")])]),s._v(" "),s._m(1),s._v(" "),a("p",[s._v("可以通过直接创建该类的实例来创建你需要的超参数。")]),s._v(" "),s._m(2),a("p",[s._v("输出")]),s._v(" "),s._m(3),s._m(4),s._v(" "),s._m(5),a("p",[s._v("输出")]),s._v(" "),s._m(6),s._m(7),s._v(" "),s._m(8),s._v(" "),s._m(9),s._v(" "),s._m(10),a("p",[s._v("输出")]),s._v(" "),s._m(11),s._m(12),s._v(" "),s._m(13),s._v(" "),a("p",[s._v("通过Google提供的 "),a("a",{attrs:{href:"https://github.com/google/python-fire",target:"_blank",rel:"noopener noreferrer"}},[s._v("Fire"),a("OutboundLink")],1),s._v("库，"),a("code",[s._v("Params")]),s._v("可以很方便的接受命令行参数：")]),s._v(" "),s._m(14),s._v(" "),s._m(15),a("p",[s._v("运行时候输入的命令行参数如下：")]),s._v(" "),s._m(16),a("p",[s._v("输出")]),s._v(" "),s._m(17),s._m(18),s._v(" "),s._m(19),s._m(20),s._v(" "),a("p",[s._v("实际上，除了正常的输出外，上述的命令行参数还会报出如下警告：")]),s._v(" "),s._m(21),s._m(22),s._v(" "),s._m(23),s._v(" "),s._m(24),s._v(" "),s._m(25),s._v(" "),s._m(26),s._m(27),s._v(" "),s._m(28),s._v(" "),s._m(29),s._v(" "),s._m(30),s._m(31),s._v(" "),s._m(32),s._v(" "),s._m(33),s._v(" "),a("p",[s._v("比如，将数据集和模型结构及其对应的部份超参数进行关联，当数据变动到相应值时，会触发相应的连锁反应")]),s._v(" "),s._m(34),a("p",[s._v("输出")]),s._v(" "),s._m(35),s._m(36),s._v(" "),a("p",[s._v("Params中添加了Grid Search方法，可以很简单的生成：")]),s._v(" "),s._m(37)])},[function(){var s=this.$createElement,t=this._self._c||s;return t("h1",{attrs:{id:"超参数声明：params"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超参数声明：params","aria-hidden":"true"}},[this._v("#")]),this._v(" 超参数声明：Params")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本使用","aria-hidden":"true"}},[this._v("#")]),this._v(" 基本使用")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" thexp "),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Params\n\nparams "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Params"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Params"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'epoch'")]),s._v(", 10"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'eidx'")]),s._v(", 1"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'idx'")]),s._v(", 0"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'global_step'")]),s._v(", 0"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'device'")]),s._v(", "),a("span",{attrs:{class:"token string"}},[s._v("'cpu'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'dataset'")]),s._v(", None"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'architecture'")]),s._v(", None"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'optim'")]),s._v(", None"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("如上输出所示，在Params中预先定义了一部分常用的变量，主要用于配合"),t("code",[this._v("Trainer")]),this._v("类用以控制逻辑，当然你也可以任意的修改它们的值：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("epoch "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("400")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("batch_size "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("25")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Params"),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'epoch'")]),s._v(", 400"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'eidx'")]),s._v(", 1"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'idx'")]),s._v(", 0"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'global_step'")]),s._v(", 0"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'device'")]),s._v(", "),a("span",{attrs:{class:"token string"}},[s._v("'cpu'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'dataset'")]),s._v(", None"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'architecture'")]),s._v(", None"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'optim'")]),s._v(", None"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\n "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'batch_size'")]),s._v(", 25"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("其内部是一个重写支持了一些小trick的"),t("code",[this._v("OrderedDict")]),this._v("实现，因此输出会按照其定义的顺序来输出。输出同时还使用了Python内置的"),t("code",[this._v("pprint")]),this._v("来美化。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#继承","aria-hidden":"true"}},[this._v("#")]),this._v(" 继承")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("你也可以通过继承的方式来实现该类（"),t("strong",[this._v("注意：必须要调用父类的初始化方法")]),this._v("）：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" thexp "),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Params\n"),a("span",{attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{attrs:{class:"token class-name"}},[s._v("MyParams")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Params"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{attrs:{class:"token function"}},[s._v("__init__")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{attrs:{class:"token builtin"}},[s._v("super")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("__init__"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{attrs:{class:"token comment"}},[s._v("# 注意：必须要调用父类的初始化方法")]),s._v("\n        self"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("batch_size "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token number"}},[s._v("50")]),s._v("\n        self"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("topk "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token number"}},[s._v("1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("2")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("3")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("4")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        self"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optim "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token builtin"}},[s._v("dict")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n            lr"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("0.009")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            moment"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("0.9")]),s._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nparams "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" MyParams"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("MyParams[('epoch', 10),\n ('eidx', 1),\n ('idx', 0),\n ('global_step', 0),\n ('device', 'cpu'),\n ('dataset', None),\n ('architecture', None),\n ('optim', attr([('lr', 0.009), ('moment', 0.9)])),\n ('batch_size', 50),\n ('topk', (1, 2, 3, 4))]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("所有 dict 类型的变量在定义后都会被转换为 "),t("code",[this._v("thexp")]),this._v(" 内部支持众多特性的 "),t("code",[this._v("attr")]),this._v(" 类型。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"命令行参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令行参数")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("如新建一个文件命名为"),t("code",[this._v("ap.py")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" thexp "),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Params\nparams "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Params"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("from_args"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("python ap.py --optim.lr"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("0.001 --epoch"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("400 --dataset"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("cifar10 --k"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v("12\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[s._v(" ")]),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Params[('epoch', 400),\n ('eidx', 1),\n ('idx', 0),\n ('global_step', 0),\n ('device', 'cpu'),\n ('dataset', 'cifar10'),\n ('architecture', None),\n ('optim', attr([('lr', 0.001)])),\n ('k', 12),\n ('thresh', 5)]\n")])]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v("注意高亮的一行，除了最基本的"),a("code",[s._v("epoch")]),s._v("/"),a("code",[s._v("dataset")]),s._v("等参数的设置外，"),a("code",[s._v("optim.lr")]),s._v("参数被分开了，这是为命令行参数特别添加的支持，该特性可以支持任意层级的超参数分配，通过这种方式，你可以用"),a("code",[s._v("Params")]),s._v("类完成很多类的参数传递过程，如")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("optim "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" SGD"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("model"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("parameters"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token operator"}},[s._v("**")]),s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optim"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("将所有的实例的基本数据类型的构建参数通过字典的形式保存到 "),t("code",[this._v("Params")]),this._v(" 中，可能能更好的帮助你对比两次试验之间发生了什么")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("E:\\Python\\iLearn\\thexp\\thexp\\frame\\params.py:173: UserWarning: optim.lr is a new param,please check your spelling.\n it's more recommended to define in advance.\n  k))\nE:\\Python\\iLearn\\thexp\\thexp\\frame\\params.py:173: UserWarning: k is a new param,please check your spelling.\n it's more recommended to define in advance.\n  k))\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("在试验过程中存在命令行参数敲错的情形，这可能不会影响试验的正常进行（比如已经定义了默认参数，该命令行参数只是额外新增了一个变量），但会导致试验使用的超参数错误，如果你的单次试验周期很长，出现这种问题会很令人沮丧。因此，当通过命令行参数方式定义超参数时候，会对新设置的参数抛出警告用于提醒。")]),this._v(" "),t("p",[this._v("也因此，强烈建议在试验前定义好所有的超参数，这有利于命令行参数时的错误识别和一些其他因素。")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("此外，所有在Params中的字典会被自动转换为"),t("code",[this._v("attr")]),this._v("类，使得你可以通过引用的方式来获取值（如"),t("code",[this._v("params.optim.lr")]),this._v("）而不是只能通过字典的方式来获取（即"),t("code",[this._v('params.optim["lr"]')]),this._v("）")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"序列化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#序列化","aria-hidden":"true"}},[this._v("#")]),this._v(" 序列化")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[t("code",[this._v("Params")]),this._v(" 支持以Json格式序列化超参数：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("to_json"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'params.json'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("from_json"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'params.json'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("p",[s._v(":: warning\n保存的数据中只会包括基本的 "),a("code",[s._v("str")]),s._v("/"),a("code",[s._v("Number")]),s._v("等基本类型以及"),a("code",[s._v("list")]),s._v("/"),a("code",[s._v("dict")]),s._v("等数据结构，其他的内容不会被保存，这包括 "),a("code",[s._v("numpy")]),s._v(" 或 "),a("code",[s._v("torch")]),s._v(" 中的向量（或标量）。因此，请尽可能的只使用基本的、内置的数据类型来定义超参数。\n::")])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"限制域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限制域","aria-hidden":"true"}},[this._v("#")]),this._v(" 限制域")])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("有一些参数可能有显式的声明值域的需求，因此"),t("code",[this._v("Params")]),this._v("中提供了两个方法"),t("code",[this._v("choice")]),this._v("和"),t("code",[this._v("arange")]),this._v("来帮助完成值域的声明：")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("from")]),s._v(" thexp "),a("span",{attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Params\nparams "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" Params"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("choice"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"dataset"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v('"cifar10"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v('"cifar100"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v('"svhn"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arange"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"thresh"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("5")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("0")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("20")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("p",[this._v("此时，如果为相应的值分配了不在值域范围内的属性，"),t("code",[this._v("Params")]),this._v("会抛出异常。")])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("此举主要用来更快的报出错误，避免因在试验过程中发现这种低级错误而浪费时间")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"关联绑定"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关联绑定","aria-hidden":"true"}},[this._v("#")]),this._v(" 关联绑定")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'dataset'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'mnist'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'arch'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'simplenet'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'dataset'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'cifar10'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'arch'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'cnn13'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'arch'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'simplenet'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'arch_param'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token builtin"}},[s._v("dict")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("feature"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("128")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bind"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v("'arch'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'cnn13'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'arch_param'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token builtin"}},[s._v("dict")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("feature"),a("span",{attrs:{class:"token operator"}},[s._v("=")]),a("span",{attrs:{class:"token number"}},[s._v("256")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataset "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'cifar10'")]),s._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arch"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arch_param"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nparams"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataset "),a("span",{attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{attrs:{class:"token string"}},[s._v("'mnist'")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arch"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("arch_param"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("cnn13\nattr([('feature', 256)])\nsimplenet\nattr([('feature', 128)])\n")])]),this._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[this._v("1")]),t("br"),t("span",{staticClass:"line-number"},[this._v("2")]),t("br"),t("span",{staticClass:"line-number"},[this._v("3")]),t("br"),t("span",{staticClass:"line-number"},[this._v("4")]),t("br")])])},function(){var s=this.$createElement,t=this._self._c||s;return t("h2",{attrs:{id:"grid-search"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grid-search","aria-hidden":"true"}},[this._v("#")]),this._v(" Grid Search")])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" g "),a("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v(" params"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("grid_search"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"optim.lr"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token number"}},[s._v("0.1")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("0.01")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token number"}},[s._v("0.001")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{attrs:{class:"token keyword"}},[s._v("for")]),s._v(" g "),a("span",{attrs:{class:"token keyword"}},[s._v("in")]),s._v(" g"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("grid_search"),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{attrs:{class:"token string"}},[s._v('"dataset"')]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{attrs:{class:"token string"}},[s._v("'cifar10'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'cifar100'")]),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{attrs:{class:"token string"}},[s._v("'svhn'")]),a("span",{attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{attrs:{class:"token keyword"}},[s._v("print")]),a("span",{attrs:{class:"token punctuation"}},[s._v("(")]),s._v("g"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dataset"),a("span",{attrs:{class:"token punctuation"}},[s._v(",")]),s._v("g"),a("span",{attrs:{class:"token punctuation"}},[s._v(".")]),s._v("thresh"),a("span",{attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])}],!1,null,null,null);e.options.__file="2-params.md";t.default=e.exports}}]);