
    document.addEventListener("mousemove", parallax);
    // document.addEventListener("touchstart", parallax);
    document.addEventListener("touchmove", parallax1);
    // document.addEventListener("touchend", parallax);
    function parallax(e){
      // alert("test");
      document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 200;
        var y = (e.clientY * moving_value) / 200;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }
    function parallax1(e){
      // alert("test");
      document.querySelectorAll(".object").forEach(function(move){

        var moving_value = move.getAttribute("data-value");
        var x = (e.touches[0].clientX * moving_value) / 200;
        var y = (e.touches[0].clientY * moving_value) / 100;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      });
    }
  
  