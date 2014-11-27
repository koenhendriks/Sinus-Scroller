var string = 'Rotating Cube proudly presents a javascript scroller! ';
var seconds = Date.now();
var letters = string.split("");

(function() {
    
    document.addEventListener("DOMContentLoaded", function(event) { 
        for(var i = 0; i < letters.length; i++){
            document.body.innerHTML += '<div style="position:fixed;" id="scroll-letter-'+i+'">'+letters[i]+'</div>';
        }
        sinScroll();
    });

  function sinScroll(){
    
    var y = Math.floor((Date.now()-seconds)/10)/30;
    var sin = Math.sin((y)); 
    
    for(var i = 0; i < letters.length; i++){
      var letter = document.getElementById('scroll-letter-'+i);
      letter.style.right  = (y+-(i/.8))+'%';
      letter.style.top = (50+((Math.sin(y+(i/20)))*15))+'%';

      if(i == (letters.length-1)){
        if(y+-(i/.8) > 100){
          seconds = Date.now();
        }
      }
    }

    setTimeout(sinScroll,1); 
  }
})();

