fetch('https://api.github.com/repos/jobayermannan/Beginner-friendly-contribution/contributors')
  .then(response => response.json())
  .then(data => {
    var contributorsDiv = document.getElementById('contributors');
    data.forEach(contributor => {
      var contributorElement = document.createElement('div');
      var nameElement = document.createElement('h2');
      var linkElement = document.createElement('a');
      linkElement.href = contributor.html_url;
      linkElement.textContent = contributor.login;
      nameElement.appendChild(linkElement);
      var imgElement = document.createElement('img');
      imgElement.src = contributor.avatar_url;
      contributorElement.appendChild(imgElement);
      contributorElement.appendChild(nameElement);
      contributorsDiv.appendChild(contributorElement);
    });
  });

