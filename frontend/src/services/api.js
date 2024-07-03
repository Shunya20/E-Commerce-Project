const baseURL = 'http://localhost:5000/api'; 

export const fetchProductsAPI = async () => {
  const response = await fetch(`${baseURL}/products`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  return response.json();
};

