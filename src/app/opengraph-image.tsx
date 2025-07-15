import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Darts - same same but different'
export const contentType = 'image/png'
export const size = {
  width: 1200,
  height: 630,
}
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        {/* Dart Icon */}
        <div
          style={{
            fontSize: 120,
            marginBottom: 20,
          }}
        >
          🎯
        </div>
        
        {/* Title */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: 20,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          Dartsammlung - Verkauf
        </div>
        
        {/* Subtitle */}
        <div
          style={{
            fontSize: 32,
            color: '#C4A1FF',
            textAlign: 'center',
            marginBottom: 30,
            maxWidth: '800px',
          }}
        >
          Darts - same same but different
        </div>
        
        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            fontSize: 24,
            color: '#E5E7EB',
          }}
        >
          <span>🎯 26 Sets verfügbar</span>
          <span>💳 PayPal</span>
          <span>📦 Versand möglich</span>
        </div>
        
        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #C4A1FF 0%, #667eea 50%, #764ba2 100%)',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
} 