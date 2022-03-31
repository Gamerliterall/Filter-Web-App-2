function preload()
{

} 

function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(280, 280);
    video.hide();
    background("white");

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{}

function take_snapshot()
{
    save('my_picture.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized');
}