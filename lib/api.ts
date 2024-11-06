const API_URL = 'https://fakestoreapi.com'

export async function getFeaturedProducts() {
  const res = await fetch(`${API_URL}/products?limit=8`)
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export async function getProduct(id: string) {
  const res = await fetch(`${API_URL}/products/${id}`)
  if (!res.ok) throw new Error('Failed to fetch product')
  return res.json()
}

export async function login(username: string, password: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  if (!res.ok) throw new Error('Login failed')
  return res.json()
}

export async function register(email: string, username: string, password: string) {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      username,
      password,
      name: { firstname: '', lastname: '' },
    }),
  })
  if (!res.ok) throw new Error('Registration failed')
  return res.json()
}