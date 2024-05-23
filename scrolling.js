let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4 + 'px';
    mountain3.style.top = value* 2 + 'px';
    mountains4.style.top = value*1.5+ 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px' ;
    boat.style.left = value *3 + 'px' ;
    nouvil.style.fontSize = value + 'px';
    if(scrollY>=67){
        nouvil.style.fontSize = 67 + 'px';
        nouvil.style.position = fixed;
        if(scrollY>=478){
            nouvil.style.display = 'none';
        }else{
            nouvil.style.display = 'block';

        }
        if(scrollY >= 100){
            document.querySelector('.main').style.background = 'blue';
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(rgb(20, 1, 13),rgb(73, 2, 73))';
        }
    }

}