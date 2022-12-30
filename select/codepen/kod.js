var $arrow=$('.arrow');
$('.dropdown').click(function () {
        var $this=$(this);
        $arrow.toggleClass('up');
        $this.attr('tabindex', 1).focus();
        $this.toggleClass('active');
        $this.find('.wybory').slideToggle(300);
    });
 $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $arrow.removeClass('up');
        $(this).find('.wybory').slideUp(300);
 });
$('.dropdown .wybory li').click(function () {
        $(this).parents('.dropdown').find('.number').text($(this).text());
    });
$('li').click(function(){
    var $this=$(this);
      $('#hey').text($this.text());
  });