<script setup></script>

<template>
  <section
    class="flex w-full h-screen max-h-[765px] bg-gradient-to-r from-title from-40% to-white to-40%"
  >
    <div class="container mx-auto relative max-w-screen-xl">
      <div class="flex items-center h-full justify-end">
        <div class="flex py-[3rem] flex-col bg-black/15 pr-8 absolute z-10 left-0">
          <h1 class="text-white pb-4">
            Enjoy your life with <br />
            our comfortable cars.
          </h1>
          <p class="text-light-gray-text body-text-lg pb-12 text">
            Lorem ipsum dolor sit consectetur <br />
            Hic ducimus, omnis modi
          </p>
          <div>
            <button
              class="bg-primary-orange py-[0.75rem] px-[4rem] button-text-xl text-title rounded-2xl"
            >
              Explore Now
            </button>
          </div>
        </div>
        <div class="">
          <img src="@/assets/images/amg_gt3.png" alt="Car Image" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.xd {
  background: linear-gradient(to right, #000000 50%, #ffffff 50%);
}
</style>
