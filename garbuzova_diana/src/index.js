const largest = function() {
  validateArguments(arguments, 'number');
  return Math.max.apply(null, arguments);
};

const smallest = function() {
  validateArguments(arguments, 'number');
  let smallest = arguments[0];
  for (let index = 1; index < arguments.length; index++) {
    const current = arguments[index];
    if (current < smallest) {
      smallest = current;
    }
  }
  return smallest;
};

const transform = function(baseArray) {
  validateArguments(baseArray, 'number');
  if (Array.isArray(baseArray)) {
    return baseArray.map(element =>
        function() {
          return element;
        }
    );
  }
  throw new TypeError;
};

const sum = function() {
  validateArguments(arguments, 'number');

  function recursiveSum(args, index) {
    if (index < args.length) {
      return args[index] + recursiveSum(args, index + 1);
    }
    return 0;
  }

  return recursiveSum(arguments, 0);
};

const countDown = function(value) {
  for (let counter = value; counter >= 0; counter--) {
    setTimeout(function() {
      console.log(counter);
    }, (value - counter) * 1000);
  }
};

function validateArguments(arguments, type) {
  for (arg of arguments) {
    if (typeof arg !== type) {
      throw new TypeError(`element ${arg} should be a number`);
    }
  }
}

module.exports = {
  largest,
  smallest,
  transform,
  sum,
  countDown
};