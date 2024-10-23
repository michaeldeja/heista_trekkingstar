<template>
  <div class="max-w-screen-3xl px-3 md:px-6 lg:px-10 mx-auto py-12">
    <div class="flex">
      <!-- Sidebar Navigation einbinden -->
      <SidebarNavigation />

      <!-- Inhalt der "Impressum" Seite -->
      <div class="flex-1 pl-[30px]">
        <h1 class="text-2xl font-bold mb-6">Impressum</h1>
        <p class="mb-4">
          Trekking Star e.K.<br />
          Inhaber: Marco Frumento<br />
          Vierhöfeweg 14<br />
          45892 Gelsenkirchen<br />
          Telefon: 0209/ 72847<br />
          Fax: 0209/ 7901366<br />
          E-Mail: <a href="mailto:info@trekkingstar.de" class="text-blue-500">info@trekkingstar.de</a>
        </p>
        <p class="mb-4">
          Registergericht: Amtsgericht Gelsenkirchen<br />
          Registernummer: HR A 1934<br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE181862667
        </p>
        <p class="mb-4">
          Bankverbindung:<br />
          Hypovereinsbank Düsseldorf<br />
          IBAN: DE90302201900340653408<br />
          Swift/Bic: HYVEDEMM414
        </p>
        <p class="mb-4">
          Unter folgendem Link gelangen Sie auf die Plattform der Europäischen Kommission zur Online-Streitbeilegung
          (OS):
          <a href="http://ec.europa.eu/odr/" target="_blank" class="text-blue-500">http://ec.europa.eu/odr/</a>
        </p>
        <p class="mb-4">
          Für allgemeine Verbraucherprobleme ist grundsätzlich die Allgemeine Verbraucherschlichtungsstelle des Zentrums
          für Schlichtung e. V. zuständig, welche Sie unter
          <a href="https://www.verbraucher-schlichter.de" target="_blank" class="text-blue-500"
            >https://www.verbraucher-schlichter.de</a
          >
          oder unter folgender Adresse erreichen können: Straßburger Straße 8, 77694 Kehl am Rhein.
        </p>
        <p class="mb-4">
          Wir weisen allerdings darauf hin, dass wir zur Teilnahme am Streitbeilegungsverfahren weder bereit noch dazu
          verpflichtet sind.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SidebarNavigation from '@/components/SidebarNavigation.vue'; // Sidebar Komponente importieren
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
