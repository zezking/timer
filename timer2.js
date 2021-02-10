const readline = require("readline");
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("---------Press t to start----------");
process.stdin.on("keypress", (str, key) => {
  if (key.ctrl && key.name === "c") {
    console.log(`thanks for using the timer`);
    process.exit();
  } else if (key.name === "b") {
    process.stdout.write("\n" + "I am beeping now mofo" + "\n");
  } else if (key.name === "t") {
    rl.question(
      "\n" + "Please enter a number between 1 to 9+" + "\n",
      (number) => {
        // TODO: Log the answer in a database
        setTimeout(() => {
          process.stdout.write("beeper" + "\n");
        }, number * 1000);

        rl.close();
      }
    );
  }
});
