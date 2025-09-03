<template>
  <section id="about" class="py-5">
    <div class="container-xl">
      <SectionHeading>
        <template #title>O NAS</template>
        <template #description>Poznaj nas lepiej</template>
      </SectionHeading>

      <div class="row align-items-center gy-4">
        <div class="col-12 col-sm-6 text-center">
          <img
            src="@/assets/images/orange_lamborghini_huracan-750.webp"
            alt="Orange Lamborghini Huracan"
            class="img-fluid"
          />
        </div>
        <div class="col-12 col-sm-6">
          <p class="text-secondary fs-5">
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
