document.addEventListener('DOMContentLoaded', function() {
    const leftSection = document.querySelector('.left-section .desc');
    const rightSection = document.querySelector('.right-section .desc');
    const leftBefore = document.querySelector('.before-left');
    const rightBefore = document.querySelector('.before-right');
    const restItems = document.querySelectorAll('.rest-item');

    let height = 0;
    let increasing = true;
    
    function moveSections() {
        let counter = 0;
        const intervalId = setInterval(function() {
            if (counter % 2 === 0) {
                leftBefore.style.height = '100%';
                rightBefore.style.height = '100%';
                leftSection.style.display = 'block';
                leftSection.style.left = '15px';
                leftSection.style.opacity = '1';
                rightSection.style.display = 'block';
                rightSection.style.right = '10px';
                rightSection.style.opacity = '1';
                restItems.forEach(item => {
                    item.style.transform = 'translateX(50px)';
                });
            } else {
                leftBefore.style.height = '0';
                rightBefore.style.height = '0';
                leftSection.style.display = 'none';
                leftSection.style.left = '0';
                leftSection.style.opacity = '0';
                rightSection.style.display = 'none';
                rightSection.style.right = '0';
                rightSection.style.opacity = '0';
                restItems.forEach(item => {
                    item.style.transform = 'translateX(0)';
                });
            }
            counter++;
            if (counter >= 2) { // يتم تشغيل الحركة مرتين ذهابًا وإيابًا
                clearInterval(intervalId);
                // إعادة عرض العناصر في مكانها الأصلي
                setTimeout(function() {
                    leftSection.style.display = 'block';
                    leftSection.style.left = '0';
                    leftSection.style.opacity = '1';
                    leftSection.style.padding = '10px';
                    rightSection.style.display = 'block';
                    rightSection.style.right = '0';
                    rightSection.style.opacity = '1';
                    leftBefore.style.height = '100%';
                    rightBefore.style.height = '100%';

                }, 1300); // تعديل الوقت حسب الحاجة
            }
        }, 1300); // تعديل الوقت حسب الحاجة
    }
    
    moveSections();
});



    // test 

    // الحصول على عناصر rest-item
const restItems = document.querySelectorAll('.rest-item');

// إنشاء مراقب الوضع
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // تغيير الخصائص والأنماط الخاصة بالعناصر التي تحمل الفئات المحددة
      const restItem = entry.target;
      const beforeElement = restItem.querySelector('.before');
      const afterElement = restItem.querySelector('.after');
      // قم بتغيير الخصائص والأنماط كما تريد هنا
      beforeElement.style.top = '70%';
      beforeElement.style.left = '-25px';
      beforeElement.style.opacity='1';
      afterElement.style.top = '0';
      afterElement.style.right = '0';
      afterElement.style.opacity='1';
      
    }
  });
});

// ربط مراقب الوضع بكل عنصر rest-item
restItems.forEach(item => {
  observer.observe(item);
});



// lsl 



  // تحديد العنصر about-item
  const aboutItems = document.querySelectorAll('.about-item');
  const aboutrest = document.querySelectorAll('.rest-item');


  // إضافة حدث الهوفر إلى كل عنصر
  aboutItems.forEach(item => {
    item.addEventListener('mouseover', function() {
      const topImage = this.querySelector('.top img');
      const animatedImage = this.querySelector('.top img[id]');

      // تعديل خصائص العرض والإخفاء وفقًا لذلك
      if (topImage && animatedImage) {
        topImage.style.display = 'none';
        animatedImage.style.display = 'block';
      }
    });

    // إعادة الخصائص الافتراضية عندما يتم إزالة المؤشر
    item.addEventListener('mouseout', function() {
      const topImage = this.querySelector('.top img');
      const animatedImage = this.querySelector('.top img[id]');

      // تعديل خصائص العرض والإخفاء وفقًا لذلك
      if (topImage && animatedImage) {
        topImage.style.display = 'block';
        animatedImage.style.display = 'none';
      }
    });
  });


  aboutrest.forEach(item => {
    item.addEventListener('mouseover', function() {
      const topImage = this.querySelector('.top img');
      const animatedImage = this.querySelector('.top img[id]');

      // تعديل خصائص العرض والإخفاء وفقًا لذلك
      if (topImage && animatedImage) {
        topImage.style.display = 'none';
        animatedImage.style.display = 'block';
      }
    });

    // إعادة الخصائص الافتراضية عندما يتم إزالة المؤشر
    item.addEventListener('mouseout', function() {
      const topImage = this.querySelector('.top img');
      const animatedImage = this.querySelector('.top img[id]');

      // تعديل خصائص العرض والإخفاء وفقًا لذلك
      if (topImage && animatedImage) {
        topImage.style.display = 'block';
        animatedImage.style.display = 'none';
      }
    });
  });






     
    

// تيست 

// تعريف الدالة التي تقوم بتدوير العنصر بزاوية 180 درجة
function rotateElement(element) {
    element.style.transform = "rotateY(180deg)";
}

// تعريف الدالة التي تقوم بتغيير العنصر من display: none إلى display: block
function toggleDisplay(element) {
    element.style.display = "block";
}

// تعريف الدالة التي تعيد العنصر إلى حالته الأصلية
function resetElement(element) {
    element.style.transform = "none";
}

// الحصول على العناصر التي تريد تحويلها إلى display: block
const targetElements = document.querySelectorAll(".emloye-card-overlay"); // يجب استبدال "yourElementClass" بالفئة الخاصة بك

// الحصول على العناصر التي تريد تدويرها عند الهوفر
const hoverElements = document.querySelectorAll(".employee-card"); // يجب استبدال "yourHoverElementClass" بالفئة الخاصة بك

// إضافة مستمع لكل عنصر لحدث الهوفر
hoverElements.forEach((hoverElement, index) => {
    hoverElement.addEventListener("mouseover", function() {
        rotateElement(hoverElement); // دوران العنصر عند الهوفر
        toggleDisplay(targetElements[index]); // تبديل العنصر إلى الظهور عند الهوفر
    });

    // إضافة مستمع لحدث mouseout
    hoverElement.addEventListener("mouseout", function() {
        resetElement(hoverElement); // إعادة العنصر إلى حالته الأصلية بعد إزالة المؤشر
        targetElements[index].style.display = "none"; // إعادة إخفاء العنصر بعد إزالة المؤشر
    });
});




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
