const chef = document.querySelector('.footerLogo');
const submitBtn = document.querySelector('.submit-btn')

const changeText = function(e){
e.preventDefault()
    chef.innerHTML = "CHALLIE";
}

submitBtn.addEventListener('click', changeText);