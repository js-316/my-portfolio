document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Fleet Management System',
            description: 'A fleet management system that allows users to manage their fleet of vehicles. The system allows users to add, edit, and delete vehicles, as well as view the details of each vehicle.',
            link: '#'
        },
        {
            title: 'Coronary Heart Disease Diagnosis',
            description: 'A machine learning model that predicts the likelihood of a patient having coronary heart disease based on their medical history and test results.',
            link: '#'
        },
        {
            title: 'Project 3',
            description: 'Description of project 3.',
            link: '#'
        }
    ];

    const projectsContainer = document.getElementById('projects-container');

    if (projectsContainer) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            projectElement.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">View Project</a>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent!');
            contactForm.reset();
        });
    }
});