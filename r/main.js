// arr= ["пн ","вт ", "ср", "чт ","пт","сб", "нд"]
// alert(arr[0] + "и " +  arr[4] + " Экзамен")
// arr= ["Женя ","Саша ", "Миша", "Дана","Вова"]
// alert(arr[0] + ", " +  arr[3] + " и " + arr[4] + " Получат подарок")
// alert(arr[1] + "и " +  arr[2] + " не получат подарок")
// obj = {"Zheka":"20000","Dana":"30500","Bogdan":"30000"}
// alert(obj["Bogdan"])
// arr = {
//     "Zheka":["10000","20000","30000"],
//     "Saha":["10000","3542332","235423"]

// }
// alert(arr["Saha"][2])
// arr = {
//     "boy":["Saha","Dima","Roma"],
//     "girl":["Masha","Dasha","Dana"]

// }
// alert(arr["boy"][2] + " " + arr["girl"][0] + " " + arr["boy"][0])
let b =1
arr= [2,3,4,5]
for(a = 0; a<4; a++){
    b = arr[a]*b
}
alert(b)