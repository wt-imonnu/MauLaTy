let mybutton = document.getElementById("myBtn");
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //ให้ปุ่มปรากดหนังจากเลื่อนเม้า >= 0 ก้คืออยุ่ที่หน้าจอตลอด สามารถเปลี่ยนเลขให้มันปรากฎทีหลังได้
    if (document.body.scrollTop >=0 || document.documentElement.scrollTop >=0){
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
  }
}

// พอคลิกละจะกลับไปข้งบน
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}