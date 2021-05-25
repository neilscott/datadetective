window.onload = function () {
let form = document.getElementById("myForm");
let inputs = form.children;
for (let i = 0; i < inputs.length; i++) {
    let el = inputs[i];
    if (el.tagName.toLowerCase() != "input" || el.attributes["type"].value != "text") {
        continue
    }
    let cachedVal = localStorage.getItem(el.attributes["name"].value)
    if (cachedVal != null) {
        el.value = cachedVal;
    }


}
}