function delayCOnsole(seconds){
    return new Promise(resolve => {
        resolve("hello world")
    }, seconds*1000)
}

function main(){
    console.log("before delay")
    delayCOnsole(3).then(result => console.log(result))
    console.log("after delay")
}

main()