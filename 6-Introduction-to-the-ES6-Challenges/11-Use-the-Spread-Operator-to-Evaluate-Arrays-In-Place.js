// I learned how to use the Rest Operator with Function Parameters

const sum = function sum(...args ) {
    return args.reduce((a, b) => a + b, 0);
  };

console.log(sum(1, 2, 3)); // 6
