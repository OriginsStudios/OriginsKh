"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovered(true);
    const removeHover = () => setHovered(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 0.15s ease",
        transformOrigin: "center",
      }}
      className="hidden md:block"
    >
      <Image
        src="/cursor/cursor.png"
        alt="Custom Cursor"
        width={hovered ? 30 : 20}
        height={hovered ? 30 : 20}
        style={{
          transition: "width 0.05s ease, height 0.05s ease",
        }}
      />
    </div>
  );
}
