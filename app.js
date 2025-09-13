function init(){
    const btn = document.querySelector('#more-btn')
    const moreText = document.querySelector('#more-text'

    );
btn.addEventListener('click', () => {
    if (getComputedStyle(moreText).display === 'none') {
        moreText.style.display = "block";
        btn.textContent = " noo";

    } else {
        moreText.style.display="none";
        btn.textContent ="more about me";
    }
})
}
document.addEventListener('DOMContentLoaded', init)