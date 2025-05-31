document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const mainNav = document.querySelector('.main-nav');
    const navLinks = document.querySelectorAll('.main-nav a'); // เลือกทุกลิงก์ใน nav

    // Function to toggle the navigation menu
    function toggleMenu() {
        mainNav.classList.toggle('active');
        // Optional: Change icon (e.g., from bars to times)
        // menuIcon.querySelector('i').classList.toggle('fa-bars');
        // menuIcon.querySelector('i').classList.toggle('fa-times');
    }

    // Add event listener to the menu icon
    if (menuIcon) {
        menuIcon.addEventListener('click', toggleMenu);
    }

    // Close menu when a navigation link is clicked (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu(); // ปิดเมนูเมื่อคลิกที่ลิงก์
            }
        });
    });

    // Optional: Add logic to set active class based on scroll position
    const sections = document.querySelectorAll('section');
    const navA = document.querySelectorAll('.main-nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) { // ปรับค่า 150 ตามความเหมาะสม
                current = section.getAttribute('id');
            }
        });

        navA.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});