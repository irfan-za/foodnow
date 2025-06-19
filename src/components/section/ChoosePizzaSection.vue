<template>
  <section class="choose-pizza">
    <div class="choose-pizza__container">
      <div class="choose-pizza__content">
        <h1 class="choose-pizza__title">Choose your pizza</h1>
        <div class="choose-pizza__grid">
          <div
            v-for="pizza in pizzas"
            :key="pizza.id"
            class="choose-pizza__card"
            :class="{
              'choose-pizza__card--active': selectedPizzaId === pizza.id,
              'choose-pizza__card--offer': pizza.discount.is_active,
            }"
            @click="selectPizza(pizza)"
          >
            <div v-if="pizza.discount.is_active" class="choose-pizza__offer-tag">
              <img :src="offerTag" alt="Special offer" />
            </div>
            <div class="choose-pizza__img-wrapper">
              <img
                :src="`/images/pizza/${pizza.name}.png`"
                :alt="pizza.name"
                class="choose-pizza__image"
              />
            </div>
            <div class="choose-pizza__details">
              <h3 class="choose-pizza__name">{{ pizza.name }}</h3>
              <div class="choose-pizza__price-wrapper">
                <span class="choose-pizza__price">
                  ${{
                    pizza.discount.is_active
                      ? formatPrice(pizza.discount.final_price)
                      : formatPrice(pizza.price)
                  }}
                </span>
                <span v-if="pizza.discount.is_active" class="choose-pizza__price--discount">
                  ${{ formatPrice(pizza.price) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="choose-pizza__summary">
        <h2 class="choose-pizza__summary-title">Payment Summary</h2>

        <div class="payment">
          <div class="payment__list-wrapper">
            <div v-if="selectedPizza" class="payment__list">
              <div class="payment__list-name">{{ selectedPizza.name }}</div>
              <div class="payment__list-price">
                ${{
                  selectedPizza.discount.is_active
                    ? formatPrice(selectedPizza.discount.final_price)
                    : formatPrice(selectedPizza.price)
                }}
              </div>
            </div>

            <div class="payment__list">
              <div class="payment__list-name">Size - {{ pizzaSize.name }}</div>
              <div class="payment__list-price">${{ formatPrice(pizzaSize.extra_price) }}</div>
            </div>

            <div v-for="item in toppings" :key="item.id" class="payment__list">
              <div class="payment__list-name">{{ item.name }}</div>
              <div class="payment__list-price">${{ formatPrice(item.price) }}</div>
            </div>
          </div>

          <div class="payment__total">
            <span>Total Price</span>
            <p>${{ formatPrice(totalPrice) }}</p>
          </div>
        </div>

        <button @click="setModal" class="payment__order-button" :disabled="!selectedPizza">
          Order Now
        </button>
      </div>
    </div>

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
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import pizzaList from '@/json/pizza-list.json'
import offerTag from '@/assets/images/ribbon.svg'
import successIcon from '@/assets/icons/success.svg'
import { usePizzaSize, useTopping, usePizza } from '@/stores/index'
import { formatPrice } from '@/lib/utils'
import type { Pizza } from '@/types'

const pizzas = pizzaList.data as Pizza[]
const selectedPizzaId = ref<number | null>(null)

const selectPizza = (pizza: Pizza) => {
  if (selectedPizzaId.value === pizza.id) {
    selectedPizzaId.value = null
    pizzaStore.resetPizza()
  } else {
    selectedPizzaId.value = pizza.id
    pizzaStore.setPizza(pizza)
  }

  toppingStore.resetTopping()
}

const pizzaSizeStore = usePizzaSize()
const toppingStore = useTopping()
const pizzaStore = usePizza()

const modal = ref(false)

const pizzaSize = computed(() => pizzaSizeStore.pizzaSize)
const toppings = computed(() => toppingStore.topping)
const selectedPizza = computed(() => {
  if (!selectedPizzaId.value) return null
  return pizzas.find((p) => p.id === selectedPizzaId.value) || null
})

const totalToppingPrice = computed(() => {
  return toppings.value.reduce((sum, item) => sum + item.price, 0)
})

const totalPrice = computed(() => {
  if (!selectedPizza.value) return 0

  const pizzaPrice = selectedPizza.value.discount.is_active
    ? selectedPizza.value.discount.final_price
    : selectedPizza.value.price

  return pizzaPrice + pizzaSize.value.extra_price + totalToppingPrice.value
})

const setModal = () => {
  modal.value = !modal.value
}

const resetPayment = () => {
  pizzaSizeStore.resetSize()
  toppingStore.resetTopping()
  pizzaStore.resetPizza()
  selectedPizzaId.value = null
}
</script>

<style src="@/styles/sections/choose-pizza.scss" lang="scss" scoped></style>
