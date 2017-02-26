function makeGif() {
  if ($('#gifModal').length) {
  randomGif.init();
  $('.make-tooltip').tooltip();
  }
}

function addTabActive() {
  $('.group-tab a:first').addClass('active')
  $('.group-tab a').click(function(e){
    $('.group-tab a').removeClass('active');
    $(this).addClass('active');
    $('.tab.active').removeClass('active');
    $($(this).attr('href')).addClass('active');
  });
}

$(document).on('page:load', makeGif);
$(document).on('page:load', addTabActive);

$(document).ready(function() {

  function removeAlert() {
  $('.alert').addClass('fade-out');
  }
  window.setTimeout(removeAlert, 8000);

  makeGif();

  // ==> Tabs (see groups#show)
  addTabActive();


});
