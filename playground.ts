
// TS reccomends to use interface 
// Describe data struture in more natural way
// Shipments, Orders
/*interface Person = {
    name: string,
    age: number
}*/

type Person = {
    name: string,
    age: number
}


export default function play(){
    const name = "Brad"
    const age = 40
    const person = {
        name: "john",
        age: 35
    }
    function logPersonInfo(personName: string, personAge: number){
        const info = `Name: ${personName}, Age: ${personAge}`

        console.log(info)
        return info
    }
    function logPersonInfo2(person: Person){
        const info = `Name: ${person.name}, Age: ${person.age}`

        console.log(info)
        return info
    }

    logPersonInfo(name, age)
}