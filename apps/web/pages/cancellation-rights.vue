<template>
  <div class="max-w-screen-3xl mx-auto py-12">
    <!-- Hauptinhalt Sektion -->
    <div class="flex">
      <!-- Linke Sidebar -->
      <aside class="w-1/5 bg-gray-100 p-6 self-start">
        <h2 class="font-bold text-xl mb-4">Informationen</h2>
        <ul class="space-y-2">
          <li><NuxtLink to="/ueber-uns" class="text-black">Über uns</NuxtLink></li>
          <li><NuxtLink to="/jobs" class="text-black">Jobs</NuxtLink></li>
          <li><NuxtLink to="/terms-and-conditions" class="text-black">AGB</NuxtLink></li>
          <li><NuxtLink to="/datenschutz" class="text-black">Datenschutz</NuxtLink></li>
          <li><NuxtLink to="/retoure" class="text-black">Rücksendungen</NuxtLink></li>
          <li><NuxtLink to="/shipping" class="text-black">Zahlarten und Versand</NuxtLink></li>
          <li><NuxtLink to="/kontakt" class="text-black">Kontakt</NuxtLink></li>
          <li><NuxtLink to="/impressum" class="text-black">Impressum</NuxtLink></li>
        </ul>
      </aside>

      <!-- Inhalt der "Cancellation Rights" Seite -->
      <div class="flex-1 px-8">
        <div class="w-full p-5 overflow-x-auto" v-html="getHTMLTexts()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, getLegalTexts } = useLegalInformation();

definePageMeta({
  pageType: 'static',
});

await getLegalTexts({
  type: 'CancellationRights',
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}

.grid {
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
