//**************************************<0>***********************************
function doIt() {
    console.log('I am done');
}
setTimeout(doIt, 5000);
// **********************************<1>**************************************

function foo1(func1) {
    func1();
}

function bar1() {
    console.log('Hello, I am bar!');
}

foo1(bar1);

//  ***********************************<2>***********************************
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    var array = [];
    for (var i = startIndex; i <= stopIndex; i++) {
        array.push(i);
        if (i % 3 === 0) {
            threeCallback(i);
        }
        if (i % 5 === 0) {
            fiveCallback(i);
        }
    }
    return array;
}

function callback3(num) {
    console.log(`${num} is divisible by 3`);
}

function callback5(num) {
    console.log(`${num} is divisible by 5`);
}
console.log(threeFive(10, 15, callback3, callback5));

// ************************************<3.1> for loop ********************************

function repeatStringNumTimes1(str, num) {
    let dert = "";
    for (let i = 0; i < num; i++) {
        if (num >= 0) {
            dert += str;
        }
    }
    return dert;
}

console.log(repeatStringNumTimes1("abc", 3));

//  ***********************************<3.2> while loop *************************************

function repeatStringNumTimes1(str, num) {
    var repeatedstring = "";
    while (num > 0) {
        repeatedstring += str;
        num--;
    }
    return repeatedstring;
}
console.log(repeatStringNumTimes1("abc", 3));

//  *************************************<3.3>do while loop ***********************************
function repeatStringNumTimes2(str, num) {
    var repeatedstring = "";
    if (num > 0) {
        do {
            repeatedstring += str;
            num--;
        } while (num > 0)
        return repeatedstring;
    } else {
        return repeatedstring = "";
    }
}
console.log(repeatStringNumTimes2("abc", 3));

// ***************************************<5>******************************
function multiplyAll(arr) {
    var product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product = product * arr[i][j];
        }
    }
    return product;
}
console.log(multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7]
]));

//   *******************************<7>***********************************
let x = 9;

function f1(val) {
    val = val + 1;
    return val;
}
console.log(f1(x)); //10 
console.log(x); //9 becuase primitive values coppied by values 


let y = {
    x: 9
};

function f2(val) {
    val.x = val.x + 1;
    return val;
}
console.log(f2(y)); //10 
console.log(y); //10 because objects are coppied by reference.

// *****************************************<1>scope and closure*****************
var addSix = createBase(6);

function createBase(num) {
    return function addSix(added) {
        console.log(num + added);
    }
}
addSix(10); // returns 16
addSix(21); // returns 27

// ****************************** bonus******************************************

let arr = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];
let unique = arr.filter((elem, index) => arr.indexOf(elem) === index);
console.log(unique);
// ******************************** or using function *********************
function removeDuplicateUsingFilter(array) {
    return array.filter((elem, index, self) => index == self.indexOf(elem));
}
console.log(removeDuplicateUsingFilter(arr));
// ******************************** for loop**********************************
function removeDuplicates(array) {
    let unique_array = []
    for (let i = 0; i < array.length; i++) {
        if (unique_array.indexOf(array[i]) == -1) {
            unique_array.push(array[i])
        }
    }
    return unique_array
}

console.log(removeDuplicates(arr));