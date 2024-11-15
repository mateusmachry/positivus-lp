<template>
    <div class="relative flex flex-row rounded-3xl bg-[#F3F3F3] px-16">
        <div class="flex flex-col items-center md:items-start py-16 gap-6">
            <h3 class="font-medium text-center md:text-start text-2xl md:text-3xl max-w-lg">Let's make things happen
            </h3>
            <p class="text-base md:text-lg text-center md:text-start max-w-lg">Contact us today to learn more about
                how our digital marketing services can
                help your business grow and succeed online.</p>
            <button type="button"
                class="w-fit py-5 px-8 inline-flex items-center text-xl rounded-xl border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
                Get your free proposal
            </button>
        </div>
        <div class="hidden xl:inline-block absolute top-1/2 -translate-y-1/2 right-0 px-24">
            <img src="~/assets/proposal-section-illustration.svg" class="w-96 h-fit object-contain" />
        </div>
    </div>
</template>