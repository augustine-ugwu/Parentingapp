// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector("button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function openModal() {
  modal.style.display = "block";
  setTimeout(function () {
    modal.querySelector(".modal-content").style.opacity = 1;
  }, 10); // Delay for transition to occur
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.querySelector(".modal-content").style.opacity = 0;
  setTimeout(function () {
    modal.style.display = "none";
  }, 300); // Delay for transition to occur
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
