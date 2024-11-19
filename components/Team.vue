<template>
    <div class="flex flex-col gap-10">
        <div v-motion :initial="{scale:0, opacity: 0}" :visible="{scale: 1, opacity: 1, transition: { duration: 1200, type: 'keyframes', ease: 'easeInOut' }}" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10">
            <div
                class="flex flex-col p-10 border bg-white border-black hover:shadow-xl dark:border-white border-b-8 rounded-3xl shadow-sm">
                <div class="relative flex flex-row gap-5">
                    <img src="~/assets/team-person-1.png" class="object-contain w-24 h-auto" />
                    <div class="self-end flex flex-col gap-0">
                        <label class="font-medium text-lg md:text-xl">John Smith</label>
                        <span class="text-base md:text-lg">CEO and Founder</span>
                    </div>
                    <img src="~/assets/icon-linkedin.svg" class="absolute top-0 right-0 object-contain w-8 h-8" />
                </div>
                <div class="h-[1px] bg-positivus-dark my-6"></div>
                <p class="text-base md:text-lg">10+ years of experience in digital marketing. Expertise in SEO, PPC, and
                    content strategy</p>
            </div>
            <div
                class="flex flex-col p-10 border bg-white border-black hover:shadow-xl dark:border-white border-b-8 rounded-3xl shadow-sm">
                <div class="relative flex flex-row gap-5">
                    <img src="~/assets/team-person-2.png" class="object-contain w-24 h-auto" />
                    <div class="self-end flex flex-col gap-0">
                        <label class="font-medium text-lg md:text-xl">Jane Doe</label>
                        <span class="text-base md:text-lg">Director of Operations</span>
                    </div>
                    <img src="~/assets/icon-linkedin.svg" class="absolute top-0 right-0 object-contain w-8 h-8" />
                </div>
                <div class="h-[1px] bg-positivus-dark my-6"></div>
                <p class="text-base md:text-lg">7+ years of experience in project management and team leadership. Strong
                    organizational and communication skills</p>
            </div>
            <div
                class="flex flex-col p-10 border bg-white border-black hover:shadow-xl dark:border-white border-b-8 rounded-3xl shadow-sm">
                <div class="relative flex flex-row gap-5">
                    <img src="~/assets/team-person-3.png" class="object-contain w-24 h-auto" />
                    <div class="self-end flex flex-col gap-0">
                        <label class="font-medium text-lg md:text-xl">Michael Brown</label>
                        <span class="text-base md:text-lg">Senior SEO Specialist</span>
                    </div>
                    <img src="~/assets/icon-linkedin.svg" class="absolute top-0 right-0 object-contain w-8 h-8" />
                </div>
                <div class="h-[1px] bg-positivus-dark my-6"></div>
                <p class="text-base md:text-lg">5+ years of experience in SEO and content creation. Proficient in keyword
                    research and on-page optimization</p>
            </div>
            <div
                class="flex flex-col p-10 border bg-white border-black hover:shadow-xl dark:border-white border-b-8 rounded-3xl shadow-sm">
                <div class="relative flex flex-row gap-5">
                    <img src="~/assets/team-person-4.png" class="object-contain w-24 h-auto" />
                    <div class="self-end flex flex-col gap-0">
                        <label class="font-medium text-lg md:text-xl">Emily Johnson</label>
                        <span class="text-base md:text-lg">PPC Manager</span>
                    </div>
                    <img src="~/assets/icon-linkedin.svg" class="absolute top-0 right-0 object-contain w-8 h-8" />
                </div>
                <div class="h-[1px] bg-positivus-dark my-6"></div>
                <p class="text-base md:text-lg">3+ years of experience in paid search advertising. Skilled in campaign
                    management and performance analysis</p>
            </div>
            <div
                class="flex flex-col p-10 border bg-white border-black hover:shadow-xl dark:border-white border-b-8 rounded-3xl shadow-sm">
                <div class="relative flex flex-row gap-5">
                    <img src="~/assets/team-person-5.png" class="object-contain w-24 h-auto" />
                    <div class="self-end flex flex-col gap-0">
                        <label class="font-medium text-lg md:text-xl">Brian Williams</label>
                        <span class="text-base md:text-lg">Social Media Specialist</span>
                    </div>
                    <img src="~/assets/icon-linkedin.svg" class="absolute top-0 right-0 object-contain w-8 h-8" />
                </div>
                <div class="h-[1px] bg-positivus-dark my-6"></div>
                <p class="text-base md:text-lg">4+ years of experience in social media marketing. Proficient in creating and
                    scheduling content, analyzing metrics, and building engagement</p>
            </div>
            <div
                class="flex flex-col p-10 border bg-white border-black hover:shadow-xl dark:border-white border-b-8 rounded-3xl shadow-sm">
                <div class="relative flex flex-row gap-5">
                    <img src="~/assets/team-person-6.png" class="object-contain w-24 h-auto" />
                    <div class="self-end flex flex-col gap-0">
                        <label class="font-medium text-lg md:text-xl">Sarah Kim</label>
                        <span class="text-base md:text-lg">Content Creator</span>
                    </div>
                    <img src="~/assets/icon-linkedin.svg" class="absolute top-0 right-0 object-contain w-8 h-8" />
                </div>
                <div class="h-[1px] bg-positivus-dark my-6"></div>
                <p class="text-base md:text-lg">2+ years of experience in writing and editing
                    Skilled in creating compelling, SEO-optimized content for various industries</p>
            </div>
        </div>
        <button type="button"
            class="self-start md:self-end w-full md:w-fit py-5 px-8 inline-flex justify-center items-center text-xl rounded-xl border border-transparent bg-positivus-dark text-white hover:bg-black focus:outline-none focus:bg-black disabled:opacity-50 disabled:pointer-events-none">
            See all team
        </button>
    </div>
</template>