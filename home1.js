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
// var key = 42;
// function getSecretCode(value){
//   let keyGen = function(){
//     let key = 12;
//     console.log('in keygen: ', key);
//     return key;
//   }
 
//   let code = value * keyGen();
//   console.log(' in get secret code', key);
//   return code
// }
// let secretCode = getSecretCode(2);
// showMessage(secretCode);

//---making object
// let mySymbol = Symbol();

// let person = {
//   name: 'Nathalie',
//   age: 35,
//   partTime: false,
//   [mySymbol]: 'secretInformation'
// };
// person.age =44;
// showMessage( person.age);

// let person = {
//   name: 'Nathalie',
//   age: 35,
//   partTime: false,
//   showInfo: function() {
//     showMessage(this.name + ' is '+ this.age);
//   }

// };

// person.showInfo();

//---also like below
// let person = {
//     name: 'Nathalie',
//     age: 35,
//     partTime: false,
//     showInfo: function(realAge) {//passing arg
//       showMessage(this.name + ' is '+ realAge);
//     }
  
//   };
  
//   person.showInfo(43);
//   showMessage(typeof person.showInfo);

//------ Passing object to function
//--sending values to function--
let message = 'Hello'
function changeMessage(){
  let message = 'Hiya';
  
}
changeMessage(message);//prints Hello
showMessage(message);

//--now object
//--sending objects to functions
let person = {
      name: 'Nathalie',
      age: 35,
      partTime: false
    };
//---now making a function to add up age
function incrementAge(p){
  p.age++;
};
incrementAge(person);
showMessage(person.age);
//conclusion : when we pass objects we are able to MODIFY their properties and their methods. But when we pass some data by value such as string or number,bool.. any changes to those will be lost.