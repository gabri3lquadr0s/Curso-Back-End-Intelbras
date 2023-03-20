var medic = (marcia = true, pedro = true) => {
    var decision1 = prompt(`Is marcia a doctor?`)
    var decision2 = prompt(`Is pedro a doctor?`)
    switch(decision1){
        case `y`:
            console.log(marcia)
            break;

        case `n`:
            marcia = false
           console.log(marcia)
           break;
    }
    switch(decision2){
        case `y`:
            console.log(pedro)

        case `n`:
            pedro = false
            console.log(pedro)
            break;
    }
}
medic()