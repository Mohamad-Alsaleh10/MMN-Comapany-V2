document.addEventListener("DOMContentLoaded", function() {
    // انتظر حتى يتم تحميل الصفحة بالكامل
    var elementsToChange = document.getElementsByClassName("circle-box-icon");
    
    for (var i = 0; i < elementsToChange.length; i++) {
        setTimeout(function(index) {
            // استخدام setTimeout لتأخير التغيير
            elementsToChange[index].style.top = "-50px"; // تغيير الخاصية top لكل عنصر
        }, i * 500, i); // تأخير كل تغيير بمقدار 1000 مللي ثانية (1 ثانية)
    }
});




// scroll 
window.onscroll = function() {
    // احصل على العناصر التي تحتاج إلى تغيير العرض لها
    var boxes = document.querySelectorAll('.contact .box-ratio');
    var conatctContainer = document.querySelector('.contact-container');
    var conatct = document.querySelector('.contact');

    // احصل على موقع التمرير الرأسي (vertical scroll position)
    var scrollY = window.scrollY ;

    // تحديد عتبة (threshold) لتنفيذ الإجراءات
    var threshold = 20; // تستطيع تعديل هذا الرقم حسب احتياجاتك

    if (scrollY > threshold) {
        // إخفاء العناصر في "boxes"
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.display = 'none';
        }

        conatct.style.height='800px';

        // تغيير خاصية "top" لـ "contactcontainer"
        conatctContainer.style.top = '-750px'; // يمكنك تعديل القيمة حسب احتياجاتك
    } else {
        // إظهار العناصر في "boxes"
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].style.display = 'block';
        }

        // إعادة خاصية "top" لـ "contactcontainer" إلى القيمة الافتراضية
        conatctContainer.style.top = '0';
    }
};




// footer logic 

document.getElementById('subscribeBtn').addEventListener('click', function (event) {
    event.preventDefault(); // منع السلوك الافتراضي للزر

    // الحصول على قيمة البريد الإلكتروني
    const email = document.getElementById('emailInput').value;

    // إنشاء بيانات الطلب
    const formData = new FormData();
    formData.append('email', email);

    // إرسال الطلب POST
    fetch('https://api.mmnq8.com/api/subscribe', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status) {
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 6000);
    } else {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.style.display = 'block';
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 8000);
    }
      })
      .catch(error => {
        // التعامل مع الأخطاء هنا
        console.error('Error:', error);
      });
  });

  document.getElementById('subscribeMobileBtn').addEventListener('click', function (event) {
    event.preventDefault(); // منع السلوك الافتراضي للزر

    // الحصول على قيمة البريد الإلكتروني
    const email = document.getElementById('emailInput').value;

    // إنشاء بيانات الطلب
    const formData = new FormData();
    formData.append('email', email);

    // إرسال الطلب POST
    fetch('https://api.mmnq8.com/api/subscribe', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        if (data.status) {
      const successMessage = document.getElementById('successMessageMobile');
      successMessage.style.display = 'block';
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 6000);
    } else {
      const errorMessage = document.getElementById('errorMessageMobile');
      errorMessage.style.display = 'block';
      setTimeout(function() {
        successMessage.style.display = 'none';
      }, 8000);
    }
      })
      .catch(error => {
        // التعامل مع الأخطاء هنا
        console.error('Error:', error);
      });
  });

