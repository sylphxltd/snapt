import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';
import { getRepo } from '@/lib/github';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = request.nextUrl;

    const title = searchParams.get('title');
    const tagline = searchParams.get('tagline');
    const featuresParam = searchParams.get('features');
    const gradient = searchParams.get('gradient')?.split(',') || ['667eea', '764ba2'];
    const icon = searchParams.get('icon') || '✨';
    const repo = searchParams.get('repo');
    const showStats = searchParams.get('showStats') !== 'false';

    if (!title || !tagline || !featuresParam) {
      return new Response('Missing required parameters', { status: 400 });
    }

    const features = featuresParam.split(',').map((f) => f.trim()).slice(0, 4);

    // Fetch GitHub stats if repo provided
    let repoData = null;
    if (repo && showStats) {
      try {
        const [owner, repoName] = repo.split('/');
        if (owner && repoName) {
          repoData = await getRepo(owner, repoName);
        }
      } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
      }
    }

    return new ImageResponse(
      (
        <div
          style={{
            width: '1280px',
            height: '640px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: `linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%)`,
            fontFamily: 'sans-serif',
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '28px',
              padding: '64px 84px',
              width: '1136px',
              height: '528px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid rgba(255, 255, 255, 0.4)',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.25)',
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
              <div
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '22px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '44px',
                  background: `linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%)`,
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                }}
              >
                {icon}
              </div>
              <div
                style={{
                  fontSize: '76px',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  background: `linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%)`,
                  backgroundClip: 'text',
                  color: 'transparent',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {title}
              </div>
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: '38px',
                fontWeight: 600,
                color: '#2d3748',
                lineHeight: 1.35,
                letterSpacing: '-0.015em',
              }}
            >
              {tagline}
            </div>

            {/* Features */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '26px' }}>
              {features.map((feature, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    fontSize: '26px',
                    fontWeight: 500,
                    color: '#4a5568',
                    width: features.length <= 2 ? '100%' : '48%',
                  }}
                >
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      background: `linear-gradient(135deg, #${gradient[0]} 0%, #${gradient[1]} 100%)`,
                    }}
                  >
                    {['⚡', '🎯', '📦', '🚀'][i]}
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '26px',
                borderTop: '2px solid rgba(0, 0, 0, 0.08)',
              }}
            >
              <div
                style={{
                  fontSize: '23px',
                  color: '#718096',
                  fontWeight: 500,
                }}
              >
                github.com/{repo || `sylphxltd/${title.toLowerCase()}`}
              </div>

              {repoData && showStats && (
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      fontSize: '18px',
                      fontWeight: 600,
                      background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.5)',
                      color: '#2d3748',
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>⭐</span>
                    <span>{repoData.stargazers_count}</span>
                  </div>

                  {repoData.language && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '8px 16px',
                        borderRadius: '10px',
                        fontSize: '18px',
                        fontWeight: 600,
                        background:
                          'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
                        border: '1px solid rgba(255, 255, 255, 0.5)',
                        color: '#2d3748',
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>📝</span>
                      <span>{repoData.language}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ),
      {
        width: 1280,
        height: 640,
      }
    );
  } catch (error) {
    console.error('Banner generation error:', error);
    return new Response('Error generating banner', { status: 500 });
  }
}
