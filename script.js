document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown-content");
  const dropbtn = document.querySelector(".dropbtn");
  const inputField = document.querySelector('input[type="text"]');
  const isClickInside = dropbtn.contains(event.target);

  if (isClickInside) {
    dropdown.style.display =
      dropdown.style.display === "block" ? "none" : "block";
  } else {
    dropdown.style.display = "none";
  }

  if (event.target.tagName === "A") {
    dropbtn.textContent = event.target.textContent;
    inputField.placeholder = event.target.getAttribute("data-placeholder");
  }
});
