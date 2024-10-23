<template>
  <!-- Slider Sektion -->
  <div class="slider max-w-[100%] mx-auto w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden relative">
    <div
      class="slides flex transition-transform ease-in-out duration-1000 h-full"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide min-w-full h-full">
        <NuxtLink :to="slide.link">
          <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover cursor-pointer object-left-top" />
        </NuxtLink>
      </div>
    </div>

    <!-- Paginierungspunkte -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        class="w-3 h-3 rounded-full bg-gray-300 cursor-pointer"
        :class="{ 'bg-orange-500': currentSlide === index }"
        @click="goToSlide(index)"
      ></span>
    </div>

    <!-- Navigation Pfeile -->
    <div class="absolute inset-0 flex justify-between items-center pointer-events-none">
      <button class="pointer-events-auto p-2 bg-gray-800 text-white" @click="prevSlide">←</button>
      <button class="pointer-events-auto p-2 bg-gray-800 text-white" @click="nextSlide">→</button>
    </div>
  </div>

  <!-- Hersteller Icons Sektion -->
  <div class="w-full bg-gray-200 py-7 px-3 md:px-6 lg:px-10">
    <div class=" mx-auto flex justify-center items-center flex-wrap gap-[15px] lg:justify-between">
      <NuxtLink
        v-for="(icon, index) in manufacturerIcons"
        :key="index"
        :to="icon.link"
        class="flex items-center justify-center"
      >
        <img :src="icon.src" :alt="icon.alt" class="max-h-14 w-auto cursor-pointer" />
      </NuxtLink>
    </div>
  </div>

  <!-- Produkte und Kategorien -->
  <div class="max-w-screen-3xl px-3 md:px-6 lg:px-10  mx-auto py-12">
    <!-- Erste Zeile: Damen und Herren (volle Höhe) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <NuxtLink to="/damen/bekleidung">
        <div class="text-center border p-6">
            <div class="mb-4">
                <img
                    src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/damen.png"
                    alt="Damen Mode"
                    class="mx-auto max-h-[200px] lg:max-h-[250px] max-w-full"
                />
            </div>
          <h3 class="font-bold text-3xl">FASHION-TRENDS</h3>
          <p>FÜR DAMEN</p>
        </div>
      </NuxtLink>
      <NuxtLink to="/bekleidung/herren">
        <div class="text-center border p-6">
            <div class="mb-4">
                <img
                    src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/herren.png"
                    alt="Herren Mode"
                    class="mx-auto max-h-[200px] lg:max-h-[250px] max-w-full"
                />
            </div>
            <h3 class="font-bold text-3xl">AKTUELLE MODE</h3>
            <p>FÜR HERREN</p>
        </div>
      </NuxtLink>
    </div>

    <!-- Zweite Zeile: Rucksack und Ranzen (Bild links, Text rechts) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <NuxtLink to="/ausruestung/rucksaecke">
        <div class="border p-6 h-full flex-col md:flex-row flex items-center">
            <div class="mr-4">
                <img
                    src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/rucksack.png"
                    alt="Rucksack"
                    class=" max-w-full"
                />
            </div>
          <div>
            <h3 class="font-bold text-xl">DEN RICHTIGEN RUCKSACK</h3>
            <p>FÜR JEDEN AUSFLUG FINDEN</p>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/kinder/schule">
        <div class="border p-6 h-full flex-col md:flex-row flex items-center">
            <div class="mr-4">
                <img
                    src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/ranzen.png"
                    alt="Ranzen"
                    class="max-w-full"
                />
            </div>
            <div>
                <h3 class="font-bold text-xl">RUCKSÄCKE & RANZEN</h3>
                <p>FÜR SCHÜLER JEDEN ALTERS</p>
            </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Dritte Zeile: Fahrradtaschen und Zelte (Bild rechts, Text links) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <NuxtLink to="/ausruestung/bike">
        <div class="border p-6 h-full flex-col md:flex-row flex items-center justify-between">
            <div>
                <h3 class="font-bold text-xl">WASSERDICHTE</h3>
                <p>FAHRRADTASCHEN</p>
            </div>
            <div class="ml-4">
                <img
                    src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/fahrrad.png"
                    alt="Fahrradtaschen"
                    class=" max-w-full"
                />
            </div>
        </div>
      </NuxtLink>
      <NuxtLink to="/zelte">
        <div class="border p-6 h-full flex-col md:flex-row flex items-center justify-between">
          <div>
            <h3 class="font-bold text-xl">ZELTE & ZUBEHÖR</h3>
            <p>FÜR DEINEN URLAUB</p>
          </div>
            <div class="ml-4">
                <img
                    src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/zelt.png"
                    alt="Zelte"
                    class="max-w-full"
                />  
            </div>
        </div>
      </NuxtLink>
    </div>

    <!-- Vierte Zeile: Sale und Rabatt (breiter Kasten mit Bild) -->
    <div class="grid grid-cols-1">
      <NuxtLink to="/sale">
        <div class="relative border text-center">
          <img
            src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/sale.png"
            alt="Rabatt Banner"
            class="w-full "
          />
          <div class="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 p-10"></div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Slider Logik
