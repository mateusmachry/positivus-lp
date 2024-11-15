<template>
    <nav class="flex flex-row justify-between items-center">
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
                class="py-2.5 xl:py-5 px-4 xl:px-8 inline-flex items-center text-base xl:text-xl rounded-xl border border-gray-800 text-gray-800 hover:border-gray-500 hover:text-gray-500 focus:outline-none focus:border-gray-500 focus:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:hover:text-neutral-300 dark:hover:border-neutral-300">
                Request a quote
            </button>
        </div>
        <button class="inline-block md:hidden text-black hover:text-gray-600">
            <UIcon name="material-symbols:menu" size="2em" color="currentColor" />
        </button>
    </nav>
</template>