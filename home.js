// function logMessage(){
//   console.log('Here is a message')
// }
// logMessage(); function declaration

// let myFunction = function logging(){//we can name the function as well but can't be called
//   console.log('Here is expression')
// };
// myFunction();

//---adding parameters in the function
// function showMessage(message, anotherMessage){

//   console.log(message, anotherMessage);
// }
// showMessage('First message', 'how is it going');

//---Send info into the function
// let myFunction = function logging(message, name) {
//   console.log(message, name);

// };
// myFunction('Hey coder...','Barri');

//---Get information out of the function

// function getSecretCode(value) {
//   // let code = value +3;
//   return value + 3
// };
// console.log(getSecretCode(34));

//--cleaner version
// let secretCode = function getSecretCode(value) {
//   return value *32;
// };
// showMessage(secretCode(2));

//---scope
var key = 42;
function getSecretCode(value){
  let keyGen = function(){
    let key = 12;
    console.log('in keygen: ', key);
    return key;
  }
 
  let code = value * keyGen();
  console.log(' in get secret code', key);
  return code
}
let secretCode = getSecretCode(2);
showMessage(secretCode);