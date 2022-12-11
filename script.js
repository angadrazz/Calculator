var buttons = document.getElementsByClassName("button");
var display = document.getElementsByClassName("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-vallue');
        if(value == '+'){

        } else if(value == '='){

        }else{
            
        }
    })
}