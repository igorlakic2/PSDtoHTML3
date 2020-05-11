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

/*
let sections = document.querySelectorAll(".sctn");
let navLinks = document.querySelectorAll(".navLink");

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY;

    for(let i=0; i<navLinks.length; i++){

    //}
    //navLinks.forEach(link => {      
        let s = document.querySelector(navLinks[i].hash);
        console.log(navLinks[i]);

        if (s.offsetTop <= fromTop && s.offsetTop + s.offsetHeight > fromTop) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }

    }
    //)
})*/