<template>
    <ClientOnly>
        <Vue3Marquee :vertical="false" :duration="20" :gradient="true" :gradient-color="[255, 255, 255]"
            gradient-length="10%" :pause-on-hover="false" :clone="true">
            <div class="flex flex-row gap-24 items-center w-full mt-8 md:mt-12 xl:mt-16 mb-16 md:mb-24 xl:mb-32">
                <img src="~/assets/amazon-logo.svg" class="w-32 h-fit object-contain ms-24" />
                <img src="~/assets/dribble-logo.svg" class="w-32 h-fit object-contain" />
                <img src="~/assets/hubspot-logo.svg" class="w-32 h-fit object-contain" />
                <img src="~/assets/notion-logo.svg" class="w-32 h-fit object-contain" />
                <img src="~/assets/netflix-logo.svg" class="w-32 h-fit object-contain" />
                <img src="~/assets/zoom-logo.svg" class="w-32 h-fit object-contain" />
            </div>
        </Vue3Marquee>
    </ClientOnly>
</template>