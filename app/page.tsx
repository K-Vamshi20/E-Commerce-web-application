import { ProductCard } from "@/components/product-card"
import { getFeaturedProducts } from "@/lib/api"

export default async function Home() {
  const products = await getFeaturedProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Welcome to LuxeCart</h1>
        <p className="text-muted-foreground">Discover our premium collection</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}