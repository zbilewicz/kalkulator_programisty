function sumowanie(a,b,system) {
    var num1=parseInt(a,system);
    var num2=parseInt(b,system);
    var suma=(num1+num2).toString(system);
    return suma;    
}
$('button').click(function(){
  var a=$('#jeden').val();
  var b=$('#dwa').val();
  var system=$("#wybory option:selected" ).text();
  $('#suma').text(sumowanie(a,b,system));
});
