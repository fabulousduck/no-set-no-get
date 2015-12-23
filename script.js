window.onload = function(){
    var canvas = document.querySelector("#Canvas");
    var ctx = canvas.getContext("2d");
    
    var width = canvas.width;
    var height = canvas.height;
    
     var pa = [];
     var numP = 100;
     
     for(var i = 0; i < numP; i++){
         pa.push(particle.create(width / 2, height /2, Math.random()*4 + 1, Math.random() * Math.PI * 2))
     }
     
    

    
    update();
    
    function update(){
        ctx.clearRect(0,0,width,height);
        for(var i = 0; i < numP; i++){
            var particl = pa[i];
                    particl.update();
      

        ctx.beginPath()
        ctx.arc(particl.position.getX(), particl.position.getY(), 10, 0, 2*Math.PI);
        var r = Math.floor(Math.random()* 255 + 1);
        var g = Math.floor(Math.random()* 255 + 1);
        var b = Math.floor(Math.random()* 255 + 1);
                        
        ctx.fillStyle = "rgb("+r+","+g+","+b+")";
        ctx.fill();
        ctx.stroke();
        }
        
        
        requestAnimationFrame(update);
    }
}