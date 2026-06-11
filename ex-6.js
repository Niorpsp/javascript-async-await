// Exercise #6
/*
จากโจทย์ Exercise #3 ให้เรียงลำดับการทำงานของ Asynchronous Operation จาก Function ในโจทย์ข้างต้น ด้วยวิธี Async / Await

กำหนดให้ลำดับการทำงานต้องเป็นดังนี้

getJohnProfile จะต้องถูก Execute ก่อน
ให้ Log ตัวข้อมูลที่ได้จาก Function getJohnProfile
getJohnOrders จะต้องถูก Execute ถัดมา
ให้ Log ตัวข้อมูลที่ได้จาก Function getJohnOrders

*/
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};
//                                       //หลักการทำงาน Promise                 //หลักการทำงาน Promise Async/Await                                      
//                                       //Promise เป็น resolve() ต้องใช้ .then() // Promise เป็น .then() ต้องใช้ await
//                                       //Promise เป็น reject() ต้องใช้ .catch() // Promise เป็น .catch() ต้องใช้ try...catch
// Start coding here

async function main() {                                          //สร้างฟังก์ชั่น async
  let profile = await getJohnProfile();                          //รอตัว Profile 
  console.log(profile);                                          //แสดงผล Profile

  let orders = await getJohnOrders();                            //รอ Orders ต่อ
  console.log(orders);                                           //แสดง Orders
}
main();                                                         //เรียกใช้งานฟังก์ชั่น บรรทัด 50