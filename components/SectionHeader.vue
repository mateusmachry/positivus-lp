<template>
    <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        <div class="bg-[#B9FF66] rounded-lg px-2 py-2">
            <label class="font-medium text-4xl">{{ title }}</label>
        </div>
        <p class="text-center md:text-start text-base md:text-lg max-w-xl">{{ description }}</p>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    title: string,
    description: string
}>();

</script>