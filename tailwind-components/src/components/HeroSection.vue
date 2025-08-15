<script setup></script>

<template>
  <section
    class="flex w-full h-screen max-h-[600px] md:max-h-[765px] bg-gradient-to-r from-title from-40% to-white to-40% mb-14"
  >
    <div class="container mx-auto relative max-w-screen-xl">
      <div class="flex flex-col md:flex-row items-start md:items-center h-full justify-end">
        <div
          class="flex w-full py-12 flex-col bg-black/75 md:bg-black/15 px-8 md:absolute sm:z-10 sm:left-0"
        >
          <h1 class="text-white pb-4">
            Enjoy your life with <br />
            our comfortable cars.
          </h1>
          <p class="text-light-gray-text body-text-lg pb-12 text">
            Lorem ipsum dolor sit consectetur <br />
            Hic ducimus, omnis modi
          </p>
          <div class="mx-auto md:mx-0">
            <router-link
              to="/about"
              class="bg-primary-orange py-3 px-8 sm:px-16 button-text-xl text-title rounded-2xl"
            >
              Explore Now
            </router-link>
          </div>
        </div>
        <div class="">
          <img src="@/assets/images/amg_gt3.png" alt="Car Image" />
        </div>
      </div>
    </div>
  </section>
</template>
