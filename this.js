let laptop={
    brand:'Asu',
    color:'White',
    cpu:'Ryzen',
    ram:'8 gb',
    ssd:'500 gb',
    os:'Windows 10 Home',
    config: function(){
        if(this.brand != 'Asus'){
            this.brand='Asus'
        }else{
            console.log("Yep that's alright");
        }
        }
    }

console.log(laptop);
laptop.config()
console.log(laptop);

