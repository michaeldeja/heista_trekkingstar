<template>
  <div class="max-w-screen-3xl mx-auto py-12">
    <div class="flex">
      <!-- Sidebar Navigation einbinden -->
      <SidebarNavigation />

      <!-- Inhalt der "Zahlarten und Versandinformationen" Seite -->
      <div class="flex-1 px-8">
        <h1 class="text-2xl font-bold mb-6">Zahlarten und Versandinformationen</h1>

        <h2 class="font-bold text-xl mb-4">Zahlarten</h2>
        <table class="min-w-full border-collapse mb-6">
          <thead>
            <tr>
              <th class="bg-black text-white py-2 px-4 text-left">Zahlart</th>
              <th class="bg-black text-white py-2 px-4 text-left">Informationen</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4">Vorkasse</td>
              <td class="py-2 px-4"></td>
            </tr>
            <tr>
              <td class="py-2 px-4">PayPal</td>
              <td class="py-2 px-4">Sie werden auf die PayPal-Seite weitergeleitet.</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Lastschrift</td>
              <td class="py-2 px-4">Nur für Kunden innerhalb der EU.</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Kreditkarte</td>
              <td class="py-2 px-4">Visa oder MasterCard.</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Rechnungskauf</td>
              <td class="py-2 px-4">
                Nur für Kunden innerhalb Deutschlands. Liefer- und Rechnungsadresse müssen dem Wohnsitz entsprechen.
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4">Ratenkauf</td>
              <td class="py-2 px-4">
                Nur für Kunden innerhalb Deutschlands. Liefer- und Rechnungsadresse müssen dem Wohnsitz entsprechen.
              </td>
            </tr>
            <tr>
              <td class="py-2 px-4">Amazon Pay</td>
              <td class="py-2 px-4">
                Melden Sie sich mit Ihren Amazon-Zugangsdaten an, und zahlen Sie einfach mit Ihren, bei Amazon
                hinterlegten Adress- und Zahlungsinformationen.
              </td>
            </tr>
          </tbody>
        </table>

        <h2 class="font-bold text-xl mb-4">Versandkosten innerhalb Deutschlands</h2>
        <table class="min-w-full border-collapse mb-6">
          <thead>
            <tr>
              <th class="bg-black text-white py-2 px-4 text-left">Versanddienstleister</th>
              <th class="bg-black text-white py-2 px-4 text-left">Versandkosten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4">DHL GoGreen</td>
              <td class="py-2 px-4">3,95€ (Versandkostenfrei ab 39,95€ Warenwert)</td>
            </tr>
            <tr>
              <td class="py-2 px-4">DPD</td>
              <td class="py-2 px-4">3,95€ (Versandkostenfrei ab 39,95€ Warenwert)</td>
            </tr>
          </tbody>
        </table>

        <h2 class="font-bold text-xl mb-4">Versandkosten außerhalb Deutschlands</h2>
        <table class="min-w-full border-collapse mb-6">
          <thead>
            <tr>
              <th class="bg-black text-white py-2 px-4 text-left">Lieferland</th>
              <th class="bg-black text-white py-2 px-4 text-left">Versandkosten</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="py-2 px-4">Österreich</td>
              <td class="py-2 px-4">7,95 € (Versandkostenfrei ab 39,95 € Warenwert)</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Belgien, Niederlande, Luxemburg</td>
              <td class="py-2 px-4">9,95 € (Versandkostenfrei ab 99,95 € Warenwert)</td>
            </tr>
            <tr>
              <td class="py-2 px-4">EU-Mitgliedstaaten</td>
              <td class="py-2 px-4">16,95 €</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Schweiz</td>
              <td class="py-2 px-4">25,17 €</td>
            </tr>
            <tr>
              <td class="py-2 px-4">Lichtenstein, Norwegen</td>
              <td class="py-2 px-4">29,95 €</td>
            </tr>
            <tr>
              <td class="py-2 px-4">International</td>
              <td class="py-2 px-4">79,95 €</td>
            </tr>
          </tbody>
        </table>

        <h2 class="font-bold text-xl mb-4">Unser Liefergebiet</h2>
        <p class="mb-4">
          Lieferungen sind an Lieferadressen in Deutschland, Schweiz, Norwegen, Lichtenstein, den EU-Mitgliedsstaaten
          sowie weltweit möglich, ausgeschlossen den Cayman Islands.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import SidebarNavigation from '@/components/SidebarNavigation.vue'; // Sidebar-Komponente importieren
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.grid {
  grid-template-columns: 1fr;
}
th {
  border: none; /* Entfernt die Trennlinien zwischen den Header-Zellen */
}
tr {
  border: none; /* Entfernt die Trennlinien zwischen den Zeilen */
}
@media (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
