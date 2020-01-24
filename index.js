/**
 * I am just trying to create a ay that I can have access to all my devices via LAN
 * 
 */
var readline = require('readline')
var os = require('os')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.write(`Welcome ${os.userInfo().username} \n 
Let me give you some info: \n
Processors: ${os.cpus().map(cpu => {
    return `Model ${cpu.model} Speed: ${cpu.speed}\n`
})}
Memory: ${os.totalmem} \n\
Architecture: ${os.arch()} \n\
Platform: ${os.platform()} \n\
Release: ${os.release} \n\
Current User: ${os.userInfo().username} \n\
Shell: ${os.userInfo().shell} \n\
Type: ${os.type} \n\
Home: ${os.homedir()} \n\
Uptime: ${os.uptime()}

`)

rl.close()