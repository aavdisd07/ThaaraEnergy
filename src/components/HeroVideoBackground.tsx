import { useEffect, useRef } from 'react';

const HeroVideoBackground = () => {
const playerRef = useRef(null);

useEffect(() => {
// Load YouTube IFrame API dynamically
const tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
document.body.appendChild(tag);


// Define global callback with proper type assertion for TypeScript
;(window as any).onYouTubeIframeAPIReady = () => {
  playerRef.current = new (window as any).YT.Player('yt-hero-player', {
    videoId: 'YOUR_VIDEO_ID', // 🔁 Replace with your YouTube video ID
    playerVars: {
      autoplay: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      fs: 0,
      rel: 0,
      mute: 1,
      playsinline: 1,
      playlist: 'YOUR_VIDEO_ID', // 🔁 Needed for loop
    },
    events: {
      onReady: (event: { target: { mute: () => void; playVideo: () => void } }) => {
        event.target.mute();
        event.target.playVideo();
      },
    },
  });
};
}, []);

return (
<div style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden' }}>
{/* YouTube iframe */}
<div
id="yt-hero-player"
style={{
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
zIndex: 0,
pointerEvents: 'none',
}}
/>

javascript
Copy
Edit
  {/* Dark overlay for contrast */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      zIndex: 1,
    }}
  />

  {/* Content overlay */}
  <div
    style={{
      position: 'relative',
      zIndex: 2,
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      textAlign: 'center',
      padding: '1rem',
    }}
  >
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Our Website</h1>
    <p style={{ fontSize: '1.25rem' }}>Empowering a Greener Tomorrow</p>
  </div>
</div>
);
};

export default HeroVideoBackground;