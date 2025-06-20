/**
 * Type definition for PizzaSize object
 */
type PizzaSize = {
  id: number
  name: string
  extra_price: number
}

/**
 * Type definition for Pizza object
 */
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

/**
 * Type definition for Topping object
 */
type Topping = {
  id: number
  name: string
  price: number
}

export type { PizzaSize, Pizza, Topping }
