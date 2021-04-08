
var family = ["Liyanah", "Nusrat" , "Javeria"];
var familyimages = 
[ "https://banner2.cleanpng.com/20200121/foq/transparent-cartoon-cheek-animation-toddler-child-5e273ecbbafc00.5564830415796302837659.jpg" 
, "https://img.lovepik.com/element/40121/0007.png_860.png"
, "https://www.pngitem.com/pimgs/m/120-1203252_clip-art-mom-png-for-mother-cartoon-png.png"
];
var i = 0;

 function  nextslide() {
 i++;
 if (i > 3 ){
     i = 0;
 }
 document.getElementById("family_book").src=familyimages[i];
 document.getElementById("display").innerHTML=family[i];

console.log(familyimages[i]);
}




