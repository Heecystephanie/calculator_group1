const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});
function calculate(event) {
  let clickedButtonValue = event.target.value;
  const values = [...display.value]
  if (clickedButtonValue === '=') {
   
    if (display.value !== '') {
      display.value = eval(display.value);
    }
    
     } else if (clickedButtonValue === 'C') {
   display.value = '';
  }
  else if((values.indexOf("+") > 0 || values.indexOf('-') > 0 || values.indexOf('/') > 0 || values.indexOf('*') > 0) && (clickedButtonValue === "+" 
  || clickedButtonValue === '-' || clickedButtonValue === '*' || clickedButtonValue === '/')) {
    return
  }
  else {
    display.value += clickedButtonValue;
  }
}
