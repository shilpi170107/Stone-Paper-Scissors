//hum isme do variables likhenge ek humara store store krna ke liye aur ek computer ka store krne ke liye
let userScore = 0;
let computerScore = 0;

const choices=document.querySelectorAll(".choice"); //iske through humne teeno images ko access kr liya hai
const msg=document.querySelector("#msg"); //ye humne message ko access karne ke liye likha hai

const userscore=document.querySelector("#user-score"); //ye humne user ke score ko access karne ke liye likha hai
const computerscore=document.querySelector("#computer-score"); //ye humne computer ke score ko access karne ke liye likha hai
const resetButton=document.querySelector("#reset"); //ye humne reset button ko access karne ke liye likha hai

    resetButton.addEventListener("click", () => {   //iske through agar reset button click hoga to score zero ho jayenge 
        userScore = 0;
        computerScore = 0;
        userscore.innerText = userScore;
        computerscore.innerText = computerScore;
        msg.innerText = "Game reset! Play again.";
        msg.style.backgroundColor = "#b52a2a";
    });

const generateComputerChoice = () => {

    //stone , paper , scissors ke liye humne ek array banaya hai
    const choices = ["stone", "paper", "scissors"];
   const randomIndex = Math.floor(Math.random() * 3); //ye humne random number generate karne ke liye likha hai
    return choices[randomIndex];
};

const playgame = (userChoice) => {

    console.log("User chose:", userChoice);
    //humaraa next kaam hoga ki hum computer ke liye random choice generate karein
    const computerChoice = generateComputerChoice();
    console.log("Computer chose:", computerChoice);

    if(userChoice === computerChoice) {
        console.log("It's a tie!");
        msg.innerText = "It's a tie! play again";  //ye humne message ko display karne ke liye likha hai
        msg.style.backgroundColor = "blue";  //ye humne message ka color change karne ke liye likha hai
    }

    else if((userChoice === "stone" && computerChoice === "scissors") ||  //inme s koi bhi condition true ho jaati hai to user jeet jaata hai
            (userChoice === "paper" && computerChoice === "stone") ||
            (userChoice === "scissors" && computerChoice === "paper")) {
                userScore++;  //user ke score me 1 add karenge
                userscore.innerText = userScore;  //ye humne user ke score ko display karne ke liye likha hai
        console.log("User wins!");
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;  //ye humne message ko display karne ke liye likha hai
        msg.style.backgroundColor = "green";  //ye humne message ka color change karne ke liye likha hai
    }
    else {
        computerScore++;  //computer ke score me 1 add karenge
        computerscore.innerText = computerScore;  //ye humne computer ke score ko display karne ke liye likha hai
        console.log("Computer wins!");  //else me fir computer jeet jayega
        msg.innerText = `Computer wins! ${computerChoice} beats ${userChoice}`;  //ye humne message ko display karne ke liye likha hai
        msg.style.backgroundColor = "red";  //ye humne message ka color change karne ke liye likha hai
    }
};

choices.forEach(choice => {

    choice.addEventListener("click", () => {

        const userChoice = choice.id; //ye humne user ke choice ko store karne ke liye likha hai

        playgame(userChoice); //ye humne user ke choice ko playgame function me bhejne ke liye likha hai

    });
});

//hum modular way of coding karenge matlab different different functions banayenge aur unko call karenge taki future me hum usse easily firse access kr paye


                                                             