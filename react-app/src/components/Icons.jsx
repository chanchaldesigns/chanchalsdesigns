import React from 'react';

export function NorthEastArrow({ size = 15, color = 'currentColor', style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{ fill: color, color, flexShrink: 0, ...style }}
    >
      <path d="M5 17.59 15.59 7H9V5h10v10h-2V8.41L6.41 19 5 17.59Z" />
    </svg>
  );
}

export function ContentCopyIcon({ size = 20, color = 'currentColor', style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{ fill: color, color, flexShrink: 0, ...style }}
    >
      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
    </svg>
  );
}

export function CheckIcon({ size = 20, color = 'currentColor', style = {} }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      style={{ fill: color, color, flexShrink: 0, ...style }}
    >
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
    </svg>
  );
}

export function DragMoveIcon({ size = 20, color = '#ffffff' }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={size} height={size}>
      <path
        d="M 7.5 4.583 L 9.117 2.967 C 9.605 2.479 10.395 2.479 10.883 2.967 L 12.5 4.583 M 4.583 7.5 L 2.967 9.117 C 2.479 9.605 2.479 10.395 2.967 10.883 L 4.583 12.5 M 15.417 7.5 L 17.033 9.117 C 17.521 9.605 17.521 10.395 17.033 10.883 L 15.417 12.5 M 12.5 15.417 L 10.883 17.033 C 10.395 17.521 9.605 17.521 9.117 17.033 L 7.5 15.417 M 10 3.333 L 10 10 M 10 10 L 10 16.667 M 10 10 L 3.333 10 M 10 10 L 16.667 10"
        fill="transparent"
        strokeWidth="1.5"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
