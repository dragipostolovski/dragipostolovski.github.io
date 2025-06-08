document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.rit-floating-cursor');
    const buttons = document.querySelectorAll('.rit-accordion-section');

    // Automatically expand the first section on load
    const firstSection = document.querySelector('.rit-accordion-section');
    if (firstSection) {
        firstSection.classList.add('hovered');
        firstSection.querySelector('.section-content').style.display = 'block';
    }

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {

            if (button.classList.contains('hovered')) return;

            buttons.forEach(b => {
                b.classList.remove('hovered');
                b.querySelector('.section-content').style.display = 'none';
            });

            cursor.classList.add('active');
            button.classList.add('hovered');

            setTimeout(() => {
                const content = button.querySelector('.section-content');
                content.style.display = 'block';
                content.style.opacity = 0;
                content.style.transition = 'opacity 0.4s';
                setTimeout(() => {
                    content.style.opacity = 1;
                }, 10);
            }, 1500);
        });

        button.addEventListener('mouseleave', function (e) {
            const toElement = e.relatedTarget;
            if (![...buttons].some(b => b.contains(toElement))) {
                cursor.classList.remove('active');
            }
        });
    });

    const sections = document.querySelectorAll('.rit-accordion-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});