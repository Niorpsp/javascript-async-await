// Exercise #5
/*
ให้นำ Function getJohnProfile จากโจทย์ Exercise #2 มาเขียนใหม่ด้วยวิธี Async / Await

ให้แสดงผลข้อมูลที่ Reject จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วย console.log()

*/
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};
//                                              //หลักการทำงาน Promise               //หลักการทำงาน Promise Async/Await
//                                           //Promise เป็น resolve() ต้องใช้ .then() // Promise เป็น .then() ต้องใช้ await
//                                          //Promise เป็น reject() ต้องใช้ .catch() // Promise เป็น .catch() ต้องใช้ try...catch
// Start coding here

async function main() {                                   //สร้างฟังก์ชั่น async
  try {
    let profile = await getJohnProfile();                 //รอตัว Promise

    console.log(profile);

  } catch (error) {
    console.log(error);                                   //รับข้อมูลจาก reject()
  }
}
main();                                                   //เรียกใช้งานฟังก์ชั่น บรรทัด 25