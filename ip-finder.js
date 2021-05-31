const ipOutput = document.querySelector('#ip-finder-output');
ipOutput.innerHTML = '...';
fetch('https://api.ipify.org/?format=json')
    .then((response) => response.json())
    .then((data) => {
        ipOutput.innerHTML = data.ip;
    });
