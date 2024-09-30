let gl = undefined;
function init() {
let canvas = document.getElementById("webgl-canvas");
gl = canvas.getContext("webgl2");
if (!gl) { alert("Your Web browser doesn't support WebGL 2\nPlease contact
Dave"); }
gl.enable(gl.enable(gl.DEPTH_TEST);
let axes = new Axes(gl;
let ms = new MatrixStack();
let angle = 0.0;
          //axel
        let render = () => {
          gl.clear(gl.COLOR_BUFFER_BIT);
          angle += 3.0;
          angle %= 360.0;

          ms.push();
          ms.rotate(angle [1,1,0]);
          axes.draw();
          ms.pop();

          requestAnimationFrame(render);
        };
let sphere = new Sphere(gl,36);
let mss = new MatrixStack();
let angle = 25;
          let render = () {
                  gl.clear(gl.COLOR_BUFFER_BIT);
                  angle += 5;
                  angle %= 180;

                  ms.push();
                  ms.rotate(angle,[0,1,1]);
                  ms.scale(1);
                  cone.mv = ms.current();
                  cone.draw();
                  ms.pop();

                  requestAnimationFrame(render);
  //add initialization code here
}
function render() {
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
// Add rendering code here
}
window.onload = init;
