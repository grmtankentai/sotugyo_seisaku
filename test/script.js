const images = ["images/img01.jpg", "images/img02.jpg", "images/img03.jpg"];
const img = document.getElementById('img');
const prev = document.getElementById('prev');
const next = document.getElementById('next');let current = 0;
next.addEventListener('click', function() {
  if(current +1 < images.length) {
      current++;
      img.src = images[current];
  }
});
prev.addEventListener('click', function() {
  if(current  > 0) {
      current--;
      img.src = images[current];
  }
});