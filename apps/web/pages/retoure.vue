<template>
    <div class="retoure-page max-w-screen-3xl px-3 md:px-6 lg:px-10 mx-auto py-12">
        <div class="flex">
            <SidebarNavigation />

            <div class="flex-1 pl-[30px]">
                <h1 class="text-3xl font-bold mb-6">Rücksendungen</h1>
  
                <!-- Rücksendungen Beschreibung -->
                <p class="mb-6">
                    Sie möchten Ware innerhalb der Widerrufsfrist (30 Tage) zurücksenden? Wir stellen Ihnen dafür ein kostenfreies Retourenlabel zur Verfügung.
                </p>
            
                <!-- DHL Retouren Label -->
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div class="border p-4 text-center">
                    <img src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/service/dhl.png" alt="DHL Logo" class="mx-auto mb-4" />
                    <a
                        href="https://www.dhl.de/retoure/gw/rpcustomerweb/OrderEntry.action?hash=13694590f538ee513d17519ad13e7fcf4cf00fe4b1f0563bb106db871a45a668"
                        target="_blank"
                        class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                    >
                        FORDERN SIE IHR DHL-RETOURENLABEL AN
                    </a>
                    </div>
                </div>
            
                <!-- Hinweise -->
                <div class="mt-6">
                    <h2 class="font-bold mb-2">Bitte beachten Sie folgende Punkte:</h2>
                    <ol class="list-decimal list-inside">
                    <li>Bitte beachten Sie die <NuxtLink to="/legal-disclosure" class="text-orange-500">allgemeinen Geschäftsbedingungen (AGB)</NuxtLink> von Trekking Star e.K.</li>
                    <li>Bitte legen Sie der Rücksendung den Lieferschein oder eine Rechnungskopie bei.</li>
                    <li>Bitte lassen Sie uns keine unfrei versendeten Sendungen zukommen. Verwenden Sie das bereitgestellte Retourenetikett.</li>
                    </ol>
                    <p class="mt-4">
                    Diese Punkte stellen selbstverständlich keine Bedingungen zur Ausübung Ihres
                    <NuxtLink to="/cancellation-rights" class="text-orange-500">gesetzlichen Widerrufsrechts</NuxtLink> dar.
                    </p>
                </div>
            </div>
        </div>
  
      <!-- Rücksendungen Header -->
      
    </div>
  </template>
  
  <script setup lang="ts">
  // Der Link für das DHL Retourenportal wurde angepasst.
  </script>
  
  
  
