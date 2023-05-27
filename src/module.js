console.log("Module.js")

async function start() {
    await Promise.resolve()
}

start()

const st = (a, b) => {
    return a * b
}

console.log(st(3, 5))