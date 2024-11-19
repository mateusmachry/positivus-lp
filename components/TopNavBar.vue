<template>
    <nav v-motion :initial="{y:-100, opacity: 0}" :enter="{y: 0, opacity: 1, transition: { duration: 1200, type: 'keyframes', ease: 'easeInOut' }}" class="flex flex-row justify-between items-center">
        <img src="~/assets/logo-black.png" class="w-36 xl:w-56 h-auto object-contain" />
        <div class="hidden md:flex flex-row items-center gap-5 xl:gap-10">
            <a href="#" class="text-base xl:text-xl hover:underline">
                About us
            </a>
            <a href="#" class="text-base xl:text-xl hover:underline">
                Services
            </a>
            <a href="#" class="text-base xl:text-xl hover:underline">
                Use Cases
            </a>
            <a href="#" class="text-base xl:text-xl hover:underline">
                Pricing
            </a>
            <a href="#" class="text-base xl:text-xl hover:underline">
                Blog
            </a>
            <button type="button"
                class="py-2.5 xl:py-5 px-4 xl:px-8 inline-flex items-center text-base xl:text-xl rounded-xl border border-gray-800 text-black bg-transparent hover:bg-neutral-100 hover:ring-1 hover:ring-black focus:outline-none transition-all disabled:opacity-50 disabled:pointer-events-none">
                Request a quote
            </button>
        </div>
        <button class="inline-block md:hidden text-black hover:text-gray-600">
            <UIcon name="material-symbols:menu" size="2em" color="currentColor" />
        </button>
    </nav>
</template>