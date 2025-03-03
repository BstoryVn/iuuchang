// CHỈNH NGÀY BẮT ĐẦU HẸN HÒ
$(function () {
    var ngayhenho = "13-1-2025"; // Định dạng DD-MM-YYYY
    var e = ngayhenho.split("-");
    
    // Chuyển đổi thành định dạng YYYY-MM-DD để đảm bảo trình duyệt hiểu đúng
    var ngayBatDau = new Date(`${e[2]}-${e[1].padStart(2, '0')}-${e[0].padStart(2, '0')}T00:00:00`);
    
    if (isNaN(ngayBatDau)) {
        console.error("Lỗi khi tạo ngày, vui lòng kiểm tra lại định dạng!");
        return;
    }

    setInterval(() => {
        let hienTai = new Date();
        let khoangThoiGian = hienTai - ngayBatDau;

        let soNgay = Math.floor(khoangThoiGian / 86400000);
        let soGio = Math.floor((khoangThoiGian % 86400000) / 3600000);
        let soPhut = Math.floor((khoangThoiGian % 3600000) / 60000);
        let soGiay = Math.floor((khoangThoiGian % 60000) / 1000);

        $("#wus-ngay").text(soNgay);
        $("#wus-gio").text(soGio);
        $("#wus-phut").text(soPhut);
        $("#wus-giay").text(soGiay);
    }, 1000);
});

// TRÁI TIM RƠI
$(function() {
    setInterval(function () {
        const heart=$('<div>').addClass('heart-fall');
        heart.css({
            'left': Math.random() * 100 + 'vw',
            'animation-duration': Math.random() * 2 + 3 + 's'
        });
        heart.text('💗');
        $('body').append(heart);
        setTimeout(function () {
            heart.remove();
        }, 5000);
    }, 300);
});
// RANDOM BACKGROUND
$(function() {
    const backgrounds=['./public/bg.jpg', './public/src/img/bg2.jpg'];
    function RandomBackground() {
        $('.bg-img').css('background-image', 'url(' + backgrounds[Math.floor(Math.random() * backgrounds.length)] + ')');
    }
    RandomBackground();
    setInterval(function () {
        RandomBackground();
    }, 999999);
});
// HIỆU ỨNG CLICK
var a_idx=0;
jQuery(document).ready(function ($) {
    $("body").click(function (e) {
      var a=new Array("🦊", "🐸", "🍁");
      var $i=$("<span/>").text(a[a_idx]);
      a_idx=(a_idx + 1) % a.length;
      var x=e.pageX, y=e.pageY;
      $i.css({
        "z-index": 999,
        "top": y - 20,
        "left": x,
        "cursor": "default",
        "position": "absolute",
        "font-weight": "bold",
        "color": rand_color()
      });
      function rand_color() {
        return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
      }
      $("body").append($i);
      $i.animate({
        "top": y - 180,
        "opacity": 0
      }, 1500, function () {
        $i.remove();
      });
    });
});
// HIỂN THỊ THÔNG BÁO POPUP
$(function() {
    // var blur=$("#blur");
    $('.popup_notify_out').addClass('display-block');
    $('.close-popup').click(function () {
      $('.popup_notify_out').fadeOut();
      wussunplay();
      // blur.css('display', 'none');
    });
    $('.popup_notify_out.display-block').fadeIn(function () {
      //   blur.css('display', 'block');
      // $('body').addClass('blur');
    });
  });  
// NHẠC
const Wussun_Music=["https://files.catbox.moe/ikq99d.m4a",];let index=Math.floor(Math.random()*Wussun_Music.length);const audio=new Audio(Wussun_Music[index]);function wussunplay(){audio.play()}document.addEventListener("click",wussunplay()),audio.addEventListener("ended",function(){index=(index+1)%Wussun_Music.length,audio.src=Wussun_Music[index],audio.play()});
console.log("%c LoveDayWs V2 | Powered by WusTeam.Com", "color:#fff;background:linear-gradient(270deg,#986fee,#8695e6,#68b7dd,#18d7d3);padding:8px 15px;border-radius:15px");
console.log("%c ZALO | 0968091844", "color:#fff;background:#000;padding:8px 15px;border-radius:15px");
