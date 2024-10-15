<template>
  <footer class="bg-black text-white">
    <!-- Erste Zeile: Kategorien -->
    <div class="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 py-8 px-4 md:px-8">
      
      <!-- Trekking Star -->
      <div>
        <h3 class="font-bold mb-4">{{ $t('footer.trekkingStar.title') }}</h3>
        <ul>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/about-us'">
              {{ $t('footer.trekkingStar.aboutUs') }}
            </SfLink>
          </li>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/jobs'">
              {{ $t('footer.trekkingStar.jobs') }}
            </SfLink>
          </li>
        </ul>
      </div>

      <!-- Shop Service -->
      <div>
        <h3 class="font-bold mb-4">{{ $t('footer.shopService.title') }}</h3>
        <ul>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/contact'">
              {{ $t('footer.shopService.contact') }}
            </SfLink>
          </li>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/retoure'">
              {{ $t('footer.shopService.returns') }}
            </SfLink>
          </li>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/shipping'">
              {{ $t('footer.shopService.shippingInfo') }}
            </SfLink>
          </li>
        </ul>
      </div>

      <!-- Informationen -->
      <div>
        <h3 class="font-bold mb-4">{{ $t('footer.information.title') }}</h3>
        <ul>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/marken'">
              {{ $t('footer.information.ourBrands') }}
            </SfLink>
          </li>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/sitemap'">
              {{ $t('footer.information.sitemap') }}
            </SfLink>
          </li>
        </ul>
      </div>

      <!-- Rechtliches -->
      <div>
        <h3 class="font-bold mb-4">{{ $t('footer.legal.title') }}</h3>
        <ul>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/terms-and-conditions'">
              {{ $t('footer.legal.terms') }}
            </SfLink>
          </li>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/cancellation-rights'">
              {{ $t('footer.legal.cancellationRights') }}
            </SfLink>
          </li>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/datenschutz'">
              {{ $t('footer.legal.privacyPolicy') }}
            </SfLink>
          </li>
          <li>
            <SfLink :tag="NuxtLink" class="text-neutral-300 hover:text-white" :to="'/impressum'">
              {{ $t('footer.legal.impressum') }}
            </SfLink>
          </li>
        </ul>
      </div>

      <!-- Sicher einkaufen -->
      <div>
        <h3 class="font-bold mb-2">{{ $t('footer.secureShopping') }}</h3>
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/ssl-secure-connection.png"
          alt="SSL Secure Connection"
          class="w-[60px] md:w-[100px] h-auto"
        />
      </div>
    </div>

    <!-- Zweite Zeile: Partner und Zahlungsarten -->
    <div class="bg-white text-black py-8">
      <div class="max-w-screen-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-8">
        <!-- Partner -->
        <div>
          <h3 class="font-bold mb-4 text-center md:text-left">{{ $t('footer.partner.title') }}</h3>
          <div class="flex justify-center md:justify-start space-x-4">
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/idealo.png"
              alt="Idealo"
              class="h-20"
            />
            <img src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/dhl.jpg" alt="DHL" class="h-20" />
          </div>
        </div>

        <!-- Zahlungsarten -->
        <div>
          <h3 class="font-bold mb-4 text-center md:text-left">{{ $t('footer.paymentMethods.title') }}</h3>
          <div class="flex justify-center md:justify-start space-x-4">
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/icon_paypal.png"
              alt="PayPal"
              class="h-8"
            />
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/icon_visa.png"
              alt="Visa"
              class="h-8"
            />
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/icon_mastercard.png"
              alt="Mastercard"
              class="h-8"
            />
            <img
              src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/footer/icon_vorkasse.png"
              alt="Vorkasse"
              class="mx-auto"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Dritte Zeile: Copyright und Firmenname -->
    <div class="bg-gray-100 py-4">
      <div class="max-w-screen-xl mx-auto text-center text-neutral-600">
        <img
          src="https://cdn02.plentymarkets.com/gfckbh0ooc5t/frontend/logo/trekking-star-footer.png"
          alt="Logo Footer"
          class="h-12 mx-auto mb-5"
        />
        <p class="text-xs mb-1">
          {{ $t('footer.copyrightText') }}
        </p>
        <p class="text-xs">{{ $t('footer.rightsReserved') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SfLink, SfListItem } from '@storefront-ui/vue';
import { categories } from '~/mocks';
import type { FooterProps } from './types';

const storename: string = useRuntimeConfig().public.storename;

const companyName: string = `© ${storename} ${new Date().getFullYear()}`;

const { simplifiedFooter = false } = defineProps<FooterProps>();

const localePath = useLocalePath();
const NuxtLink = resolveComponent('NuxtLink');
</script>
