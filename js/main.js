/* global $ */

$( document ).ready(function() {
	var ww = $( window ).width();
	if (ww > 768) {
    $(".delete-search-result").on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(e.target).closest(".request").html('<div class="deleted">This search was removed from your <a>Web History</a></div>');
    });
	} else {
    $(".delete-search-result").on('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $(e.target).closest(".request").remove();
    });
	}

  $("#search-input").click(function() {
    $('#result').toggle();
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".search-wrapper").length) {
      $('#result').hide();
    }
  });

});