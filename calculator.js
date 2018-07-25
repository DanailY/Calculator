var box = document.getElementById('display');
var maxLength = 16;

function addToScreen(x) {
    if(box.value.length + 1 > maxLength){
        alert("Cannot enter more than " + maxLength +  " symbols");
        return;
    }
    
    box.value += x;
}

function operationClick(x) {

    x = box.value;
    x = eval(x);
    if(x.toString() === "Infinity"){
        x = "Cannot divide by zero."
    }
    box.value = x;
}

function clearValue() {

    box.value ="";
}

function backspace() {
    var num = box.value;
    var len = num.length - 1;
    var newNum = num.substring(0, len);
    box.value = newNum;
}