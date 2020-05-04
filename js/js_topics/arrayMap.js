const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];









  const result = temperatures.map(item =>{

    item.isRecordTemp = true;

    return item;

  })


  console.log(result);

  console.log(temperatures);


  const temperatures1 = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];


  const newTemps = temperatures1.map(item => item.degrees > 70 ? {...item, isHigh:true}:item);


  //console.log(newTemps)


    
    newTemps.forEach(temperature => {
       if (temperature.isHigh) {
         console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
       }
    })



    const restaurants = [
      { name: 'Cap City Diner', milesAway: 2.2 },
      { name: 'Chop Shop', milesAway: 4.1 },
      { name: 'Northstar Cafe', milesAway: 0.9 },
      { name: 'City Tavern', milesAway: 0.5 },
      { name: 'Shake Shack', milesAway: 5.3 }
    ]
    


const resultFilter = restaurants.filter(item => item.name.startsWith('Cap'))    

console.log(resultFilter);



const resulfind = restaurants.find(restaurant => 
  restaurant.name.toLowerCase().includes('north') && restaurant.milesAway < 2
)



console.log(resulfind);



/*const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }
];

const total = menuItems.reduce((accumulator, menuItem) => {
  console.log(`
    accumulator: ${accumulator},
    menu item price: ${menuItem.price}
  `);
  return accumulator + menuItem.price;  
}, 0);


console.log(total+" total ");*/


const numbers = [1,2,3,10];


const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue,0);

//console.log(sum + "TOTAL");







const cars = [
  { name: "Toyota", isElectric: false, weight: 1320 },
  { name: "Ford", isElectric: false, weight: 1400 },
  { name: "Volkswagen", isElectric: false, weight: 1370 },
  { name: "Honda", isElectric: false, weight: 1375 },
  { name: "Tesla", isElectric: true, weight: 1750 },
  { name: "BMW", isElectric: true, weight: 1350 },  
];


const totalWeight = cars.reduce((accumulator, car) => {
    if (car.isElectric) {
        return accumulator + car.weight;
    } else {
        return accumulator;
    }
}, 0)

console.log(totalWeight);



const numberArr = [1, 2, 3, 4, 5, 6];

const doubledNumbers = numberArr.reduce((acc, num) => {acc.push(num * 2);  return acc;}, []);
console.log('doubled numbers', doubledNumbers);
console.log('numbers', numberArr);

//avoid Mutations use concat or spread !



const lunchMenuIdeas = ['Harvest Salad', 'Southern Fried Chicken'];

const allMenuIdeas = [...lunchMenuIdeas];

allMenuIdeas.push('Club Sandwich');

console.log("NOT ALL "+ lunchMenuIdeas);
console.log("ALL "+ allMenuIdeas);