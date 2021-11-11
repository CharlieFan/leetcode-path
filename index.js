if (!Function.prototype.bind)
    (function () {
        var slice = Array.prototype.slice;
        Function.prototype.bind = function () {
            var thatFunc = this;
            var thatArg = arguments[0];
            var args = slice.call(arguments, 1);

            if (typeof thatFunc !== "function") {
                // closest thing possible to the ECMAScript 5
                // internal IsCallable function
                throw new TypeError(
                    "Function.prototype.bind - " +
                        "what is trying to be bound is not callable"
                );
            }

            return function () {
                var funcArgs = args.concat(slice.call(arguments));
                return thatFunc.apply(thatArg, funcArgs);
            };
        };
    })();

// my bind
var slice = Array.prototype.slice;
Function.prototype.myBind = function () {
    var thatFunc = this;
    var thatArg = arguments[0];
    var args = slice.call(arguments, 1);

    if (typeof thatFunc !== "function") {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError(
            "Function.prototype.bind - " +
                "what is trying to be bound is not callable"
        );
    }

    return function () {
        var funcArgs = args.concat(slice.call(arguments));

        return thatFunc.apply(thatArg, funcArgs);
    };
};

const module = {
    x: 42,
    getX: function (a) {
        return this.x + a;
    },
};

const unboundGetX = module.getX;

const boundGetX = unboundGetX.myBind(module, 1);

console.log(boundGetX());
