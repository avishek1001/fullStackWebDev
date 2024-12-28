let number = Math.trunc(Math.random() * 10);
//console.log(number);



let count = 0;
while(count <= 5){

    let guess = prompt("Enter number between 0 to 9");

    if(guess == number){
        alert(`You Win !!!. It took you ${count + 1} guess/guesses`);
        
        break;
    } else if(guess > number){
        alert("Your guess is over the number");
    } else {
        alert("Your guess is under the number");
    }

    count++;
}

console.log(count);

if(count > 5) {
    alert("You Lose :(");
}