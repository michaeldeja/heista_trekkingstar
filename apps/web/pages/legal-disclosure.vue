<template>
    <div class=" max-w-screen-3xl px-3 md:px-6 lg:px-10 mx-auto  py-12">

        <div class="flex">
            <SidebarNavigation />

            <div class="flex-1 pl-[30px]">
                <div class="w-full p-5 overflow-x-auto" v-html="getHTMLTexts()" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { data, getLegalTexts } = useLegalInformation();

definePageMeta({
  pageType: 'static',
});

await getLegalTexts({
  type: 'LegalDisclosure',
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};
</script>
