let i = 0;
let text = 'We help startups launch their products';

const typing = () => {
    if(i < text.length){
        document.getElementById("homeh1").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 70);
    }
}

window.addEventListener('load', typing);

let featuresOffsetTop = document.querySelector("#features");
console.log(featuresOffsetTop.offsetTop);

/*
let sections = document.getElementsByClassName("sctn");
let navLinks = document.getElementsByClassName("navLink");

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    for(let i=0; i<navLinks.length; i++) {

    //}

    //navLinks.forEach(link => {      
        //let section = document.querySelector(link.hash);
        let section = document.querySelector(navLinks[i].hash);

        if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }

    }
    //);
})*/

let sections = document.querySelectorAll(".sctn");
let navLinks = document.querySelectorAll(".navLink");

const activeNavigation = () => {   
    for(let i=0; i<sections.length; i++) {
        navLinks[i].classList.remove("active");

        if((window.scrollY + 2) > (sections[i].offsetTop -3) && window.scrollY < (sections[i].offsetTop + sections[i].offsetHeight)){
            console.log(navLinks[i].textContent);
            navLinks[i].classList.add("active");
        }
    }
}
const fixedNavigation = () => {
    if(window.scrollY > 50){
        document.querySelector('.navigation').classList.add('fixnav');
        //document.querySelector('nav').style.width = '100%';        
    }else{        
        document.querySelector('.navigation').classList.remove('fixnav');
        //document.querySelector('nav').style.width = '85%';
    }
}

window.addEventListener('scroll', () => {
    fixedNavigation();
    activeNavigation();
});