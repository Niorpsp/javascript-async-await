// Exercise #4
/*
ให้นำ Function getJohnProfile จากโจทย์ Exercise #1 มาเขียนใหม่ด้วยวิธี Async / Await

ให้แสดงผลข้อมูลที่ Resolve จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วย console.log()

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
};                                                //หลักการทำงาน Promise                        //หลักการทำงาน Promise Async/Await
// Start coding here                             //Promise เป็น resolve() ต้องใช้ .then() // Promise เป็น .then() ต้องใช้ await
//                                               //Promise เป็น reject() ต้องใช้ .catch() // Promise เป็น .catch() ต้องใช้ try...catch
async function main() {                                       //สร้างฟังก์ชั่น async

  let profile = await getJohnProfile();                       //รอตัว Promise
console.log(profile);                                         //แสดงข้อมูล resolve() 
}
main();                                                       //เรียกใช้งานฟังก์ชั่น บรรทัด 23