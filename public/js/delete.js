document.addEventListener('DOMContentLoaded', () => {
    const deleteBookForm = document.getElementById('deleteBookForm');
    const resultDiv = document.getElementById('result');
  
    deleteBookForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const isbn = document.getElementById('isbn').value;
  
      try {
        const response = await fetch(`/delete/${isbn}`, {
          method: 'DELETE',
        });
  
        if (response.ok) {
          const result = await response.json();
          resultDiv.innerHTML = `<div class="success">${result.message}</div>`;
        } else {
          resultDiv.innerHTML = `<div class="error">Error: The book is not found</div>`;
        }
      } catch (error) {
        console.error(error);
        resultDiv.innerHTML = `<div class="error">Internal Server Error</div>`;
      }
    });
  });
  