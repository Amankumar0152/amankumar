const cursor = document.getElementById('cursor');
let colorIndex = 0;
let timeout;

// List of colors for the moving cursor
const colors = ['#FF5733', '#0D0D0D', , '#2A5298', '#05BB05', '#FADF20', '#33FF57', '#3357FF', '#FF33A1', '#33FFD5'];

// Function to update cursor position and color
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';

  // Change cursor color only while moving
  clearTimeout(timeout);
  if (cursor.style.backgroundColor === 'transparent') {
    colorIndex++;
    cursor.style.backgroundColor = colors[colorIndex % colors.length];
  }

  // Set a timeout to reset cursor color to transparent when it stops moving
  timeout = setTimeout(() => {
    cursor.style.backgroundColor = 'transparent';
  }, 200); // Cursor goes transparent after 200ms of no movement
});

// If the cursor leaves the page (e.g., moves out of bounds), reset the color
document.addEventListener('mouseleave', () => {
  cursor.style.backgroundColor = 'transparent';
});