const button = document.querySelector('.button');
const menu = document.querySelector('.menu');
let shouldOpenMenu = false;

button.addEventListener('click', () => {
    if (window.scrollY === 0) {
        button.classList.toggle('open');
        menu.classList.toggle('open');
    } else {
        shouldOpenMenu = true;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

window.addEventListener("scroll", () => {
    if (window.scrollY === 0 && shouldOpenMenu) {
        shouldOpenMenu = false;
        button.classList.add('open');
        menu.classList.add('open');
    }

    if (button.classList.contains("button-white")) {
        if (window.scrollY > 0) {
            if (menu.classList.contains("open")) {
                menu.classList.remove("open");
                button.classList.remove("open");
            }
        }
    }

    if (!button.classList.contains("button-white")) {
        if (window.scrollY > 0) {
            button.classList.add("scroll-up");

            if (menu.classList.contains("open")) {
                menu.classList.remove("open");
                button.classList.remove("open");
            }
        } else {
            button.classList.remove("scroll-up");
        }
    }
});
