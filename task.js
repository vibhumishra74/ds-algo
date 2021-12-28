var inp = [
    {name: 'firstname', value: 'johndoe'},
    {name: 'age', value: '28'},
    {name: 'language', value: 'English'},
    {name: 'language', value: 'Tamil'},
    {name: 'language', value: 'Hindi'},
];

var obj = {
  firstname : '',
  age : '',
  language : []
};

inp.forEach((el) => {
  if(el.name == 'firstname'){
    obj[el.name] = el.value;
  }
  
   if(el.name == 'age'){
    obj[el.name] = el.value;
  }
  
   if(el.name == 'language'){
    obj[el.name].push(el.value); 
  }
})

console.log(obj);