let userPrompt = prompt("How many numbers should we loop?", 50);
let userNum = Number(userPrompt); 

//allowing the user to enter a number
//keeps the code from being limited in range

for (i = 1; i < userNum + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write(i + " -" + "Fizzbuzz" + "<br>")
        } else if (i % 5 === 0) {
            document.write(i + "-" + "Buzz" + "<br>")
        } else if (i % 3 === 0) {
            document.write(i + "-" + "Fizz" + "<br>");
        } else document.write(i + " - " + i + "<br>");
    }

