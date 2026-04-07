interface Venta {
  id: number
  producto: string
  cantidad: number
  total: number
}

const ventas: Venta[] = [
  { id: 1, producto: 'Laptop Dell', cantidad: 2, total: 1800 },
  { id: 2, producto: 'Monitor LG', cantidad: 5, total: 1250 },
  { id: 3, producto: 'Teclado Logitech', cantidad: 10, total: 400 },
]

export default function Dashboard() {
  const totalGeneral = ventas.reduce((acc, v) => acc + v.total, 0)

  return (
    <div style={{ padding: 24 }}>
      <h2>Panel de Ventas</h2>
      <p>Total vendido: <strong>${totalGeneral}</strong></p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 16 }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>#</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>Producto</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>Cantidad</th>
            <th style={{ padding: 8, border: '1px solid #ccc' }}>Total ($)</th>
          </tr>
        </thead>
        <tbody>
          {ventas.map(v => (
            <tr key={v.id}>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{v.id}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{v.producto}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{v.cantidad}</td>
              <td style={{ padding: 8, border: '1px solid #ccc' }}>{v.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
