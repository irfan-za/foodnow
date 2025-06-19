type PizzaSize = {
  id: number
  name: string
  extra_price: number
}

type Pizza = {
  id: number
  name: string
  price: number
  discount: {
    is_active: boolean
    final_price: number
  }
  toppings: number[]
}

type Topping = {
  id: number
  name: string
  price: number
}

export type { PizzaSize, Pizza, Topping }
