// Get the modal
var modal = document.getElementById("myModal");
var btn = document.getElementsByClassName("task")[0];
var span = document.getElementsByClassName("close")[0];

$(function(){
  $(".task").click(function() {
    modal.style.display = "block";
  });
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
});