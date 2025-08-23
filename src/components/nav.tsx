'use client';
import React, { useRef, useEffect, useState } from "react";

interface GooeyNavItem {
  label: string;
  href: string;
}

export interface GooeyNavProps {
  items: GooeyNavItem[];
  animationTime?: number;
  particleCount?: number;
  particleDistances?: [number, number];
  particleR?: number;
  timeVariance?: number;
  colors?: number[];
  initialActiveIndex?: number;
}

const GooeyNav1: React.FC<GooeyNavProps> = ({
  items,
  animationTime = 600,
  particleCount = 35,
  particleDistances = [120, 20],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(initialActiveIndex);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance: number, pointIndex: number, totalPoints: number): [number, number] => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i: number, t: number, d: [number, number], r: number) => {
    const rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10,
    };
  };

  const makeParticles = (element: HTMLElement) => {
    const d: [number, number] = particleDistances;
    const r = particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty("--time", `${bubbleTime}ms`);
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove("active");
      setTimeout(() => {
        const particle = document.createElement("span");
        const point = document.createElement("span");
        particle.classList.add("particle");
        particle.style.setProperty("--start-x", `${p.start[0]}px`);
        particle.style.setProperty("--start-y", `${p.start[1]}px`);
        particle.style.setProperty("--end-x", `${p.end[0]}px`);
        particle.style.setProperty("--end-y", `${p.end[1]}px`);
        particle.style.setProperty("--time", `${p.time}ms`);
        particle.style.setProperty("--scale", `${p.scale}`);
        particle.style.setProperty("--color", `var(--color-${p.color}, white)`);
        particle.style.setProperty("--rotate", `${p.rotate}deg`);
        point.classList.add("point");
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add("active");
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {}
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element: HTMLElement) => {
    if (!containerRef.current || !filterRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const pos = element.getBoundingClientRect();
    const styles = {
      left: `${pos.x - containerRect.x}px`,
      top: `${pos.y - containerRect.y}px`,
      width: `${pos.width}px`,
      height: `${pos.height}px`,
    };
    Object.assign(filterRef.current.style, styles);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number) => {
    const liEl = e.currentTarget.parentElement as HTMLElement;
    if (!liEl || activeIndex === index) return;

    setActiveIndex(index);
    updateEffectPosition(liEl);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll(".particle");
      particles.forEach((p) => filterRef.current!.removeChild(p));
      makeParticles(filterRef.current);
    }
  };

const handleKeyDown = (
  e: React.KeyboardEvent<HTMLAnchorElement>,
  index: number
) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleClick(
      { currentTarget: e.currentTarget } as React.MouseEvent<HTMLAnchorElement>,
      index
    );
  }
};

  useEffect(() => {
    if (!navRef.current || !containerRef.current) return;
    const activeLi = navRef.current.querySelectorAll("li")[activeIndex] as HTMLElement;
    activeLi && updateEffectPosition(activeLi);

    const obs = new ResizeObserver(() => {
      const li = navRef.current?.querySelectorAll("li")[activeIndex] as HTMLElement;
      li && updateEffectPosition(li);
    });
    obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [activeIndex]);

const sectionIds = ["home", "Projects", "Education", "Contact"];

useEffect(() => {
  const handleScroll = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    let currentIndex = 0;
    sectionIds.forEach((id, idx) => {
      const section = document.getElementById(id);
      if (section && section.offsetTop <= scrollPos) {
        currentIndex = idx;
      }
    });

    setActiveIndex(currentIndex);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <style>{`
        .gooey-nav-container {
          font-family: 'Poppins', sans-serif;
          position: relative;
          width: 100%;
        }
        .effect {
          position: absolute;
          opacity: 1;
          pointer-events: none;
          display: grid;
          place-items: center;
          z-index: 1;
          top: 0;
          left: 0;
        }
        .effect.filter {
          filter: blur(7px) contrast(100);
          mix-blend-mode: lighten;
        }
        .effect.filter::before {
          content: "";
          position: absolute;
          inset: -75px;
          z-index: -2;
          background: black;
        }
        .effect.filter::after {
          content: "";
          position: absolute;
          inset: 0;
          background: white;
          transform: scale(0);
          opacity: 0;
          z-index: -1;
          border-radius: 9999px;
        }
        .effect.active::after {
          animation: pill 0.3s ease both;
        }
        @keyframes pill {
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .particle,
        .point {
          display: block;
          opacity: 0;
          width: 20px;
          height: 20px;
          border-radius: 9999px;
          transform-origin: center;
        }
        .particle {
          --time: 5s;
          position: absolute;
          top: calc(50% - 8px);
          left: calc(50% - 8px);
          animation: particle calc(var(--time)) ease 1 -350ms;
          --color: var(--color-5, #fde047);
        }
        .point {
          background: var(--color);
          opacity: 1;
          animation: point calc(var(--time)) ease 1 -350ms;
        }
        @keyframes particle {
          0% {
            transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
            opacity: 1;
          }
          70% {
            transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
            opacity: 1;
          }
          85% {
            transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
            opacity: 1;
          }
          100% {
            transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
            opacity: 1;
          }
        }
        @keyframes point {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          25% {
            transform: scale(calc(var(--scale) * 0.25));
          }
          38% {
            opacity: 1;
          }
          65% {
            transform: scale(var(--scale));
            opacity: 1;
          }
          85% {
            transform: scale(var(--scale));
            opacity: 1;
          }
          100% {
            transform: scale(0);
            opacity: 0;
          }
        }
        li {
          color: grey;
          position: relative;
          cursor: pointer;
          font-size: 15px;
        }
        li.active {
          color: #f3c14e;
        }
        li.active::after {
          background: #333;
          opacity: 1;
          transform: scale(1);
        }
        li::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: #333;
          opacity: 0;
          transform: scale(0);
          transition: all 0.3s ease;
          z-index: -1;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="gooey-nav-container w-full pr-2 hidden lg:block" ref={containerRef}>
        <nav className="relative w-full bg-[#212122]">
          <ul
            ref={navRef}
            className="flex flex-wrap md:flex-nowrap justify-center gap-4 sm:gap-6 list-none px-4 py-2 m-0 w-full overflow-x-auto scrollbar-hide z-[3]"
          >
            {items.map((item, idx) => (
              <li
                key={idx}
                className={`px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg whitespace-nowrap transition-all duration-200 ${activeIndex === idx ? "active" : ""}`}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
  const section = document.querySelector(item.href);
  section?.scrollIntoView({ behavior: "smooth" });
  handleClick(e, idx);
                  }}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  className="outline-none inline-block"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Uncomment below if you want to show the animation */}
        {/* <span className="effect filter" ref={filterRef} /> */}
      </div>
    </>
  );
};

export default GooeyNav1;

