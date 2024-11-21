"use strict;"
let gl = undefined;
function init() {
let canvas = document.getElementById("webgl-canvas");
gl = canvas.getContext("webgl2");
gl.clearColor(1,0,0,1);

//if (!gl) { alert("Your Web browser doesn't support WebGL 2\nPlease contact
//Dave"); }
gl.enable(gl.DEPTH_TEST);
let axes = new Axes(gl);
let ms = new MatrixStack();
let angle = 0.0;
let sphere = new Sphere(gl,36,18);
let cone = new Cone(gl,36);
let sangle = 25;
let cangle = 25;
          
          //axel
        let render = () => {
          gl.clear(gl.COLOR_BUFFER_BIT);
          angle += 3.0;
          angle %= 360.0;

          ms.push();
          ms.rotate(angle, [1,1,0]);
	  axes.MV = ms.current();
          axes.draw();
          ms.pop();
                  
         
          sangle += 5;
          sangle %= 360;
			
          ms.push();

         // ms.rotate(sangle,[0,1,1]);
	  ms.translate(.5,.7,0);
          ms.scale(0.2,0.2,0.2);
	  	
          sphere.MV = ms.current();
	  	

          sphere.draw();
          ms.pop();

                
  //add initialization code here

        
          cangle += 1;
          cangle %= 360;

          ms.push();
          //ms.rotate(cangle,[0,0,0.1]);
	  ms.translate(.5,-.7,0);

          ms.scale(0.1);
          cone.MV = ms.current();

         cone.draw();
          ms.pop();

          requestAnimationFrame(render);
          };
render();
}
window.onload = init;
