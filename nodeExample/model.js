var myname;
module.exports.setName = function(username){// exports=module.exports
    myname = username;
}
module.exports.getName = function(){
    console.log("我的名字是" + myname);
}
// exports引用了module.exports相同的内存地址，所以不能给exports赋值另一个对象
// 值类型和引用类型的区别：引用类型时，exports仅仅是存储的对象在内存的地址。