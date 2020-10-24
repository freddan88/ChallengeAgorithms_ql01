const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const removeIdenticalInstances = (string) => {
  [...string].forEach((char) => {
    let regex = new RegExp(`${char}{4}`, "g");
    if (regex.test(string)) {
      string = string.replace(regex, char + char + char);
    }
  });
  return string;
};

const exitWithError = () => {
  console.log("Please provide a string Ex: ffdttttyy");
  process.exit(1);
};

rl.on("line", (line) => {
  if (line.length === 0) exitWithError();
  const qlres = removeIdenticalInstances(line);
  console.log(`_Input: ${line}`);
  console.log(`Output: ${qlres}`);
  console.log("-------");
});
