// function showPopup(id, text, btn){
//     document.getElementById('popup').style.dosplay = 'block';
//     // popup.classList.add('show');
// }

// function hidePopup(id, text, btn){
// document.getElementById('popup').style.display = 'none';
// // popup.classList.remove('show')
// }

const signup = document.getElementById('signup');

signup.addEventListener('click', () =>{
const popup = document.getElementById('popup');

popup.style.display = 'block';

});


const signmeup = document.getElementById('signmeup');

signmeup.addEventListener('click', () =>{
const popup = document.getElementById('popup');

popup.style.display = 'block';

});

const closepopup = document.getElementById('closepopup');

closepopup.addEventListener('click', () =>{
    const popup = document.getElementById('popup');

    popup.style.display = 'none';
});