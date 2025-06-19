interface PizzaSize {
  id: number
  name: string
  extra_price: number
}
interface Pizza {
  id: number
  name: string
  price: number
  discount: {
    is_active: boolean
    final_price: number
  }
  toppings: number[]
}
interface Topping {
  id: number
  name: string
  price: number
}

export { PizzaSize, Pizza, Topping }
