function cutAndReverse(str){
let first = str.slice(0, str.length/2).split(``).reverse();
let second = str.slice(str.length/2).split(``).reverse();
   
    console.log(`${first.join(``)}\n${second.join(``)}`);
    
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');
