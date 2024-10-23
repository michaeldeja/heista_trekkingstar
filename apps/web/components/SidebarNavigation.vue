<template>
  <aside class="w-1/5 bg-gray-100 p-6 self-start">
    <h2 class="font-bold text-xl mb-4">Informationen</h2>
    <ul class="space-y-2">
      <li><NuxtLink to="/ueber_uns" class="text-black">Über uns</NuxtLink></li>
      <li><NuxtLink to="/jobs" class="text-black">Jobs</NuxtLink></li>
      <li><NuxtLink to="/legal-disclosure" class="text-black">AGB</NuxtLink></li>
      <li><NuxtLink to="/privacy-policy" class="text-black">Datenschutz</NuxtLink></li>
      <li><NuxtLink to="/retoure" class="text-black">Rücksendungen</NuxtLink></li>
      <li><NuxtLink to="/zahlarten-und-versandinformationen" class="text-black">Zahlarten und Versand</NuxtLink></li>
      <li><NuxtLink to="/contact" class="text-black">Kontakt</NuxtLink></li>
      <li><NuxtLink to="/impressum" class="text-black">Impressum</NuxtLink></li>
    </ul>

    <!-- PayPal Banner -->
    <div class="mt-6 border p-4 text-center">
      <div class="message__content">
        <img
          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg"
          alt="PayPal"
          class="mx-auto mb-4"
        />
        <div class="message__messaging">
          <div class="message__headline">
            <span>Jetzt kaufen, später bezahlen.</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
// Keine zusätzliche Logik notwendig
</script>

<style scoped>
.message__content {
  background-color: #003087;
  color: white;
  padding: 20px;
  border-radius: 5px;
}

.message__headline {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.message__sub-headline {
  font-size: 14px;
  color: #ffffff;
}

.message__content img {
  max-width: 80px;
}
</style>
