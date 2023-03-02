function boolean(fuck){
    fuck = prompt(`True or False?`)
    if(fuck === "true"){
        fuck = false
        console.log(`${fuck}`)
    }
    else if(fuck === "false"){
        fuck = true
        console.log(`${fuck}`)
    }
}

function number(num){
    num = prompt("Type a number")
    num = num * -1
    return num;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
}

boolean()
number()