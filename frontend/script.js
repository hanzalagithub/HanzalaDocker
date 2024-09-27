// script.js
const fetchMessage = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/message');
      const data = await response.json();
      document.getElementById('message').innerText = data.message;
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };
  