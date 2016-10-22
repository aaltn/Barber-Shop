var loginPopup = document.querySelector(".modal-login");
var close = loginPopup.querySelector(".modal-close");

close.addEventListener("click", function(event) {
       event.preventDefault();
       loginPopup.classList.add("modal-hidden");
     });


var mapPopup = document.querySelector(".modal-map");
var close = mapPopup.querySelector(".modal-close");

close.addEventListener("click", function(event) {
       event.preventDefault();
       mapPopup.classList.add("modal-hidden");
     });