const currentSlide = ref(0);
const intervalTime = 5000;
let sliderInterval;

// Slider-Daten (extern, z.B. Plenty Markets URLs verwenden)
const slides = ref([
  {
    image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/camel.png',
    alt: 'Camel Active',
    link: '/hersteller/camel-active',
  },
  {
    image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/derbe.png',
    alt: 'Derbe',
    link: '/hersteller/derbe',
  },
  {
    image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/didrikson.png',
    alt: 'Didrikson',
    link: '/hersteller/didrikson',
  },
  {
    image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/fire_and_ice.png',
    alt: 'Fire & Ice',
    link: '/hersteller/fire-and-ice',
  },
  {
    image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/ortlieb.png',
    alt: 'Ortlieb',
    link: '/hersteller/ortlieb',
  },
  {
    image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/pme.png',
    alt: 'PME Legend',
    link: '/hersteller/pme-legend',
  },
]);

// Hersteller-Icons (extern, z.B. Plenty Markets URLs)
const manufacturerIcons = ref([
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/bogner5b55aee43f942_200x200.png',
    alt: 'Bogner',
    link: '/hersteller/bogner',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/camel_active5b55aecd64a6c_200x200.png',
    alt: 'Camel Active',
    link: '/hersteller/camel-active',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/didriksonsOpv2W3wR26MA1.png',
    alt: 'Didriksons',
    link: '/hersteller/didrikson',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/ortlieb5b55aec5a72af_200x200.png',
    alt: 'Ortlieb',
    link: '/hersteller/ortlieb',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/teva5b55aebf61fc8_200x200.png',
    alt: 'Teva',
    link: '/hersteller/teva',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/satch5b55aeed5fa78_200x200.png',
    alt: 'Satch',
    link: '/hersteller/satch',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/derbe5b55af34cee34_200x200.png',
    alt: 'Derbe',
    link: '/hersteller/derbe',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/deuter5b55aebe4581f_200x200.png',
    alt: 'Deuter',
    link: '/hersteller/deuter',
  },
]);

// Automatische Slider-Zyklus
onMounted(() => {
  sliderInterval = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.value.length;
  }, intervalTime);
});

onUnmounted(() => {
  clearInterval(sliderInterval);
});

// Vorheriges Bild
const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

// Nächstes Bild
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

// Bestimmten Slide anzeigen
const goToSlide = (index) => {
  currentSlide.value = index;
};
</script>

<style scoped>
/* Slider-Stile */
.slider {
  position: relative;
}

.slides {
  display: flex;
  width: 100%;
  transform: translateX(0);
}

.slide {
  width: 100%;
  height: 100%;
}

.pagination-dots {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.pagination-dots span {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  display: inline-block;
  margin: 0 5px;
}

.pagination-dots span.active {
  background-color: #ff7f00; /* Orange für den aktiven Punkt */
}

button {
  background-color: #ff7f00;
  color: white;
  border: none;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}

button:hover {
  background-color: #ff5900;
}
</style>
