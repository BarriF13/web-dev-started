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
  const review = document.getElementById('review');

  if (review.classList.contains('d-none')){
    review.classList.remove('d-none');
    button.textContent = 'Close Review';
  }else {
    review.classList.add('d-none');
    button.textContent = 'See Review';
  }
  
});