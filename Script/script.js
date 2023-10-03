document.getElementById('contributor-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var img = document.getElementById('img').files[0];
    var rank = document.getElementById('rank').value;

    var reader = new FileReader();
    reader.onloadend = function() {
        var base64String = reader.result;
        addContributor(name, base64String, rank);
    };
    reader.readAsDataURL(img);
});

fetch('https://api.github.com/repos/jobayermannan/Beginner-friendly-contribution/contributors')
  .then(response => response.json())
  .then(data => {
    var contributorsDiv = document.getElementById('contributors');
    data.forEach(contributor => {
      var contributorElement = document.createElement('div');
      var nameElement = document.createElement('h2');
      nameElement.textContent = contributor.login;
      var imgElement = document.createElement('img');
      imgElement.src = contributor.avatar_url;
      contributorElement.appendChild(imgElement);
      contributorElement.appendChild(nameElement);
      contributorsDiv.appendChild(contributorElement);
    });
  });
