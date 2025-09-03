<template>
  <section class="hero-section position-relative mb-5">
    <div class="container-xl h-100">
      <div class="row h-100 align-items-center">
        <div class="col-12 col-md-5 hero-content">
          <div class="content-wrapper">
            <h1 class="text-white mb-3">
              Odkryj perfekcyjny <br />
              wygląd swojego auta
            </h1>
            <p class="text-light mb-4 fs-5">
              Profesjonalna pielęgnacja, renowacja <br />
              i ochrona Twojego samochodu.
            </p>
            <div class="text-start">
              <router-link to="/#about" class="btn btn-primary btn-lg px-4"> Odkrywaj </router-link>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8 offset-md-4 image-container">
          <img
            src="@/assets/images/amg_gt3-909.webp"
            alt="Car Image"
            class="img-fluid"
            rel="preload"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  height: 100vh;
  max-height: 600px;
  background: linear-gradient(to right, #000000 50%, #ffffff 50%);
  overflow: hidden;
}

@media (min-width: 768px) {
  .hero-section {
    max-height: 765px;
  }
}

.hero-content {
  position: absolute;
  left: 10%;
  z-index: 2;
}

.image-container {
  position: relative;
  z-index: 1;
}

.btn-primary {
  background-color: #ff6b00;
  border-color: #ff6b00;
  border-radius: 0.375rem;
}

.btn-primary:hover {
  background-color: #e66000;
  border-color: #e66000;
}

@media (max-width: 767px) {
  .hero-content {
    position: relative;
  }

  .image-container {
    margin: 0;
  }
}
</style>
