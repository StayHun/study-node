var events = require("events");
var eventEmitter = new events.EventEmitter();
eventEmitter.on("myevent", function(){
    console.log("event is triggereddd");
})
eventEmitter.on("myevent", function(){
    console.log("event is triggered");
})
eventEmitter.emit("myevent");

// var fs = require("fs");
// fs.readFile("", function(){

// })