document.addEventListener('DOMContentLoaded', () => {
    const addBookBtn = document.getElementById('addBookBtn');
    const getBookBtn = document.getElementById('getBookBtn');
    const deleteBookBtn = document.getElementById('deleteBookBtn');
  
    addBookBtn.addEventListener('click', () => {
        // Redirect to the addView page 
      window.location.href = '/add-view';
      console.log('Add Book button clicked');

    });
  
    getBookBtn.addEventListener('click', () => {
      // Redirect to the get book page or perform related action
      window.location.href = '/get-view';
      console.log('Get Book button clicked');
    });
  
    deleteBookBtn.addEventListener('click', () => {
      // Redirect to the delete book page or perform related action
      window.location.href = '/delete-view';
      console.log('Delete Book button clicked');
    });
  });
  