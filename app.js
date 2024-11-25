let btn = document.querySelector(".btn-add");
let input = document.querySelector("#inputBox");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value = "";
});

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log(listItem.innerText);
    console.log("deleted");
    }
})