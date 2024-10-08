<template>
  <header>
    <!-- Logo und Zurück-Button (dein Code) -->
    <div class="flex justify-between mt-8 mb-10 px-4 md:px-0">
      <h1 class="font-bold typography-headline-3 md:typography-headline-2">{{ heading }}</h1>
      <UiButton @click="goToPath" class="flex md:hidden whitespace-nowrap" size="sm" variant="tertiary">
        <template #prefix>
          <SfIconArrowBack />
        </template>
        {{ labelMobile }}
      </UiButton>
      <UiButton @click="goToPath" class="hidden md:flex" variant="tertiary">
        <template #prefix>
          <SfIconArrowBack />
        </template>
        {{ labelDesktop }}
      </UiButton>
    </div>

    <!-- Navigationsleiste mit Kategorien -->
    <nav>
      <ul class="flex space-x-6">
        <li><NuxtLink to="/damen">Damen</NuxtLink></li>
        <li><NuxtLink to="/herren">Herren</NuxtLink></li>
        <li><NuxtLink to="/sale">Sale</NuxtLink></li>
        <li><NuxtLink to="/hersteller">Hersteller</NuxtLink></li>
        <!-- Füge hier weitere Kategorien hinzu -->
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { SfIconArrowBack } from '@storefront-ui/vue';
import { useLocalePath } from '#imports';
import { useRouter } from 'vue-router';
import type { HeaderWithLinkProps } from '~/components/HeaderWithLink/types';

const props = defineProps<HeaderWithLinkProps>();

const localePath = useLocalePath();
const router = useRouter();

const goToPath = () => {
  props.link ? navigateTo(localePath(props.link)) : router.go(-1);
};
</script>
