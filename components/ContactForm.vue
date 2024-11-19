<template>
    <div class="flex flex-row justify-between bg-positivus-grey rounded-3xl pl-12 md:pl-24 pr-12 md:pr-24 lg:pr-0 pt-12 md:pt-16 pb-12 md:pb-20 shadow-sm">
        <div class="flex-1 flex flex-col">
            <div class="flex flex-row gap-8 items-start lg:items-center">
                <div class="flex items-center">
                    <input id="radio-contact" type="radio" name="radio-group" :checked="true"
                        class="size-[28px] shrink-0 mt-0.5 border-gray-200 rounded-full text-[#B9FF66] focus:ring-lime-500 disabled:opacity-50 disabled:pointer-events-none">
                    <label for="radio-contact" class="ms-3 text-lg text-nowrap">Say Hi</label>
                </div>

                <div class="flex items-center">
                    <input id="radio-quote" type="radio" name="radio-group"
                        class="size-[28px] shrink-0 mt-0.5 border-gray-200 rounded-full text-[#B9FF66] focus:ring-lime-500 disabled:opacity-50 disabled:pointer-events-none">
                    <label for="radio-quote" class="ms-3 text-lg text-nowrap">Get a Quote</label>
                </div>
            </div>
            <div class="flex flex-col my-10 gap-6">
                <div class="max-w-md">
                    <label for="input-name" class="block text-base font-normal mb-1.5 dark:text-white">Name</label>
                    <input type="email" id="input-name"
                        class="py-3 px-4 block w-full border-gray-800 rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Name">
                </div>
                <div class="max-w-md">
                    <label for="input-email" class="block text-base font-normal mb-1.5 dark:text-white">Email*</label>
                    <input type="email" id="input-email"
                        class="py-3 px-4 block w-full border-gray-800 rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Email">
                </div>
                <div class="max-w-md">
                    <label for="input-message" class="block text-base font-normal mb-1.5 dark:text-white">Email*</label>
                    <textarea id="input-message" rows="5"
                        class="py-3 px-4 block w-full border-gray-800 rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Message"></textarea>
                </div>
                <button type="button"
                    class="w-full max-w-md py-5 px-8 inline-flex items-center text-center text-xl rounded-xl border border-transparent bg-positivus-dark text-white hover:bg-black focus:outline-none focus:bg-black disabled:opacity-50 disabled:pointer-events-none">
                    <span class="flex-1">Send Message</span>
                </button>
            </div>
        </div>
        <div v-motion :initial="{x:100, opacity: 0}" :visible="{x: 0, opacity: 1, transition: { duration: 1200, type: 'keyframes', ease: 'easeInOut' }}" class="hidden lg:flex flex-col justify-end">
            <img src="~/assets/contact-us-illustration.svg" class="object-contain w-auto max-h-[600px]" />
        </div>
    </div>
</template>