import ball from "./ball";

const ball = new ball(document.getElementById("ball"))

let lastTime
function update(time) {
    if(lastTime != null) {
        const delta = time - lastTime
        ball.update(delta)
    }
    lastTime = time
    window.requestAnimationFrame(update)
}

window.requestAnimationFrame(update)