let Vishwa = {
    id:002,
    age:21,
    height:6.0,
    outfit:{
        Shirt:'Blue',
        Pant:'Grey'
    }
}, bala = {
    id:001,
    age:21,
    height:5.9,
    outfit:{
        Shirt:'Grey',
        Pant:'Black',
        Vishwa:Vishwa.outfit
    }
},add={};

console.log("Vishwa:",Vishwa);
console.log("bala:",bala);
console.log(typeof bala.id);

add.id =Vishwa.id + bala.id;
console.log(add);
result = typeof add.id == typeof Vishwa.id ? 'Yes':'NO';
console.log(result);
console.log(Vishwa.outfit.Pant);

if (typeof bala.id === 'string'){
    delete bala.id;
}else{
    console.log('HMmmmmmmmmmm!!!!!!!!!!!');
}

console.log("bala:",bala);

for(let key in Vishwa){
    console.log(key,':', Vishwa[key]);
}

for(let key in Vishwa.outfit){
    console.log(key, ':', Vishwa.outfit[key]);
}