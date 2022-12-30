$(function(){
  $('select').each(function(){
    var numofoptions = $(this).children('option').length;
    $(this).addClass('s-hidden');
    $(this).wrap('<div class="select"></div>')
    $(this).after('<div class="s-style"></div>');

    var styled= $(this).next('div.s-style');
    styled.text($(this).children('option').eq(0).text());
    var list=$('<ul />', {
      'class': 'select-options'
    }).insertAfter(styled);
  for (var i=0; i<numofoptions; i++)
  {
    $('<li />', {
      text:$(this).children('option').eq(i).text(),
      rel: $(this).children('option').eq(i).val()
    }).appendTo(list);
  }
  var listitems = list.children('li');

  styled.click()
  });

  });
  //zrobić tak że kiedy jest akcja kliknięcia to rozwija się za pomocą
  //slide down liste

  $(document).on('click', '.j-store-select', function() {
    $(this).find('ul').slideToggle();
});
$(document).on('click', '.j-store', function() {
var store = $(this).html();
$(this).toggleClass('selected');
$('.j-store').not($(this)).removeClass('selected');
$('.store-default').html(store).css('color', 'black');
$('#competitor').val($(this).attr('data-value'));
});
