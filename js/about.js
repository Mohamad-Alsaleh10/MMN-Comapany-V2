// ocload 
window.onload = function() {
    // احصل على العنصر الذي ترغب في تغيير خصائصه
    var topRight = document.querySelector('.about-us .top-right');
    var topLeft = document.querySelector('.about-us .top-left');
    var bottomleft = document.querySelector('.about-us .bottom-left');
    var bottomright = document.querySelector('.about-us .bottom-right');
    var whoTitle = document.querySelector('.who-we .who-title');
    var whodec = document.querySelector('.who-we .who-dec');


    
     




    setTimeout(function() {
        // بعد تأخير زمني نصف ثانية، قم بتغيير الخصائص الCSS كما ترغب
        topRight.style.top = '0';
        topRight.style.right = '-54px';
        topRight.style.display = 'block';
    }, 100);
    
    setTimeout(function() {
        // بعد تأخير زمني نصف ثانية، قم بتغيير الخصائص الCSS كما ترغب
        topLeft.style.top = '0';
        topLeft.style.left = '-64px';
        topLeft.style.display = 'block';
    }, 120);    

    setTimeout(function() {
        // بعد تأخير زمني نصف ثانية، قم بتغيير الخصائص الCSS كما ترغب
        whoTitle.style.top = '0';
    }, 1500);  
    setTimeout(function() {
        // بعد تأخير زمني نصف ثانية، قم بتغيير الخصائص الCSS كما ترغب
        whodec.style.display = 'block';
    }, 1800);  

    

    setTimeout(function() {
        // بعد تأخير زمني نصف ثانية، قم بتغيير الخصائص الCSS كما ترغب
        bottomleft.style.display = 'block';
        bottomright.style.display = 'block';
    }, 1800);

    setTimeout(function() {
        // بعد تأخير زمني نصف ثانية، قم بتغيير الخصائص الCSS كما ترغب
        bottomleft.style.left = '0';
        bottomright.style.right = '0';
    }, 2400);// تأخير نصف ثانية (500 مللي ثانية)
};




// onscrool 

window.onscroll = function() {
    // احصل على العناصر التي تحتاج إلى تغيير العرض لها
    var whoWe = document.querySelector('.who-we');
    var ourVisMis = document.querySelector('.our-vis-mis');
    var socialMediaAbout = document.querySelector('.social-media-about');
    // احصل على ارتفاع النوافذ ومكان التمرير الحالي
    var windowHeight = window.innerHeight;
    var scrollY = window.scrollY;

    // حدد الارتفاع الذي ترغب في تغيير العرض فيه
    var scrollThreshold1 = 50; // تستطيع تعديل هذا الرقم
    var scrollThreshold2 = 170; // تستطيع تعديل هذا الرقم
     
    if (scrollY > scrollThreshold1 && scrollY <= scrollThreshold2) {
        // عند السكرول الأول، قم بإخفاء العنصر الأول والثالث وعرض الثاني
        whoWe.style.opacity = '0';
        ourVisMis.style.opacity = '1';
        socialMediaAbout.style.opacity = '0';
    } else if (scrollY > scrollThreshold2) {
        // عند السكرول الثاني، قم بإخفاء العنصر الأول والثاني وعرض الثالث
        whoWe.style.opacity = '0';
        ourVisMis.style.opacity = '0';
        socialMediaAbout.style.opacity = '1';
    } else {
        // إذا كان التمرير أقل من الحد الأول، قم بإظهار العنصر الأول وإخفاء الآخرين
        whoWe.style.opacity = '1';
        ourVisMis.style.opacity = '0';
        socialMediaAbout.style.opacity = '0';
    }
};




// burger icon events 
const burgerIcon = document.querySelector('.burger-icon');

// Get the burger list element
const burgerList = document.querySelector('.burger-list');
const overlayburger = document.querySelector('.overlay-burger');


// Add a click event listener to the burger icon
burgerIcon.addEventListener('click', function(event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    // Toggle the display property of the burger list
    if (burgerList.style.display === 'none' || burgerList.style.display === '') {
        burgerList.style.display = 'block';
        overlayburger.style.display = 'block';

    } else {
        burgerList.style.display = 'none';
        overlayburger.style.display = 'none';

    }
});

// Add a click event listener to the document
document.addEventListener('click', function(event) {
    // Check if the click is within the burger list or its children
    if (!burgerList.contains(event.target)) {
        burgerList.style.display = 'none';
        overlayburger.style.display = 'none';

    }
});
    
const searchDropdown = document.querySelector('.search-dropdown');
const searchSelect = document.getElementById('search-select');

let isDropdownOpen = false;

searchSelect.addEventListener('click', function () {
    const dropdownHeight = searchDropdown.scrollHeight;
    
    if (isDropdownOpen) {
        searchDropdown.style.height = '0px';
    } else {
        searchDropdown.style.height = dropdownHeight + 'px';
    }
    
    isDropdownOpen = !isDropdownOpen;
});




fetch('https://api.mmnq8.com/api/services')
.then(response => response.json())
.then(data => {
  const servicesList = document.getElementById('services-list');

  data.data.forEach(service => {
    const listItem = document.createElement('li');
    listItem.textContent = service.name;
    listItem.addEventListener('click', () => {
      // Redirect to the services page with the selected service details
      window.location.href = `services.html?service=${service.name}`;
    });
    servicesList.appendChild(listItem);
  });
})
.catch(error => console.error('Error fetching data:', error));






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
