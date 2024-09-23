

const contributorList = document.getElementById('contributor-list');

// Replace this array with your contributor data (name and GitHub profile link)
const contributors = [
   
{ name: 'jobayermannan', github: 'https://api.github.com/users/jobayermannan' },
 { name: 'coding-struggles', github: 'https://api.github.com/users/coding-struggles' },   
 { name: 'Code-x-777', github: 'https://api.github.com/users/Code-x-777' },   
 { name: 'kaiyumdev', github: 'https://api.github.com/users/kaiyumdev' },  
 { name: 'mahenur-islam', github: 'https://github.com/mahenur-islam' },  
    // Add more contributors as needed
];

async function fetchAndDisplayContributors() {
    for (const contributor of contributors) {
        try {
            const response = await fetch(contributor.github);
            if (response.ok) {
                const userData = await response.json();
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <img src="${userData.avatar_url}" alt="${contributor.name}" />
                    <a href="${userData.html_url}" target="_blank">${contributor.name}</a>
                `;
                contributorList.appendChild(listItem);
            } else {
                console.error(`Error fetching data for ${contributor.name}`);
            }
        } catch (error) {
            console.error(`Error fetching data for ${contributor.name}: ${error.message}`);
        }
    }
}

fetchAndDisplayContributors();





