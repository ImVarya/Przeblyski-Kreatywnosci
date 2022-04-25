import { updateBird, setupBird, getBirdRect} from "./bird.js"

document.addEventListener("keypress", handleStart, { once: true })
const title = document.querySelector("[data-title]")
const subtile = document.querySelector("[data-subtitle]")

let lastTime
function updateLoop(time) {
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return
    }
const delta = time - lastTime
updateBird(delta)
if (checkLose()) return handleLose()
lastTime = time
window.requestAnimationFrame(updateLoop)
}

function checkLose() {
    const birdRect = getBirdRect()
    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight
    return outsideWorld
}

function handleStart() {
    title.classList.add("hide")
    setupBird()
    lastTime = null
    window.requestAnimationFrame(updateLoop)
}

function handleLose() {
    setTimeout(() => {
        title.classList.remove("hide")
        subtile.classList.remove("hide")
        subtile.textContent = "0 Pipes"
        document.addEventListener("keypress", handleStart, { once: true })
    }, 100)
}
