var events = require("events");
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on("myevent", function(){
//     console.log("event is triggereddd");
// })
// eventEmitter.on("myevent", function(){
//     console.log("event is triggered");
// })
// eventEmitter.emit("myevent");
// // event is triggereddd
// // event is triggered

// var myeventemitter = new events.EventEmitter();
// myeventemitter.on("event1", function(data){
//     console.log("event1被触发");
//     console.log(data);
//     myeventemitter.emit("event2");
// })
// myeventemitter.on("event2", function(){
//     console.log("event2被触发");
// })

// myeventemitter.emit("event1", "zhangsan");// 多层嵌套
// // event1被触发
// // zhangsan
// // event2被触发
// // EventEmitter优势：不会发生阻塞

var myevent = new events.EventEmitter();
myevent.on("getdata", function(methodname){
    if(methodname == "local"){
        console.log("local");
    }
    else if(methodname == "online"){
        console.log("online");
    }
})
myevent.emit("getdata", "local");
myevent.emit("getdata", "online");// 不会阻塞后面
// local
// online