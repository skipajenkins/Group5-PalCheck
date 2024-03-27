var correct = document.getElementById("correct-sound");
var error = document.getElementById("error-sound");
var correctTick=document.getElementById("correct-tick");
var wrongTick=document.getElementById("wrong-tick");

function checkPalindrome() {
    var inputString = document.getElementById("userInput").value.toLowerCase().replace(/[^a-z0-9]/g, '');
    var resultDiv = document.getElementById("result");
    if (inputString === '') {
        resultDiv.innerHTML = 'No input found';
        return;
    }
    var reversedString = inputString.split('').reverse().join('');
    if (inputString === reversedString) {
        correctTick.style.display = 'block';
        resultDiv.innerHTML ='</i>Yes, it\'s a palindrome!';
        correct.play();
    } else {
        error.play();
        resultDiv.innerHTML ='</i>No, it\'s not a palindrome! Try Again';
        wrongTick.style.display = 'block'
    }
    setTimeout(function() {
        resultDiv.innerHTML = '';
        correctTick.style.display = 'none';
        wrongTick.style.display = 'none';
    }, 2500);
}
