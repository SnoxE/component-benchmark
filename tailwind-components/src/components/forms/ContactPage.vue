<template>
  <div class="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <SectionHeading>
        <template #title>KONTAKT</template>
        <template #description>Skontaktuj się z nami</template>
      </SectionHeading>
      <p class="mt-2 text-lg/8 text-gray-600">
        Wypełnij formularz i wyślij zapytanie, a skontaktujemy się z Tobą
      </p>
    </div>
    <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label for="first-name" class="block text-sm/6 font-semibold text-gray-900">Imię</label>
          <div class="mt-2.5">
            <input
              id="first-name"
              type="text"
              name="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-orange"
            />
          </div>
        </div>
        <div>
          <label for="last-name" class="block text-sm/6 font-semibold text-gray-900">
            Nazwisko
          </label>
          <div class="mt-2.5">
            <input
              id="last-name"
              type="text"
              name="last-name"
              autocomplete="family-name"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-orange"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="question-title" class="block text-sm/6 font-semibold text-gray-900"
            >Temat zapytania</label
          >
          <div class="mt-2.5">
            <input
              id="question-title"
              type="text"
              name="question-title"
              autocomplete="organization"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-orange"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="email" class="block text-sm/6 font-semibold text-gray-900">Email</label>
          <div class="mt-2.5">
            <input
              id="email"
              type="email"
              name="email"
              autocomplete="email"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-orange"
            />
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="phone-number" class="block text-sm/6 font-semibold text-gray-900"
            >Numer telefonu</label
          >
          <div class="mt-2.5">
            <div
              class="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-primary-orange"
            >
              <input
                id="phone-number"
                type="text"
                name="phone-number"
                placeholder="+48 123 456 789"
                class="block min-w-0 grow py-2 px-3.5 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
              />
            </div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label for="message" class="block text-sm/6 font-semibold text-gray-900">Wiadomość</label>
          <div class="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows="4"
              class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-orange"
            ></textarea>
          </div>
        </div>
        <div class="flex gap-x-4 sm:col-span-2">
          <div class="flex h-6 items-center">
            <div
              class="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-primary-orange transition-colors duration-200 ease-in-out has-checked:bg-primary-orange has-focus-visible:outline-2"
            >
              <span
                class="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5"
              ></span>
              <input
                id="agree-to-policies"
                type="checkbox"
                name="agree-to-policies"
                aria-label="Agree to policies"
                class="absolute inset-0 appearance-none focus:outline-hidden"
              />
            </div>
          </div>
          <label for="agree-to-policies" class="text-sm/6 text-gray-600">
            Zaznaczając zgadzasz się z naszą
            <a href="#" class="font-semibold whitespace-nowrap text-primary-orange"
              >polityką prywatności</a
            >.
          </label>
        </div>
      </div>
      <div class="mt-10">
        <button
          type="submit"
          class="block w-full rounded-md px-3.5 py-2.5 text-center bg-primary-orange cursor-pointer text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-orange"
        >
          Wyślij
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/SectionHeading.vue'
</script>
