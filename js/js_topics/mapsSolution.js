
const favouritePlace = {
    music: "jazz",
    name: "Paris House"
};

const favouritePlaceMap = new Map([
    ['music', 'jazz'],
    ['name', 'Paris House'],
    ['visited', true],
    ['averageBill', 17.4]
]);

/*console.log(favouritePlaceMap.get('averageBill'));
console.log(favouritePlaceMap.get('music'));*/





favouritePlaceMap.forEach((element => console.log(element)))