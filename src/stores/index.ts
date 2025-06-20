import type { Pizza, PizzaSize, Topping } from '@/types'
import { defineStore } from 'pinia'

export const usePizzaSize = defineStore('size', {
  state: () => ({
    pizzaSize: { id: 1, name: 'Small', extra_price: 0 },
  }),
  actions: {
    setSize(data: PizzaSize) {
      this.pizzaSize = data
    },
    resetSize() {
      console.log('Reset')
      this.pizzaSize = { id: 1, name: 'Small', extra_price: 0 }
    },
  },
})

export const usePizza = defineStore('pizza', {
  state: () => ({
    pizza: {
      id: 1,
      name: 'Cheese Pizza',
      price: 8,
      discount: {
        is_active: false,
        final_price: 8,
      },
      toppings: [1, 2, 3, 4, 8, 11],
    },
    selectedPizzaId: null as number | null,
  }),
  actions: {
    setPizza(pizza: Pizza) {
      this.pizza = pizza
      this.selectedPizzaId = pizza.id
    },
    resetPizza() {
      this.pizza = {
        id: 1,
        name: 'Cheese Pizza',
        price: 8,
        discount: {
          is_active: false,
          final_price: 8,
        },
        toppings: [1, 2, 3, 4, 8, 11],
      }
      this.selectedPizzaId = null
    },
  },
})
export const useTopping = defineStore('topping', {
  state: () => ({
    toppings: [] as Topping[],
  }),
  actions: {
    setTopping(data: Topping) {
      const existingIndex = this.toppings.findIndex((item) => item.id === data.id)

      if (existingIndex === -1) {
        this.toppings.push(data)
      } else {
        this.toppings.splice(existingIndex, 1)
      }
    },

    resetTopping() {
      this.toppings.splice(0, this.toppings.length)
    },
  },
})
