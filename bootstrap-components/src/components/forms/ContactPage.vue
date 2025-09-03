<template>
  <div class="container pb-5 pt-96">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="text-center mb-5">
          <SectionHeading>
            <template #title>KONTAKT</template>
            <template #description>Skontaktuj się z nami</template>
          </SectionHeading>
          <p class="mt-2 fs-5 text-secondary">
            Wypełnij formularz i wyślij zapytanie, a skontaktujemy się z Tobą
          </p>
        </div>

        <form @submit.prevent="handleSubmit" class="row g-3">
          <div class="col-md-6">
            <label for="first-name" class="form-label">Imię</label>
            <input type="text" id="first-name" name="first-name" class="form-control" />
          </div>

          <div class="col-md-6">
            <label for="last-name" class="form-label">Nazwisko</label>
            <input type="text" id="last-name" name="last-name" class="form-control" />
          </div>

          <div class="col-12">
            <label for="question-title" class="form-label">Temat zapytania</label>
            <input type="text" id="question-title" name="question-title" class="form-control" />
          </div>

          <div class="col-12">
            <label for="email" class="form-label">Email</label>
            <input type="email" id="email" name="email" class="form-control" />
          </div>

          <div class="col-12">
            <label for="phone-number" class="form-label">Numer telefonu</label>
            <input
              type="text"
              id="phone-number"
              name="phone-number"
              placeholder="+48 123 456 789"
              class="form-control"
            />
          </div>

          <div class="col-12">
            <label for="message" class="form-label">Wiadomość</label>
            <textarea id="message" name="message" rows="4" class="form-control"></textarea>
          </div>

          <div class="col-12 d-flex align-items-start">
            <div class="form-check me-2">
              <input
                class="form-check-input"
                type="checkbox"
                id="agree-to-policies"
                name="agree-to-policies"
              />
            </div>
            <label for="agree-to-policies" class="form-check-label text-secondary">
              Zaznaczając zgadzasz się z naszą
              <a href="#" class="fw-semibold text-primary text-decoration-none"
                >polityką prywatności</a
              >.
            </label>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary w-100 py-2">Wyślij</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '../SectionHeading.vue'

const handleSubmit = () => {
  console.log('Form submitted')
}
</script>

<style scoped>
.pt-96 {
  padding-top: 6rem !important;
}

.form-control {
  background-color: #fff !important;
  color: #575757 !important;
  border: 1px solid #bdbdbd !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
  border-radius: 0.375rem;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-control:focus {
  border-color: #f97316 !important;
  box-shadow: 0 0 0 0.2rem rgba(249, 115, 22, 0.25) !important;
  outline: none !important;
}

.form-label {
  color: #575757 !important;
}

.form-check-input {
  background-color: #fff !important;
  border: 1px solid #bdbdbd !important;
}

.form-check-input:checked {
  background-color: #f97316 !important;
  border-color: #f97316 !important;
}

.form-check-input:focus {
  border-color: #f97316 !important;
  box-shadow: 0 0 0 0.2rem rgba(249, 115, 22, 0.25) !important;
}

.form-check-label {
  color: #575757 !important;
}

.btn-primary {
  background-color: #f97316 !important;
  border-color: #f97316 !important;
}

.btn-primary:hover {
  background-color: #e36412 !important;
  border-color: #e36412 !important;
}
</style>
