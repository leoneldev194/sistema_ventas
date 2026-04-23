import React, { useState, useEffect } from 'react';
import { db, type Product } from '../db';

export const ProductManager: React.FC = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const allProducts = await db.products.toArray();
    setProducts(allProducts);
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;
    await db.products.add({ name, price: Number(price) });
    setName('');
    setPrice('');
    loadProducts();
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <form onSubmit={handleAdd}>
        <input 
          placeholder="Product Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          placeholder="Price" 
          type="number" 
          value={price} 
          onChange={(e) => setPrice(e.target.value)} 
        />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
