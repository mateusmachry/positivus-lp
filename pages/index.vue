<template>
    <div class="flex flex-col w-full min-h-screen bg-white px-6 md:px-12 xl:px-24 overflow-x-hidden">
        <TopNavBar class="mt-8 xl:mt-16" />
        <Hero class="my-16" />
        <Brands />
        <div id="services" class="flex flex-col">
            <SectionHeader class="mb-10 md:mb-20" title="Services" description="At our digital marketing agency, we offer a range of services to help
                    businesses grow and succeed online. These services include:" />
            <Services class="mb-16 md:mb-24" />
        </div>
        <GetProposalCard class="mb-16 md:mb-36" />
        <div id="case-studies" class="flex flex-col mb-16 md:mb-36">
            <SectionHeader class="mb-10 md:mb-20" title="Case Studies" description="Explore Real-Life Examples of Our Proven Digital Marketing Success through
                    Our Case Studies" />
            <CaseStudies />
        </div>
        <div class="flex flex-col mb-16 md:mb-36">
            <SectionHeader class="mb-10 md:mb-20" title="Our Working Process"
                description="Step-by-Step Guide to Achieving Your Business Goals" />
            <OurWork />
        </div>
        <div class="flex flex-col mb-12 md:mb-24">
            <SectionHeader class="mb-10 md:mb-20" title="Team" description="Meet the skilled and experienced team behind our successful digital
                    marketing strategies" />
            <Team />
        </div>
        <div id="testimonials" class="flex flex-col mb-16 md:mb-36">
            <SectionHeader class="mb-10 md:mb-20" title="Testimonials" description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about
                    Our Digital Marketing Services" />
            <Testimonials />
        </div>
        <div id="contact-us" class="flex flex-col mb-16 md:mb-36">
            <SectionHeader class="mb-10 md:mb-20" title="Contact Us"
                description="Connect with Us: Let's Discuss Your Digital Marketing Needs" />
            <ContactForm />
        </div>
        <MobileFooter class="block md:hidden mx-[-24px]" />
        <Footer class="hidden md:block" />
    </div>
</template>

<script setup lang="ts">

useHead({
    title: 'Positivus | Digital Marketing Agency - Navigating the Digital Landscape for Success',
    meta: [
        {
            name: 'description',
            content: 'Positivus is a digital marketing agency dedicated to helping businesses grow and succeed online. Our team specializes in SEO, PPC, social media marketing, and content creation to drive impactful results for your brand.',
        },
        {
            name: 'og:title',
            content: 'Positivus | Digital Marketing Agency - Navigating the Digital Landscape for Success',
        },
        {
            name: 'og:description',
            content: 'Discover how Positivus can elevate your online presence with expert digital marketing strategies. From SEO to social media and content creation, we help businesses succeed online.',
        },
    ],
});

</script>
