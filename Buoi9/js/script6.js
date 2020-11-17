var bien1= parseInt(prompt("Nhap so thu 1: "));
var bien2= parseInt(prompt("Nhap so thu 2: "));
var bien3= parseInt(prompt("Nhap so thu 3: "));
var bien4= parseInt(prompt("Nhap so thu 4: "));
var bien5= parseInt(prompt("Nhap so thu 5: "));

document.write("5 so da nhap la: "+bien1+', '+bien2+', '+bien3+', '+bien4+', '+bien5+'</br>')

var soLN=bien1, soBN=bien1;
if(bien1<bien2){
    soLN=bien2;
} else {
    soBN=bien2;
}

if(soLN<bien3) {
    soLN=bien3;
}
   
if(soLN<bien4) {
    soLN=bien4;
}

if(soLN<bien5) {
    soLN=bien5;
}
      
document.write('So lon nhat la: '+ soLN+'</br>');

if(soBN>bien3) {
    soBN=bien3;
}
   
if(soBN>bien4) {
    soBN=bien4;
}

if(soBN>bien5) {
    soBN=bien5;
}
      
document.write('So be nhat la: '+ soBN+'</br>');



