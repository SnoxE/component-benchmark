<script setup></script>

<template>
  <section class="py-5 bg-dark text-white">
    <div class="container">
      <div class="row mb-5">
        <div class="row align-items-center">
          <h2 class="section-title">O NAS</h2>
        </div>
        <div class="col-lg-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum optio alias
            accusamus magnam iure error minus corporis dolores provident, odit maxime obcaecati
            iusto impedit repudiandae voluptas, sapiente dolorem saepe?
          </p>
        </div>

        <div class="col-lg-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illum optio alias
            accusamus magnam iure error minus corporis dolores provident, odit maxime obcaecati
            iusto impedit repudiandae voluptas, sapiente dolorem saepe?
          </p>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <img
            src="@\assets\White_GT3_RS_sticker_side_profile_with_traffic_lights.jpg"
            alt="Porsche 911 GT3 RS"
            class="img-fluid w-100"
          />
        </div>
        <div class="col-lg-6">
          <div class="row"><h2 class="section-title">KONTAKT</h2></div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor in accusamus,
            maxime facere voluptate est vel quaerat veritatis sunt asperiores, repellendus deserunt
            labore reiciendis ipsam hic aut nulla necessitatibus.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.section-title {
  position: relative;
  display: inline-block;
  font-weight: bold;
  text-transform: uppercase;
}

.section-title::after {
  content: '';
  display: block;
  width: 100%;
  height: 2px;
  background-color: white;
  margin-top: 0.3rem;
}
</style>
