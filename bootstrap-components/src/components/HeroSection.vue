<template>
  <div
    class="position-relative w-100 d-flex justify-content-center overlay-container hero-picture z-0"
  >
    <picture>
      <source media="(max-width: 714px)" srcset="@/assets/Taycan_wash_edited_mobile.jpg" />
      <source media="(min-width: 715px)" srcset="@/assets/Taycan_wash_edited.jpg" />
      <img
        src="@/assets/Taycan_wash_edited.jpg"
        alt="Man manually washing a Porsche Taycan"
        class="img-fluid"
      />
    </picture>

    <div
      class="position-absolute top-50 start-0 w-100 d-flex flex-column justify-content-center translate-middle-y z-2"
    >
      <h1
        class="d-flex justify-content-center p-4 text-center fw-bold fs-1 text-white display-responsive"
      >
        Perfekcja w każdym detalu. <br />
        Twoje auto, nasza pasja.
      </h1>
      <div class="container text-center">
        <div class="d-flex justify-content-center">
          <button class="btn btn-outline-orange mx-4 px-4 w-160 fw-semibold">Nasza oferta</button>
          <button class="btn btn-outline-orange mx-4 px-4 w-160 fw-semibold">Rezerwuj</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.overlay-container::before {
  content: '';
  position: absolute;
  inset: 0;
  background-color: black;
  opacity: 0.6;
}

.hero-picture {
  z-index: 0;
}

.btn-outline-orange {
  color: white;
  border-color: #f97316;
}

.btn-outline-orange:hover {
  background-color: #f97316;
  color: white;
}

.w-160 {
  width: 160px;
}
</style>
