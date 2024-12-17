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



document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("portfolioVideo");

    if (video) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    video.play(); // Play video when it's in view
                } else {
                    video.pause(); // Pause video when it's out of view
                }
            });
        }, {
            threshold: 0.5 // Play/Pause when 50% of the video is visible
        });

        observer.observe(video);
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const closeModal = document.querySelector(".modal .close");
    const certificateImages = document.querySelectorAll(".certificate-img");

    // Open Modal
    certificateImages.forEach((img) => {
        img.addEventListener("click", () => {
            modal.style.display = "flex"; // Show modal
            modalImg.src = img.src; // Set image source
            document.body.classList.add("modal-open"); // Disable background scroll
        });
    });

    // Close Modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal
        document.body.classList.remove("modal-open"); // Enable background scroll
    });

    // Close Modal on Outside Click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove("modal-open");
        }
    });
});


document.getElementById('btn').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (!name || !email) {
        alert('Please fill out all fields.');
    }
});
