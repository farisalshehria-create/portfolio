function init(){
    const btn = document.querySelector('#more-btn')
    const moreText = document.querySelector('#more-text'

    );
btn.addEventListener('click', () => {
    if (getComputedStyle(moreText).display === 'none') {
        moreText.style.display = "block";
        btn.textContent = " haide";

    } else {
        moreText.style.display="none";
        btn.textContent ="more about me";
    }
})
}
document.addEventListener('DOMContentLoaded', init)
/*
https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp
https://stackoverflow.com/questions/8454079/toggle-displaynone-style-with-javascript
https://cssgradient.io/
https://youtu.be/MzrxVSuLygs?si=9hdJVZrH0UX162vD 
friends/university friends
there are several other reference but ithink lost them but these are the most important ones
*/
