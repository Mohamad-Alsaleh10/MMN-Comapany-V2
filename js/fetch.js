fetch('http://192.168.1.6:8000/api/services')
  .then(response => response.json())
  .then(data => {
    // يتم معالجة البيانات الناتجة هنا
    console.log(data);
  })
  .catch(error => {
    // يتم معالجة الأخطاء هنا
    console.error('حدث خطأ في الحصول على البيانات: ', error);
  });
