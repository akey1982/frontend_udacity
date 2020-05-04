const user = {
    name: "Reed",
    username: "Reedbarger",
    email: "reed@gmail.com",
    details: {
      title: "Programmer"  
    }  
  };
  
  // const { title } = user.details
  // const { name, details: { title} } = user;
  
  function displayUserBio({ name, details: { title} }) {
    console.log(`${name} is a ${title}`); 
  }
  
  displayUserBio(user);





  // Challenge



const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}



const {pancakes, riceBowls } = recommendations;

const { music:{ traditional, jazz}} = recommendations;



console.log(`${pancakes} and ${riceBowls} `);




function displaySome( {music:{traditional,jazz}}){

console.log(`${traditional} and ${jazz}`);


}


displaySome(recommendations);