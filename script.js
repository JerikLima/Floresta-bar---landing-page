document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});