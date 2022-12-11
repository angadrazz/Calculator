var buttons = document.getElementsByClassName("button");
var display = document.getElementsByClassName("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-vallue');
        if(value == '+'){
         operator = '+';
         operand1 = parseFloat(display.textContent);
        } else if(value == '='){
         operand2 = parseFloat(display.textContent);
        }else{
            display.innerText += value;
        }
    })
}