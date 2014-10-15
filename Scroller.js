  var string = 'Chameleon proudly presents a javascript scroller run trough xss! Please check user input next time :)!';
  var seconds = Date.now();
  var target = document.body;  
  var letters = string.split("");

(function() {
  for(var i = 0; i < letters.length; i++){
    target.innerHTML += '<div style="position:fixed;" id="scroll-letter-'+i+'">'+letters[i]+'</div>';
  }
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
  sinScroll();
})();
