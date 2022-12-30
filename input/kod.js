function check(napis,podstawa) {
    var a = parseInt(napis,podstawa);
    if((a.toString(podstawa) === napis)) return true;
    else if(napis == 0) return true;
    else return false;
    }
    $('.numbers').on("input", function(){
      $('#suma').text($('#l1').val())
      if (!check($('#l1').val(),2) || !check($('#l2').val(),2) )
        {
          $('#error').html("<p>error</p>");
        }
      else $('#error').html("");
    });