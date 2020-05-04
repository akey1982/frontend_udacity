//Objects
const persons = {
    Leo:'nice',
    Alex:'nice',
    jungs:'nice',

    printAll(){
        console.log(persons)

    }

}


const user = {

    name:"Hans",
    username:"mueller",

    //nested object 
    unterUser:{

        title:"hansewurst"

    }    


}


const {name} = user

const {title} = user.unterUser


function display(){

console.log(`der name ist ${name}`);
console.log(`der name ist ${title}`);

}
//console.log(persons)
//console.log(persons.printAll())

function deleteProp (){

delete user.name;
delete user.username;
}

display();
// primitive vs objects types

deleteProp();

console.log(user)

/*const num = 12;
const anotherNum = 14;


console.log(num === anotherNum);


const obj = {};
const anotherObj = obj;
anotherObj.a = 1;
anotherObj.b = 2;

console.log('test', obj);
console.log('another obj', anotherObj);



const color = 'green';
const hexCode = '#Test'


const thecolors = {

    yellow_color :'test',



    
    colors[color] = hexCode;
    
    console.log(colors)

}*/



const color = 'black';
const hexCode = '#000';

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode // dynamic way
};


// function getColor(key) {
//   return colors[key];
// }

delete colors.blue;
console.log(colors);
colors.test = "test";
console.log(colors);







