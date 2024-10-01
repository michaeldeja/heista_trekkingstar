<template>
  <footer class="bg-black text-white">
    <!-- Erste Zeile: Kategorien -->
    <div class="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 py-8 px-4 md:px-8">
      <div v-for="{ key, subcategories } in categories" :key="key">
        <h3 class="font-bold mb-4">{{ $t(`categories.${key}.label`) }}</h3>
        <ul>
          <li v-for="{ key: subcategoryKey, link } in subcategories" :key="subcategoryKey">
            <SfLink :tag="NuxtLink" class="text-neutral-400 hover:text-white" variant="secondary" :to="link">
              {{ $t(`categories.${key}.subcategories.${subcategoryKey}`) }}
            </SfLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="font-bold mb-2">Sicher einkaufen</h3>
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/ssl-secure-connection.png"
          alt="SSL Secure Connection"
          class="w-[60px] md:w-[100px] h-auto"
        />
      </div>
    </div>

    <!-- Zweite Zeile: Partner und Zahlungsarten -->
    <div class="bg-white text-black py-8">
      <div class="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
        <!-- Partner -->
        <div>
          <h3 class="font-bold mb-4 text-center md:text-left">Unsere Partner</h3>
          <div class="flex justify-center md:justify-start space-x-4">
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/idealo.png"
              alt="Idealo"
              class="h-20"
            />
            <img src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/dhl.jpg" alt="DHL" class="h-20" />
          </div>
        </div>

        <!-- Zahlungsarten -->
        <div>
          <h3 class="font-bold mb-4 text-center md:text-left">Zahlungsarten</h3>
          <div class="flex justify-center md:justify-start space-x-4">
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/icon_paypal.png"
              alt="PayPal"
              class="h-8"
            />
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/icon_visa.png"
              alt="Visa"
              class="h-8"
            />
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/icon_mastercard.png"
              alt="Mastercard"
              class="h-8"
            />
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/icon_vorkasse.png"
              alt="Vorkasse"
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Dritte Zeile: Copyright und Firmenname -->
    <div class="bg-gray-100 py-4">
      <div class="max-w-screen-xl mx-auto text-center text-neutral-600">
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/logo/trekking-star-footer.png"
          alt="Logo Footer"
          class="h-12 mx-auto mb-5"
        />
        <p class="text-xs mb-1">
          * Alle Preise inkl. gesetzl. Mehrwertsteuer zzgl. Versandkosten und ggf. Nachnahmegebühren, wenn nicht anders
          beschrieben
        </p>
        <p class="text-xs">Copyright © 2024 trekkingstar.de - Alle Rechte vorbehalten</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SfLink } from '@storefront-ui/vue';
import { categories } from '~/mocks';

const NuxtLink = resolveComponent('NuxtLink');
</script>
