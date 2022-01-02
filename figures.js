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
                string += "*  ";
            }
            else {
                string += "   ";
            }
        }
    }
    string += "\n";
}
console.log(string)

// Task - 5
    let str = '';
    for(let i = 0; i < 7; i++) {
        for(let j = 0; j < 7; j++) {
            if( 6 === (j + i) || j === 0) {
                str = str + ' * ';
            } else if( i === 0) {
                str = str + ' * ';
            } else {
                str = str + '   ';
            }
        }
        str = str + '\n';
    }
    console.log(str);

// Task - 6
    let str1 = '';
    for(let i = 0; i < 7; i++) {
        for(let j = 0; j < 7; j++) {
            if( i === j || j === 6) {
                str1 = str1 + ' * ';
            } else if( i === 0) {
                str1 = str1 + ' * ';
            } else {
                str1 = str1 + '   ';
            }
        }
        str1 = str1 + '\n';


}
console.log(str1);

// Task - 7
    let str2 = '';
    for(let i = 1; i <= 7; i++) {
        for(let j = 0; j < 7; j++) {
            if( 7 === (j + i) || j === 6) {
                str2 = str2 + ' * ';
            } else if( i === 7) {
                str2 = str2 + ' * ';
            } else {
                str2 = str2 + '   ';
            }
        }
        str2 = str2 + '\n';


}
console.log(str2);

//Task - 8
    let str3 = '';
    for(let i = 1; i < 8; i++) {
        for(let j = 1; j < 8; j++) {
            if(i === 1 || (i===j && i < 5)){
                str3 = str3 + " * ";
            } else if( i < 5 && (j + i) === 8 ) {
                str3 = str3 + " * ";
            } else {
                str3 = str3 + '   ';
            }
        }
        str3 = str3 + '\n';
}
console.log(str3);

//Task - 9
    let res = '';
    for(let i = 1; i <= 7; i++) {
        for(let j = 1; j <= 7; j++) {
            if(i === 7 || (i===j && i > 3)){
                res = res + " * ";
            } else if( i > 3 && (j + i) === 8 ) {
                res = res + " * ";
            } else {
                res = res + '   ';
            }
        }
        res = res + '\n';

}
console.log(res);

