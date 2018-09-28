const createdArray = ["1","2", "3", "4", "5"]

function add(a, b) {
  return a + b;
}
function subtract(a, b){
  return b-a
}
function pusher(array,b){
  array.push(b)
  return array
}
function popper(array){
  array.pop()
  return array
}
module.exports = {
  add: add,
  subtract: subtract,
  createdArray: createdArray,
  pusher: pusher,
  popper: popper
}
