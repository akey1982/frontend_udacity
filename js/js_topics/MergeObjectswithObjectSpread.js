const user = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: ""  
  };
  
  const newUser = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };
  


  // {} merged object and create new object !
  //console.log(Object.assign({}, user, newUser));






  const userTest1 = {
    name: "",
    username: "",
    phoneNumber: "",
    email: "",
    password: "",
    verified: true 
  };
  
  const newUserTest1 = {
    username: "ReedBarger",
    email: "reed@gmail.com",
    password: "mypassword"  
  };
  
  const createdUser = { userTest1, newUserTest1, verified: false , };
  console.log(createdUser);