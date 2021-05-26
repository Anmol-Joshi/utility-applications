const ipOutput = document.querySelector('#ip-finder-output');
ipOutput.innerHTML = '...';
fetch('http://api.ipify.org/?format=json')
    .then((response) => response.json())
    .then((data) => {
        // console.log(data);
        ipOutput.innerHTML = data.ip;
    });
// console.log(res);
