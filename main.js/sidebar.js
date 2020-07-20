// Sidebar menu toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const sideMenu = document.getElementById('sideMenu');

hamburgerBtn.addEventListener('click', () =>{
console.log('button clicked');
sideMenu.classList.toggle('open');
});

/* // User Massages menu toggle
const chatMsg = document.getElementById('chatMsg');
const chatBox = document.getElementById('chatBox');

chatMsg.addEventListener("click", () =>{
  console.log("Hello");
  chatBox.classList.toggle('slide');
}); */

 /* window.addEventListener('mouseup', function(e){

  if(e.target !== chatBox && e.target.parentNode != chatBox && e.target != chatMsg) {
    chatBox.style.display = 'none';
  }
}); */

$(document).ready(function () {
  $(".FormEventBtn").on("click", function () {
    $(".EventForm").toggleClass("activeForm");
  });
  $(".AdminEventBtn1").on("click", function () {
    $(".AdminForm1").toggleClass("activeForm");
  });
  $(".AdminEventBtn2").on("click", function () {
    $(".AdminForm2").toggleClass("activeForm");
  });
  $(".BuildingEventBtn").on("click", function () {
    $(".BuildingForm").toggleClass("activeForm");
  });
  $(".DistrictEventBtn").on("click", function () {
    $(".DistrictForm").toggleClass("activeForm");
  });
  $(".DocumentEventBtn").on("click", function () {
    $(".DocumentForm").toggleClass("activeForm");
  });
  $(".ImportantEventBtn").on("click", function () {
    $(".ImportantForm").toggleClass("activeForm");
  });
  /* $(".chatMsg").on("click", function () {
    console.log("msg");
    $(".chatBox").toggleClass("activeMsg");
  }); */
  $(".chatMsg").click(function() {
    $(".chatBox").toggle();
  });
  //HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
  $(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (! $clicked.parents().hasClass("chatMsg"))
      $(".chatBox").hide();
 }); 
  $(".reply").on("click", function () {
    $(".reply-form").toggleClass("activeForm");
  });
  //TOGGLING NESTED ul
$(".drop-down .selected a").click(function() {
  $(".drop-down .options ul").toggle();
});
//SELECT OPTIONS AND HIDE OPTION AFTER SELECTION
$(".drop-down .options ul li a").click(function() {
  var text = $(this).html();
  $(".drop-down .selected a span").html(text);
  $(".drop-down .options ul").hide();
}); 


//HIDE OPTIONS IF CLICKED ANYWHERE ELSE ON PAGE
$(document).bind('click', function(e) {
  var $clicked = $(e.target);
  if (! $clicked.parents().hasClass("drop-down"))
      $(".drop-down .options ul").hide();
});
  

  var x = 1;
  $(".addMoreOption").click(function (e) {
    e.preventDefault();
    if (x < 10) {
      x++;
      $("#PollFormInput").append(
        '<div class="newInputField"><input type="text" class="form-sec_input""/><a href="#" class="remove_field">Remove</a></div>'
      );
    }
  });

  $("#PollFormInput").on("click", ".remove_field", function (e) {
    e.preventDefault();
    $(this).parent("div").remove();
    x--;
  });
});
