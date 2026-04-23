import { render, screen, fireEvent } from '@testing-library/react';
import { ProductManager } from '../components/ProductManager';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../db', () => ({
  db: {
    products: {
      add: vi.fn(),
      toArray: vi.fn(() => Promise.resolve([])),
    },
  },
}));

describe('Componente Gestor de Productos', () => {
  it('debe renderizar el formulario correctamente', () => {
    render(<ProductManager />);
    expect(screen.getByPlaceholderText('Product Name')).toBeDefined();
    expect(screen.getByPlaceholderText('Price')).toBeDefined();
    expect(screen.getByText('Add Product')).toBeDefined();
  });

  it('debe llamar a la base de datos al enviar el formulario', async () => {
    const { db } = await import('../db');
    render(<ProductManager />);
    
    fireEvent.change(screen.getByPlaceholderText('Product Name'), { target: { value: 'Producto de Prueba' } });
    fireEvent.change(screen.getByPlaceholderText('Price'), { target: { value: '10' } });
    fireEvent.click(screen.getByText('Add Product'));

    expect(db.products.add).toHaveBeenCalledWith({ name: 'Producto de Prueba', price: 10 });
  });
});
