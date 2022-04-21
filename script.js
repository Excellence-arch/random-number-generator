const random = () => {
  if (Number(maxNum.value) <= Number(minNum.value)) {
    maxNum.value = minNum.value + "0";
  }
  return (
    Math.round(Math.random() * (maxNum.value - minNum.value)) +
    Number(minNum.value)
  );
};

let lastMin = "";
let time = 0;

const genNum = () => {
  let num = random();
  lastMin = minNum.value;
  genNumber.innerHTML = num;
  // minNum.value = num;
  time = 0;
  // clearTime();
}

let count;
let timer;
const randomNumber = () => {
  time += 1;
  console.log(time)
  let num = random();
  genNumber.innerHTML = num;
  if(time == 10) {
    clearInterval(count);
    genNum();
  }
};


const generate = () => {
  count = setInterval(randomNumber, 20);
}

const callTimer = () => {
  time = 0;
  clearInterval(count);
  generate();
}