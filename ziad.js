var btn = document.getElementsByClassName("btn");

var gallery = document.getElementById("gallery");

  var images = new Array(

      "/image/1.jpeg",
       "/image/2.jpeg",
        "/image/3.png",
         "/image/4.jpeg",
    );

   for (let i=0; i<btn.length; i++){
    btn[i].onclick = function()
    {
      gallery.src = images[i];
    };
   }
