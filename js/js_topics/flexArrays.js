const todos = [];


const todo ={

text: "Putze",
complete: false


}

const todo2 = {


    text: "lachen",
    complete: false



}

todos.push(todo, todo2);

console.log(todos)


// delete the last item 
todos.pop();


console.log(todos);




const breakfastMenuIdeas = ["Buckwheat Pancakes"];
const dinnerMenuIdeas = ["Glazed Salmon", "Meatloaf", "American Cheeseburger"];

const allMenuIdeas = ["Harvest Salad", "Southern Fried Chicken"];



const ind = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad' );




const saladIndex = allMenuIdeas.findIndex(idea => idea === 'Harvest Salad');

const meatloafIndex = allMenuIdeas.findIndex(idea => idea === 'Meatloaf');

const finalMenuIdeas = [
  ...allMenuIdeas.slice(0, meatloafIndex),
  ...allMenuIdeas.slice(meatloafIndex + 1)
]
// const finalMenuIdeas = [
//   ...allMenuIdeas.slice(0, saladIndex),
//   "Garden Salad",
//   ...allMenuIdeas.slice(saladIndex + 1)
// ];

console.log(ind+"++++++");
console.log(finalMenuIdeas+" <<<<<");

const finalMenuItems = [
    "American Cheeseburger",
    "Southern Fried Chicken",
    "Glazed Salmon"
  ];
  
  const [winner, ...losers] = finalMenuItems;
  
  console.log({ winner, losers });
  // let [first, second] = finalMenuItems;
  // [second, first] = [first, second];
  // let first = finalMenuItems[0];
  // let second = finalMenuItems[1];
  // let third = finalMenuItems[2];
  
  // console.log(first, second, third);