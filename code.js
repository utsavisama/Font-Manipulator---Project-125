var left_wrist_x = 0
var right_wrist_x = 0
var difference = 0


function setup(){
canvas = createCanvas(410, 450)
canvas.position(1000, 100)
video = createCapture(VIDEO)
video.size(300, 450)
video.position(10, 100)

var posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose', gotResults)

}


function modelLoaded(){
    console.log("POSENET IS LOADED!")
}
function draw(){
    background("grey")
    textSize(difference);
    text('Blackpink in your Area!, Blackpink is the Revolution!, 50, 400')
    
    
}

function gotResults(results){
if(results.length>0){
    console.log(results)
        left_wrist_x = results[0].pose.leftWrist.x
        right_wrist_x = results[0].pose.rightWrist.x
        difference = floor(left_wrist_x - right_wrist_x)
   
}
}
