var secondName = document.querySelector('.application-form__secondname');
var firstName = document.querySelector('.application-form__firstname');
var middleName = document.querySelector('.application-form__middlename');
var age = document.querySelector('.application-form__age');
var genderMan = document.querySelector('.application-form__gender-man');
var genderWoman = document.querySelector('.application-form__gender-woman');
var form = document.querySelector('.application-form');
var nameUser = document.querySelector('.name');
var ageYear = document.querySelector('.age');
var ageDay = document.querySelector('.age-day');
var gender = document.querySelector('.gender');
var retirement = document.querySelector('.retirement');


form.addEventListener('submit', function(event){
    event.preventDefault();
    if(secondName.value.trim() === ""
        || firstName.value.trim() === ""
        || middleName.value.trim() === ""
        || age.value.trim() === ""
    ){
        alert('Пожалуйста, заполните все поля для ввода!');
    }
    else {
        nameUser.innerHTML ='ФИО:'+ ' ' +  secondName.value + ' ' + firstName.value + ' ' + middleName.value;
        ageYear.innerText ='Возраст, лет:'+ ' ' + age.value;
        ageDay.innerText ='Возраст, дней:'+ ' ' + age.value * 365;
        if(genderMan.checked){
            gender.innerText = 'Пол:' + ' ' + 'Мужчина';
            if(age.value < 63){
                retirement.innerText = 'Пенсионный возраст: нет';
            }
            else {
                retirement.innerText = 'Пенсионный возраст: да';
            }
        }
        else if(genderWoman.checked){
                gender.innerText = 'Пол:' + ' ' + 'Женщина';
                if(age.value < 58){
                    retirement.innerText = 'Пенсионный возраст: нет';
                }
                else {
                    retirement.innerHTML = 'Пенсионный возраст: да';
                }
            }
    }
});