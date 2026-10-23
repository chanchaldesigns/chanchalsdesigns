import React, { useEffect, useRef, useState } from 'react';
import CanvasPhotoCard from './CanvasPhotoCard';
import { DragMoveIcon } from './Icons';
import { INFINITE_CANVAS_CARDS } from '../data/portfolioData';

export default function InfiniteCanvas({
  cards = INFINITE_CANVAS_CARDS,
  scrollSpeed = 0.4,
  dragSpeed = 0.5,
  ease = 0.2,
  parallaxGeneral = 1,
}) {
  const viewportRef = useRef(null);
  const tileRefs = useRef([]);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const state = {
      width: viewport.clientWidth || 1200,
      height: viewport.clientHeight || 649,
      scroll: {
        current: { x: 0, y: 0 },
        target: { x: 0, y: 0 },
        last: { x: 0, y: 0 },
      },
      mouse: {
        x: { t: 0, c: 0 },
        y: { t: 0, c: 0 },
        press: { t: 0, c: 0 },
      },
      drag: {
        startX: 0,
        startY: 0,
        scrollX: 0,
        scrollY: 0,
      },
      dragging: false,
    };

    const onResize = () => {
      if (!viewport) return;
      state.width = viewport.clientWidth || 1200;
      state.height = viewport.clientHeight || 649;
    };

    const onWheel = (e) => {
      e.preventDefault();
      state.scroll.target.x -= e.deltaX * scrollSpeed;
      state.scroll.target.y -= e.deltaY * scrollSpeed;
    };

    const onPointerDown = (e) => {
      state.dragging = true;
      setIsDragging(true);
      state.drag.startX = e.clientX;
      state.drag.startY = e.clientY;
      state.drag.scrollX = state.scroll.target.x;
      state.drag.scrollY = state.scroll.target.y;
      state.mouse.press.t = 1;
    };

    const onPointerUp = () => {
      state.dragging = false;
      setIsDragging(false);
      state.mouse.press.t = 0;
    };

    const onPointerMove = (e) => {
      const rect = viewport.getBoundingClientRect();
      state.mouse.x.t = (e.clientX - rect.left) / (rect.width || 1) - 0.5;
      state.mouse.y.t = (e.clientY - rect.top) / (rect.height || 1) - 0.5;

      if (state.dragging) {
        const dx = e.clientX - state.drag.startX;
        const dy = e.clientY - state.drag.startY;
        state.scroll.target.x = state.drag.scrollX + dx * dragSpeed;
        state.scroll.target.y = state.drag.scrollY + dy * dragSpeed;
      }
    };

    let rafId;
    const render = () => {
      const W = state.width;
      const H = state.height;

      state.scroll.current.x += (state.scroll.target.x - state.scroll.current.x) * ease;
      state.scroll.current.y += (state.scroll.target.y - state.scroll.current.y) * ease;

      state.scroll.last.x = state.scroll.current.x;
      state.scroll.last.y = state.scroll.current.y;

      const modX = ((state.scroll.current.x % W) + W) % W - W;
      const modY = ((state.scroll.current.y % H) + H) % H - H;

      state.mouse.x.c += (state.mouse.x.t - state.mouse.x.c) * 0.08;
      state.mouse.y.c += (state.mouse.y.t - state.mouse.y.c) * 0.08;
      state.mouse.press.c += (state.mouse.press.t - state.mouse.press.c) * 0.08;

      const tiltX = state.mouse.x.c * 6 * parallaxGeneral;
      const tiltY = state.mouse.y.c * 6 * parallaxGeneral;
      const scale = 1 - state.mouse.press.c * 0.03;

      const offsets = [
        [0, 0],
        [W, 0],
        [0, H],
        [W, H],
      ];

      offsets.forEach(([ox, oy], idx) => {
        const el = tileRefs.current[idx];
        if (el) {
          const tx = modX + ox + tiltX;
          const ty = modY + oy + tiltY;
          el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
        }
      });

      rafId = requestAnimationFrame(render);
    };

    viewport.addEventListener('wheel', onWheel, { passive: false });
    viewport.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('resize', onResize);
    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      viewport.removeEventListener('wheel', onWheel);
      viewport.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
    };
  }, [scrollSpeed, dragSpeed, ease, parallaxGeneral]);

  return (
    <div
      ref={viewportRef}
      style={{
        width: '100%',
        height: '649px',
        position: 'relative',
        overflow: 'clip',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
    >
      {[0, 1, 2, 3].map((tileIndex) => (
        <div
          key={tileIndex}
          ref={(el) => {
            tileRefs.current[tileIndex] = el;
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            willChange: 'transform',
          }}
        >
          {cards.map((card) => (
            <div
              key={`${tileIndex}-${card.id}`}
              style={{
                position: 'absolute',
                left: card.left,
                top: card.top,
                transform: 'translate(-50%, -50%)',
                zIndex: card.zIndex,
              }}
            >
              <CanvasPhotoCard card={card} />
            </div>
          ))}
        </div>
      ))}

      <div
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '12px',
          mixBlendMode: 'difference',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <DragMoveIcon size={20} color="#ffffff" />
        <p
          style={{
            fontFamily: '"Roboto Mono", monospace',
            fontSize: '12px',
            fontWeight: 500,
            letterSpacing: '-0.02em',
            lineHeight: '0.9em',
            color: '#ffffff',
            whiteSpace: 'pre',
          }}
        >
          SCROLL/DRAG TO MOVE
        </p>
      </div>
    </div>
  );
}
