
let events = [];
let command = prompt('Enter command');

while(command !== 'quit'){

    if(command === 'new'){
        events = [];
        let newCommand = prompt("Enter events. (type 'back' to go back)");
        while(newCommand !== 'back'){
            events.push(newCommand);
            newCommand = prompt("Enter events. (type 'back' to go back)");
        }
    } else if(command === 'list'){
        console.log("*****************************");
        for(let i = 0; i < events.length; i++){
            console.log(i + " " + events[i]);
        }
        console.log("*****************************");
    } else if(command === 'delete'){
        let index = parseInt(prompt('enter index'));
        events.splice(index, 1);
    } else {
        console.log("wrong command. Available commands {new, list, delete}");
    }


    command = prompt('Enter command'); 
    

}