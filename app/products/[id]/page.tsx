import { ProductDetails } from "@/components/product-details"
import { Product } from "@/lib/types"

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!res.ok) throw new Error('Failed to fetch product')
  return res.json()
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product: Product = await getProduct(params.id)
  return <ProductDetails product={product} />
}

export async function generateStaticParams() {
  const products = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  )

  return products.map((product: Product) => ({
    id: product.id.toString(),
  }))
}