let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

H = window.innerHeight;
W = window.innerWidth;



function scalePoint(point){
    x=point[0]/W, y=point[1]/H;
    return [3.5*x - 2.5, 2.0*y-1.0]
}

function calculateT(c){
    let t = 0;
    let point = scalePoint(c);
    console.log(c,point)
    let x0=point[0], y0=point[1]; 
    let max_iteration = 255;
    let x=0,y=0;
    let x2=0, y2=0;
    do{
        y = 2 * x * y + y0;
        x = x2 - y2 + x0;
        x2 = x * x;
        y2 = y * y;
        t = t + 1;
    } while (x2 + y2 <= 4 && t < max_iteration)
    
    return t;
}

function rainbow(n) {
    n = n * 240 / 255;
    var r = Math.round(Math.sin(n) * 255);
    var g = Math.round(Math.cos(n) * 255);
    var b = Math.round(Math.cos(n) * 255);
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}


function renderPoint(point){
    let t = calculateT(point);
    let x = point[0],
        y = point[1];
    let color = rainbow(t)
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+4,y+4);
    context.lineWidth = 4;
    context.strokeStyle = color;
    context.stroke();
}

function renderMandelbrot(){
    for(let i=0;i<W;i++){
        for(let j=0;j<H;j++){
            renderPoint([i,j]);
        }
    }
}


renderMandelbrot();