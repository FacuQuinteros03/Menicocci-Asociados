import { getArticleBySlug } from '@/lib/getArticleBySlug';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import styles from '../../../styles/components/article.module.css';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage(props: ArticlePageProps) {
  const { slug } = await props.params;

  if (!slug) return <div className={styles.error}>Error: Slug no proporcionado.</div>;

  const article = await getArticleBySlug(slug);

  if (!article) return <div className={styles.error}>Artículo no encontrado.</div>;

  // Función de tiempo de lectura con tipos corregidos
  function estimateReadingTime(content: any[] = []) {
    if (!Array.isArray(content)) return 1;
    const text = content
      .map((block) => {
        if (block._type === 'block' && block.children) {
          return block.children.map((child: any) => child.text).join(' ');
        }
        return '';
      })
      .join(' ');
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
  }

  const readingTime = estimateReadingTime(article.content);

  const ptComponents: PortableTextComponents = {
    block: {
      h2: ({ children }) => <h2 className={styles.h2}>{children}</h2>,
      h3: ({ children }) => <h3 className={styles.h3}>{children}</h3>,
      normal: ({ children }) => <p className={styles.p}>{children}</p>,
    },
    marks: {
      link: ({ children, value }) => {
        const href = value?.href || '';
        return (
          <a
            href={href}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noreferrer' : undefined}
            className={styles.link}
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) =>
        value?.asset?.url ? (
          <div className={styles.contentImageWrapper}>
            <Image
              src={value.asset.url}
              alt={value.alt || 'Imagen del artículo'}
              width={800}
              height={500}
              className={styles.contentImage}
            />
          </div>
        ) : null,
    },
  };

  return (
    <article className={`${styles.article} ${styles.fadeIn}`}>
      <Link href="/articulos" className={styles.backButton}>
        <ChevronLeft size={18} />
        <span>Todos los artículos</span>
      </Link>

      <header className={styles.header}>
        <div className={styles.topMeta}>
          {article.category && <span className={styles.categoryBadge}>{article.category}</span>}
          <div className={styles.metaInfo}>
            <span className={styles.metaItem}>
              <Calendar size={14} />
              {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString('es-AR') : '—'}
            </span>
            <span className={styles.metaItem}>
              <Clock size={14} />
              {readingTime} min de lectura
            </span>
          </div>
        </div>

        <h1 className={styles.title}>{article.title}</h1>
        {article.excerpt && <p className={styles.excerpt}>{article.excerpt}</p>}

        {article.mainImage && (
          <div className={styles.heroImageWrapper}>
            <Image
              src={article.mainImage}
              alt={article.title}
              fill
              priority
              className={styles.heroImage}
            />
          </div>
        )}
      </header>

      <section className={styles.articleBody}>
        <PortableText value={article.content} components={ptComponents} />
      </section>

      <footer className={styles.footer}>
        <div className={styles.divider} />
        <p>Gracias por leer. Compartí este artículo si te resultó útil.</p>
      </footer>
    </article>
  );
}