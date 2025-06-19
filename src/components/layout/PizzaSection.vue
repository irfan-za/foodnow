<template>
  <div class="pizza-section">
    <div class="pizza-section__content">
      <div class="pizza-section__choose">
        <ChoosePizzaSection />
      </div>
      <div class="pizza-section__custom">
        <CustomPizzaSection />
      </div>
      <div class="pizza-section__payment">
        <PaymentSummary />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChoosePizzaSection from '@/components/pizza/ChoosePizza.vue'
import CustomPizzaSection from '@/components/pizza/CustomPizza.vue'
import PaymentSummary from '@/components/pizza/PaymentSummary.vue'
</script>

<style src="@/styles/layout/pizza.scss" lang="scss" scoped></style>
