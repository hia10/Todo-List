//
//
// $("input").keypress(function(event){
//   $("h1").text($("input").val());
// });



$(".myButton").on("click", function() {

  var text = $("input").val();



  if ($("input").val()) {
    var insertedHTML = "<div class='item-container'> <li class='item'>" + text + "</li> </div>"
    $(".list").append(insertedHTML);
    $("input").val("");
  }

});



$(document).on('click', '.item', function() {
  this.classList.toggle("completed-item");


  if (!($(this).hasClass("xadded"))) {
    $(this).after("<span class='xbutton'> x </span>");
    this.classList.add("xadded");
  } else {
    // $($(this) + " .xbutton").css("display", "none");

    // $(this).add('.xbutton').css("display","none");

    var nodex = $($(this).parent('.item-container')).children(".xbutton");
    nodex.remove();
    this.classList.remove("xadded");
  }
})


$('input').on('keypress', function(e) {
  if (e.which === 13) {

    //Disable textbox to prevent multiple submit
    $(this).attr("disabled", "disabled");

    var text = $("input").val();



    if ($("input").val()) {
      var insertedHTML = "<div class='item-container'> <li class='item'>" + text + "</li> </div>"
      $(".list").append(insertedHTML);
      $("input").val("");
    }

    //Enable the textbox again if needed.
    $(this).removeAttr("disabled");
  }
});









$(document).on('click', '.xbutton', function() {

  var nodeItemContainer = $($(this).parent('.item-container'));
  // nodeItemContainer.remove();

  nodeItemContainer.hide(700);

})






// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
