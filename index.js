const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const gravity = 0.5

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.width = 50
        this.height = 50
    }
    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.y += this.velocity.y
        if(this.position.y + this.height + this.velocity.y <= canvas.height ) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0;
        }
    } 
}

const player = new Player()

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    console.log("Yo")
player.update()
}

animate()

addEventListener('keydown', ({keyCode}) => {
    switch(keyCode) {
        case 87:
            console.log('up')
            player.velocity.y += 20
            break;
        case 65:
            console.log("left")
            break;
        case 68:
            console.log("right")
            break;
        case 83:
            console.log("down")
    }
}) 

// w = 87, a = 65, s = 83, d = 68