import '../site.css';
import './blog.css';

import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BlogGrid from './BlogGrid';
import { POSTS } from './data';

export const metadata = {
  title: 'Blog — Webfun',
  description: 'Artigos sobre desenvolvimento web, performance, SEO e estratégia digital para negócios brasileiros.',
};

export default function BlogPage() {
  return (
    <>
      <NavBar active="blog" />

      {/* HERO */}
      <section className="bl-hero">
        <div className="bl-hero-inner">
          <div className="eyebrow">Blog</div>
          <h1 className="bl-h1">
            Conteúdo direto<br /><em>ao ponto.</em>
          </h1>
          <p className="bl-sub">
            {POSTS.length} artigos sobre web, performance, SEO e estratégia digital — sem enrolação e sem paywalls.
          </p>
        </div>
      </section>

      {/* GRID WITH FILTERS */}
      <BlogGrid />

      <Footer />
    </>
  );
}
