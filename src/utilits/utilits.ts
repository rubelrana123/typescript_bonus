//pick
interface Person {
    name : string;
    email : string;
    contactInfo : string
}

// type Email = Pick<Person,"email">
type Email = Pick<Person,"email" | "contactInfo">;

//omit 

type Name = Omit<Person, "email">

//partial and require
type optional = Partial<Person>
type optiorequirednal = Required<Person>

//readonly 

const person : Readonly<Person> = {
    name :"Rube",
    email  : "difd",
    contactInfo : "554748"

}
// person.name = "farhat"
//record

// type myObj = {
//     a :string;
//     b :string
// }
//usoing index singuture

// type myObj = {
//     // [key : string] : string
//     [key : 'a' | 'b'] : string
// }

// recoerd
// type myObj =  Record<string, string> 
type myObj =  Record<'a' | 'b', string>
const obj : myObj = {
    a : '1',
    b : '2',

}