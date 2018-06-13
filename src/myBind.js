Function.prototype.myBind = function() {
  const selfFunc = this;
  const slice = Array.prototype.slice;
  const context = arguments[0];
  const args = slice.call(arguments, 1);

  if (typeof selfFunc !== 'function') {
    throw new TypeError(`${this.name}.myBind is not a function`);
  }

  return function() {
    return selfFunc.apply(context, args.concat(slice.call(arguments)))
  };
};

function addPropToNumber(number) {
  return this.prop + number;
}

const bound = addPropToNumber.myBind({ prop: 9 }, 2);

console.log(bound(1));