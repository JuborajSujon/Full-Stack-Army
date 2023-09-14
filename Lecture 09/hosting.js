var a = 100
// newPrint(a)

print(10)

var newPrint = print
newPrint(45)

function print (a){
    console.log(a)
}

print(a)

//Creational phase
//a = undifined
//newPrint = undefined
//print = ref

//Executional phase
//a = 100;
//10
//newPrint = ref
//45
//100
