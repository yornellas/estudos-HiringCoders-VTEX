function reverseAString(string) {
    let splitString = string.split("");
    let reverseString = splitString.reverse();
    let joinString = reverseString.join("");
    let newString = "";

    for(let i = 0; i < reverseString.length; i++) {
        newString += joinString[i];
        console.log(newString);
    }

}

let resultado = reverseAString("Hello Hiring Coders");


