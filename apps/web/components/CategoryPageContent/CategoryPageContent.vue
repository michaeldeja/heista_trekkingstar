<template>
  <NarrowContainer class="mb-20 px-4 md:px-0" data-testid="category-layout">
    <h1 class="my-10 font-bold typography-headline-3 md:typography-headline-2">{{ title }}</h1>
    <div class="md:flex gap-6" data-testid="category-page-content">
      <CategorySidebar :is-open="isOpen" @close="close">
        <NuxtLazyHydrate when-visible>
          <slot name="sidebar" />
        </NuxtLazyHydrate>
      </CategorySidebar>
      <div class="flex-1">
        <div class="flex justify-between items-center mb-6">
          <span class="font-bold font-headings md:text-lg">
            {{
              $t('numberOfProducts', {
                count: products?.length ?? 0,
                total: totalProducts,
              })
            }}
          </span>
          <UiButton @click="open" variant="tertiary" class="md:hidden whitespace-nowrap">
            <template #prefix>
              <SfIconTune />
            </template>
            {{ $t('listSettings') }}
          </UiButton>
        </div>

        <section
          v-if="products?.length"
          class="grid grid-cols-1 2xs:grid-cols-2 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 mb-10 md:mb-5"
          data-testid="category-grid"
        >
          <NuxtLazyHydrate when-visible v-for="(product, index) in products" :key="index">
            <NuxtLink :to="`/product/${productGetters.getSlug(product)}`" class="block">
              <div
                class="relative group p-4 border border-gray-200 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <!-- Bild -->
                <img
                  :src="addModernImageExtension(productGetters.getCoverImage(product))"
                  :alt="productImageGetters.getImageAlternate(productImageGetters.getFirstImage(product)) || productGetters.getName(product) || ''"
                  class="w-full h-[300px] object-cover"
                />

                <!-- Immer sichtbarer Teil: Preis und Artikelname -->
                <div class="mt-2">
                  <h3 class="text-sm font-bold">{{ productGetters.getName(product) }}</h3>
                  
                  <!-- Preis immer sichtbar -->
                  <p class="font-bold text-lg">
                    {{ formatPrice(productGetters.getPrice(product)) }}
                  </p>

                  <!-- Preis pro Einheit anzeigen, falls vorhanden -->
                  <p v-if="productGetters.showPricePerUnit(product)" class="text-sm text-gray-500 mt-1">
                    {{ productGetters.getUnitContent(product) }} {{ productGetters.getUnitName(product) }} = 
                    {{ formatPrice(productGetters.getPrice(product)) }}
                  </p>
                </div>

                <!-- Dynamischer Teil: erscheint nur beim Hover -->
                <div class="transition-all duration-300 ease-in-out max-h-0 overflow-hidden group-hover:max-h-[150px]">
                  <!-- Sterne-Bewertung -->
                  <div class="flex items-center space-x-1 mt-2">
                    <svg
                      v-for="star in 5"
                      :key="star"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-4 h-4 text-gray-400"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 .587l3.668 7.431 8.21 1.193-5.941 5.787 1.4 8.168L12 18.896l-7.337 3.857 1.4-8.168L.122 9.211l8.21-1.193z"
                      />
                    </svg>
                  </div>

                  <!-- Kurzbeschreibung -->
                  <p class="text-sm text-gray-500 mt-2">
                    {{ productGetters.getShortDescription(product) }}
                  </p>
                </div>
              </div>
            </NuxtLink>
          </NuxtLazyHydrate>
        </section>

        <LazyCategoryEmptyState v-else />

        <div class="mt-4 mb-4 typography-text-xs flex gap-1" v-if="totalProducts > 0">
          <span>{{ $t('asterisk') }}</span>
          <span v-if="showNetPrices">{{ $t('itemExclVAT') }}</span>
          <span v-else>{{ $t('itemInclVAT') }}</span>
          <span>{{ $t('excludedShipping') }}</span>
        </div>

        <UiPagination
          v-if="totalProducts > 0"
          :key="`${totalProducts}-${itemsPerPage}`"
          :current-page="getFacetsFromURL().page ?? 1"
          :total-items="totalProducts"
          :page-size="itemsPerPage"
          :max-visible-pages="maxVisiblePages"
        />
      </div>
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import { productGetters, productImageGetters } from '@plentymarkets/shop-api';
import { SfIconTune, useDisclosure } from '@storefront-ui/vue';
import { type CategoryPageContentProps } from '~/components/CategoryPageContent/types';

// Preisformatierung
const formatPrice = (price: number | null): string => {
  if (price === null) return 'Preis nicht verfügbar';
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

const { title, totalProducts, itemsPerPage = 24, products = [] } = defineProps<CategoryPageContentProps>();

const { getFacetsFromURL } = useCategoryFilter();
const { addModernImageExtension } = useModernImage();

const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;

const { isOpen, open, close } = useDisclosure();
const viewport = useViewport();

const maxVisiblePages = computed(() => (viewport.isGreaterOrEquals('lg') ? 5 : 1));

if (viewport.isLessThan('md')) close();
</script>

<style scoped>
.group-hover\:max-h-[150px]:hover {
  max-height: 150px;
}
</style>
