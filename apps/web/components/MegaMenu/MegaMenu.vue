<template>
    <header ref="referenceRef" class="relative w-full h-full z-40 md:sticky md:shadow-md">
        <div
        class="md:py-5 w-full h-full border-0 bg-white border-neutral-200 border-b-2 border-solid md:z-10"
        data-testid="navbar-top">     
            <slot />
        </div>

        <nav v-if="viewport.isGreaterOrEquals('lg')" ref="floatingRef">
            <div class="max-w-screen-3xl mx-auto px-3 md:px-6 lg:px-10">
                <div class="relative">
                    <ul
                        class="flex justify-start py-2 bg-white"
                        @blur="
                        (event) => {
                            if (!(event.currentTarget as Element).contains(event.relatedTarget as Element)) {
                            close();
                            }
                        }
                        "
                    >
                        <li v-if="categoryTree.length === 0" class="h-10"></li>

                        <li v-else v-for="(menuNode, index) in categoryTree" :key="index">
                            <NuxtLink :to="localePath(generateCategoryLink(menuNode))">
                                <UiButton
                                ref="triggerReference"
                                variant="tertiary"
                                data-testid="category-button"
                                class="group mr-2 !text-neutral-900 px-0 hover:!bg-white hover:!text-secondary-500 active:!bg-white active:!text-secondary-500 uppercase"
                                @mouseenter="menuNode.childCount > 0 ? openMenu([menuNode.id]) : openMenu([])"
                                @click="menuNode.childCount > 0 ? openMenu([menuNode.id]) : openMenu([])"
                                >
                                <span>{{ categoryTreeGetters.getName(menuNode) }}</span>
                                <SfIconChevronRight
                                    v-if="menuNode.childCount > 0"
                                    class="rotate-90 text-neutral-500 group-hover:text-secondary-500 group-active:text-secondary-500"
                                />
                                </UiButton>
                            </NuxtLink>

                            <div
                                v-if="
                                    isOpen &&
                                    activeMenu &&
                                    activeNode.length === 1 &&
                                    activeNode[0] === menuNode.id &&
                                    menuNode.childCount > 0
                                "
                                :key="activeMenu.id"
                                ref="megaMenuReference"
                                :style="style"
                                class="hidden md:grid gap-x-6 grid-cols-4 bg-white shadow-lg p-6 !top-[100%] left-0 right-0 outline-none z-40"
                                tabindex="0"
                                @mouseleave="close()"
                                @keydown.esc="focusTrigger(index)"
                            >
                                <template v-for="node in activeMenu.children" :key="node.id">
                                    <template v-if="node.childCount === 0">
                                        <ul>
                                        <SfListItem
                                            :tag="NuxtLink"
                                            size="sm"
                                            :href="localePath(generateCategoryLink(node))"
                                            class="typography-text-base font-medium !text-[18px] uppercase text-neutral-900 whitespace-nowrap px-4 py-1.5 !px-0 hover:!bg-white hover:!text-secondary-500"
                                        >
                                            {{ categoryTreeGetters.getName(node) }}
                                        </SfListItem>
                                        </ul>
                                    </template>
                                    <div v-else>
                                        <SfListItem
                                        :tag="NuxtLink"
                                        size="sm"
                                        :href="localePath(generateCategoryLink(node))"
                                        class="typography-text-base font-medium !text-[18px] uppercase text-neutral-900 whitespace-nowrap px-4 py-1.5 !px-0 hover:!bg-white hover:!text-secondary-500"
                                        >
                                            {{ categoryTreeGetters.getName(node) }}
                                        </SfListItem>
                                        <ul>
                                            <li v-for="child in node.children" :key="child.id">
                                                <SfListItem
                                                v-if="categoryTreeGetters.getName(child)"
                                                :tag="NuxtLink"
                                                size="sm"
                                                :href="localePath(generateCategoryLink(child))"
                                                class="typography-text-sm py-1.5 !px-0 hover:!bg-white hover:!text-secondary-500"
                                                >
                                                    {{ categoryTreeGetters.getName(child) }}
                                                </SfListItem>
                                            </li>
                                        </ul>
                                    </div>
                                </template>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    <template v-else>
      <div v-if="isOpen" class="fixed z-[50] inset-0 bg-neutral-500 bg-opacity-50" />
      <SfDrawer
        ref="drawerReference"
        v-model="isOpen"
        placement="left"
        class="right-12 max-w-96 bg-white overflow-y-auto z-[1000]"
      >
        <nav>
          <div class="flex items-center justify-between px-4 py-2 border-b border-b-neutral-200 border-b-solid ">
            <p class="typography-text-base font-medium">Kategorien</p>
            <UiButton variant="tertiary" square :aria-label="t('closeMenu')" class="ml-2" @click="close()">
              <SfIconClose class="text-neutral-500 active:text-white hover:text-white" />
            </UiButton>
          </div>
          <ul class="mb-6" v-if="activeMenu">
            <li v-if="activeMenu.id !== 0">
              <SfListItem
                size="lg"
                tag="button"
                type="button"
                class="border-b border-b-neutral-200 border-b-solid py-2 group hover:bg-primary-50 active:bg-primary-50 active:text-white hover:text-white"
                @click="goBack()"
              >
                <div class="flex items-cente r">
                  <SfIconArrowBack class="text-neutral-500 group-hover:text-white group-active:text-white" />
                  <p class="ml-5 font-medium group-hover:text-white group-active:text-white">{{ categoryTreeGetters.getName(activeMenu) }}</p>
                </div>
              </SfListItem>
            </li>
            <template v-for="node in activeMenu.children" :key="node.id">
              <li v-if="node.childCount === 0">
                <SfListItem size="lg" :tag="NuxtLink" :href="localePath(generateCategoryLink(node))" @click="close()" class="py-2 group hover:bg-primary-50 active:bg-primary-50 active:text-white hover:text-white">
                  <div class="flex items-center">
                    <p class="text-left group-hover:text-white group-active:text-white">{{ categoryTreeGetters.getName(node) }}</p>
                  </div>
                </SfListItem>
              </li>
              <li v-else>
                <SfListItem size="lg" tag="button" type="button" class="!py-2 group hover:bg-primary-50 active:bg-primary-50 active:text-white hover:text-white">
                  <div class="flex items-center w-100">
                    <NuxtLink class="flex-1 m-0 px-0" :to="localePath(generateCategoryLink(node))" @click="close()">
                      <div class="flex items-center">
                        <p class="text-left">{{ categoryTreeGetters.getName(node) }}</p>
                      </div>
                    </NuxtLink>
                    <div class="flex justify-center items-center h-8 w-8" @click="goNext(node.id)">
                      <SfIconChevronRight class="text-neutral-500 group-hover:text-white group-active:text-white" />
                    </div>
                  </div>
                </SfListItem>
              </li>
            </template>
          </ul>
        </nav>
      </SfDrawer>
    </template>
  </header>
