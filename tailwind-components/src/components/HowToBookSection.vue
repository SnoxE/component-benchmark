<template>
  <SectionHeading>
    <template #title>JAK TO DZIAŁA</template>
    <template #description>Zarezerwuj wizytę w 5 prostych krokach</template>
  </SectionHeading>
  <div class="max-w-screen-xl w-full mx-auto px-8 pb-20">
    <div class="grid xs:grid-cols-1 md:grid-cols-5 gap-7">
      <HowToBookElement
        v-for="(step, index) in stepList"
        :key="index"
        :icon="step.icon"
        :variant="step.variant"
      >
        <template #heading>{{ step.heading }}</template>
        <template #description>{{ step.description }}</template>
      </HowToBookElement>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
import HowToBookElement from './HowToBookElement.vue'

const stepList = [
  {
    icon: new URL('@/assets/images/icons/select_item.svg', import.meta.url).href,
    heading: 'Wybierz usługę',
    description: 'Wybierz odpowiednią usługę z naszej oferty',
    variant: 'white',
  },
  {
    icon: new URL('@/assets/images/icons/car_with_tick.svg', import.meta.url).href,
    heading: 'Wybierz samochód',
    description: 'Wybierz samochód, który chcesz do nas zapisać',
    variant: 'light-orange',
  },
  {
    icon: new URL('@/assets/images/icons/calendar.svg', import.meta.url).href,
    heading: 'Wybierz datę i godzinę',
    description: 'Wybierz dogodną dla siebie datę i godzinę realizacji usługi',
    variant: 'orange',
  },
  {
    icon: new URL('@/assets/images/icons/confirm_reservation.svg', import.meta.url).href,
    heading: 'Potwierdź rezerwację',
    description: 'Kliknij przycisk i zarezerwuj usługę',
    variant: 'light-orange',
  },
  {
    icon: new URL('@/assets/images/icons/location.svg', import.meta.url).href,
    heading: 'Oddaj auto nam',
    description: 'W wyznaczonym dniu zostaw auto u nas i poczekaj aż zacznie dziać się magia',
    variant: 'white',
  },
]
</script>
