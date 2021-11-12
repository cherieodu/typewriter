const sentence = "hello there from lighthouse labs";

let print = (letter, i) => {
  setTimeout(() => {
    process.stdout.write(letter);
  }, 250 * i);
};

for (let i = 0; i < sentence.length; i++) {
  print(sentence[i], i);
}

setTimeout(() => {
  console.log('');
}, 9000);