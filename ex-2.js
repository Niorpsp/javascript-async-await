//Exercise #2
/*
สืบเนื่องจาก Exercise #1 ในกรณีนี้ เราจะเขียน Function ใหม่ ซึ่งมีรายละเอียดดังนี้

Return ผลลัพธ์ออกมาเป็น Promise Function                                                                    //หลักการทำงาน Promise
//                                                                                                        //Promise เป็น resolve() ต้องใช้ .then()
Function getJohnProfile ดึงข้อมูลจาก Server ไม่สำเร็จเสมอ                                                      //Promise เป็น reject() ต้องใช้ .catch()

ในที่นี้เราไม่ต้องไปสนใจโค้ดข้างใน Function getJohnProfile ให้นึกซะว่า Function นี้มี Built-in fetch อยู่ข้างใน

ให้แสดงผลข้อมูลที่ Reject จาก Promise ที่ Return มาจาก Function getJohnProfile ด้วยวิธี Promise Property ปกติ ด้วย console.log()
*/

let getJohnProfile = () => {                                               //ฟังก์ชั่นนี้คือการดึงข้อมูลจากโจทย์ 
  return new Promise(function (_, reject) {                                //สร้าง รีเทรินผลลัพธ์ให้เป็นตัว ฟังก์ชั่นชื่อ Promise
    setTimeout(                                                            //ตั้งเวลาให้ Server ตอบกลับ 2 วินาที
      () =>                                                                //เมื่อครบเวลา ให้ส่งข้อมูลกลับมา
        reject({
          errorCode: 500,                                                 //ส่งกลับมาเป็น Error
          message: "👿 Failed to request data from server",                         //วิธีจำกันลืมว่ามันทำงานยังไง
        }),                                                               //    getJohnProfile()              บรรทัด 14
      2000                                                                //          ↓
    );                                                                    //        Promise                   บรรทัด 15
  });                                                                     //          ↓
};                                                                        //  reject({  errorCode: 500  })    บรรทัด 18-21
//                                                                        //          ↓
//                                                                        //  .catch(function(error){         บรรทัด 33
//                                                                        //          ↓
//                                                                        //         error  })                บรรทัด 34
// Start coding here 
getJohnProfile()                                                          //เรียกฟังก์ชั่นเพื่อดึงข้อมูลจาก Server

    .catch(function (error){                                              // .catch() จะทำงานเมื่อ Promise ไม่สำเร็จ (reject)
      console.log(error);                                                   
    });