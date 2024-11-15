<template>
    <div class="flex flex-col gap-8">
        <div v-for="item in accordionItems" :key="`accordion-${item.index}`"
            :class="`flex flex-col px-8 md:px-16 py-5 md:py-10 border ${item.isOpen ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3]'}  border-black dark:border-white border-b-8 rounded-3xl shadow-sm`">
            <div class="flex flex-row justify-between items-center">
                <div class="flex flex-row gap-4 items-center">
                    <div class="text-black text-nowrap">
                        <label class="font-medium text-3xl md:text-6xl">{{ item.index }}</label>
                    </div>
                    <div class="text-black">
                        <label class="font-medium text-lg md:text-3xl">{{ item.title }}</label>
                    </div>
                </div>
                <button type="button" @click="toggleAccordion(item)"
                    class="relative inline-flex justify-center items-center size-[42px] md:size-[58px] text-sm font-semibold rounded-full border border-gray-800 bg-[#F3F3F3] text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                    <UIcon v-if="item.isOpen" name="mdi:minus-thick" class="1.5em" color="currentColor" />
                    <UIcon v-else name="mdi:add-thick" size="1.5em" color="currentColor" />
                </button>
            </div>
            <div :style="{ maxHeight: item.isOpen ? '168px' : '0px', overflow: 'hidden' }"
                class="flex flex-col transition-all duration-500 ease-in-out">
                <div class="my-4 md:my-8 bg-gray-800 h-[1px]"></div>
                <p class="text-base md:text-lg">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">


type AccordionItem = {
    index: string,
    title: string,
    description: string,
    isOpen: boolean,
};

const accordionItems = ref<AccordionItem[]>([
    {
        index: '01',
        title: 'Consultation',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: true
    },
    {
        index: '02',
        title: 'Research and Strategy Development',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
    {
        index: '03',
        title: 'Implementation',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
    {
        index: '04',
        title: 'Monitoring and Optimization',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
    {
        index: '05',
        title: 'Reporting and Communication',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
    {
        index: '06',
        title: 'Continual Improvement',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
        isOpen: false
    },
]);

const toggleAccordion = async (item: AccordionItem) => {
    item.isOpen = !item.isOpen;
};
</script>