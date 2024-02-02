const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY>120);
});

let menu = document.querySelector('#menuicon'); // Update the selector to match the ID in your HTML
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Use the correct class name
    navlist.classList.toggle('active');
};


window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};



// Smooth scrolling for navigation links
document.querySelectorAll('.navlist a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});