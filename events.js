
// var events = require('events');
// var emitter = new events.EventEmitter();

// emitter.on("myEvent", (msg) => {
//     console.log(msg);
// });


// emitter.emit("myEvent", "I am an custome event");

var Person = require('./person');
var person1 = new Person("Mike");

var person2 = new Person("John");
person1.on("speak", function(learned)  {
    console.log(`${this.name} ==> ${learned}`);
});

// person1.on("learn", (learned) => {
//     console.log(`${person1.name} ==> ${learned}`);
// });

person1.emit("speak", "Be persistent");

person2.on("speak", function(learned)  {
    console.log(`${this.name} ==> ${learned}`);
});

person2.emit("speak", "Be resilient");