function toggleMobileMenu() {
    const mobileMenu = document.getElementById('nav-menu');
    mobileMenu.style.display = (mobileMenu.style.display === 'none' || mobileMenu.style.display === '') ? 'block' : 'none';
}


document.getElementById('mobile-menu').addEventListener('click', toggleMobileMenu);

document.addEventListener('DOMContentLoaded', function () {
    const portfolios = [
        {
            id: 1,
            title: 'Gym Website',
            description: 'A comprehensive website for a fitness center.',
            github: 'https://github.com/vshraddha/Gym-front-end'
        },


        {
            id: 2,
            title: 'Food Delivery',
            description: 'An online platform for food delivery services.',
            github: 'https://github.com/vshraddha/Food_Delivery_Front_End'
        },

        {
            id: 3,
            title: 'Book appointment',
            description: 'An application for scheduling medical appointments.',
            github: 'https://github.com/vshraddha/Doctor-appointment-booking'
        },

        {
            id: 4,
            title: 'E Dashboard',
            description: 'An application for performing crud operations.',
            github: 'https://github.com/vshraddha/E_dashboard'
        }


    ];

    const grid = document.getElementById('grid');

    portfolios.forEach(({ id, title, description, github }) => {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');


        const content = document.createElement('div');
        content.className = 'card-content';

        const heading = document.createElement('div');
        heading.textContent = title;

        const paragraph = document.createElement('p');
        paragraph.textContent = description;

        const githubLink = document.createElement('a');
        githubLink.href = github;
        githubLink.target = '_blank';
        githubLink.rel = 'noopener noreferrer';
        githubLink.className = 'github-link';
        githubLink.textContent = 'View on GitHub';

        content.appendChild(heading);
        content.appendChild(paragraph);
        content.appendChild(githubLink);

        card.appendChild(image);
        card.appendChild(content);

        grid.appendChild(card);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const technologies = [
        {
            id: 1,
            src: "assets/html.png",
            name: "HTML",

        },

        {
            id: 2,
            src: "assets/css.png",
            name: "CSS",

        },

        {
            id: 3,
            src: "assets/javascript.png",
            name: "JavaScript",

        },

        {
            id: 4,
            src: "assets/react.png",
            name: "React",
        },

        {
            id: 5,
            src: "assets/Node.png",
            name: "NodeJs",

        },
        {
            id: 6,
            src: "assets/mongo.png",
            name: "mongoDB",

        },

    ];

    const gridContainer = document.querySelector(".grid-container");

    technologies.forEach(({ id, src, name, style }) => {
        const gridItem = document.createElement("div");
        gridItem.className = `grid-item bg-${style}`;
        gridItem.innerHTML = `
            <img src="${src}" alt="${name}" class="image">
            <p>${name}</p>
        `;
        gridContainer.appendChild(gridItem);
    });
});
