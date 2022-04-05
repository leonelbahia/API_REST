const API_URL = "https://jsonplaceholder.typicode.com/users";

const HTMLresponse = document.querySelector('#app');
const ul = document.createElement('ul');



fetch(`${API_URL}`)
  .then ((response) => response.json())
  .then ((users) => {
    users.forEach((user) => {
      let element = document.createElement('li');
      element.appendChild(
        document.createTextNode(`${user.name} y ${user.email}`)
      );
      ul.appendChild(element);
    });

    HTMLresponse.appendChild(ul);

  });
