export interface Product {
  id: string,
  name: string,
  price: number, 
  thumb: string,
  quantity: number
}

export interface CartItem {
  product: Product,
  quantity: number
}

export interface Cart {
  products: CartItem[]
}