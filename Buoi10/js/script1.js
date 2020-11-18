var n,phantu;
var arr = new Array;
var new_arr = new Array;
var soLonNhat, soBeNhat;
var soPhanTuLe,soPhanTuChan, soPhanTuAm, soSoNguyenTo; 
var tong=0, tongViTriChan=0;
var kiemTra = Number;
var tongSoNguyenTo=0, tongSoChinhPhuong=0;


do {
   n = parseInt(prompt("Nhập số lớn hơn 0 và nhỏ hơn 100"))
} while (n<=0 || n>=100)

//Bai 2
for(var i=0; i<n; i++) {
    phantu = parseInt(prompt("Nhập số vào mảng"))
    arr.push(phantu);
}
document.write('2. Mảng vừa nhập là : ' + arr + '</br></br>');

//Bai3

for(var i=0; i<arr.length; i++) {
    tong = tong + arr[i];
    if(Math.abs(arr[i]) % 2 === 0) {
        new_arr.push(arr[i]);
    }
}
soPhanTuChan = new_arr.length;
if (soPhanTuChan===0) {
    document.write('3. Mảng vừa nhập không có số chẵn </br></br>') 
} else {
    document.write('3. Các phần tử chẵn theo thứ tự nhập là: '+ new_arr +'</br></br>');
}


new_arr=[];
for(var i=0; i<arr.length; i++) {
    if(Math.abs(arr[i]) % 2 === 1) {
        new_arr.push(arr[i]);
    }
}
soPhanTuLe = new_arr.length;
if (soPhanTuLe===0) {
    document.write('3. Mảng vừa nhập không có số lẻ </br></br>') 
} else {
    document.write('3. Các phần tử lẻ ngược thứ tự nhập là: '+ new_arr.reverse() +'</br></br>');
}


new_arr=[];
for(var i=0; i<arr.length; i++) {
    if(i % 2 === 0) {
        new_arr.push(arr[i]);
        tongViTriChan = tongViTriChan + arr[i];
    }
}
document.write('3. Các phần tử ở vị trí chẵn ngược thứ tự nhập là: '+ new_arr.reverse() +'</br></br>');

new_arr=[];
for(var i=0; i<arr.length; i++) {
    if(i % 2 === 1) {
        new_arr.push(arr[i]);
    }
}
document.write('3. Các phần tử ở vị trí lẻ theo thứ tự nhập là: '+ new_arr +'</br></br>');

new_arr=[];

for(var i=0; i<arr.length; i++) {
    if(arr[i] < 0) {
        new_arr.push(arr[i]);
    }
}
soPhanTuAm=new_arr.length;

if (soPhanTuAm===0) {
    document.write('3. Mảng vừa nhập không có số âm </br></br>') 
} else {
    document.write('3. Các phần tử âm theo thứ tự nhập là: '+ new_arr +'</br></br>');
}

new_arr=[];
for(var i=0; i<arr.length; i++) {
    if(arr[i] >= 0) {
        new_arr.push(arr[i]);
    }
}
if (new_arr.length===0) {
    document.write('3. Mảng vừa nhập không có số số dương </br></br>') 
} else {
    document.write('3. Các phần tử dương ngược thứ tự nhập là: '+ new_arr.reverse() +'</br></br>');
}

//Bai4
soLonNhat = arr[0]
for(var i=0; i<arr.length-1; i++) {
    if(arr[i] < arr[i+1]) {
        soLonNhat = arr[i+1];
    }
}
document.write('4. Số lớn nhất là: '+ soLonNhat +'</br></br>');

//Bai 5
soBeNhat = arr[0]
for(var i=0; i<arr.length-1; i++) {
    if(arr[i] > arr[i+1]) {
        soBeNhat = arr[i+1];
    }
}
document.write('5. Số bé nhất là: '+ soBeNhat +'</br></br>');

//Bai 6.7
if (soPhanTuLe===0) {
    document.write('6. Mảng vừa nhập không có số lẻ </br></br>') 
} else {
    document.write('6. Số phần tử lẻ trong mảng là: '+ soPhanTuLe +'</br></br>');
}

if (soPhanTuAm===0) {
    document.write('7. Mảng vừa nhập không có số âm </br></br>') 
} else {
    document.write('7. Số phần tử âm trong mảng là: '+ soPhanTuAm +'</br></br>');
}

//Bai 8.9
document.write('8. Tổng số phần tử của mảng là: '+ tong +'</br></br>');
document.write('9. Tổng các phần tử ở vị trí chẵn: '+ tongViTriChan +'</br></br>');

//Bai 10,11,12

function laSoNguyenTo(kiemTra) {
    if (kiemTra < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(kiemTra); i++)
    {
        if (kiemTra % i == 0)
        {
            return false;
        }
    }
    return true;
}

new_arr = []
for(var i=0; i<arr.length; i++) {
    if(laSoNguyenTo(arr[i])===true) {
        new_arr.push(arr[i]);
        tongSoNguyenTo = tongSoNguyenTo + arr[i]
    }
}

soSoNguyenTo = new_arr.length;
if(soSoNguyenTo===0) {
    document.write('10. Mảng vừa nhập không có số nguyên tố </br></br>') 
    document.write('11. Mảng vừa nhập không có số nguyên tố </br></br>') 
    document.write('12. Mảng vừa nhập không có số nguyên tố </br></br>')
} else {
    document.write('10. Số nguyên tố trong mảng là: '+ new_arr +'</br></br>');
    document.write('11. Số số nguyên tố trong mảng là: '+ soSoNguyenTo +'</br></br>');
    document.write('12. Tổng số nguyên tố trong mảng là: '+ tongSoNguyenTo +'</br></br>');
}

//Bai 13,14
new_arr = []
for(var i=0; i<arr.length; i++) {
    var sqr = Math.sqrt(arr[i])
    if(sqr*sqr===arr[i]) {
        new_arr.push(arr[i]);
        tongSoChinhPhuong = tongSoChinhPhuong + arr[i]
    }
}

if(new_arr.length===0) {
    document.write('13. Mảng vừa nhập không có số chính phương </br></br>') 
    document.write('14. Mảng vừa nhập không có số chính phương </br></br>') 
} else {
    document.write('13. Số chính phương trong mảng là: '+ new_arr +'</br></br>');
    document.write('14. Tổng số chính phương trong mảng là: '+ tongSoChinhPhuong +'</br></br>');
}

//Bai15
function laSoHoanThien(kiemTra) {
    var tongUoc = 0;
    for(var i=1; i<=kiemTra/2; i++){
        if(n % i===0) 
        tongUoc = tongUoc + i;
    }
    if(tongUoc==kiemTra) {
        return true;
    }
    return false;
}

new_arr = []
for(var i=0; i<arr.length; i++) {
    if(laSoHoanThien(arr[i])===true) {
        new_arr.push(arr[i]);
    }
}
if(new_arr.length===0) {
    document.write('15. Mảng vừa nhập không có số hoàn thiện </br></br>') 
} else {
    document.write('15. Số hoàn thiện trong mảng là: '+ new_arr +'</br></br>');
}