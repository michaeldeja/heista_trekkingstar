<template>
  <div class="max-w-screen-3xl mx-auto py-12">
    <div class="flex">
      <!-- Sidebar Navigation einbinden -->
      <SidebarNavigation />

      <!-- Inhalt der "Datenschutz" Seite -->
      <div class="flex-1 px-8">
        <h1 class="text-2xl font-bold mb-6">Datenschutzerklärung</h1>
        <p class="mb-4">
          Der Schutz Ihrer Daten ist uns ein wichtiges Anliegen. Wir erheben, speichern und verwenden Ihre Daten
          selbstverständlich nur entsprechend den gesetzlichen Vorgaben. Nachfolgend werden Sie über die Art und Weise
          der Erhebung, Speicherung und Verarbeitung Ihrer Daten durch uns informiert.
        </p>
        <h2 class="font-bold text-xl mb-4">I. Verantwortlicher</h2>
        <p class="mb-4">Verantwortlicher für die Verarbeitung Ihrer Daten ist:</p>
        <p class="mb-4">
          Trekking Star e.K.<br />
          Marco Frumento<br />
          Vierhöfeweg 14<br />
          45892 Gelsenkirchen<br />
          Telefon: 0209-72847<br />
          Fax: 0209-9478306<br />
          E-Mail: info@trekkingstar.de
        </p>

        <h2 class="font-bold text-xl mb-4">II. Betroffenenrechte</h2>
        <p class="mb-4">
          1) Sie haben das Recht gemäß Art. 15 DSGVO auf Auskunft über die Sie betreffende von uns verarbeiteten
          personenbezogenen Daten und auf die in Art. 15 Abs. 1 lit. a)-h) DSGVO aufgeführten Informationen.
          Insbesondere können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der personenbezogenen Daten, die
          Kategorien von Empfängern, gegenüber denen Ihre Daten offengelegt wurden oder werden, die geplante
          Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung, Einschränkung der Verarbeitung oder
          Widerspruch, das Bestehen eines Beschwerderechts, die Herkunft Ihrer Daten, sofern diese nicht bei uns erhoben
          wurden, sowie über das Bestehen einer automatisierten Entscheidungsfindung einschließlich Profiling und ggf.
          aussagekräftigen Informationen zu deren Einzelheiten verlangen („Auskunftsrecht“).
        </p>
        <p class="mb-4">
          2) Widerspruchsrecht: Erfolgt eine Datenverarbeitung auf Grundlage von berechtigten Interessen gemäß Art. 6
          Abs. 1 lit. f) DSGVO, haben Sie ferner das Recht, der Verarbeitung uns gegenüber gemäß Art. 21 DSGVO jederzeit
          zu widersprechen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der
          Widerspruch gegen Direktwerbung oder ein damit in Verbindung stehendes Profiling richtet.
        </p>

        <h2 class="font-bold text-xl mb-4">
          III. Verarbeitung Ihrer personenbezogenen Daten und Zweck der Verarbeitung
        </h2>
        <p class="mb-4">
          1) Ihr Besuch unserer Webseite: Wenn Sie unsere Webseite aufrufen, werden durch den von Ihnen verwendeten
          Browser automatisch Informationen an den Server unserer Webseite gesendet.
        </p>
        <p class="mb-4">
          2) Vertragsabwicklung: Wenn Sie in diesem Onlineshop Produkte kaufen, geben Sie uns im Bestellvorgang Ihre
          personenbezogenen Daten bekannt, z.B. durch Eingabe Ihrer Daten im Rahmen der Eröffnung eines Kundenkontos.
        </p>
        <p class="mb-4">
          3) Newsletter: Sie haben die Möglichkeit, einen Newsletter zu abonnieren. Durch Ihre Anmeldung zum Newsletter
          willigen Sie gemäß Art. 6 Abs. 1 lit. a) DSGVO ein, dass wir Ihre E-Mail-Adresse sowie Ihren Namen für die
          Zusendung von regelmäßigen Werbe-E-Mails („Newsletter“) verwenden.
        </p>

        <p class="mb-4">
          4) Weitere Informationen zur Verarbeitung Ihrer Daten finden Sie in den nachfolgenden Abschnitten (z.B.
          Zahlungsabwicklung, Kontaktformular, Analyse-Tools, Cookies usw.).
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
</style>
  