<template>
  <!-- Zusätzliche Leiste über dem Header -->
  <div class="bg-gray-900 text-gray-100 py-2">
    <div class="container mx-auto flex justify-center items-center flex-wrap text-xs space-x-8">
      <!-- Icons und Text zentriert -->

      <!-- Versandkostenfrei -->
      <div class="flex items-center">
        <a :href="header.shippingIconLink" target="_blank" class="mr-1">
          <img
            :src="header.shippingIcon"
            alt="Versandkostenfrei"
            class="w-4 h-4"
          />
        </a>
        <div class="flex flex-col leading-tight">
          <span>{{ $t('header.freeShipping') }}</span>
          <span>{{ $t('header.shippingThreshold') }}</span>
        </div>
      </div>

      <!-- Kostenfreie Rücksendung -->
      <div class="flex items-center">
        <a :href="header.returnIconLink" target="_blank" class="mr-1">
          <img
            :src="header.returnIcon"
            alt="Rücksendung Icon"
            class="w-4 h-4"
          />
        </a>
        <div class="flex flex-col leading-tight">
          <span>{{ $t('header.freeReturns') }}</span>
          <span>{{ $t('header.returnPolicy') }}</span>
        </div>
      </div>

      <!-- 30 Tage Rückgaberecht -->
      <div class="flex items-center">
        <a :href="header.returnPolicyIconLink" target="_blank" class="mr-1">
          <img
            :src="header.returnPolicyIcon"
            alt="Rückgaberecht Icon"
            class="w-4 h-4"
          />
        </a>
        <div class="flex flex-col leading-tight">
          <span>{{ $t('header.returnDays') }}</span>
          <span>{{ $t('header.returnPolicy') }}</span>
        </div>
      </div>

      <!-- Rechnungskauf/Ratenkauf -->
      <div class="flex items-center">
        <a :href="header.paymentIconLink" target="_blank" class="mr-1">
          <img
            :src="header.paymentIcon"
            alt="Rechnungskauf/Ratenkauf Icon"
            class="w-4 h-4"
          />
        </a>
        <div class="flex flex-col leading-tight">
          <span>{{ $t('header.paymentOption1') }}</span>
          <span>{{ $t('header.paymentOption2') }}</span>
        </div>
      </div>

      <!-- Positive Bewertungen -->
      <div class="flex items-center">
        <a :href="header.ratingIconLink" target="_blank" class="mr-1">
          <img
            :src="header.ratingIcon"
            alt="Positive Bewertungen Icon"
            class="w-4 h-4"
          />
        </a>
        <div class="flex flex-col leading-tight">
          <span>{{ $t('header.positiveReviews') }}</span>
          <span>{{ $t('header.reviewCount') }}</span>
        </div>
      </div>

      <!-- Telefonkontakt -->
      <div class="flex items-center">
        <a :href="header.phoneIconLink" target="_blank" class="mr-1">
          <img
            :src="header.phoneIcon"
            alt="Telefon Icon"
            class="w-4 h-4"
          />
        </a>
        <div class="flex flex-col leading-tight">
          <span>{{ $t('header.phoneNumber') }}</span>
          <span>{{ $t('header.phoneHours') }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- MegaMenu-Komponente mit Logo zentriert -->
  <MegaMenu :categories="categoryTree">
    <template v-if="viewport.isGreaterOrEquals('md')">
      <div class="mx-auto w-[80%] bg-white flex items-center justify-center">
        <!-- Logo und Suche zentriert -->
        <div class="flex items-center justify-center w-full">
          <!-- Logo -->
          <div class="flex justify-center mr-8">
            <NuxtLink :to="localePath(paths.home)">
              <NuxtImg
                :src="header.logo"
                alt="Trekking Star Logo"
                class="w-[210px] h-[80px] py-2"
                preload
              />
            </NuxtLink>
          </div>

          <!-- Verkleinerte Suchleiste -->
          <UiSearch class="flex-1 w-[50%] md:w-[30%]" />

          <!-- Sprachwahl und Wunschliste -->
          <div class="flex space-x-4 ml-4">
            <!-- Sprachwahl -->
            <UiButton
              v-if="false"
              class="group relative text-black hover:text-orange-500 active:text-orange-700 rounded-md cursor-pointer"
              :aria-label="t('languageSelector')"
              variant="tertiary"
              square
              data-testid="open-languageselect-button"
              @click="toggleLanguageSelect"
            >
              <template #prefix>
                <SfIconLanguage class="relative" />
              </template>
            </UiButton>

            <!-- Wunschliste -->
            <UiButton
              class="group relative text-orange-500 hover:text-black hover:bg-orange-500 active:text-black rounded-md"
              :tag="NuxtLink"
              :to="localePath(paths.wishlist)"
              :aria-label="t('numberInWishlist', { count: wishlistItemIds.length })"
              variant="tertiary"
              square
              data-testid="wishlist-page-navigation"
            >
              <template #prefix>
                <SfIconFavorite class="text-orange-500 group-hover:text-black group-active:text-black" />
                <SfBadge
                  :content="wishlistItemIds.length"
                  class="outline outline-orange-500 bg-white !text-orange-500 group-hover:!outline-black group-hover:!text-black group-active:!outline-black group-active:!text-black flex justify-center text-xs !leading-3"
                  data-testid="wishlist-badge"
                />
              </template>
            </UiButton>

            <!-- Warenkorb -->
            <UiButton
              class="group relative text-orange-500 hover:text-black hover:bg-orange-500 active:text-black rounded-md"
              :tag="NuxtLink"
              :to="localePath(paths.cart)"
              :aria-label="t('numberInCart', { count: cartItemsCount })"
              variant="tertiary"
              square
            >
              <template #prefix>
                <SfIconShoppingCart class="text-orange-500 group-hover:text-black group-active:text-black" />
                <SfBadge
                  :content="cartItemsCount"
                  class="outline outline-orange-500 bg-white !text-orange-500 group-hover:!outline-black group-hover:!text-black group-active:!outline-black group-active:!text-black flex justify-center text-xs !leading-3"
                  data-testid="cart-badge"
                />
              </template>
            </UiButton>
          </div>
        </div>
      </div>
    </template>

    <!-- Mobile Ansicht -->
    <div v-if="viewport.isLessThan('lg')" class="bg-white w-full">
      <UiButton
        variant="tertiary"
        class="relative text-black hover:text-orange-500 active:text-orange-700 rounded-md md:hidden"
        square
        data-testid="open-languageselect-button"
        :aria-label="t('languageSelector')"
        @click="toggleLanguageSelect"
      >
        <SfIconLanguage />
      </UiButton>
      <UiButton
        variant="tertiary"
        class="relative text-black hover:text-orange-500 active:text-orange-700 rounded-md md:hidden"
        square
        @click="searchModalOpen"
        :aria-label="t('openSearchModalButtonLabel')"
      >
        <SfIconSearch />
      </UiButton>
    </div>
  </MegaMenu>
</template>

<script setup lang="ts">
import { SfBadge, SfIconLanguage, SfIconFavorite, SfIconShoppingCart, useDisclosure } from '@storefront-ui/vue';
import { paths } from '~/utils/paths';
import { useCart, useWishlist, useCustomer } from '~/composables';

const { data: cart } = useCart();
const { wishlistItemIds } = useWishlist();
const cartItemsCount = ref(0);

const NuxtLink = resolveComponent('NuxtLink');
const { t } = useI18n();
const route = useRoute();
const localePath = useLocalePath();
const { isOpen: isAccountDropdownOpen, toggle: accountDropdownToggle } = useDisclosure();
const { isOpen: isAuthenticationOpen, open: openAuthentication, close: closeAuthentication } = useDisclosure();
const { open: searchModalOpen, isOpen: isSearchModalOpen, close: searchModalClose } = useDisclosure();
const { open } = useConfigurationDrawer();
const { toggle: toggleLanguageSelect, isOpen: isLanguageSelectOpen } = useLocalization();
const { data: categoryTree } = useCategoryTree();
const { data: user, isAuthorized, logout } = useCustomer();
const viewport = useViewport();

const header = {
  logo: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/logo/trekking-star.png',
  shippingIcon: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/box.svg',
  shippingIconLink: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/box.svg',
  returnIcon: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/arrows.svg',
  returnIconLink: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/arrows.svg',
  returnPolicyIcon: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/reload.svg',
  returnPolicyIconLink: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/reload.svg',
  paymentIcon: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/page.svg',
  paymentIconLink: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/page.svg',
  ratingIcon: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/tag.svg',
  ratingIconLink: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/tag.svg',
  phoneIcon: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/phone.svg',
  phoneIconLink: 'https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/header/phone.svg',
};
</script>
