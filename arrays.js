let selectedColors = ['blue', 'black'];
//console.log(selectedColors)
//console.log(selectedColors[0])

selectedColors[2] = 'Green'
//console.log(selectedColors)
console.log(selectedColors.length)


function pushing(n,arr) {
    for (let i = 0; i < n; i++) {
        arr.push(i);
        
    }
}



let cards = [];

console.log(cards);

cards[0] = '7s';
cards[1] = 'Qc';
cards[2] = '10h';
cards[3] = '5s';
console.log(cards);
for(let i=0;i<=10;i++){
    cards[i]=i;
}

console.log(cards);

cards[cards.length]='hey'
console.log(cards);

let data = ['Vishwa',5,{rom:'5gb'},
function(){console.log("Hello, World!");}];

console.log(data);
console.log("Function inside array");

data[3]();

console.log("Push....");
for(let i=0;i<9;i++){
    data.push(i);
}

console.log(data);

console.log("Pop....");
for(let i=0;i<9;i++){
    data.pop(i);
}


console.log(data);
console.log(data.length);

if(data.length<9){
    pushing(5,data);
}else{
    data.shift();
}

console.log(data);

let [a,b,...c] = cards;

console.log(a,b,c);

let v = "Hello I'm under the water please help me".split(' ');

let [x,y,...z]= v;

console.log(x,y,z);
