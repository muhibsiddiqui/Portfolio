function opentab(tabname) {
    updateTabText(); // Calls a function to update the tab text, which is likely defined elsewhere.

    for (tablink of tablinks) {
        if (tablink.classList.contains("active")) {
            tablink.classList.remove("active");
        }
    }

    for (tabcontent of tabcontents) {
        if (tabcontent.classList.contains("active")) {
            tabcontent.classList.remove("active");
        }
    }

    event.currentTarget.classList.add("active");
    document.getElementById(tabname).classList.add("active");
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll("header nav a");

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navlinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });
    }
});

 
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed('#element', {
        strings: ['Front-End Developer.', 'App Developer', 'Software Developer.'],
        typeSpeed: 30 ,
        
        loop: true
    });
});

window.onscroll = function() {
    stickyNavbar();
};

var header = document.querySelector('.header');
var sticky = header.offsetTop;

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// end

function submitForm(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }

    alert('Form submitted successfully!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
}

document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal({
        reset: true,
        distance: '100px',
        duration: 2000,
        delay: 15,
    });

    ScrollReveal().reveal(' .main-img,.heading', { origin: 'top' });
    ScrollReveal().reveal('.about-img , .skill-container ', { origin: 'left' });
    ScrollReveal().reveal(' .bullet-points', { origin: 'right' });
    ScrollReveal().reveal('.home-content,.about-content, .portfolio-container, .contact-container, .timeline-items', { origin: 'bottom' });
});