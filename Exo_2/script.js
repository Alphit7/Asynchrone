let button = document.querySelector("button");
let nameInput = document.querySelector("input");

function fetchName() {
  let name = nameInput.value;
  if (name !== "") {
    fetch("https://api.agify.io/?name=" + name)
      .then((response) => response.json())
      .then((json) => {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.textContent = "age: " + json.age + " count: " + json.count;
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  }
}
button.addEventListener("click", fetchName);
