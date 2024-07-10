// Color theme switching
const themeButtonDark = document.querySelector('.theme-button-dark');
const themeButtonLight = document.querySelector('.theme-button-light');
const page = document.querySelector('.page');

themeButtonDark.onclick = () => {
  themeButtonDark.classList.add('active');
  themeButtonLight.classList.remove('active');
  page.classList.add('dark');
}

themeButtonLight.onclick = () => {
  themeButtonLight.classList.add('active');
  themeButtonDark.classList.remove('active');
  page.classList.remove('dark');
}

const fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
const fontButtonSerif = document.querySelector('.font-button-serif');

fontButtonSansSerif.onclick = () => {
  fontButtonSansSerif.classList.add('active');
  fontButtonSerif.classList.remove('active');
  page.classList.remove('serif');
}

fontButtonSerif.onclick = () => {
  fontButtonSerif.classList.add('active');
  fontButtonSansSerif.classList.remove('active');
  page.classList.add('serif');
}

// Hidden content display
const blogs = document.querySelectorAll('.blog.short');

for (const blog of blogs) {
  const buttonMore = blog.querySelector('.button-more');

  buttonMore.onclick = () => {
    blog.classList.toggle('short');
    blog.classList.contains('short') ? buttonMore.textContent = 'Читать дальше' : buttonMore.textContent = 'Скрыть';
  }
}

// Card layout change
const cardViewButtonGrid = document.querySelector('.card-view-button-grid');
const cardViewButtonList = document.querySelector('.card-view-button-list');
const rentList = document.querySelector('.rent-list');

cardViewButtonGrid.onclick = () => {
  cardViewButtonGrid.classList.add('active');
  cardViewButtonList.classList.remove('active');
  rentList.classList.remove('list');
}

cardViewButtonList.onclick = () => {
  cardViewButtonList.classList.add('active');
  cardViewButtonGrid.classList.remove('active');
  rentList.classList.add('list');
}

// Gallery images switching
const galleryLinks = document.querySelectorAll('.gallery-link');
const galleryImage = document.querySelector('.gallery-image');

for (const galleryLink of galleryLinks) {
  galleryLink.onclick = (event) => {
    event.preventDefault();

    const galleryLinkActive = document.querySelector('.gallery-link.active-item');

    galleryImage.src = galleryLink.href;
    galleryLinkActive.classList.remove('active-item');
    galleryLink.classList.add('active-item');
  }
}
