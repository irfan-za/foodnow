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

const selectPizza = (pizza: Pizza) => {
  if (pizzaStore.selectedPizzaId === pizza.id) {
    pizzaStore.resetPizza()
  } else {
    pizzaStore.selectedPizzaId = pizza.id
    pizzaStore.setPizza(pizza)
  }

  toppingStore.resetTopping()
}
</script>

<style src="@/styles/pizza/choose-pizza.scss" lang="scss" scoped></style>
