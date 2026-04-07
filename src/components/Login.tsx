import { useState } from 'react'

interface LoginForm {
  usuario: string
  password: string
}

export default function Login() {
  const [form, setForm] = useState<LoginForm>({ usuario: '', password: '' })
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.usuario || !form.password) {
      setError('Por favor completa todos los campos.')
      return
    }
    setError('')
    alert(`Bienvenido, ${form.usuario}`)
  }

  return (
    <div style={{ maxWidth: 360, margin: '60px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Sistema de Ventas — Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Usuario</label>
          <input
            type="text"
            value={form.usuario}
            onChange={e => setForm({ ...form, usuario: e.target.value })}
            style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Contraseña</label>
          <input
            type="password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            style={{ display: 'block', width: '100%', padding: 8, marginTop: 4 }}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={{ width: '100%', padding: 10, background: '#0070f3', color: '#fff', border: 'none', borderRadius: 4 }}>
          Ingresar
        </button>
      </form>
    </div>
  )
}
