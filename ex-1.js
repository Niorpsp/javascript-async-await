//Exercise #1
/*
กำหนดให้ getJohnProfile เป็น Function ที่ดึงข้อมูลมาจาก Server ซึ่งมีรายละเอียดดังนี้
//                                                                                          //หลักการทำงาน Promise
Return ผลลัพธ์ออกมาเป็น Promise Function                                                                     
//                                                                                          //Promise เป็น resolve() ต้องใช้ .then()
Function getJohnProfile ดึงข้อมูลจาก Server สำเร็จเสมอ                                          //Promise เป็น reject() ต้องใช้ .catch()

ในที่นี้เราไม่ต้องไปสนใจโค้ดข้างใน Function getJohnProfile ให้นึกซะว่า Function นี้มี Built-in fetch อยู่ข้างใน

ให้แสดงผลข้อมูลที่ Resolve จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วยวิธี Promise Property ปกติ ด้วย console.log()

เราจะเห็นผลลัพธ์ของโปรแกรมออกมาทางหน้าจอแบบนี้
*/

//                                                        //ช่วง เขียนให้ตัวเองอ่านเพื่อทำความเข้าใจ                 
//                                                        //#เข้าใจยากมากกกกต้องเขียนละเอียดหน่อย
//                                                                                                                                       
let getJohnProfile = () => {                              //ฟังก์ชั่นนี้คือการดึงข้อมูลจากโจทย์                    
  return new Promise(function (resolve) {                 //สร้าง รีเทรินผลลัพธ์ให้เป็นตัว ฟังก์ชั่นชื่อ Promise            
    setTimeout(                                           //ตั้งเวลาให้ Server ตอบกลับ 1 วินาที
      () =>                                               //เมื่อครบเวลา ให้ส่งข้อมูลกลับมา
        resolve({                                         //วิธีจำกันลืมว่ามันทำงานยังไง
          name: "John",                                   //  Function ปกติ        getJohnProfile()
          age: 20,                                        //      ↓                        ↓
          hobbies: ["Coding", "Football"],                //  return ค่า                  Promise
        }),                                               //      ↓                        ↓             
      1000                                                //   เก็บใส่ตัวแปร              resolve({
    );                                                    //      ↓                        ↓   
  });                                                     //   Promise             .then(function(result){
};                                                        //      ↓                        ↓
// Start coding here                                      // return Promise             result
//                                                        //      ↓
//                                                        //   .then() รับค่า

getJohnProfile()                                          //เรียกฟังก์ชั่นเพื่อดึงข้อมูลจาก Server
//                                                        //ปล.การทำงานของ .then() คือ ถ้าได้ข้อมูลแล้ว ค่อยทำสิ่งนี้ต่อไป
  .then(function (result){                                //.then() จะทำงานตอนตัว Promise สำเร็จ (resolve)
console.log(result);                                      //แสดงผลลัพธ์ resolve ในบรรทัดที่ 22 ถึง 25 แต่ถูกส่งมาในชื่อของ result
});