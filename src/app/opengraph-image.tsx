import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Webfun — Agência Digital';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0f0f10',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo dot + wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: '#c8d832',
            }}
          />
          <span style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.5px' }}>
            webfun
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: 28,
          }}
        >
          Seu negócio merece{' '}
          <span
            style={{
              color: '#c8d832',
              fontStyle: 'italic',
            }}
          >
            mais
          </span>
          {' '}do que um site.
        </div>

        {/* Sub */}
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.45)', maxWidth: 700 }}>
          Sites, lojas virtuais, sistemas e automações para negócios que querem crescer.
        </div>

        {/* URL badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 64,
            right: 96,
            fontSize: 18,
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.05em',
          }}
        >
          webfun.com.br
        </div>
      </div>
    ),
    { ...size }
  );
}
