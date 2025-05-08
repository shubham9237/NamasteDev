const users = [
    {name:"Shubham", age:28},
    {name:"Akshay", age :30},
    {name:"Dikshit", age :50},
    {name:"Jhon", age :45},
]

function sortingByAge(){
    const data = users.sort((a, b) => a.age - b.age)
    return data;
}

module.exports = sortingByAge