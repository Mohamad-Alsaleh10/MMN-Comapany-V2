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







//   contact 
const boxes = document.querySelectorAll('.box');
const dropZones = document.querySelectorAll('.drop-zone');

let draggingElement = null;

boxes.forEach((box) => {
    box.addEventListener('dragstart', (e) => {
        draggingElement = e.target;
    });

    box.addEventListener('dragend', () => {
        draggingElement = null;
    });
});

dropZones.forEach((dropZone) => {
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggingElement) {
            dropZone.appendChild(draggingElement);
        }
    });
});




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


// contact animation 










// index.html page animation


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
                    rightSection.style.right = '8px';
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
     

   // JavaScript for testimonial section functionality
   let testimonials = [
        {
            name: "Mohamad Watrson",
            position: "Frontend web developer",
            text: "Amazing Work Keep Goine. Commodo volutpat Eget vel purus commodo paretra eu nulla dui eu sit. Non risus mattis vulpu bitant lobortis se",
            image: "./assets/image/person.svg"
        },
        {
            name: "sara Watrson",
            position: "Backend web developer",
            text: "nice Work Keep Goine. Commodo volutpat Eget vel purus commodo paretra eu nulla dui eu sit. Non risus mattis vulpu bitant lobortis se",
            image: "./assets/image/sara.svg"
        },
        {
            name: "zeina Ahmad",
            position: "Designer",
            text: "Awesome Work Keep Goine. Commodo volutpat Eget vel purus commodo paretra eu nulla dui eu sit. Non risus mattis vulpu bitant lobortis se",
            image: "./assets/image/zeina.svg"
        },
        // Add more testimonials here
    ];

    let currentIndex = 0;
    let points = document.querySelectorAll(".cursoul-item");

    // function showTestimonial(index) {
        // let testimonial = testimonials[index];
        // document.querySelector(".testi-item .name-per").innerText = testimonial.name;
        // document.querySelector(".testi-item .name-pos").innerText = testimonial.position;
        // document.querySelector(".testi-item p").innerText = testimonial.text;
        // document.querySelector(".person-title img").src = testimonial.image;
        // setActivePoint(index);
    // }

    function setActivePoint(index) {
        points.forEach((point, i) => {
            if (i === index) {
                point.style.backgroundColor = "#FF6436";
            } else {
                point.style.backgroundColor = "white";
            }
        });
    }

    // showTestimonial(currentIndex);

    // document.querySelector(".left").addEventListener("click", function (e) {
    //     e.preventDefault();
    //     currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    //     showTestimonial(currentIndex);
    // });

    // document.querySelector(".right").addEventListener("click", function (e) {
    //     e.preventDefault();
    //     currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
    //     showTestimonial(currentIndex);
    // });

    // points.forEach((point, index) => {
    //     point.addEventListener("click", function () {
    //         currentIndex = index;
    //         showTestimonial(currentIndex);
    //     });
    // });

// auto play testimonials 
let intervalId;

function startInterval() {
    intervalId = setInterval(() => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    }, 1500); // Adjust the interval time as needed (in milliseconds)
}

function stopInterval() {
    clearInterval(intervalId);
}

startInterval();

// document.querySelector(".left").addEventListener("click", function (e) {
//     e.preventDefault();
//     stopInterval();
//     currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
//     showTestimonial(currentIndex);
//     startInterval();
// });

// document.querySelector(".right").addEventListener("click", function (e) {
//     e.preventDefault();
//     stopInterval();
//     currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
//     showTestimonial(currentIndex);
//     startInterval();
// });

points.forEach((point, index) => {
    point.addEventListener("click", function () {
        stopInterval();
        currentIndex = index;
        showTestimonial(currentIndex);
        startInterval();
    });
});


    // burger icon list function 

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
    
  

// Fetch data from the API
fetch('https://api.mmnq8.com/api/services')
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      const services = data.data;

      // Select the container where the services will be displayed
      const serviceContainer = document.querySelector('.content-serv');

      // Clear the existing content
      serviceContainer.innerHTML = '';

      // Loop through the services and add them to the HTML
      services.forEach(service => {
        // Select the first 100 characters from the description
        const shortDescription = service.description.substring(0, 170);

        const serviceItem = `
          <div class="item-serv">
            <div class="image-container">
              <img src="${service.imageUrl}" alt="${service.name}">
            </div>
            <div class="serv-sec">
              <span>${service.name}</span>
              <p>${shortDescription}... <a class="read-more-btn" href="services.html">Read more</a></p>
            </div>
          </div>
        `;
        serviceContainer.insertAdjacentHTML('beforeend', serviceItem);
      });
    } else {
      console.error('Failed to fetch services');
    }
  })
  .catch(error => {
    console.error('Error fetching services:', error);
  });


