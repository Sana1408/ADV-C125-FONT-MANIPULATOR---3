noseX= 0;
noseY= 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(450, 400);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#BF40BF');

    document.getElementById("font_size").innerHTML = "Font Size of the text will be=" + difference +"px";
    textSize(difference);
    fill('FFE787');
    text('Sana', 50, 400);
}

function modelLoaded(){
    console.log("poseNet Is Intialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX =" + noseX + "noseY =" + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX ="+leftWristX + "rightWristX =" + rightWristX);
    }
}