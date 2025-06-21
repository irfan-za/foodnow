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
              'choose-pizza__card--active': pizzaStore.selectedPizzaId === pizza.id,
              'choose-pizza__card--offer': pizza.discount.is_active,
            }"
            @click="handlePizzaSelection(pizza.id)"
          >
            <!-- Display offer tag if pizza has an active discount -->
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
              <h2 class="choose-pizza__name">{{ pizza.name }}</h2>
              <div class="choose-pizza__price-wrapper">
                <span class="choose-pizza__price">
                  ${{
                    pizza.discount.is_active
                      ? formatPrice(pizza.discount.final_price)
                      : formatPrice(pizza.price)
                  }}
                </span>
                <!-- Display original price if pizza is discounted -->
                <span v-if="pizza.discount.is_active" class="choose-pizza__price--discount">
                  ${{ formatPrice(pizza.price) }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import pizzaList from '@/json/pizza-list.json'
import offerTag from '@/assets/images/ribbon.svg'
import { useTopping, usePizza } from '@/stores/index'
import { formatPrice } from '@/lib/utils'
import type { Pizza } from '@/types'

const pizzas = pizzaList.data as Pizza[]
const toppingStore = useTopping()
const pizzaStore = usePizza()

const handlePizzaSelection = (pizzaId: number) => {
  const selectedPizza = pizzas.find((pizza) => pizza.id === pizzaId)
  if (!selectedPizza) return

  // If the same pizza is clicked again, reset selection
  if (pizzaStore.selectedPizzaId === pizzaId) {
    pizzaStore.resetPizza()
    toppingStore.resetTopping()
    return
  }

  pizzaStore.setPizza(selectedPizza)

  if (toppingStore.toppings.length > 0) {
    manageToppingsOnPizzaChange(selectedPizza.toppings || [])
  }
}

//  Manages toppings when changing pizza selection
const manageToppingsOnPizzaChange = (allowedToppingIds: number[]) => {
  toppingStore.toppings.forEach((topping) => {
    if (!allowedToppingIds.includes(topping.id)) {
      toppingStore.toggleToppingSelection({ ...topping, is_active: false })
    }
  })
}
</script>

<style src="@/styles/pizza/choose-pizza.scss" lang="scss" scoped></style>
