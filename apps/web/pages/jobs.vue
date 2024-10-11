<template>
    <div class="max-w-screen-3xl mx-auto py-12">
      <div class="flex">
        <!-- Sidebar Navigation einbinden -->
        <SidebarNavigation />
  
        <!-- Inhalt der "Jobs" Seite -->
        <div class="flex-1 px-8">
          <h1 class="text-2xl font-bold mb-6">Stellenangebote bei Trekking Star</h1>
          <p class="mb-4">Das bieten wir als Arbeitgeber:</p>
          <p class="mb-4">
            Trekking Star ist ein inhabergeführtes Unternehmen und überzeugt durch ein gutes Betriebsklima im familiären
            Charakter. Unsere Angestellten bieten wir die Möglichkeit, sich beruflich und fachlich weiterzuentwickeln. Ein
            besonderes Augenmerk wird außerdem in Weiterbildung sowie in die enge Logistik in den Bereichen der Ausbildung
            von Azubis im Verkauf und Lagerlogistik gelegt.
          </p>
          <p class="mb-4">Das fordern wir von unseren Angestellten:</p>
          <p class="mb-4">
            Wir suchen engagierte und zuverlässige Mitarbeiter:innen, die unser Team auf vielfältige Weise unterstützen.
            Zudem setzen wir auf Flexibilität und Teamgeist. Unsere neuen Mitarbeiter:innen werden praxisnah in unser
            bestehendes Team integriert und können mit uns in den jeweiligen Bereichen wachsen.
          </p>
  
          <h2 class="font-bold text-lg mb-4">Offene Stellen:</h2>
          <div class="grid grid-cols-1 gap-6">
            <!-- Job-Boxen -->
            <div class="border p-6">
              <h3 class="font-bold text-xl mb-2">Fachkraft für Lagerlogistik / Fachlagerist/in (Ausbildung)</h3>
              <p class="mb-2">
                <strong>Das erwartet Dich:</strong> Als Fachkraft für Lagerlogistik bist Du verantwortlich für die gesamte
                physische Logistik. Du nimmst Lieferungen entgegen, prüfst sie und sorgst dafür, dass die Waren
                ordnungsgemäß eingelagert werden. Weiterhin bist Du für die Kommissionierung und den Versand von
                Lagerbeständen verantwortlich.
              </p>
              <p class="mb-2">
                <strong>Das solltest Du mitbringen:</strong> Spaß an Logistik und am Umgang mit Technik. Außerdem solltest
                Du gut im Team arbeiten können, um den täglichen Herausforderungen gerecht zu werden.
              </p>
              <p><strong>Arbeitsort:</strong> Gelsenkirchen, Vinckestraße 14, 45862 Gelsenkirchen</p>
            </div>
  
            <div class="border p-6">
              <h3 class="font-bold text-xl mb-2">Kaufmann/-frau für Büromanagement (Ausbildung)</h3>
              <p class="mb-2">
                <strong>Das erwartet Dich:</strong> Als Kaufmann/-frau für Büromanagement kümmerst Du Dich um die
                Kommunikationsprozesse und die bürokratischen Aufgaben in unserem Unternehmen. Du hilfst dabei, die
                Dokumentation zu pflegen und bist im Kontakt mit Kunden und Lieferanten.
              </p>
              <p class="mb-2">
                <strong>Das solltest Du mitbringen:</strong> Freude an der Arbeit im Team und Kontakt mit Menschen. Du
                solltest außerdem eine sorgfältige Arbeitsweise besitzen und über gute organisatorische Fähigkeiten
                verfügen.
              </p>
              <p><strong>Arbeitsort:</strong> Gelsenkirchen, Vinckestraße 14, 45862 Gelsenkirchen</p>
            </div>
  
            <div class="border p-6">
              <h3 class="font-bold text-xl mb-2">IT-System-Kaufmann/-frau (Ausbildung)</h3>
              <p class="mb-2">Diese Stelle wird zur Zeit nicht besetzt.</p>
            </div>
  
            <div class="border p-6">
              <h3 class="font-bold text-xl mb-2">Kaufmann/-frau im E-Commerce (Ausbildung)</h3>
              <p class="mb-2">
                <strong>Das erwartet Dich:</strong> Du kümmerst Dich als Kaufmann/-frau im E-Commerce um die Verwaltung
                und Pflege unseres Online-Shops und die dazugehörigen Daten. Dies beinhaltet die Arbeit mit Web-Inhalten,
                Produktdaten und den Bestellvorgängen. Du wirst außerdem bei der Vermarktung unserer Produkte helfen.
              </p>
              <p class="mb-2">
                <strong>Das solltest Du mitbringen:</strong> Spaß an Technik und neuen Medien sowie Interesse am
                Online-Handel. Du solltest kommunikativ und zuverlässig sein.
              </p>
              <p><strong>Arbeitsort:</strong> Gelsenkirchen, Vinckestraße 14, 45862 Gelsenkirchen</p>
            </div>
  
            <div class="border p-6">
              <h3 class="font-bold text-xl mb-2">Kaufmann/-frau im Einzelhandel / Verkäufer/in (Ausbildung)</h3>
              <p class="mb-2">Diese Stelle wird zur Zeit nicht besetzt.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import SidebarNavigation from '@/components/SidebarNavigation.vue';
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
  