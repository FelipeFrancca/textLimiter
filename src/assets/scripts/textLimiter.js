var myText = document.getElementById("theText");
var result = document.getElementById("result");
var limit = 100;
result.textContent = "0/" + limit;

myText.addEventListener("input", function() {
    var textLength = myText.value.length;

    if (textLength > limit) {
        myText.value = myText.value.slice(0, limit);
    }

    const inputValue = myText.value;
    localStorage.setItem('myText', inputValue);

    const savedValue = localStorage.getItem('myText');
    if (savedValue) {
        myText.value = savedValue;
    }

    result.textContent = textLength + "/" + limit;

    if (textLength > limit) {
        myText.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    } else {
        myText.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }
});

window.addEventListener('load', function() {
    const savedValue = localStorage.getItem('myText');
    if (savedValue) {
        myText.value = savedValue;
    }
});