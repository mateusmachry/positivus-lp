<template>
    <div v-motion :initial="{scale:0, opacity: 0}" :visible="{scale: 1, opacity: 1, transition: { duration: 700, type: 'keyframes', ease: 'easeInOut' }}" class="flex flex-row md:hidden gap-5 overflow-x-scroll">
        <div class="flex flex-col flex-shrink-0 flex-grow-0 rounded-3xl bg-positivus-dark px-12 py-10 gap-5">
            <p class="max-w-xs text-white text-base">
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                in website traffic and a 25% increase in sales.
            </p>
            <a href="#" class="flex flex-row gap-4 text-[#B9FF66] items-center">
                <span class="text-xl hover:underline">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    transform="rotate(-30)">
                    <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                </svg>
            </a>
        </div>
        <div class="flex flex-col flex-shrink-0 flex-grow-0 rounded-3xl bg-positivus-dark px-12 py-10 gap-5">
            <p class="max-w-xs text-white text-base">
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking
                for key keywords and a 200% increase in organic traffic.
            </p>
            <a href="#" class="flex flex-row gap-4 text-[#B9FF66] items-center">
                <span class="text-xl hover:underline">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    transform="rotate(-30)">
                    <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                </svg>
            </a>
        </div>
    </div>
    <div v-motion :initial="{scale:0, opacity: 0}" :visible="{scale: 1, opacity: 1, transition: { duration: 1200, type: 'keyframes', ease: 'easeInOut' }}" class="hidden md:flex flex-row rounded-3xl bg-positivus-dark px-16 py-16">
        <div class="flex flex-col gap-5">
            <p class="max-w-xs text-white text-lg">
                For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase
                in website traffic and a 25% increase in sales.
            </p>
            <a href="#" class="flex flex-row gap-4 text-[#B9FF66] items-center">
                <span class="text-xl hover:underline">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    transform="rotate(-30)">
                    <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                </svg> </a>
        </div>
        <div class="w-[1px] bg-white mx-16"></div>
        <div class="flex flex-col gap-5">
            <p class="max-w-xs text-white text-lg">
                For a B2B software company, we developed an SEO strategy that resulted in a first page ranking
                for key keywords and a 200% increase in organic traffic.
            </p>
            <a href="#" class="flex flex-row gap-4 text-[#B9FF66] items-center">
                <span class="text-xl hover:underline">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    transform="rotate(-30)">
                    <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                </svg> </a>
        </div>
        <div class="w-[1px] bg-white mx-16"></div>
        <div class="flex flex-col gap-5">
            <p class="max-w-xs text-white text-lg">
                For a national retail chain, we created a social media marketing campaign that increased
                followers by 25% and generated a 20% increase in online sales.
            </p>
            <a href="#" class="flex flex-row gap-4 text-[#B9FF66] items-center">
                <span class="text-xl hover:underline">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                    transform="rotate(-30)">
                    <path fill="currentColor" d="M8.6 3.4L14.2 9H2v2h12.2l-5.6 5.6L10 18l8-8l-8-8z" />
                </svg> </a>
        </div>
    </div>
</template>