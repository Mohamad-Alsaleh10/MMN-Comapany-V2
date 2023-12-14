



  // fetch('https://api.mmnq8.com/api/posts')
  //   .then(response => response.json())
  //   .then(data => {
  //     // Check if the API request was successful
  //     if (data.success) {
  //       const posts = data.data; // Array of posts

  //       // Assuming there is an element with the class 'blogers-posts' to display the posts
  //       const blogContainer = document.querySelector('.blogers-posts');

  //       // Loop through the posts and create HTML elements for each post
  //       posts.forEach(post => {
  //         const postElement = `
  //           <div class="post">
  //             <img src="${post.images}" alt="${post.title}">
  //             <div class="post-cat">${post.category}</div>
  //             <div class="post-title">${post.title}</div>
  //             <div class="post-writer">
  //               <span>${post['writer by']}</span>
  //               <span>${post.created_at}</span>
  //             </div>
  //           </div>
  //         `;
  //         // Append the post element to the blog container
  //         blogContainer.innerHTML += postElement;
  //       });
  //     } else {
  //       console.error('Failed to fetch posts:', data.message);
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error fetching posts:', error);
  //   });



    // document.addEventListener('DOMContentLoaded', function () {
    //   const blogcontainerti = document.querySelector('.blog-cont-ti');
      
    //   fetch('https://api.mmnq8.com/api/posts')
    //     .then(response => response.json())
    //     .then(data => {
    //       // قم بالتعامل مع البيانات المسترجعة هنا
    //       const postsData = data.data;
    
    //       postsData.forEach(postData => {
    //         const postDetails = document.createElement('div');
    //         postDetails.classList.add('post-details');
    
    //         const category = document.createElement('div');
    //         category.classList.add('post-cat');
    //         category.textContent = postData.category;
    
    //         const title = document.createElement('div');
    //         title.classList.add('post-title');
    //         title.textContent = postData.title;
    
    //         const writer = document.createElement('div');
    //         writer.classList.add('post-writer');
    //         writer.textContent = `By: ${postData['writer by']}`;
    
    //         const image = document.createElement('img');
    //         image.src = postData.images;
    
    //         const description = document.createElement('p');
    //         description.textContent = postData.body;
    
    //         // إضافة العناصر الجديدة إلى الصفحة
    //         postDetails.appendChild(category);
    //         postDetails.appendChild(title);
    //         postDetails.appendChild(writer);
    //         postDetails.appendChild(image);
    //         postDetails.appendChild(description);
    
    //         blogcontainerti.insertAdjacentElement('afterend', postDetails);
    //       });
    
    //       // إخفاء بقية العناصر غير الضرورية
    //       blogcontainerti.style.display = 'none';
    //     })
    //     .catch(error => console.error('Error fetching data:', error));
    // });
    
    
    document.addEventListener('DOMContentLoaded', function () {
      const blogContainer = document.querySelector('.blogers-posts');
      const blogTitle = document.querySelector('.blog-cont-ti');
    
      fetch('https://api.mmnq8.com/api/posts')
        .then(response => response.json())
        .then(data => {
          // Check if the API request was successful
          if (data.success) {
            const posts = data.data; // Array of posts
    
            // Loop through the posts and create HTML elements for each post
            posts.forEach(post => {
              const postElement = document.createElement('div');
              postElement.classList.add('post');
              postElement.innerHTML = `
                <img src="${post.images}" alt="${post.title}">
                <div class="post-cat">${post.category}</div>
                <div class="post-title">${post.title}</div>
                <div class="post-writer">
                  <span>${post['writer by']}</span>
                  <span>${post.created_at}</span>
                </div>
                <div class="post-description" style="display:none">${post.body}</div>
              `;
              // Append the post element to the blog container
              blogContainer.appendChild(postElement);
    
              // Add click event to each post element
              postElement.addEventListener('click', function () {
                // Hide all posts except the one being clicked
                const allPosts = document.querySelectorAll('.post');
                allPosts.forEach(post => {
                  if (post !== postElement) {
                    post.style.display = 'none';
                  }
                });
    
                // Show the description of the clicked post
                const postDescription = postElement.querySelector('.post-description');
                postDescription.style.display = 'block';
    
                // Add the 'active' class to the clicked post
                postElement.classList.add('active');
    
                // Hide the blog title container
                blogTitle.style.display = 'none';
              });
            });
          } else {
            console.error('Failed to fetch posts:', data.message);
          }
        })
        .catch(error => {
          console.error('Error fetching posts:', error);
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
