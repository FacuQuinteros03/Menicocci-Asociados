import { client } from './sanityClient';

export async function getArticles() {
  const query = `*[_type == "article"] | order(publishedAt desc){
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    publishedAt
  }`;

  return await client.fetch(query);
}
