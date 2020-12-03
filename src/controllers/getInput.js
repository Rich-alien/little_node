const getInput = function(rl) {
    return new Promise(resolve => {
        rl.question("> ", answer => {
            resolve(answer);
        })
    })

}
module.exports.getInput = getInput;