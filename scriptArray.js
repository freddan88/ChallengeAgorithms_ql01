const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const maximumSum = (array) => {
  let resultingNumbers = [];
  const reduceFunction = (total, current) => total + current;
  for (let index = 0; index < array.length; index++) {
    const string = array[index].toString();
    if (string.length > 1) {
      let digits = string.split("");
      digits = digits.map((digit) => parseInt(digit));
      const number = digits.reduce(reduceFunction);
      const obj = {
        index,
        number,
      };
      if (obj.number % 2) resultingNumbers.push(array[obj.index]);
    }
  }
  return resultingNumbers.reduce(reduceFunction);
};

const exitWithError = () => {
  console.log("Please provide an array of integers Ex: [61, 32, 51]");
  console.log("");
  process.exit(1);
};

rl.on("line", (line) => {
  if (line.length === 0) exitWithError();
  let array = line.replace(/([\[\]\/\\\s])/g, "").split(",");
  array = array.map((item) => parseInt(item));
  const qlres = maximumSum(array);
  console.log(`_Input: ${line}`);
  console.log(`Output: ${qlres}`);
  console.log("-------");
});
