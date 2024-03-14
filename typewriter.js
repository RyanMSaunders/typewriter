
const sentence = "hello there from lighthouse labs";

const newSentence = sentence + "\n"
let x = 0
for (const char of newSentence) {
  x += 50
  setTimeout(() => {
    process.stdout.write(char);
  }, x)
  
}


