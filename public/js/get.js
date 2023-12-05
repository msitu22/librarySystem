document.addEventListener('DOMContentLoaded', () => {
    const getBookForm = document.getElementById('getBookForm');
    const resultDiv = document.getElementById('result');
  
    getBookForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const isbn = document.getElementById('isbn').value;
  
      try {
        const response = await fetch(`/get/${isbn}`);
  
        if (response.ok) {
          const book = await response.json();
          // return book found and display all the element line by line
          resultDiv.innerHTML = `<div class="success">Book found</div>`;
          for (const [key, value] of Object.entries(book.book)) {
            if (key === '_id') {
              continue;
            } else if (key === '__v') {
              continue;
            }
            resultDiv.innerHTML += `<div>${key}: ${value}</div>`;
          }
        } else {
          resultDiv.innerHTML = `<div class="error">Book not found</div>`;
        }
      } catch (error) {
        console.error(error);
        resultDiv.innerHTML = `<div class="error">Internal Server Error</div>`;
      }
    });
  });
  