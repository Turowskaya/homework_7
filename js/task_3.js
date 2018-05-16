var userText = document.querySelector('.information_field');
var btn = document.querySelector('.btn');
var resultWords = document.querySelector('.result-word');

btn.addEventListener('click',function () {
    var arrayInitial = userText.innerHTML.split(' ').sort(function(a,b) {

        if(a.length<b.length){return 1}
        if(a.length>b.length){return -1}
        return 0;
    });

    var arrayFinal = arrayInitial.splice(0,3).join('; ');
    resultWords.innerHTML = "Три самых длинных слова в предложения: " + arrayFinal;
});




