const args = process.argv.slice(2);

const beeper = require("beeper");

const timer = (args) => {
  let newArr = [];
  if (args.length === 0) {
    return "Please enter at least one number";
  }

  args.map((a) => {
    newArr.push(Number(a));
  });

  newArr.sort((a, b) => a - b);
  console.log(newArr);
  for (i of newArr) {
    if (i > 0 && typeof i === "number") {
      setTimeout(() => {
        process.stdout.write("beeper" + "\n");
      }, i * 1000);
    }
  }
};

timer(args);
