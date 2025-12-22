const response = await fetch(url);

if (!response.ok) {
  throw new Error(`HTTP error! status: ${response.status}`);
}

const data = await response.json();


//try-catch

try {
  const response = await fetch(url);
  
  if (response.status === 404) {
    throw new Error('City not found');
  }
  
  if (response.status === 401) {
    throw new Error('Invalid API key');
  }
  
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  
  const data = await response.json();
  displayData(data);
  
} catch (error) {
  if (error.message.includes('Failed to fetch')) {
    errorDiv.textContent = 'Network error. Check your connection.';
  } else {
    errorDiv.textContent = error.message;
  }
}