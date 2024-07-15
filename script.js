 
 function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }
  function redirectTo(url) {
    window.location.href = url;
  }
//map
document.addEventListener('DOMContentLoaded', () => {
  var map = L.map('map').setView([16.5062, 80.6480], 13); 
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  var marker = L.marker([16.5062, 80.6480]).addTo(map)
      .bindPopup('Vijayawada')
      .openPopup();
});
//navbar
document.addEventListener('DOMContentLoaded', () => {
  const logo = document.getElementById('logo');
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlayImage');
  const close = document.querySelector('.close');
  const searchBox = document.getElementById('searchBox');
  logo.addEventListener('click', () => {
      overlay.style.display = 'flex';
  });

  close.addEventListener('click', () => {
      overlay.style.display = 'none';
  });

  overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target === overlayImage) {
          overlay.style.display = 'none';
      }
  });
    function highlightText(element, text) {
      const innerHTML = element.innerHTML;
      const regex = new RegExp(`(${text})`, 'gi');
      element.innerHTML = innerHTML.replace(regex, '<span class="highlight">$1</span>');
  }

  // Search box event to search text on the page
  searchBox.addEventListener('input', () => {
      const searchText = searchBox.value.toLowerCase();
      const content = document.querySelector('.content');
      const paragraphs = content.querySelectorAll('p');
      paragraphs.forEach(paragraph => {
          paragraph.innerHTML = paragraph.innerHTML.replace(/<span class="highlight">(.*?)<\/span>/g, '$1');
      });

      if (searchText) {
          paragraphs.forEach(paragraph => {
              highlightText(paragraph, searchText);
          });
      }
  });
});
//review
let currentIndex = 0;

function showReviews() {
    const wrapper = document.querySelector('.reviews-wrapper');
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;
    const reviewsPerPage = 3;

    wrapper.style.transform = `translateX(-${currentIndex * 100 / reviewsPerPage}%)`;
    currentIndex = (currentIndex + 1) % Math.ceil(totalReviews / reviewsPerPage);
}

function nextReviews() {
    const wrapper = document.querySelector('.reviews-wrapper');
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;
    const reviewsPerPage = 3;

    currentIndex = (currentIndex + 1) % Math.ceil(totalReviews / reviewsPerPage);
    wrapper.style.transform = `translateX(-${currentIndex * 100 / reviewsPerPage}%)`;
}

function prevReviews() {
    const wrapper = document.querySelector('.reviews-wrapper');
    const reviews = document.querySelectorAll('.review');
    const totalReviews = reviews.length;
    const reviewsPerPage = 3;

    currentIndex = (currentIndex - 1 + Math.ceil(totalReviews / reviewsPerPage)) % Math.ceil(totalReviews / reviewsPerPage);
    wrapper.style.transform = `translateX(-${currentIndex * 100 / reviewsPerPage}%)`;
}

setInterval(showReviews, 5000);
