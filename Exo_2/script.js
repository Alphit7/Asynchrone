let button = document.querySelector("button");
let nameInput = document.querySelector("input");
let countryInput = document.querySelector("select");
let storedNames = [];
let localNames = JSON.parse(localStorage.getItem("Names"));
localNames.forEach((element) => {
  storedNames.push(element);
});
function fetchName() {
  let name = nameInput.value;
  let country = countryInput.value;
  let countryName =
    countryInput.options[countryInput.selectedIndex].textContent;
  if (name !== "") {
    fetch("https://api.agify.io/?name=" + name + "&country_id=" + country)
      .then((response) => response.json())
      .then((json) => {
        let div = document.createElement("div");
        document.body.appendChild(div);
        div.textContent =
          "age: " + json.age + " count: " + json.count + " in " + countryName;
        storedNames.push(json);
        localStorage.setItem("Names", JSON.stringify(storedNames));
      })
      .catch((error) => {
        console.log("There was an error!", error);
      });
  }
}
button.addEventListener("click", fetchName);
