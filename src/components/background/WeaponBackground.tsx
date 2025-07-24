import React, { useEffect, useState } from "react";

const weaponImages = [
  "/materials/mats1.png",
  "/materials/mats2.png",
  "/materials/mats3.png",
  "/materials/mats4.png",
  "/materials/mats5.png",
  "/materials/mats6.png",
  "/materials/mats7.png",
  "/materials/mats8.png",
  "/materials/mats9.png",
  "/materials/mats10.png",
];

interface Weapon {
  id: number;
  top: number;
  left: number;
  size: number;
  image: string;
  rotate: number;
}

const WeaponBackground: React.FC = () => {
  const [weapons, setWeapons] = useState<Weapon[]>([]);

  useEffect(() => {
    const newWeapons: Weapon[] = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 24 + Math.random() * 48,
      image: weaponImages[Math.floor(Math.random() * weaponImages.length)],
      rotate: Math.random() * 360,
    }));
    setWeapons(newWeapons);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {weapons.map((weapon) => (
        <img
          key={weapon.id}
          src={weapon.image}
          alt="weapon"
          className="absolute opacity-20 mix-blend-soft-light xs:block"
          style={{
            top: `${weapon.top}%`,
            left: `${weapon.left}%`,
             width: `min(${weapon.size * 0.6}px, 16vw)`,
            transform: `rotate(${weapon.rotate}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default WeaponBackground;
