import { getArticles } from '@/lib/getArticles';
import Link from 'next/link';
import styles from '../../styles/components/articles.module.css';

interface Article {
  _id: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  slug: { current: string };
}


export default async function ArticulosPage() {
  const articles = await getArticles();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Artículos</h1>

      <div className={styles.grid}>
        {articles.map((article) => (
          <Link
            key={article._id}
            href={`/articulos/${article.slug.current}`}
            className={styles.link}
          >
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>{article.title}</h2>

              <p className={styles.excerpt}>{article.excerpt}</p>

              <p className={styles.date}>
                Publicado: {new Date(article.publishedAt).toLocaleDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
