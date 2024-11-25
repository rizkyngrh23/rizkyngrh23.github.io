const toggleButton = document.querySelector('.dark-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    const recentBlogPosts = [
        {
            title: 'Getting Started with Node.js',
            description: 'An introductory guide to building your first Node.js application.',
            link: 'Article/node_article.html'
        },
        {
            title: 'Working with Databases',
            description: 'Learn how to work with databases using Node.js.',
            link: 'Article/database_article.html'
        },
        {
            title: 'Creating Real-Time Applications',
            description: 'Explore how to create real-time applications using Node.js and Socket.io.',
            link: 'Article/create-app.html'
        },
        {
            title: 'Building APIs',
            description: 'Learn how to build a simple RESTful API using Node.js and Express.',
            link: 'Article/building-api.html'
        }
    ];

    const recentBlogContainer = document.getElementById('recent-blog-posts');
    if (recentBlogContainer) {
        recentBlogContainer.innerHTML = ''; 
        recentBlogPosts.slice(0, 3).forEach(post => {
            const postItem = document.createElement('div');
            postItem.className = 'blog-post-item';
            postItem.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
                <a href="${post.link}">Read more</a>
            `;
            recentBlogContainer.appendChild(postItem);
        });
    }
});

fetch('https://api.github.com/users/rizkyngrh23/repos')
    .then(response => response.json())
    .then(repos => {
        const projectsList = document.getElementById('projects-list');
        const excludedRepos = ['rizkyngrh23.github.io', 'rizkyngrh23', 'github-readme-stats'];

        repos
            .filter(repo => !excludedRepos.includes(repo.name))
            .forEach(repo => {
                const projectItem = document.createElement('div');
                projectItem.classList.add('project-item');

                const projectTitle = document.createElement('h2');
                const projectLink = document.createElement('a');
                projectLink.href = repo.html_url;
                projectLink.target = '_blank';
                projectLink.textContent = repo.name;
                projectTitle.appendChild(projectLink);

                const projectDescription = document.createElement('p');
                const shortDescription = repo.description ? repo.description.split(' ').slice(0, 5).join(' ') + '...' : 'No description available.';
                projectDescription.textContent = shortDescription;
                projectDescription.style.transition = 'max-height 0.5s ease-out';
                projectDescription.style.overflow = 'hidden';
                projectDescription.style.maxHeight = '50px';

                const detailsButton = document.createElement('button');
                detailsButton.textContent = 'Details';
                detailsButton.style.backgroundColor = '#5577bb'; 
                detailsButton.style.color = '#fff'; 
                detailsButton.style.border = 'none'; 
                detailsButton.style.borderRadius = '5px'; 
                detailsButton.style.padding = '5px 10px'; 
                detailsButton.style.cursor = 'pointer'; 
                detailsButton.style.marginTop = '10px'; 
                detailsButton.style.display = 'block'; 
                detailsButton.style.width = 'calc(100% - 20px)'; 
                detailsButton.style.position = 'absolute';
                detailsButton.style.bottom = '10px'; 
                detailsButton.style.left = '10px'; 
                detailsButton.addEventListener('click', () => {
                    if (projectDescription.textContent === shortDescription) {
                        projectDescription.textContent = repo.description || 'No description available.';
                        projectDescription.style.maxHeight = '200px';
                        detailsButton.textContent = 'Hide Details';
                    } else {
                        projectDescription.style.maxHeight = '50px';
                        setTimeout(() => {
                            projectDescription.textContent = shortDescription;
                            detailsButton.textContent = 'Details';
                        }, 500); 
                    }
                });

                projectItem.style.position = 'relative'; 
                projectItem.style.paddingBottom = '70px'; 
                projectItem.appendChild(projectTitle);
                projectItem.appendChild(projectDescription);
                projectItem.appendChild(detailsButton);
                projectsList.appendChild(projectItem);
            });
    })
    .catch(error => console.error('Error fetching repositories:', error));

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

document.querySelectorAll('.container > div').forEach(div => {
    div.style.opacity = 0;
    div.style.transition = 'opacity 1s ease-in-out';
    setTimeout(() => {
        div.style.opacity = 1;
    }, 500);
});