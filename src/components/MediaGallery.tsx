import { useState } from "react";
import { Play, Pause } from "lucide-react";

interface MediaItem {
  type: 'image' | 'video';
  src: string;
  alt: string;
  thumbnail?: string;
}

interface MediaGalleryProps {
  items: MediaItem[];
}

const MediaGallery = ({ items }: MediaGalleryProps) => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const handleVideoClick = (index: number) => {
    if (playingVideo === index) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(index);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {items.map((item, index) => (
        <div key={index} className="gallery-item group">
          {item.type === 'image' ? (
            <div className="relative overflow-hidden">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-bounce"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <video
                className="gallery-video h-80"
                poster={item.thumbnail}
                muted
                loop
                playsInline
                ref={(video) => {
                  if (video) {
                    if (playingVideo === index) {
                      video.play();
                    } else {
                      video.pause();
                    }
                  }
                }}
              >
                <source src={item.src} type="video/mp4" />
              </video>
              
              {/* Play/Pause Button Overlay */}
              <div 
                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300 cursor-pointer"
                onClick={() => handleVideoClick(index)}
              >
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-rainbow transform group-hover:scale-110 transition-all duration-300">
                  {playingVideo === index ? (
                    <Pause className="w-8 h-8 text-primary ml-0.5" />
                  ) : (
                    <Play className="w-8 h-8 text-primary ml-1" />
                  )}
                </div>
              </div>
              
              {/* Colorful Video Border */}
              <div className="absolute inset-0 bg-gradient-rainbow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full bg-background m-1 rounded-2xl" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;