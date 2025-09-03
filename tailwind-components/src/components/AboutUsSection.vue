<template>
  <section id="about">
    <div class="flex flex-col max-w-screen-xl w-full mx-auto px-8 pb-20">
      <!-- <h2
      class="mb-10 text-title mx-auto after:block after:h-0.5 after:bg-primary-orange after:rounded-full after:mt-1"
    >
      O Nas
    </h2> -->
      <SectionHeading>
        <template #title>O NAS</template>
        <template #description>Poznaj nas lepiej</template>
      </SectionHeading>
      <div class="flex flex-col gap-4 sm:grid sm:grid-cols-2 items-center right-0">
        <div class="mx-auto">
          <img
            src="@/assets/images/orange_lamborghini_huracan-750.webp"
            alt="Orange Lamborghini Huracan"
          />
        </div>
        <div>
          <p class="text-dark-gray text-lg">
            Jesteśmy zespołem pasjonatów motoryzacji, którzy z najwyższą starannością dbają o wygląd
            i kondycję Twojego samochodu. Nasze studio detailingowe oferuje kompleksowe usługi
            pielęgnacji i ochrony pojazdów - od dokładnego mycia, przez renowację lakieru, po
            profesjonalne zabezpieczenia powłokami ochronnymi. Stawiamy na najwyższą jakość,
            precyzję oraz indywidualne podejście do każdego auta, aby zawsze wyglądało jak nowe.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from './SectionHeading.vue'
</script>
