$alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
function sumowanie(a,b,system) {
  if (a.length==0) a='0';
  if (b.length==0) b='0';
  var num1=parseInt(a,system);
  var num2=parseInt(b,system);
  var suma=(num1+num2).toString(system);
  return suma;    
}
function check(napis,podstawa) {
  var a = parseInt(napis,podstawa);
  if((a.toString(podstawa) === napis)) return true;
  else if(napis == 0) return true;
  else return false;
  }
  $('.numbers').on("input", function(){
    //$('#suma').text($('#liczba1').val())
    var system=$('.dropdown .wybory li').parents('.dropdown').find('.number').text();
    if (!check($('#liczba1').val(),system) || !check($('#liczba2').val(),system) )
      {
        if(system>10)
          {
            $('#error').html("<p>tylko znaki z przedziału 0-9 oraz "+ $alphabet[0]+" - "+ $alphabet[system-11]+"</p>");
          }
        else $('#error').html("<p>tylko znaki z przedziału 0-"+(system-1)+"</p>");
        $('#error').addClass('error');
      }
    else $('#error').html("");
    
  });
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
      $('.numbers').val('');
      $('#suma').html("");
  });


$('#sumowanie-button').click(function(){
var a=$('#liczba1').val();
var b=$('#liczba2').val();
//var system=$("#wybory option:selected" ).text();
var system=$('.dropdown .wybory li').parents('.dropdown').find('.number').text();
var $error=true;
if (!$('#error').hasClass('error'))
  {
    $('#suma').text(sumowanie(a,b,system));
  }
  $('.numbers').on("click",function(){
    $(this).select();
  });
  
 //$('#suma').text(sumowanie(a,b,system));
});
$(".numbers").keyup(function(event) {
    if (event.which === 13) {
      $("#sumowanie-button").click();
    }
  });
