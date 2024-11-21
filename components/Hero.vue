<template>
    <div id="hero" class="grid grid-cols-1 md:grid-cols-2 my-16">
        <div v-motion :initial="{x:-100, opacity: 0}" :enter="{x: 0, opacity: 1, transition: { duration: 700, type: 'keyframes', ease: 'easeInOut' }}" class="flex flex-col gap-8">
            <h1 class="text-5xl xl:text-6xl max-w-xl font-medium">
                Navigating the digital landscape for success
            </h1>
            <p class="text-base xl:text-xl max-w-xl">
                Our digital marketing agency helps businesses grow and succeed online through a range of services
                including SEO, PPC, social media marketing, and content creation.
            </p>
            <button type="button"
                class="w-fit py-5 px-8 inline-flex items-center text-xl rounded-xl border border-transparent bg-positivus-dark text-white hover:bg-black focus:outline-none focus:bg-black disabled:opacity-50 disabled:pointer-events-none">
                Book a consultation
            </button>
        </div>
        <div v-motion :initial="{x:100, opacity: 0}" :enter="{x: 0, opacity: 1, transition: { duration: 700, type: 'keyframes', ease: 'easeInOut' }}" class="hidden md:flex flex-col">
            <img src="~/assets/hero-illustration.svg" class="w-[600px] h-fit object-contain" />
        </div>
    </div>
</template>