<template>
    <div v-motion :initial="{y:100, opacity: 0}" :visible="{y: 0, opacity: 1, transition: { duration: 700, type: 'keyframes', ease: 'easeInOut' }}" id="footer" class="flex flex-col bg-positivus-dark rounded-t-3xl px-16 py-12 shadow-sm">
        <div class="flex flex-row justify-between items-center mb-16">
            <img src="~/assets/logo-white.png" class="object-contain w-auto h-8" />
            <div class="flex flex-row items-center gap-10 text-white">
                <a href="#" class="text-lg underline">About us</a>
                <a href="#" class="text-lg underline">Services</a>
                <a href="#" class="text-lg underline">Use Cases</a>
                <a href="#" class="text-lg underline">Pricing</a>
                <a href="#" class="text-lg underline">Blog</a>
            </div>
            <div class="flex flex-row items-center gap-6">
                <img src="~/assets/linkedin-logo-black.svg" class="object-contain w-8 h-8" />
                <img src="~/assets/facebook-logo-black.svg" class="object-contain w-8 h-8" />
                <img src="~/assets/twitter-logo-black.svg" class="object-contain w-8 h-8" />
            </div>
        </div>
        <div class="flex flex-row justify-between mb-12">
            <div class="flex flex-col">
                <div class="w-fit bg-positivus-green rounded-lg px-1 py-1 mb-6">
                    <label class="font-medium text-xl">Contact us:</label>
                </div>
                <p class="text-lg mb-5 text-white">
                    Email: info@positivus.com
                </p>
                <p class="text-lg mb-5 text-white">Phone: 555-567-8901</p>
                <p class="text-lg text-white">Address: 1234 Main St</p>
                <p class="text-lg text-white">Moonstone City, Stardust State 12345</p>
            </div>
            <div class="flex flex-row items-center bg-[#292A32] px-10 py-14 gap-5 rounded-xl">
                <div class="max-w-sm">
                    <input type="email" id="input-email-newsletter"
                        class="py-5 px-8 block w-full bg-[#292A32] border-gray-300 text-white rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                        placeholder="Email">
                </div>
                <button type="button"
                    class="w-fit max-w-sm py-5 px-8 inline-flex items-center text-center text-xl rounded-xl border border-transparent bg-positivus-green text-black hover:bg-lime-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                    <span>Subscribe to news</span>
                </button>
            </div>
        </div>
        <div class="h-[1px] bg-white mb-12"></div>
        <div class="flex flex-row items-center gap-10">
            <p class="text-lg text-white">© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" class="underline text-lg text-white">Privacy Policy</a>
        </div>
    </div>
</template>