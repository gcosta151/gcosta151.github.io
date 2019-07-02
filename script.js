//------------------------------------------------------------------------
//  Collapsible button
//------------------------------------------------------------------------

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// $('.nav a').on('click', function(){
//     $('.btn-navbar').click(); //bootstrap 2.x
//     $('.navbar-toggle').click(); //bootstrap 3.x by Richard
//     $('.navbar-toggler').click(); //bootstrap 4.x
// });

// var $myGroup = $('#myGroup');
// $myGroup.on('show.bs.collapse','.collapse', function() {
//     $myGroup.find('.collapse.in').collapse('hide');
// });

$('.collapse').on('show.bs.collapse', function () {
    $('.collapse.in').each(function(){
        $(this).collapse('hide');
    });
  });