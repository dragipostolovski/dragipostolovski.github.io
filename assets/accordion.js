document.addEventListener('DOMContentLoaded', function () {
    function loadAccordions() {
        // const cursor = document.querySelector('.rit-floating-cursor');
        const buttons = document.querySelectorAll('.rit-accordion-section');
        let showContentTimeout = null;

        if( !buttons || buttons.length === 0 ) {
            console.warn('No accordion sections found.');
            return;
        }

        // Auto expand first
        const firstSection = document.querySelector('.rit-accordion-section');
        if (firstSection) {
            firstSection.classList.add('hovered');
            firstSection.querySelector('.section-content').style.display = 'block';
        }

        // If tablet size, add 'shover' class to all accordion sections
        function isTablet() {
            return window.innerWidth <= 1024;
        }

        if (isTablet()) {
            buttons.forEach(button => {
                button.classList.add('hovered');
            });
        }

        document.addEventListener('mousemove', function (e) {
            // cursor.style.left = e.clientX + 'px';
            // cursor.style.top = e.clientY + 'px';
        });

        buttons.forEach(button => {
            button.addEventListener('mouseenter', function () {
                if (button.classList.contains('hovered')) return;

                // Cancel any previously scheduled content show
                if (showContentTimeout) {
                    clearTimeout(showContentTimeout);
                    showContentTimeout = null;
                }

                // Hide all content and remove classes
                buttons.forEach(b => {
                    b.classList.remove('hovered');
                    const content = b.querySelector('.section-content');
                    content.style.display = 'none';
                    content.style.opacity = 0;
                });

                // Add hovered class to new one
                // cursor.classList.add('active');
                button.classList.add('hovered');

                // Schedule content fade-in after expansion
                showContentTimeout = setTimeout(() => {
                    const content = button.querySelector('.section-content');
                    content.style.display = 'block';
                    content.style.opacity = 0;
                    content.style.transition = 'opacity 0.4s';
                    setTimeout(() => {
                        content.style.opacity = 1;
                    }, 10);
                }, 1300);
            });

            button.addEventListener('mouseleave', function (e) {
                const toElement = e.relatedTarget;
                if (![...buttons].some(b => b.contains(toElement))) {
                    // cursor.classList.remove('active');
                }
            });
        });

        // Animate sections on load
        const sections = document.querySelectorAll('.rit-accordion-section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = '1';
            }, 100 * index);
        });
    }

    loadAccordions();
});