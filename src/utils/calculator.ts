interface Item {
  price: number;
  quantity: number;
}

export function calculateTotal(items: Item[]): number {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  if (subtotal > 500) {
    return subtotal * 0.9;
  }
  return subtotal;
}
