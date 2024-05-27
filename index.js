const getName = name => {
  return name ?? "N/A"
};

console.log(getName("Ahmed"));
console.log(getName(undefined));
console.log(getName(null));

const getPlaceholder = () => {
  console.log("aaaaaaaaaaaaa");
  return "N/AZ";
};

const sayHello = name => {
  return `Hello ${name ?? getPlaceholder()}`;
};

console.log(sayHello("AHMEDMO"));
console.log(sayHello(undefined));


const getAge = user => {
  return user.age ?? "unknown"
};

console.log(getAge({age: 25}));
console.log(getAge({}));

const getWelcome = user => {
  return `Welcom ${user.fullName ?? "User"}`
};
console.log(getWelcome({fullName: "Ahmed Zakan"})); 
console.log(getWelcome({})); 




const user55 = {
  id: 1,
  name: "aj",
  age: null,
};

console.log(user55.id);
console.log(user55.age);
console.log(user55.frstName);


const getFullName = user => {
  return user.info?.name ?? "NO";
}

console.log(getFullName({info: {name: "Sam"}}));
console.log(getFullName({info: null})); 
console.log(getFullName({})); 

const getPaymen = user => {
  return user.payment?.details?.value ?? 150;
};

console.log(getPaymen({id: 1, name: "Alex"})); 
console.log(getPaymen({id: 2, name: "Sam", payment: {details: {value: 59}}})); 


const nameFull = user => {
  return user.info?.name?.toLowerCase() ?? "user";
};

console.log(nameFull({info: {name: "AHMED"}})); // "A"
console.log(nameFull({info: null})); // "user"
console.log(nameFull({})); // "user"



