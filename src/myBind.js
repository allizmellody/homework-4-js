Function.prototype.myBind = function(context) {
  const selfFunc = this;
  const slice = Array.prototype.slice;

  if (typeof selfFunc !== 'function') {
    throw new TypeError(`${this.name}.myBind is not a function`);
  }

  return function() {
    return selfFunc.apply(context, slice.call(arguments))
  };
};

function addPropToNumber(number) {
  return this.prop + number;
}

const bound = addPropToNumber.myBind({ prop: 9 });

console.log(bound(1));