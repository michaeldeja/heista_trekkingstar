<template>
  <div class="max-w-screen-3xl px-3 md:px-6 lg:px-10 mx-auto py-12">
    <div class="flex">
      <!-- Sidebar Navigation einbinden -->
      <SidebarNavigation />

      <!-- Dynamischer Hauptinhalt -->
      <div class="flex-1 pl-[30px]">
        <div v-html="getHTMLTexts()" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SidebarNavigation from '@/components/SidebarNavigation.vue'; // Sidebar Komponente importieren

const { data, getLegalTexts } = useLegalInformation();

definePageMeta({
  pageType: 'static',
});

await getLegalTexts({
  type: 'TermsConditions', // Hier kannst du den Typ ändern, z.B. für Impressum oder andere rechtliche Texte
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
