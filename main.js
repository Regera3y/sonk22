song1 = "";
song2 = "";
function preload(){
    song1 = loadSound("sonk1.mp3");
    song2 = loadSound("sonk2.mp3");
}

scoreRightWrist = 0;
scoreLeftWrist = 0;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    image(webcam, 0, 0, 300, 300);
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    connsole.log("Pnet initiliazed");
}

function gotPoses(results)
{
    if(results > 0){
        rightWristX = results[0].pose.rightwrist.x
        rightWristY = results[0].pose.rightwrist.y
        leftWristX = results[0].pose.leftwrist.x
        leftWristY = results[0].pose.leftwrist.y
    }
}