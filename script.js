// Live Date and Time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('live-date-time').textContent = dateTimeString;
  }
  
  setInterval(updateDateTime, 1000);
  updateDateTime();
  
  // Comment Section
  document.getElementById('post-comment').addEventListener('click', function () {
    const commentBox = document.getElementById('comment-box');
    const comment = commentBox.value.trim();
  
    if (comment) {
      const commentElement = document.createElement('div');
      commentElement.textContent = comment;
      document.getElementById('comments-list').appendChild(commentElement);
      commentBox.value = '';
    }
  });