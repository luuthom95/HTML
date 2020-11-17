//way 1
var arr = [1,2,3,4];

// //way 2
// var arr2 = new Array;
document.write(arr + '</br>');
// console.log(arr.join('/'));

// for(var i = 0; i < arr.length; i++) {
//     document.write('Number for: ' + arr[i]);
// }

// var i=0;
// while(i<arr.length) {
//     document.write('Number for: ' + arr[i]);
//     i++;
// }

//Day 1 phan tu vao cuoi mang 
//arr.push(5)

//Xoa 1 phan tu cuoi mang 
//arr.pop()

//Xoa 1 phan tu dau tien cua mang
//arr.shift()

//Them 1 phan tu len dau, sau do day cac phan tu xuong 1 bac
// console.log(arr)
// arr.unshift(9)

//Xoa phan tu trong mang theo vi tri bat dau toi ket thuc 
//arr.splice(1,1)

//sap xep theo alphabet ( chu cai dac biet, so,ABC, abc)
// arr=[3,4,2,5,6,2,10,1,'a','c','B']
// arr.sort();

//Dao nguoc vi tri trong mang theo
//arr.reverse()

//Dung de noi hai mang voi nhau thanh mot
// var arr2=['Thom', 1, 3]
// var new_arr=arr.concat(arr2)
// console.log(arr)
// document.write(new_arr);

//lay phan tu arr from, arr end -1
var new_arr=arr.slice(1,3)

console.log(arr)
document.write(new_arr);

