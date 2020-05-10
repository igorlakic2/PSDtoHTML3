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