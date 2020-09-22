
process.stdout.setEncoding('utf8');

let timer = 100;
const spinnerChar = ['|','/','-','\\','|','/','-','\\']

for(let i = 0; i < spinnerChar.length; i++){
  setTimeout(() => {
    process.stdout.write(`\r ${spinnerChar[i]}`);
  }, timer);
  timer += 200;

}




