import React, { FC } from 'react';
import {HomepageData} from "~/types/prismic";
import {
    AboutSection,
    CompaniesSection,
    ContactSection,
    Footer,
    Header,
    ServicesSection
} from "~/components/Homepage/sections";
import HeroSection from "~/components/Homepage/sections/HeroSection";

const Homepage: FC<HomepageData> = (data) => (
    <main>
        <Header logo={data.logo} navigation={data.navigation} language_switch={data.language_switch} />
        <HeroSection main_image={data.main_image} main_title={data.main_title} />
        <AboutSection about_us={data.about_us} team={data.team} />
        <ServicesSection our_services={data.our_services} services_image={data.services_image} services={data.body} />
        <ContactSection contact_us={data.contact_us} contacts={data.contacts} map_pin={data.map_pin} />
        <CompaniesSection gdpr={data.gdpr} gdpr_links={data.gdpr_links} companies={data.companies} />
        <Footer copyright={data.copyright} />
    </main>
);

export default Homepage;