</template>

<script lang="ts" setup>
import { type CategoryTreeItem, categoryTreeGetters } from '@plentymarkets/shop-api';
import {
  SfIconClose,
  SfDrawer,
  SfListItem,
  SfIconChevronRight,
  SfCounter,
  SfIconArrowBack,
  SfIconMenu,
  useTrapFocus,
  useDropdown,
} from '@storefront-ui/vue';
import { unrefElement } from '@vueuse/core';
import type { MegaMenuProps } from '~/components/MegaMenu/types';
import { paths } from '~/utils/paths';

const { t } = useI18n();
const viewport = useViewport();
const localePath = useLocalePath();
const { buildCategoryMenuLink } = useLocalization();
const NuxtLink = resolveComponent('NuxtLink');
const props = defineProps<MegaMenuProps>();
const { close, open, isOpen, activeNode, category, setCategory } = useMegaMenu();
const { referenceRef, floatingRef, style } = useDropdown({
  isOpen,
  onClose: close,
  placement: 'bottom-start',
  middleware: [],
});
const categoryTree = ref(categoryTreeGetters.getTree(props.categories));

const findNode = (keys: number[], node: CategoryTreeItem): CategoryTreeItem => {
  if (keys.length > 1) {
    const [currentKey, ...restKeys] = keys;
    return findNode(restKeys, node.children?.find((child) => child.id === currentKey) || node);
  } else {
    return node.children?.find((child) => child.id === keys[0]) || node;
  }
};

const generateCategoryLink = (category: CategoryTreeItem) => {
  return buildCategoryMenuLink(category, categoryTree.value);
};

const drawerReference = ref();
const megaMenuReference = ref();
const triggerReference = ref();

const activeMenu = computed(() => (category.value ? findNode(activeNode.value, category.value) : null));

const trapFocusOptions = {
  activeState: isOpen,
  arrowKeysUpDown: true,
  initialFocus: 'container',
} as const;
useTrapFocus(
  computed(() => megaMenuReference.value?.[0]),
  trapFocusOptions,
);
useTrapFocus(drawerReference, trapFocusOptions);

const openMenu = (menuType: number[]) => {
  activeNode.value = menuType;
  open();
};

const goBack = () => {
  activeNode.value = activeNode.value.slice(0, -1);
};

const goNext = (key: number) => {
  activeNode.value = [...activeNode.value, key];
};

const focusTrigger = (index: number) => {
  unrefElement(triggerReference.value[index]).focus();
};

setCategory(categoryTree.value);

watch(
  () => props.categories,
  async (categories: CategoryTreeItem[]) => {
    categoryTree.value = categoryTreeGetters.getTree(categories);
    setCategory(categoryTree.value);
  },
);
</script>
