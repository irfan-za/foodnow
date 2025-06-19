<template>
  <section class="custom-content">
    <h3 class="custom-pizza__title">Custom Pizza</h3>

    <div class="custom-pizza__section">
      <p>Size</p>
      <div class="custome-size__option">
        <label
          v-for="item in optionSize"
          :key="item.id"
          class="custom-radio-label"
          :for="`size-${item.id}`"
        >
          <input
            :id="`size-${item.id}`"
            class="custom-radio__input"
            type="radio"
            :value="item"
            v-model="selectedSize"
          />
          <span class="checkmark"></span>
          {{ item.name }}
          <span v-if="item.extra_price !== 0" class="custom-input__price">
            (+${{ item.extra_price }})
          </span>
        </label>
      </div>
    </div>

    <div class="custom-pizza__section">
      <p>Toppings</p>
      <div class="custom-toppings__grid">
        <label
          v-for="topping in toppings"
          :key="topping.id"
          class="custom-checkbox-label"
          :class="{
            'is-selected': isToppingSelected(topping.id),
            'is-disabled': !isToppingAllowed(topping.id),
          }"
          @click.prevent="handleToppingClick(topping)"
        >
          <input
            type="checkbox"
            :value="topping.id"
            :checked="isToppingSelected(topping.id)"
            :disabled="!isToppingAllowed(topping.id)"
            class="custom-checkbox__input"
          />
          <span class="custom-checkbox__text">{{ topping.name }}</span>
        </label>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import sizePizza from '@/json/size-list.json'
import toppingList from '@/json/topping-list.json'
import { usePizzaSize, useTopping, usePizza } from '@/stores/index'
import type { Topping } from '@/types'

const optionSize = ref(sizePizza.data)
const pizzaSizeStore = usePizzaSize()
const toppingStore = useTopping()
const pizzaStore = usePizza()

const selectedSize = ref(
  optionSize.value.find((size) => size.id === pizzaSizeStore.pizzaSize.id) ||
    optionSize.value[0] ||
    null,
)

watch(selectedSize, (newValue) => {
  if (newValue) {
    pizzaSizeStore.setSize(newValue)
  }
})

watch(
  () => pizzaSizeStore.pizzaSize,
  (newValue) => {
    selectedSize.value =
      optionSize.value.find((size) => size.id === newValue.id) || optionSize.value[0]
  },
  { deep: true },
)

onMounted(() => {
  if (selectedSize.value) {
    pizzaSizeStore.setSize(selectedSize.value)
  }
})

const toppings = ref(toppingList.data)

const isToppingAllowed = (toppingId: number) => {
  return pizzaStore.pizza.toppings?.includes(toppingId) || false
}

const isToppingSelected = (toppingId: number) => {
  return toppingStore.topping.some((item) => item.id === toppingId)
}

const handleToppingClick = (topping: Topping) => {
  if (isToppingAllowed(topping.id)) {
    toppingStore.setTopping(topping)
  }
}
</script>

<style src="@/styles/sections/custom-pizza.scss" scoped></style>
