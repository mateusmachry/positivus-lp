<template>
    <div id="footer" class="flex flex-col bg-[#191A23] px-5 pt-12 pb-6">
        <div class="flex flex-col justify-center items-center mb-6">
            <img src="~/assets/logo-white.png" class="object-contain w-auto h-6 mb-8" />
            <div class="flex flex-col items-center gap-4 text-white mb-8">
                <a href="#" class="text-base underline">About us</a>
                <a href="#" class="text-base underline">Services</a>
                <a href="#" class="text-base underline">Use Cases</a>
                <a href="#" class="text-base underline">Pricing</a>
                <a href="#" class="text-base underline">Blog</a>
            </div>
        </div>
        <div class="flex flex-col justify-center items-center mb-8">
            <div class="flex flex-col justify-center items-center">
                <div class="w-fit bg-[#B9FF66] rounded-lg px-1 py-1 mb-8">
                    <label class="font-medium text-lg">Contact us:</label>
                </div>
                <p class="text-base mb-4 text-white">
                    Email: info@positivus.com
                </p>
                <p class="text-base mb-4 text-white">Phone: 555-567-8901</p>
                <p class="text-base text-white">Address: 1234 Main St</p>
                <p class="text-base text-white">Moonstone City, Stardust State 12345</p>
            </div>
        </div>
        <div class="flex flex-col justify-center bg-[#292A32] px-8 py-8 gap-5 rounded-xl mb-8">
            <div class="max-w-sm">
                <input type="email" id="input-email-newsletter"
                    class="py-5 px-8 block w-full bg-[#292A32] border-gray-300 text-white rounded-xl text-lg focus:border-[#B9FF66] focus:ring-[#B9FF66] disabled:opacity-50 disabled:pointer-events-none"
                    placeholder="Email">
            </div>
            <button type="button"
                class="w-full max-w-sm py-5 px-8 inline-flex justify-center items-center text-center text-xl rounded-xl border border-transparent bg-[#B9FF66] text-black hover:bg-lime-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none">
                <span>Subscribe to news</span>
            </button>
        </div>
        <div class="flex flex-row justify-center items-center gap-5 mb-8">
            <img src="~/assets/linkedin-logo-black.svg" class="object-contain w-8 h-8" />
            <img src="~/assets/facebook-logo-black.svg" class="object-contain w-8 h-8" />
            <img src="~/assets/twitter-logo-black.svg" class="object-contain w-8 h-8" />
        </div>
        <div class="h-[1px] bg-white mb-8"></div>
        <div class="flex flex-col justify-center items-center gap-4 mb-6">
            <p class="text-base text-white">© 2023 Positivus. All Rights Reserved.</p>
            <a href="#" class="underline text-base text-white">Privacy Policy</a>
        </div>
    </div>
</template>