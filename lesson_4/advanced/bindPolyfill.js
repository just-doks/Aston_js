// "use strict";
// if (!Function.prototype.bind) {
    Function.prototype.bind = function(thisArg) {
        var that = this;
        var outerArgs = arguments;
        return function() {
            var args = Array.prototype.slice.call(outerArgs, 1);
            args = args.concat(Array.prototype.slice.call(arguments));
            that.apply(thisArg, args);
        }
    }
// }

function myBind(func, obj) {
    var outerArgs = arguments;
    return function() {
        var args = Array.prototype.slice.call(outerArgs, 1);
        args = args.concat(Array.prototype.slice.call(arguments));
        func.apply(obj, args);
    }
}

function bind(thisArg) {
    var that = this;
    var outerArgs = arguments;
    return function() {
        that.apply(thisArg, 
            Array.prototype.slice.call(outerArgs, 1).concat(
                Array.prototype.slice.call(arguments)));
    }
}

// ES6
// function log(...args) {
//     console.log(this, ...args);
// }

// ES3
function log() {
    var args = Array.prototype.slice.call(arguments);
    var params = "";
    for (var i = 0; i < args.length; ++i) {
        params += "arg" + i + ',';
    }
    var that = this;
    var body = "console.log(that," + params + ");";
    args = Array.prototype.concat.call([], that, args)
    Function('that', params, body).apply(this, args);
}

const boundLog = log.bind("this value", 1, 2, "some", true);
boundLog(3, 4)
const boundLog2 = boundLog.bind("new this value", 5, 6, 7n);
boundLog2(8, 9n)
