const items = document.querySelectorAll('img');
const nbSlide = items.length;
const next = document.querySelector('.right');
const precedent = document.querySelector('.left');
let count = 0;

function SlideNext(){
    items[count].classList.remove('active');
    if(count < nbSlide -1){
    count++;
    } else {
        count = 0;
    }
    items[count].classList.add('active')
    console.log(count);

}
next.addEventListener('click',  SlideNext)
function slideprecedente(){
    items[count].classList.remove('active');
    if(count > 0){
        count--;
    } else {
        count = nbSlide -1;
    }
    items[count].classList.add('active')
    // console.log(count)
}
precedent.addEventListener('click', slideprecedente)
 
function keypress(e){
    console.log(e);
    if(e.keycode === 37){
slideprecedente();
    } else if (e.keycode === 39){
        SlideNext();
    }
}
document.addEventListener('keydown', keypress)