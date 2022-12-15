let map = new Map();

map.set('Vishwa','Java');
map.set('Nithish','JavaScript');
map.set('Praveen','Python');
map.set('Vishwa','Golang');


console.log(map.get('Praveen'));

console.log("Using forof loop");
for(let [key,value] of map){
    console.log(key,":",value);
}

console.log("Using Foreach loop");
map.forEach((value,key) => {
    console.log(value,":",key);
})