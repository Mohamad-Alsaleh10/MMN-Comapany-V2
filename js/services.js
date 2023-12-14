

window.addEventListener('load', function() {
  const firstServiceImgContainer = document.querySelector('.service-img-container');
  const firstDescServ = document.querySelector('.desc-serv');

  setTimeout(() => {
      firstServiceImgContainer.style.transition = 'transform 1s ease';
      firstServiceImgContainer.style.opacity = '1';
      firstServiceImgContainer.style.transform = 'translateX(0)';
  }, 200); // تحديد تأخير قبل تنفيذ التغيير

  setTimeout(() => {
      firstDescServ.style.transition = 'transform 1s ease';
      firstDescServ.style.opacity = '1';
      firstDescServ.style.transform = 'translateX(0)';
  }, 200); // تحديد تأخير قبل تنفيذ التغيير

  window.addEventListener('scroll', function() {
      const otherServiceImgContainers = document.querySelectorAll('main:not(:first-child) .service-img-container');
      const otherDescServs = document.querySelectorAll('.desc-serv:not(:first-child)');

      otherServiceImgContainers.forEach(serviceImgContainer => {
          if (isScrolledIntoView(serviceImgContainer)) {
              serviceImgContainer.style.transition = 'transform 1s ease';
              serviceImgContainer.style.opacity = '1';
              serviceImgContainer.style.transform = 'translateX(0)';
          }
      });

      otherDescServs.forEach(descServ => {
          if (isScrolledIntoView(descServ)) {
              descServ.style.transition = 'transform 1s ease';
              descServ.style.opacity = '1';
              descServ.style.transform = 'translateX(0)';
          }
      });
  });
});

// الوظيفة التالية تحقق ما إذا كان العنصر قد أصبح مرئيًا بما يكفي في النافذة
function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}




// fetch('https://api.mmnq8.com/api/services')
//   .then(response => response.json())
//   .then(fetchedData => {
//     const data = fetchedData.data.map(item => ({
//       imageURL: item.imageUrl,
//       title: item.name,
//       description: item.description,
//     }));

//     let currentIndex = 0;

//     const nextButton = document.querySelector('.next-btn');
//     const serviceImageContainers = document.querySelectorAll('.service-img-container img');
    
    
//     nextButton.addEventListener('click', function(event) {
//         event.preventDefault(); // لمنع إعادة تحميل الصفحة

//         if (currentIndex < fetchedData.data.length) {
//             for (let i = 0; i < serviceImageContainers.length; i++) {
//                 serviceImageContainers[i].src = fetchedData.data[currentIndex].imageUrl;
//                 const desc = serviceImageContainers[i].parentElement.nextElementSibling;
//                 desc.querySelector('h3').innerText = fetchedData.data[currentIndex].name;
//                 desc.querySelector('p').innerText = fetchedData.data[currentIndex].description;
//             }
//             currentIndex = (currentIndex + 1) % fetchedData.data.length;
//         }
//     });
//   })
//   .catch(error => {
//     // يتم معالجة الأخطاء هنا
//     console.error('حدث خطأ في الحصول على البيانات: ', error);
//   });


// تحميل البيانات وعرض البيانات الأولى
fetch('https://api.mmnq8.com/api/services')
  .then(response => response.json())
  .then(fetchedData => {
    const data = fetchedData.data.map(item => ({
      imageURL: item.imageUrl,
      title: item.name,
      description: item.description,
    }));

    let currentIndex = 0;

    const nextButton = document.querySelector('.next-btn');
    const serviceImageContainers = document.querySelectorAll('.service-img-container img');

    // عرض البيانات الأولى
    for (let i = 0; i < serviceImageContainers.length; i++) {
      serviceImageContainers[i].src = fetchedData.data[currentIndex].imageUrl;
      const desc = serviceImageContainers[i].parentElement.nextElementSibling;
      desc.querySelector('h3').innerText = fetchedData.data[currentIndex].name;
      desc.querySelector('p').innerText = fetchedData.data[currentIndex].description;
    }

    // حدث النقر
    nextButton.addEventListener('click', function(event) {
      event.preventDefault(); // لمنع إعادة تحميل الصفحة

      if (currentIndex < fetchedData.data.length) {
        for (let i = 0; i < serviceImageContainers.length; i++) {
          serviceImageContainers[i].src = fetchedData.data[currentIndex].imageUrl;
          const desc = serviceImageContainers[i].parentElement.nextElementSibling;
          desc.querySelector('h3').innerText = fetchedData.data[currentIndex].name;
          desc.querySelector('p').innerText = fetchedData.data[currentIndex].description;
        }
        currentIndex = (currentIndex + 1) % fetchedData.data.length;
      }
    });

    // حدث زر العودة
    const backButton = document.querySelector('.back-btn');
    backButton.addEventListener('click', function(event) {
      event.preventDefault(); // لمنع إعادة تحميل الصفحة

      if (currentIndex > 0) {
        currentIndex = (currentIndex - 1 + fetchedData.data.length) % fetchedData.data.length;
        for (let i = 0; i < serviceImageContainers.length; i++) {
          serviceImageContainers[i].src = fetchedData.data[currentIndex].imageUrl;
          const desc = serviceImageContainers[i].parentElement.nextElementSibling;
          desc.querySelector('h3').innerText = fetchedData.data[currentIndex].name;
          desc.querySelector('p').innerText = fetchedData.data[currentIndex].description;
        }
      }
    });
  })
  .catch(error => {
    // يتم معالجة الأخطاء هنا
    console.error('حدث خطأ في الحصول على البيانات: ', error);
  });


// تيست
  




// auto placement image 
const images = ['./assets/image/serv1.png', './assets/image/serv2.png', './assets/image/serv3.png']; // Add more image URLs as needed
const serviceImage = document.getElementById('service-image');
let index = 0;

setInterval(() => {
  serviceImage.src = images[index];
  index = (index + 1) % images.length;
}, 2000); // Change the image every 3 seconds (3000 milliseconds)








var button = document.querySelector('.serv-book-btn');
const overlay = document.querySelector('.overlay');
const form = document.querySelector('.form');
form.style.display='none';
// Prevent default behavior of the button
button.addEventListener('click', function (event) {
event.preventDefault();
overlay.style.display = 'block';
form.style.display = 'flex';

// Save data to local storage
localStorage.setItem('overlayStatus', 'block');
localStorage.setItem('formStatus', 'flex');
});

// Retrieve data from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
var overlayStatus = localStorage.getItem('overlayStatus');
var formStatus = localStorage.getItem('formStatus');

if (overlayStatus) {
overlay.style.display = overlayStatus;
}

if (formStatus) {
form.style.display = formStatus;
}
});

// Add event listener to the cancel button
var cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', function() {
form.style.display = 'none';
overlay.style.display = 'none';
// Remove data from local storage
localStorage.removeItem('overlayStatus');
localStorage.removeItem('formStatus');
});




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
