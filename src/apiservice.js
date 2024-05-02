

const BASE_URL = 'http://test-server-api.com'; 

const fetchProducts = async (category, company) => {
  try {
    const response = await fetch(`${BASE_URL}/products?category=${category}&company=${company}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export { fetchProducts };

