<template>
  <section class="hero-section position-relative mb-5">
    <div class="container-xl h-100">
      <div class="row h-100 align-items-center">
        <!-- Text -->
        <div class="col-12 col-md-5 hero-content">
          <div class="content-wrapper text-center text-md-start">
            <h1 class="text-white mb-3">
              Odkryj perfekcyjny <br />
              wygląd swojego auta
            </h1>
            <p class="text-light mb-4 fs-5">
              Profesjonalna pielęgnacja, renowacja <br />
              i ochrona Twojego samochodu.
            </p>
            <router-link to="/#about" class="btn btn-primary btn-lg px-4"> Odkrywaj </router-link>
          </div>
        </div>

        <!-- Image -->
        <div class="col-12 col-md-8 offset-md-4 image-container">
          <img
            src="@/assets/images/amg_gt3-909.webp"
            alt="Car Image"
            class="hero-img"
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
  background-color: #ff6d01;
  border-color: #ff6d01;
  border-radius: 0.375rem;
}
.btn-primary:hover {
  background-color: #ff6d01;
  border-color: #e66000;
}

/* Mobile overrides */
@media (max-width: 767px) {
  .hero-section {
    background: #000 !important; /* fully black */
    max-height: unset;
  }

  .hero-content {
    position: relative;
    text-align: center;
    left: 0;
    margin-top: auto;
    margin-bottom: 1.5rem; /* places text just above image */
  }

  .image-container {
    margin: 0;
    padding: 0;
  }

  .hero-img {
    display: block;
    width: 100vw; /* full viewport width */
    height: auto;
    margin: 0;
    object-fit: cover;
  }
}
</style>
