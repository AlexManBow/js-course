console.log("Module.js")

async function start() {
    return await Promise.resolve('async working!')
}
start().then(console.log)

start()

const st = (a, b) => {
    return a * b
}

console.log(st(3, 5))