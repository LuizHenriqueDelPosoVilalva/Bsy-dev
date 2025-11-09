"use client";

import { useEffect, useState } from "react";

interface ScrollShapeProps {
  className?: string;
  color: string;
  speed?: number;
  variant?: "circle" | "square" | "triangle";
  horizontalSpeed?: number;
  rotationSpeed?: number;
}

export function ScrollShape({
  className = "",
  color,
  speed = 0.3,
  variant = "circle",
  horizontalSpeed = 0.15,
  rotationSpeed = 0.05,
}: ScrollShapeProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transform = `translateY(${scrollY * speed}px) translateX(${
    scrollY * horizontalSpeed
  }px) rotate(${scrollY * rotationSpeed}deg)`;

  const getShapeClasses = () => {
    switch (variant) {
      case "circle":
        return "rounded-full";
      case "square":
        return "rounded-lg rotate-45";
      case "triangle":
        return "";
      default:
        return "rounded-full";
    }
  };

  return (
    <div
      className={`w-96 h-96 transition-all duration-1000 ${getShapeClasses()} ${className} ${
        isVisible ? "opacity-30" : "opacity-0"
      }`}
      style={{
        transform,
        backgroundColor: color,
        clipPath:
          variant === "triangle"
            ? "polygon(50% 0%, 0% 100%, 100% 100%)"
            : undefined,
      }}
    />
  );
}
