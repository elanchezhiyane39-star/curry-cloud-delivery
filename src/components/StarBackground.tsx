import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';

interface StarType {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
}

export const StarBackground = () => {
  const [stars, setStars] = useState<StarType[]>([]);

  useEffect(() => {
    const generatedStars: StarType[] = [];
    for (let i = 0; i < 50; i++) {
      generatedStars.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 20 + 10,
        delay: Math.random() * 3,
      });
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute star-twinkle"
          style={{
            left: star.left,
            top: star.top,
            animationDelay: `${star.delay}s`,
          }}
        >
          <Star
            className="fill-star-gold text-star-orange"
            size={star.size}
          />
        </div>
      ))}
    </div>
  );
};
