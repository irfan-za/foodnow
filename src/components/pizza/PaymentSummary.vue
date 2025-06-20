<template>
  <div class="payment-section__summary">
    <h2 class="payment-section__summary-title">Payment Summary</h2>

    <div class="payment">
      <div class="payment__list-wrapper">
        <div v-if="pizzaStore.selectedPizzaId" class="payment__list">
          <div class="payment__list-name">{{ pizzaStore.pizza.name }}</div>
          <div class="payment__list-price">
            ${{
              pizzaStore.pizza.discount.is_active
                ? formatPrice(pizzaStore.pizza.discount.final_price)
                : formatPrice(pizzaStore.pizza.price)
            }}
          </div>
        </div>

        <!-- Display size details -->
        <div class="payment__list">
          <div class="payment__list-name">Size - {{ pizzaSize.name }}</div>
          <div class="payment__list-price">${{ formatPrice(pizzaSize.extra_price) }}</div>
        </div>

        <!-- Display each selected topping -->
        <div v-for="item in toppings" :key="item.id" class="payment__list">
          <div class="payment__list-name">{{ item.name }}</div>
          <div class="payment__list-price">${{ formatPrice(item.price) }}</div>
        </div>
      </div>

      <!-- Display total price -->
      <div class="payment__total">
        <span>Total Price</span>
        <p>${{ formatPrice(totalPrice) }}</p>
      </div>
    </div>

    <button @click="setModal" class="payment__order-button" :disabled="!pizzaStore.selectedPizzaId">
      Order Now
    </button>
  </div>

  <!-- Modal for order success -->
  <div :class="{ modal: true, 'modal--active': modal }">
    <div class="modal__content">
      <div class="modal__icon-wrapper">
        <img class="modal__icon" :src="successIcon" alt="Success" />
      </div>
      <h2 class="modal__title">Order Success</h2>
      <p class="modal__description">Thank you, we have received your order successfully</p>
      <button @click="(setModal(), resetPayment())" class="modal__button">Close</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { usePizzaSize, useTopping, usePizza } from '@/stores/index'
import { formatPrice } from '@/lib/utils'
import successIcon from '@/assets/icons/success.svg'

const pizzaSizeStore = usePizzaSize()
const toppingStore = useTopping()
const pizzaStore = usePizza()

const toppings = computed(() => toppingStore.toppings)
const pizzaSize = computed(() => pizzaSizeStore.pizzaSize)

// Calculate the total price of toppings
const totalToppingPrice = computed(() => {
  return toppings.value.reduce((sum, item) => sum + item.price, 0)
})

// Calculate the total price of the order
const totalPrice = computed(() => {
  if (pizzaStore.selectedPizzaId === null) return 0
  const pizzaPrice = pizzaStore.pizza.discount.is_active
    ? pizzaStore.pizza.discount.final_price
    : pizzaStore.pizza.price

  return pizzaPrice + pizzaSize.value.extra_price + totalToppingPrice.value
})

const modal = ref(false)

const setModal = () => {
  modal.value = !modal.value
}

// Function to reset the payment state
const resetPayment = () => {
  pizzaSizeStore.resetSize()
  toppingStore.resetTopping()
  pizzaStore.resetPizza()
}
</script>

<style src="@/styles/pizza/payment-summary.scss" lang="scss" scoped></style>
