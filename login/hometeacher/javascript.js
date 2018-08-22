$(document).ready(function(){
    $(".navbar-nav a").click(function(){
        $(this).tab('show');
    });
    $('.navbar-nav a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();
        var y = $(event.relatedTarget).text();
        $(".act span").text(x);
        $(".prev span").text(y);
    });
});

$(function() {
  $("#generate").click(function() {
    $(".qr-code").attr("src", "https://chart.googleapis.com/chart?cht=qr&chl=" + htmlEncode($("#content").val()) + "&chs=160x160&chld=L|0");
>>>>>>> 5adc45364da1368d2816a0851ad5c711b9900111
  });
});


/* pop up */
 $(document).ready(function () {
     $("button").click(function () {
         $(".pop").fadeIn(300);
         positionPopup();
     });

     $(".pop > span, .pop").click(function () {
         $(".pop").fadeOut(300);
     });
 });

   // Get the modal
  var modal = document.getElementById('id01');

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
