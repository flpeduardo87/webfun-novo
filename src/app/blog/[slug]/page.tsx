import '../../site.css';
import '../blog.css';
import { notFound } from 'next/navigation';
import { Camera, MessageCircle, Briefcase, ArrowLeft, ArrowRight } from 'lucide-react';
import NavBar from '@/components/NavBar';
import { POSTS } from '../data';
import ArticleContent from './ArticleContent';

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} — Webfun Blog`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <NavBar active="blog" />

      {/* HERO */}
      <section className="art-hero">
        <div className="art-hero-inner">
          <a href="/blog" className="art-back">
            <ArrowLeft size={14} strokeWidth={2} /> Voltar ao blog
          </a>
          <div className="art-tag">{post.tag}</div>
          <h1 className="art-h1">{post.title}</h1>
          <p className="art-excerpt">{post.excerpt}</p>
          <div className="art-meta">
            <span>{formatDate(post.date)}</span>
            <div className="art-meta-dot" />
            <span>{post.readTime} min de leitura</span>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="art-body">
        <div className="art-body-inner">
          <ArticleContent content={post.content} />

          {/* CTA */}
          <div className="art-cta-box">
            <div className="art-cta-box-title">Precisa de ajuda para aplicar isso no seu negócio?</div>
            <p className="art-cta-box-sub">
              A conversa é gratuita e sem compromisso. Traga sua dúvida — a gente vê juntos o que faz mais sentido pro seu projeto.
            </p>
            <a href="/contato" className="btn-p" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
              Falar com a Webfun <ArrowRight size={14} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      {/* MORE POSTS */}
      {others.length > 0 && (
        <section className="art-more">
          <div className="art-more-inner">
            <div className="art-more-title">Mais artigos</div>
            <div className="art-more-grid">
              {others.map((p) => (
                <a key={p.slug} href={`/blog/${p.slug}`} className="bl-card">
                  <div className="bl-card-cover" style={{ height: 160 }}>
                    <div className="bl-card-cover-inner">
                      <div className="bl-card-cover-pattern" />
                    </div>
                    <span className="bl-card-cover-tag">{p.tag}</span>
                  </div>
                  <div className="bl-card-body">
                    <h3 className="bl-card-title" style={{ fontSize: 16 }}>{p.title}</h3>
                    <div className="bl-card-link">
                      Ler artigo <ArrowRight size={12} strokeWidth={2} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <a href="/" className="nav-logo" style={{ marginBottom: 12 }}>
                <span className="logo-dot" />webfun
              </a>
              <p className="footer-tagline">Tecnologia e design para<br />negócios que querem crescer.</p>
              <div className="footer-socials">
                <a href="#" className="fsoc" aria-label="Instagram"><Camera size={16} strokeWidth={1.8} /></a>
                <a href="#" className="fsoc" aria-label="WhatsApp"><MessageCircle size={16} strokeWidth={1.8} /></a>
                <a href="#" className="fsoc" aria-label="LinkedIn"><Briefcase size={16} strokeWidth={1.8} /></a>
              </div>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <div className="fcol-title">Serviços</div>
                <a href="/servicos#site-institucional">Site institucional</a>
                <a href="/servicos#loja-virtual">Loja virtual</a>
                <a href="/servicos#landing-page">Landing page</a>
                <a href="/servicos#sistema-sob-medida">Sistemas sob medida</a>
                <a href="/servicos#automacao-ia">Automação & IA</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Empresa</div>
                <a href="/sobre">Sobre a Webfun</a>
                <a href="/projetos">Projetos</a>
                <a href="/processo">Como trabalhamos</a>
                <a href="/blog">Blog</a>
              </div>
              <div className="footer-col">
                <div className="fcol-title">Contato</div>
                <a href="mailto:agenciawebfun@gmail.com">agenciawebfun@gmail.com</a>
                <a href="https://wa.me/5547997618824">WhatsApp</a>
                <a href="#">Canoinhas, SC</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2025 Webfun. Todos os direitos reservados.</span>
            <span className="footer-credits">Feito com cuidado em Canoinhas</span>
          </div>
        </div>
      </footer>
    </>
  );
}
