// code your solution here
function saturdayFun(task1 = "roller-skate") {
    return "This Saturday, I want to " + task1 + "!";
}

function mondayWork(task2 = "go to the office") {
    return `This Monday, I will ${task2}.`;
}

function wrapAdjective(flair = "*") {
    return function(task3 = "special"){
        return `You are ${flair}${task3}${flair}!`;
    }
}