// ProductsList.js

import React, { useEffect, useState } from 'react';
import { fetchProducts } from './apiservice';

const ProductsList = ({ category, company }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts(category, company);
        setProducts(data);
      } catch (error) {
        
      }
    };

    fetchData();

    return () => {
     
    };
  }, [category, company]);

  return (
    <div>
      <h2>Products List</h2>
      {}
    </div>
  );
};

export default ProductsList;
