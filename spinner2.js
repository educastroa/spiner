const elem = ['\\', '|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\'];
let time = 0;

for (let x of elem) {
  setTimeout(() => {
    process.stdout.write(x + '\r')
  }, time);
  time += 200
};

