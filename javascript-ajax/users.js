const $userList = document.querySelector("#user-list");

var xmlObj = new XMLHttpRequest();
xmlObj.open("GET", 'https://jsonplaceholder.typicode.com/users');
xmlObj.responseType = 'json';
xmlObj.addEventListener("load", function () {
  let user;
  console.log(xmlObj.status);
  console.log(xmlObj.response);
  const userList = xmlObj.response;
  for (user of userList) {
    const $LiNewUser = document.createElement("li");
    $LiNewUser.textContent = user.name
    $userList.appendChild($LiNewUser);
  }
})

xmlObj.send();
