const notifications= [
  { message:"You have a new message", delay:1000 },
  { message:"Your download is ready", delay:3000 },
  { message:"Battery is low", delay:2000 },
  { message:"Friend is online", delay:4000 }
];

notifications.forEach((notify,i)=>{
  setTimeout(()=>{
    console.log(notify.message)
  }, notify.delay)
})



const details = (orders) => {
    const unique = [...new Set(orders.map(order => order.product))]
    
    return{
        uniqueProducts:unique,
        firstProduct:unique[0],
        count:unique.length
    }
}

const orders= [
  { customer:"Ali", product:"Laptop" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Laptop" },
  { customer:"John", product:"Keyboard" },
  { customer:"Sara", product:"Mouse" },
  { customer:"Ali", product:"Monitor" }
];

console.log(details(orders))