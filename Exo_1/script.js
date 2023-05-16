let button = document.querySelector("button");
let ul = document.querySelector("ul");
button.addEventListener("click", () => {
  fetch("asynchrone.json")
    .then((response) => response.json())
    .then((json) => {
      json
        .forEach((element) => {
          let li = document.createElement("li");
          li.textContent = element.name + " " + element.status;
          ul.appendChild(li);
        })
        .catch((error) => {
          console.log("There was an error!", error);
        });
    });
});
