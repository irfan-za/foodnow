import type { Pizza, PizzaSize, Topping } from '@/types'
import { defineStore } from 'pinia'

/**
 * Store for managing the selected pizza size.
 */
export const usePizzaSize = defineStore('size', {
  state: () => ({
    pizzaSize: { id: 1, name: 'Small', extra_price: 0 },
  }),
  actions: {
    setSize(data: PizzaSize) {
      this.pizzaSize = data
    },
    resetSize() {
      this.pizzaSize = { id: 1, name: 'Small', extra_price: 0 }
    },
  },
})

/**
 * Store for managing the selected pizza.
 */
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
      const toppingStore = useTopping()

      toppingStore.updateToppingsBasedOnPizza(pizza.toppings)
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
/**
 * Store for managing pizza toppings.
 */
export const useTopping = defineStore('topping', {
  state: () => ({
    toppings: [] as Topping[],
  }),
  actions: {
    updateToppingsBasedOnPizza(allowedToppingIds: number[]) {
      this.toppings = this.toppings.map((topping) => {
        const isActive = allowedToppingIds.includes(topping.id)
        return {
          ...topping,
          is_active: isActive,
          is_selected: isActive ? topping.is_selected : false,
        }
      })
    },
    toggleToppingSelection(topping: Topping) {
      const existingIndex = this.toppings.findIndex((item) => item.id === topping.id)
      const toppingData = { ...topping, is_selected: !topping.is_selected }

      if (existingIndex === -1 && topping.is_active) {
        this.toppings = [...this.toppings, toppingData]
      } else {
        this.toppings.splice(existingIndex, 1)
      }
    },

    resetTopping() {
      this.toppings = []
    },
  },
})
