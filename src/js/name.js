  // Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("lastname", "Smith");
  // Retrieve
  document.getElementById("name").innerHTML = localStorage.getItem("fullName");
} else {
  document.getElementById("name").innerHTML = "Sorry, your browser does not support Web Storage...";
}
