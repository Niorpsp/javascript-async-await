//Exercise #3
/*
ให้เรียงลำดับการทำงานของ Asynchronous Operation จาก Function สองอันนี้คือ getJohnProfile และ getJohnOrders โดยมีรายละเอียดดังนี้

เขียนโค้ดเพื่อเรียงลำดับการทำงานด้วยวิธี Promise Property ปกติ

กำหนดให้ลำดับการทำงานต้องเป็นดังนี้

getJohnProfile จะต้องถูก Execute ก่อน
ให้แสดงผลตัวข้อมูลที่ได้จาก Function getJohnProfile ด้วย console.log()
getJohnOrders จะต้องถูก Execute ถัดมา
ให้แสดงผลตัวข้อมูลที่ได้จาก Function getJohnOrders ด้วย console.log()

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
  });                                                                             //หลักการทำงาน Promise
};                                                                                //Promise เป็น resolve() ต้องใช้ .then()
//                                                                                //Promise เป็น reject() ต้องใช้ .catch()                                        
// Start coding here

getJohnProfile()                                                                  // สร้างฟังก์ชั่นเพื่อดึงข้อมูล Profile ก่อน
  .then(function (profile) {                                                      // เมื่อดึง Profile สำเร็จ

    console.log(profile);                                                         // แสดงข้อมูล Profile
    return getJohnOrders();                                                       // หลังจากแสดงผลเสร็จ
  })                                                                              // เริ่มดึงข้อมูล Orders ต่อ           

  .then(function (orders) {                                                       // รับข้อมูล Orders ที่ส่งกลับมาจาก getJohnOrders()
    console.log(orders);                                                          // แสดงข้อมูล Orders
  });