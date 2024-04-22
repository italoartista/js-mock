function setup() { 
    createCanvas(displayWidth, displayHeight)
    background(255, 0, 255)

}


function draw() { 
    noFill()
    stroke(255)
    rect(random(width), random(height), random(300), random(300))
}