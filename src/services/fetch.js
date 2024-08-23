const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3003';

export async function getData(endpoint) {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch GET Error:', error);
    throw error;
  }
}

export async function postData(endpoint, payload) {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch POST Error:', error);
    throw error;
  }
}

export async function putData(endpoint, payload) {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch PUT Error:', error);
    throw error;
  }
}

export async function deleteData(endpoint) {
  try {
    const response = await fetch(`${baseUrl}/${endpoint}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return true;
  } catch (error) {
    console.error('Fetch DELETE Error:', error);
    throw error;
  }
}
