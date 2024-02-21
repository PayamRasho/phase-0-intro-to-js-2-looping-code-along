// Code your solutions in this file

function wrapGifts(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    console.log(`Wrapped ${myArray[0]} and added a bow!`);
  }
}

function writeCards(myArray, event) {
  let newaraay = [];
  for (let i = 0; i < myArray.length; i++) {
    newaraay.push(`Thank you, ${myArray[i]}, for the wonderful ${event} gift!`);
  }
  return newaraay;
}

console.log(writeCards(["Payam", "Muhammad", "Peshraw"], "birthday"));

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  }
}
