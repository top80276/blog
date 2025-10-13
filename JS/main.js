$(document).ready(function(event){
   $("a.showSearchBar").click(function(){
      event.preventDefault;
      $(".toggle").toggleClass("Activate");
  });

  $(".price-box i").click(function(){
      $(this).siblings().toggle();
  });

  // Checkout Steps Swiching

  $(".step-number").click(function(){
      $(this).toggleClass("active");
  });

  //   modal
  $('#deleteModal').on('shown.bs.modal', function (event) {
    var btn = $(event.relatedTarget);
    var title = btn.data('title');
    var modal = $(this);
    modal.find('.modal-title').text('Remove '+title);
  });
});