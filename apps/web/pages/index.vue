<template>
  <!-- Slider Sektion -->
  <div class="slider max-w-[100%] mx-auto w-full h-[408px] overflow-hidden relative">
    <div
      class="slides flex transition-transform ease-in-out duration-1000"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(slide, index) in slides" :key="index" class="slide min-w-full h-full">
        <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover" />
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
  </div>

  <!-- Hersteller Icons Sektion -->
  <div class="w-full bg-gray-200 py-7">
    <div class="max-w-[90%] mx-auto flex justify-between items-center">
      <div v-for="(icon, index) in manufacturerIcons" :key="index" class="flex items-center justify-center">
        <img :src="icon.src" :alt="icon.alt" class="h-12 w-auto" />
      </div>
    </div>
  </div>

  <!-- Produkte und Kategorien -->
  <div class="max-w-screen-lg mx-auto py-12">
    <!-- Erste Zeile: Damen und Herren (volle Höhe) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div class="text-center border p-6 h-[400px]">
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/damen.png"
          alt="Damen Mode"
          class="mx-auto mb-4 h-60"
        />
        <h3 class="font-bold text-3xl">FASHION-TRENDS</h3>
        <p>FÜR DAMEN</p>
      </div>
      <div class="text-center border p-6 h-[400px]">
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/herren.png"
          alt="Herren Mode"
          class="mx-auto mb-4 h-60"
        />
        <h3 class="font-bold text-3xl">AKTUELLE MODE</h3>
        <p>FÜR HERREN</p>
      </div>
    </div>

    <!-- Zweite Zeile: Rucksack und Ranzen (Bild links, Text rechts) -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="border p-6 h-[150px] flex items-center">
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/rucksack.png"
          alt="Rucksack"
          class="h-30 mr-4"
        />
        <div>
          <h3 class="font-bold text-xl">DEN RICHTIGEN RUCKSACK</h3>
          <p>FÜR JEDEN AUSFLUG FINDEN</p>
        </div>
      </div>
      <div class="border p-6 h-[150px] flex items-center">
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/ranzen.png"
          alt="Ranzen"
          class="h-30 mr-4"
        />
        <div>
          <h3 class="font-bold text-xl">RUCKSÄCKE & RANZEN</h3>
          <p>FÜR SCHÜLER JEDEN ALTERS</p>
        </div>
      </div>
    </div>

    <!-- Dritte Zeile: Fahrradtaschen und Zelte (Bild rechts, Text links) -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="border p-6 h-[150px] flex items-center justify-between">
        <div>
          <h3 class="font-bold text-xl">WASSERDICHTE</h3>
          <p>FAHRRADTASCHEN</p>
        </div>
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/fahrrad.png"
          alt="Fahrradtaschen"
          class="h-36 ml-4"
        />
      </div>
      <div class="border p-6 h-[150px] flex items-center justify-between">
        <div>
          <h3 class="font-bold text-xl">ZELTE & ZUBEHÖR</h3>
          <p>FÜR DEINEN URLAUB</p>
        </div>
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/zelt.png"
          alt="Zelte"
          class="h-36 ml-4"
        />
      </div>
    </div>

    <!-- Vierte Zeile: Sale und Rabatt (breiter Kasten mit Bild) -->
    <div class="grid grid-cols-1">
      <div class="relative border text-center">
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/categorie/sale.png"
          alt="Rabatt Banner"
          class="w-full h-[150px] object-cover"
        />
        <div class="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50 p-10"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Slider Logik
const currentSlide = ref(0);
const intervalTime = 5000;
let sliderInterval;

// Dummy-Daten für den Slider
const slides = ref([
  { image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/camel.png', alt: 'Slide 1' },
  { image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/derbe.png', alt: 'Slide 2' },
  { image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/didrikson.png', alt: 'Slide 3' },
  { image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/fire_and_ice.png', alt: 'Slide 4' },
  { image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/ortlieb.png', alt: 'Slide 5' },
  { image: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/img/slider/pme.png', alt: 'Slide 6' },
]);

// Dummy-Daten für Hersteller-Icons
const manufacturerIcons = ref([
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/bogner5b55aee43f942_200x200.png',
    alt: 'Hersteller 1',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/camel_active5b55aecd64a6c_200x200.png',
    alt: 'Hersteller 2',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/didriksonsOpv2W3wR26MA1.png',
    alt: 'Hersteller 3',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/ortlieb5b55aec5a72af_200x200.png',
    alt: 'Hersteller 4',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/teva5b55aebf61fc8_200x200.png',
    alt: 'Hersteller 5',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/satch5b55aeed5fa78_200x200.png',
    alt: 'Hersteller 6',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/derbe5b55af34cee34_200x200.png',
    alt: 'Hersteller 7',
  },
  {
    src: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/icons/deuter5b55aebe4581f_200x200.png',
    alt: 'Hersteller 8',
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

/* Paginierungspunkte */
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
</style>
