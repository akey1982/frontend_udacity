const temp = [{degrees:50, isRec:false},{degrees:20, isRec:true},{degrees:30, isRec:true}];

console.log(temp.includes(20));// false 

const result = temp.some(item => item.isRec === true);
const result = temp.every(item => item.isRec === true);


const songs = [
    {song: "Shape of You", timesStreamed: 2.384, wonGrammy: true},
    {song: "One Dance", timesStreamed: 1.791, wonGrammy: false},
    {song: "Rockstar", timesStreamed: 1.781	, wonGrammy: false},
    {song: "Closer", timesStreamed: 1.688, wonGrammy: false},
    {song: "Thinking Out Loud", timesStreamed: 1.461, wonGrammy: true}
]

const hasWonGrammy = songs.some(song => song.wonGrammy);
console.log(hasWonGrammy);

const allMegaHits = songs.every(song => song.timesStreamed > 1.5);
console.log(allMegaHits);
