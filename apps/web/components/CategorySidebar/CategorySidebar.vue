<template>
  <transition
    enter-active-class="transition duration-500 ease-in-out"
    leave-active-class="transition duration-500 ease-in-out"
    enter-from-class="-translate-x-full"
    enter-to-class="translate-x-0"
    leave-from-class="translate-x-0"
    leave-to-class="-translate-x-full"
  >
    <SfDrawer
      v-show="isOpen"
      :model-value="true"
      :disable-click-away="true"
      :disable-esc="true"
      class="w-full shadow-none lg:translate-x-0 z-[100] lg:z-0 lg:static lg:!block -translate-x-full shrink-0 lg:max-w-[250px] bg-white overflow-y-auto"
      data-testid="category-sidebar"
    >
      <div class="grid grid-rows-category-sidebar h-full lg:block">
        <div class="p-4 flex justify-between items-center lg:hidden">
          <span class="font-bold text-lg">{{ $t('listSettings') }}</span>
          <UiButton variant="tertiary" @click="$emit('close')" :aria-label="$t('closeListSettings')">
            <template #prefix>
              <SfIconClose class="text-neutral-500" />
            </template>
          </UiButton>
        </div>
        <div class="px-4 lg:px-0">
            <slot class="overflow-y-auto lg:overflow-y-visible py-4 lg:p-0" />
            <div class="lg:hidden py-4 lg:mt-2 flex flex-wrap justify-between gap-3">
                <UiButton class="whitespace-nowrap flex flex-1" variant="primary" @click="$emit('close')">
                    {{ $t('showProducts') }}
                </UiButton>
            </div>
        </div>
      </div>
    </SfDrawer>
  </transition>
</template>

<script setup lang="ts">
import { SfDrawer, SfIconClose } from '@storefront-ui/vue';
import type { CategorySidebarEmits, CategorySidebarProps } from '~/components/CategorySidebar/types';

defineProps<CategorySidebarProps>();
defineEmits<CategorySidebarEmits>();
</script>
