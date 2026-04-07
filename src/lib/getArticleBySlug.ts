import { client } from './sanityClient';

export async function getArticleBySlug(slug: string) {
  const query = `*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      "slug": slug.current, // Proyecta el slug como un string
      excerpt,
      publishedAt,
      "mainImage": mainImage.asset->url,
      content
    }`;

  try {
    return await client.fetch(query, { slug });
  } catch (error) {
    console.error('getArticleBySlug error:', error);
    return null;
  }
}
