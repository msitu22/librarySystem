document.addEventListener('DOMContentLoaded', () => {
  const addBookForm = document.getElementById('addBookForm');
  const messageDiv = document.getElementById('message');

  addBookForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(addBookForm);
    const bookData = {};
    formData.forEach((value, key) => {
      bookData[key] = value;
    });

    try {
      // Send a POST request to the '/add' endpoint with the form data
      const response = await fetch('/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
      });

      // Parse the JSON response
      const result = await response.json();

      if (response.ok) {
        messageDiv.innerHTML = `<div class="success">${result.message}</div>`;
        addBookForm.reset();
      } else {
        messageDiv.innerHTML = `<div class="error">${result.message}</div>`;
      }
    } catch (error) {
      console.error(error);
      messageDiv.innerHTML = `<div class="error">Internal Server Error</div>`;
    }
  });
});