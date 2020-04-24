// let now = new Date();
// showMessage(Math.round(Math.random() )* 5);

// let welcome = 'Hello';
// showMessage(welcome.charAt(2))

//working with CSS
const header = document.getElementById('message');

header.style.color = 'red';
header.style.fontWeight = '100';

const button = document.getElementById('see-review');
button.addEventListener('click', function(){
  console.log('clicked')
})