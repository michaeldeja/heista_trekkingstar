<template>
  <div class="border border-neutral-200 rounded-md hover:shadow-lg flex flex-col" data-testid="product-card">
    <div class="relative overflow-hidden">
        <!--
        <UiBadges
            :class="['absolute', isFromWishlist ? 'mx-2' : 'm-2']"
            :product="product"
            :use-availability="isFromWishlist"
        />
        -->

      <SfLink
        :tag="NuxtLink"
        rel="preload"
        :to="productPath"
        :class="{ 'size-48': isFromSlider }"
        as="image"
        class="block items-center justify-center"
      >
        <NuxtImg
          :src="imageUrl"
          :alt="imageAlt"
          :title="imageTitle"
          :loading="lazy && !priority ? 'lazy' : 'eager'"
          :fetchpriority="priority ? 'high' : 'auto'"
          :preload="priority || false"
          :width="getWidth()"
          :height="getHeight()"
          class="object-contain rounded-md aspect-square w-full"
          data-testid="image-slot"
        />
      </SfLink>

      <slot name="wishlistButton">
        <WishlistButton
          square
          class="absolute top-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full "
          :product="product"
        />
      </slot>
    </div>
    <div class="p-2 border-t border-neutral-200 typography-text-sm flex flex-col flex-auto">
      <SfLink :tag="NuxtLink" :to="productPath" class="no-underline text-[16px] font-medium" variant="secondary">
        {{ name }}
      </SfLink>
      <div class="flex items-center pt-1 gap-1" :class="{ 'mb-2': !productGetters.getShortDescription(product) }">
        <SfRating size="xs" :half-increment="true" :value="rating ?? 0" :max="5" />
        <SfCounter size="xs">{{ ratingCount }}</SfCounter>
      </div>
      <div
        v-if="productGetters.getShortDescription(product)"
        class="block pt-2 pb-3 font-normal typography-text-sm text-neutral-700  whitespace-pre-line break-words"
      >
        <div class="line-clamp-3" v-html="productGetters.getShortDescription(product)"></div>
      </div>
      <LowestPrice :product="product" />
      <div v-if="showBasePrice" class="mb-2">
        <BasePriceInLine :base-price="basePrice" :unit-content="unitContent" :unit-name="unitName" />
      </div>
      <div class="flex flex-col items-start mt-auto">
        <span class="block text-[20px] pb-1" :class="{ 'text-red-500': crossedPrice && crossedPrice > price }" data-testid="product-card-vertical-price">
          <span v-if="!productGetters.canBeAddedToCartFromCategoryPage(product)" class="mr-1">
            {{ t('account.ordersAndReturns.orderDetails.priceFrom') }}
          </span>
          <span>{{ n(price, 'currency') }}</span>
          <span v-if="showNetPrices">{{ t('asterisk') }} </span>
        </span>
        <span v-if="crossedPrice && crossedPrice > price" class="typography-text-sm md:pb-2">
          UVP {{ n(crossedPrice, 'currency') }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { productGetters } from '@plentymarkets/shop-api';
import { SfLink, SfIconShoppingCart, SfLoaderCircular, SfRating, SfCounter } from '@storefront-ui/vue';
import type { ProductCardProps } from '~/components/ui/ProductCard/types';
import { defaults } from '~/composables';

const localePath = useLocalePath();
const { t, n } = useI18n();
const {
  product,
  name,
  imageUrl,
  imageAlt = '',
  imageTitle,
  imageWidth,
  imageHeight,
  rating,
  ratingCount,
  priority,
  lazy = true,
  unitContent,
  unitName,
  basePrice,
  showBasePrice,
  isFromWishlist = false,
  isFromSlider = false,
} = defineProps<ProductCardProps>();

const { data: categoryTree } = useCategoryTree();
const { openQuickCheckout } = useQuickCheckout();
const { addToCart } = useCart();
const { send } = useNotification();
const { price, crossedPrice } = useProductPrice(product);
const loading = ref(false);
const runtimeConfig = useRuntimeConfig();
const showNetPrices = runtimeConfig.public.showNetPrices;
const path = computed(() => productGetters.getCategoryUrlPath(product, categoryTree.value));
const productSlug = computed(() => productGetters.getSlug(product) + `_${productGetters.getItemId(product)}`);
const productPath = computed(() => localePath(`${path.value}/${productSlug.value}`));
const getWidth = () => {
  if (imageWidth && imageWidth > 0 && imageUrl.includes(defaults.IMAGE_LINK_SUFIX)) {
    return imageWidth;
  }
  return '';
};
const getHeight = () => {
  if (imageHeight && imageHeight > 0 && imageUrl.includes(defaults.IMAGE_LINK_SUFIX)) {
    return imageHeight;
  }
  return '';
};

const addWithLoader = async (productId: number) => {
  loading.value = true;

  try {
    await addToCart({
      productId: productId,
      quantity: 1,
    });

    openQuickCheckout(product, 1);
    send({ message: t('addedToCart'), type: 'positive' });
  } finally {
    loading.value = false;
  }
};

const NuxtLink = resolveComponent('NuxtLink');
</script>
