img = ""
statusOne = ""
objects = []

function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(640, 420)
    canvas.center()
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "status detectando objeto..."
}

function modelLoaded() {
    console.log("modelo iniciado")
    statusOne = true
    objectDetector.detect(img, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log(error)
    }
    console.log(results)
    objects = results
}
function draw() {
    image(img, 0, 0, 640, 420)
    if (statusOne != " ") {
        for (i = 0; i < objects.lenght; i++) {
            document.getElementById("status").innerHTML = "status: objeto detectado"
            fill("#FF0000")
            percent = floor(objects[i].confindance * 100)
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
            noFill()
            stroke("#FF0000")
            rect(objects[i].x, objects[i].y,  objects[i].width,  objects[i].height )
            
        }
    }
    
}

