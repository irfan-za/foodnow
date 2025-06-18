<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import sizePizza from '@/json/size-list.json'
import toppingList from '@/json/topping-list.json'
import { usePizzaSize } from '@/stores/counter'

const optionSize = ref(sizePizza.data)
const pizzaSizeStore = usePizzaSize()

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
    selectedSize.value = optionSize.value.find((size) => size.id === newValue.id) || null
  },
  { deep: true },
)

onMounted(() => {
  if (selectedSize.value) {
    pizzaSizeStore.setSize(selectedSize.value)
  }
})

const toppings = ref(toppingList.data)
const selectedToppings = ref<string[]>([])

const handleToppingChange = (toppingId: string) => {
  const index = selectedToppings.value.indexOf(toppingId)
  if (index === -1) {
    selectedToppings.value.push(toppingId)
  } else {
    selectedToppings.value.splice(index, 1)
  }
}
</script>

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
          :class="{ 'is-selected': selectedToppings.includes(topping.id) }"
        >
          <input
            type="checkbox"
            :value="topping.id"
            v-model="selectedToppings"
            class="custom-checkbox__input"
          />
          <span class="custom-checkbox__text">{{ topping.name }}</span>
          <span v-if="topping.price > 0" class="custom-input__price">(+${{ topping.price }})</span>
        </label>
      </div>
    </div>
  </section>
</template>

<style src="@/styles/sections/custom-pizza.scss" scoped></style>
