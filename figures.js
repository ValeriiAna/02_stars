// Task1. square
const width = 0;
let result = '';
for(let height = 1; height <= 7; height++) {
    for (let width = 1; width <= 7; width++) {
        result += '*  ';

    }
    result = result + "\n";
}
console.log(result)

// Task2.
const w = 0;
let result1 = '';
for(let h = 1; h <= 7; h++) {
    for (let w = 1; w <= 7; w++) {
        if(w > 1 && w < 7 && h > 1 && h < 7) {
            result1 += '   ';
        }
        else{
            result1 += '*  ';
        }

    }
    result1 = result1 + "\n";
}
console.log(result1)


// Task7
const w1 = 0;
let result2 = '';
for(let h1 = 0; h1 < 7; h1++){
    for(let w1 = 0; w1 < 7; w1++){
    if(h1 === w1){
        result2 += '* ';
    } else if(w1 === 6 - h1){
        result2 += ' *';
    } else {
        result2 += '   ';
    }
    }
    result2 += '\n';
}
console.log(result2)

//Task4
let n = 7;
let string = "";

for (let i = 1; i <= n; i++) {
    // printing star
    for (let j = 0; j < i; j++) {
        if(i === n) {
            string += "*  ";
        }
        else {
            if (j === 0 || j === i - 1) {
                string += "* ";
            }
            else {
                string += "   ";
            }
        }
    }
    string += "\n";
}
console.log(string)




