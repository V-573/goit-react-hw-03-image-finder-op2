const apiKey = '40114076-6792fe4ed8fc0cf826901eacd';
const perPage = 12;

export const searchImages = async (keyword, page, setImages) => {
  const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(
    keyword
  )}&page=${page}&per_page=${perPage}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.totalHits === 0) {
      alert('No images found for the provided keyword.');
      return;
    }

    setImages(data.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};
