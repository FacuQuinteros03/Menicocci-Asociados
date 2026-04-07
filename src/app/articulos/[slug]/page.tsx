import { getArticleBySlug } from '@/lib/getArticleBySlug';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
// IMPORTANTE: Importar los iconos que agregamos antes
import { ChevronLeft, Calendar, Clock } from 'lucide-react';
import styles from '../../../styles/components/article.module.css';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage(props: ArticlePageProps) {
  const resolvedParams = await props.params;
  const currentSlug = resolvedParams.slug;

  if (!currentSlug) {
    return <div className={styles.error}>Error: Slug no proporcionado.</div>;
  }

  const article = await getArticleBySlug(currentSlug);

  if (!article) {
    return (
      <div className={styles.error}>Artículo no encontrado: {currentSlug}</div>
    );
  }

  // Función de tiempo de lectura
  function estimateReadingTime(content: any[] = []) {
    if (!Array.isArray(content)) return 1;
    const text = content
      .map((block: any) => {
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

  // Componentes de PortableText personalizados
  const ptComponents = {
    block: {
      h2: ({ children }: any) => <h2 className={styles.h2}>{children}</h2>,
      h3: ({ children }: any) => <h3 className={styles.h3}>{children}</h3>,
      normal: ({ children }: any) => <p className={styles.p}>{children}</p>,
    },
    marks: {
      link: ({ children, value }: any) => {
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
      image: ({ value }: any) =>
        value?.asset?.url ? (
          <div className={styles.contentImageWrapper}>
            <img
              src={value.asset.url}
              alt={value.alt || ''}
              className={styles.contentImage}
            />
          </div>
        ) : null,
    },
  };

  return (
    <article className={`${styles.article} ${styles.fadeIn}`}>
      {/* BOTÓN VOLVER */}
      <Link href="/articulos" className={styles.backButton}>
        <ChevronLeft size={18} />
        <span>Todos los artículos</span>
      </Link>

      <header className={styles.header}>
        <div className={styles.topMeta}>
          {article.category && (
            <span className={styles.categoryBadge}>{article.category}</span>
          )}
          <div className={styles.metaInfo}>
            <span className={styles.metaItem}>
              <Calendar size={14} />
              {article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString('es-AR')
                : '—'}
            </span>
            <span className={styles.metaItem}>
              <Clock size={14} />
              {readingTime} min de lectura
            </span>
          </div>
        </div>

        <h1 className={styles.title}>{article.title}</h1>

        {article.excerpt && <p className={styles.excerpt}>{article.excerpt}</p>}

        {/* IMAGEN PRINCIPAL */}
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

      {/* CUERPO DEL ARTÍCULO */}
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
