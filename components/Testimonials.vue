<template>
    <div class="bg-positivus-dark flex flex-col rounded-3xl shadow-sm">
        <div class="flex flex-row justify-center gap-12 items-center mt-10 md:mt-20 mb-16 md:mb-36 overflow-x-hidden">
            <div v-for="(testimonial, index) in testimonials" :id="`testimonial-${index}`" :key="`testimonial-${index}`"
                class="relative flex flex-col flex-shrink-0 flex-grow-0">
                <img src="~/assets/testimonial-frame.svg" class="hidden md:block h-full w-auto object-contain">
                <img src="~/assets/testimonial-frame-mobile.svg" class="block md:hidden h-full w-auto object-contain">
                <div class="absolute top-0 start-0 end-0">
                    <div class="py-12 px-6 md:px-14">
                        <p class="text-base md:text-lg text-white line-clamp-8 md:line-clamp-5">
                            {{ testimonial.comment }}
                        </p>
                    </div>
                </div>
                <div class="flex flex-col my-4 mx-20">
                    <label class="font-medium text-lg md:text-xl text-[#B9FF66]">{{ testimonial.name }}</label>
                    <span class="text-base md:text-lg text-white">{{ testimonial.job }}</span>
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center items-center gap-24 md:gap-52 text-white mb-16">
            <UIcon class="text-[#D1D5DB]" name="material-symbols:arrow-back-rounded" size="1.5em"
                color="currentColor" />
            <div class="flex flex-row items-center gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                    viewBox="0 0 24 24">
                    <path fill="#B9FF66" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                    viewBox="0 0 24 24">
                    <path fill="#FFFFFF" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                    viewBox="0 0 24 24">
                    <path fill="#FFFFFF" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                    viewBox="0 0 24 24">
                    <path fill="#FFFFFF" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" transform="rotate(45)" width="16" height="16"
                    viewBox="0 0 24 24">
                    <path fill="#FFFFFF" d="M12 1L9 9l-8 3l8 3l3 8l3-8l8-3l-8-3z" />
                </svg>
            </div>
            <UIcon class="text-[#FFFFFF]" name="material-symbols:arrow-forward-rounded" size="1.5em"
                color="currentColor" />
        </div>
    </div>
</template>

<script setup lang="ts">

type Testimonial = {
    comment: string,
    name: string,
    job: string
};

const testimonials = ref<Testimonial[]>([
    {
        comment: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: 'John Smith',
        job: 'Marketing Director at XYZ Corp'
    },
    {
        comment: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: 'John Smith',
        job: 'Marketing Director at XYZ Corp'
    },
    {
        comment: `"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`,
        name: 'John Smith',
        job: 'Marketing Director at XYZ Corp'
    },
]);
</script>