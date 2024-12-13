import { fetchImages } from './js/pixabay-api.js';
import { renderImages, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";



const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const loader = document.getElementById('loader');

searchForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term!',
    });
    return;
  }

  clearGallery();
  toggleLoader(true);

  try {
    const data = await fetchImages(query);

    if (data.hits.length === 0) {
      iziToast.warning({
        title: 'No Results',
        message: 'Sorry, no images found. Try again!',
      });
      return;
    }

    renderImages(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
    });
  } finally {
    toggleLoader(false);
  }
});

function toggleLoader(show) {
  loader.classList.toggle('hidden', !show);
}