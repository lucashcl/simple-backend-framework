export const getRootPath =  process.cwd()

export const debugMiddleware = (req, res) => {
    const msg = `request at path: '${req.baseUrl || req.route.path}' `
    console.log(msg + `from '${req.hostname}'`);
    res.json({msg})
}

export function findPortArgument() {
    const index = process.argv.indexOf('--port')
    const portNumber = process.argv[index + 1]
    if (portNumber > 1) {
        return portNumber
    }
    else {
        console.log("port number is missing");
    }
}