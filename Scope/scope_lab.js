var globalVar = "I'm a global variable";
let globallet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let"
    const blockConst = "I'm a block-scoped const";
}

//Global Scope
console.log(globalVar);
console.log(globallet);
console.log(globalConst);

//Block Scope
// console.log(blockVar);
// console.log(blockLet);
// console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
    // console.log(functionVar); // Throws ReferenceError
    // console.log(functionLet); // Throws ReferenceError
    // console.log(functionConst); // Throws ReferenceError

    {
        var a = 0;
        let b = 1;
        const c = 2;

        a = 3;
        b = 4;
        // c = 5; // Cant reassign
    }

    a = 6;
    b = 7;
    c = 8;