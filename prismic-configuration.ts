import Prismic from '@prismicio/client';

export const apiEndpoint = `https://${process.env.PRISMIC_REPOSITORY_NAME}.cdn.prismic.io/api/v2`;
export const accessToken = process.env.PRISMIC_API_TOKEN;

export const PrismicClient = Prismic.client(apiEndpoint, { accessToken });
