
// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle dark mode
const toggleButton = document.querySelector('.dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Fetch and display GitHub repositories
fetch('https://api.github.com/users/rizkyngrh23/repos')
    .then(response => response.json())
    .then(repos => {
        const projectsList = document.getElementById('projects-list');
        repos.forEach(repo => {
            const projectItem = document.createElement('div');
            projectItem.classList.add('project-item');

            const projectTitle = document.createElement('h2');
            const projectLink = document.createElement('a');
            projectLink.href = repo.html_url;
            projectLink.target = '_blank';
            projectLink.textContent = repo.name;
            projectTitle.appendChild(projectLink);

            const projectDescription = document.createElement('p');
            projectDescription.textContent = repo.description || 'No description available.';

            projectItem.appendChild(projectTitle);
            projectItem.appendChild(projectDescription);
            projectsList.appendChild(projectItem);
        });
    })
    .catch(error => console.error('Error fetching repositories:', error));

// Typewriter effect for welcome message
const welcomeMessage = document.getElementById('welcome-message');
const messageText = welcomeMessage.textContent;
welcomeMessage.textContent = '';
let index = 0;

function typeWriter() {
    if (index < messageText.length) {
        welcomeMessage.textContent += messageText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();