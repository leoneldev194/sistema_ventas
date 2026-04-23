import { describe, it, expect } from 'vitest';
import { calculateTotal } from '../utils/calculator';

describe('Calculadora de Ventas', () => {
  it('debe calcular el total correcto sumando todos los productos', () => {
    const productos = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 }
    ];
    expect(calculateTotal(productos)).toBe(250);
  });

  it('debe aplicar un descuento del 10% cuando el monto supera los 500 soles', () => {
    const productos = [
      { price: 300, quantity: 2 }
    ];
    expect(calculateTotal(productos)).toBe(540);
  });

  it('debe devolver cero cuando no hay productos en la lista', () => {
    expect(calculateTotal([])).toBe(0);
  });
});
