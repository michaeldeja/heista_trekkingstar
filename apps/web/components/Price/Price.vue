<template>
  <div class="flex flex-col text-sm py-1">
    <span class="mr-2 font-headings text-2xl" :class="{ 'text-red-500': crossedPrice && crossedPrice > price }" data-testid="price">
      {{ $n(price, 'currency') }}
      <span v-if="showNetPrices">{{ $t('asterisk') }} </span>
    </span>
    <span v-if="crossedPrice && crossedPrice > price" class="text-base font-normal text-neutral-500 ">
      UVP {{ $n(crossedPrice, 'currency') }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { PriceProps } from '~/components/Price/types';

defineProps<PriceProps>();

const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;
</script>
