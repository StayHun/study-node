var myModule = require("./model.js");
myModule.setName("zhangsan");
myModule.getName();
var myModule1 = require("./model.js");
myModule1.setName("lisi");
myModule.getName();// 得到的是同一个对象