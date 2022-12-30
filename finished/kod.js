$alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
function sumowanie(a,b,system) {
  if (a.length==0) a='0';
  if (b.length==0) b='0';
  var num1=parseInt(a,system);
  var num2=parseInt(b,system);
  var suma=(num1+num2).toString(system);
  return suma;    
}
function odejmowanie(a,b,system) {
  if (a.length==0) a='0';
  if (b.length==0) b='0';
  var num1=parseInt(a,system);
  var num2=parseInt(b,system);
  var roznica=(num1-num2).toString(system);
  return roznica;    
}
function mnozenie(a,b,system) {
  if (a.length==0) a='0';
  if (b.length==0) b='0';
  var num1=parseInt(a,system);
  var num2=parseInt(b,system);
  var iloczyn=(num1*num2).toString(system);
  return iloczyn;    
}
function dzielenie(a,b,system) {
  if (a.length==0) a='0';
  if (b.length==0) b='0';
  var num1=parseInt(a,system);
  var num2=parseInt(b,system);
  var iloraz=(num1/num2).toString(system);
  return iloraz;    
}
function check(napis,podstawa) {
  var a = parseInt(napis,podstawa);
  if((a.toString(podstawa) === napis)) return true;
  else if(napis == 0) return true;
  else return false;
  }
  $('.numbers').on("input", function(){
    //$('#suma').text($('#liczba1').val())
    //alert($(this).attr('id'));
    //var $opcja="-sumowanie";
    var $opcja=$(this).attr('id').slice(7);
    $("#fake").text($opcja);
    
    var system=$('.dropdown .wybory li').parents('#dropdown'+$opcja).find('.number').text();
    $("#test").text(system);
    if (!check($('#liczba1'+$opcja).val(),system) || !check($('#liczba2'+$opcja).val(),system) )
      {
        if(system>10)
          {
            $('#error'+$opcja).html("<p>tylko znaki z przedziału 0-9 oraz "+ $alphabet[0]+" - "+ $alphabet[system-11]+"</p>");
          }
        
        else {
          $('#error'+$opcja).addClass('error');
          $('#error'+$opcja).html("<p>tylko znaki z przedziału 0-"+(system-1)+"</p>");
        }        
      }
    else
    {
     $('#error'+$opcja).removeClass('error');
     $('#error'+$opcja).html("");
    }
  });
//var $arrow=$('.arrow');

$('.dropdown').click(function () {
      var $opcja=$(this).attr('id').slice(8);
      var $arrow=$('#arrow'+$opcja);
      var $this=$(this);
      $arrow.toggleClass('up');
      $this.attr('tabindex', 1).focus();
      $this.toggleClass('active');
      $this.find('.wybory').slideToggle(300);
  });
$('.dropdown').focusout(function () {
      var $arrow=$('#arrow'+$(this).attr('id').slice(8));
      $(this).removeClass('active');
      $arrow.removeClass('up');
      $(this).find('.wybory').slideUp(300);
});
$('.dropdown .wybory li').click(function () {
      $(this).parents('.dropdown').find('.number').text($(this).text());
      $('.numbers').val('');
      $('#suma').html("");
      $('#roznica').html("");
      $('#iloczyn').html("");
      $('#iloraz').html("");
  });


$('#button-sumowanie').click(function(){
var a=$('#liczba1-sumowanie').val();
var b=$('#liczba2-sumowanie').val();
//var system=$("#wybory option:selected" ).text();
var system=$('.dropdown .wybory li').parents('#dropdown-sumowanie').find('.number').text();
var $error=true;
if (!$('#error-sumowanie').hasClass('error'))
  {
    $('#suma').text(sumowanie(a,b,system));
  }
  $('.numbers').on("click",function(){
    $(this).select();
  });
  
 //$('#suma').text(sumowanie(a,b,system));
});
$('#button-odejmowanie').click(function(){
var a=$('#liczba1-odejmowanie').val();
var b=$('#liczba2-odejmowanie').val();
//var system=$("#wybory option:selected" ).text();
var system=$('.dropdown .wybory li').parents('#dropdown-odejmowanie').find('.number').text();
var $error=true;
if (!$('#error-odejmowanie').hasClass('error'))
  {
    $('#roznica').text(odejmowanie(a,b,system));
  }
  $('.numbers').on("click",function(){
    $(this).select();
  });
});
$('#button-mnozenie').click(function(){
var a=$('#liczba1-mnozenie').val();
var b=$('#liczba2-mnozenie').val();
//var system=$("#wybory option:selected" ).text();
var system=$('.dropdown .wybory li').parents('#dropdown-mnozenie').find('.number').text();
var $error=true;
if (!$('#error-mnozenie').hasClass('error'))
  {
    $('#iloczyn').text(mnozenie(a,b,system));
  }
  $('.numbers').on("click",function(){
    $(this).select();
  });
});
$('#button-dzielenie').click(function(){
var a=$('#liczba1-dzielenie').val();
var b=$('#liczba2-dzielenie').val();
//var system=$("#wybory option:selected" ).text();
var system=$('.dropdown .wybory li').parents('#dropdown-dzielenie').find('.number').text();
var $error=true;
if (!$('#error-dzielenie').hasClass('error'))
  {
    if (system<10) 
    {
      var wynik=dzielenie(a,b,system);
      $('#iloraz').text(Math.round(wynik * 1000)/1000);
    }
    else
    {
      var wynik=dzielenie(a,b,system);
      var num=parseInt(wynik,system).toString(system);
      $('#iloraz').text(num);
    }
    
  }
  $('.numbers').on("click",function(){
    $(this).select();
  });
});


$(".numbers").keyup(function(event) {
  var $opcja=$(this).attr('id').slice(7);
    if (event.which === 13) {
      $("#button"+$opcja).click();
    }
  });
