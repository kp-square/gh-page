let canvas = document.getElementById('canvas');
let context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let STEP = 0.5;
let X_MIN_WIDTH=-2, X_MAX_WIDTH=2;
let Y_MIN_WIDTH=-2, Y_MAX_WIDTH=2;
let Z_MIN_WIDTH=-2, Z_MAX_WIDTH=2;
let W = 1920, H = 1080, Z = 600;
let points = []
H = window.innerHeight;
W = window.innerWidth;

function cubePoints(){
    for(let x=-1;x<=1;x+=STEP){
        for(let y=-1;y<=1;y+=STEP){
            for(let z=-1;z<=1;z+=STEP){
                points.push([x,y,z]);
            }
        }
    }
}


function project(point){
    point = perspectiveProjection(point);
    // map points to (-2,2) and scale by height and width
    return [ W * (point[0] - X_MIN_WIDTH) / (X_MAX_WIDTH - X_MIN_WIDTH),
            H * (point[1] - Y_MIN_WIDTH) / (Y_MAX_WIDTH - Y_MIN_WIDTH)];
}


function perspectiveProjection(point){
    var x = point[0],
        y = point[1],
        z = point[2];

    return [x/(z+2), y/(z+2)];
}

function renderPoint(point){
    let projectedPoint = project(point);
    let x = projectedPoint[0],
        y = projectedPoint[1];
    
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+4,y+4);
    context.lineWidth = 4;
    context.strokeStyle = 'white';
    context.stroke();
}


function drawCube(){
    context.clearRect(0,0,W,H);
    try{
        theta += 0.01;
    }catch{
        theta = 0;
    }

    points.forEach((point) => {
            point= rotateY(point, theta);
            renderPoint(point);
        }
    );
    


    requestAnimationFrame(drawCube);
}


function multiply(mat1,mat2){
    let result = [];
    for(let i=0;i<mat1.length;i++){
        let row = [];
        for(let j=0;j<mat1[i].length;j++){
            let res = 0;
            for(let k=0;k<mat2.length;k++){
                res += mat1[i][k] * mat2[k][j];
            }
            row.push(res);
        }
        result.push(row);
    }
    return result;
}


function transform(vec,mat){
    let result = [];
    for(let i=0;i<mat[0].length;i++){
        let res=0;
        for(let j=0;j<vec.length;j++){
            res += vec[j] * mat[j][i];
        }
        result.push(res);
    }
    return result;
}


function rotateY(point,  theta=0.01){
    x =  point[0]*Math.cos(theta) - point[2]*Math.sin(theta);
    y = point[1];
    z = point[0]*Math.sin(theta) + point[2]*Math.cos(theta);
    return [x,y,z];
}

cubePoints();
drawCube();