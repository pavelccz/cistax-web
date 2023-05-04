import Head from 'next/head';
import React, { FC } from 'react';
import { PrismicClient } from '~/prismic-configuration';
import { Locale } from '~/types/locales';
import { HomepageData, HomepageDocument } from '~/types/prismic';
import Homepage from "~/components/Homepage/Homepage";

export interface HomeProps {
  data: HomepageData;
}

const Home: FC<HomeProps> = ({ data }) => (
  <>
    <Head>
      <title>{data.about_us}</title>
    </Head>

    <Homepage {...data} />
  </>
);

export const getStaticProps = async ({ locale }: { locale: Locale }) => {
  const doc: HomepageDocument = await PrismicClient.getSingle('homepage', { lang: locale });

  return {
    props: {
      data: doc.data,
    },
  };
};

export default Home;
