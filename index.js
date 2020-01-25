/**
 * This script is to help in common tasks
 * This include: Checking OS info ...etc
 * 
 */
var readline = require('readline')
var os = require('os')
var fs = require('fs')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const username = os.userInfo().username



/**
 * ===========================
 *        System info
 * ===========================
 */
const getSystemInfo = () => {
    console.log(`Let me give you some info: \n
Processors: \n\
${os.cpus().map(cpu => {
        return `Model ${cpu.model} Speed: ${cpu.speed}\n`
    })}
Memory: ${os.totalmem} \n\
Architecture: ${os.arch()} \n\
Platform: ${os.platform()} \n\
Release: ${os.release} \n\
Current User: ${username} \n\
Shell: ${os.userInfo().shell} \n\
Type: ${os.type} \n\
Home: ${os.homedir()} \n\
Uptime:  ${os.uptime()} \n\
Host: ${os.hostname()}

`)

}

/**
 * ============================
 *         Display Help
 * ============================
 */
const displayHelp = () => {
    console.log(
        `Help menu \n
    *Press Enter after every command* \n\
    Press: \n
    1 to get information about your system \n\
    help to show this menu`
    )
}


/**
 * ============================
 *          Filesystem
 * ============================
 */
const filesystem = () => {
    console.log(
        `Welcome to the file Manager menu 😎`
    )

    rl.question('Please type the path you want: \n\
    ', (answer) => {
        fs.readdir(answer, (err, files) => {
            if (err) {
                console.error(err)
            }

            console.table(files)
            filesystem()
        })
    })
}

/**
 * ============================
 *           Main Menu
 * ============================
 */

rl.write(`Welcome Awesome ${username} 😊\n 
What do you want to do? type help for more info \n\
1) View Sytem info \n\
2) File Manager \n\
`)

rl.on('line', (line) => {
    switch (line.toLowerCase()) {
        case 'exit':
            console.warn(`Good bye ${username} 👋 \n`)
            rl.close()
            break;
        case 'help':
            displayHelp()
            break;
        case '1':
            getSystemInfo()
            break;
        case '2':
            filesystem()
            break;
        default:
            console.log(`${line} is not a recognized command. Type Help for more info😢`)
            break;
    }
})
