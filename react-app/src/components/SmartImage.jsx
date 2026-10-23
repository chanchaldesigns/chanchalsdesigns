import React, { useState } from 'react';
import { ALLOW_REMOTE_FALLBACK, resolveAsset } from '../data/assets';

/**
 * Renders an image from an asset definition (`{ localPath, sourceUrl }` or string path).
 * 1. Tries `localPath` (`/assets/...` inside `public/assets/`) first.
 * 2. If the local file hasn't been placed in `public/assets/` yet:
 *    - If `ALLOW_REMOTE_FALLBACK` is `true`, falls back to `sourceUrl`.
 *    - Otherwise, renders a sleek dark placeholder card showing the expected local path.
 */
export default function SmartImage({
  asset,
  alt = '',
  className = '',
  style = {},
  draggable = true,
  ...rest
}) {
  const localSrc = resolveAsset(asset);
  const remoteSrc = typeof asset === 'object' && asset?.sourceUrl ? asset.sourceUrl : '';
  const [src, setSrc] = useState(localSrc);
  const [failedAll, setFailedAll] = useState(false);

  if (failedAll) {
    return (
      <div
        className={className}
        style={{
          ...style,
          backgroundColor: '#161616',
          border: '1px dashed rgba(255, 255, 255, 0.2)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          color: 'rgba(255, 255, 255, 0.6)',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          textAlign: 'center',
        }}
      >
        <span>Place image at:</span>
        <code style={{ color: '#fff2f9', marginTop: '4px' }}>public{localSrc}</code>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      draggable={draggable}
      onError={() => {
        if (ALLOW_REMOTE_FALLBACK && remoteSrc && src !== remoteSrc) {
          setSrc(remoteSrc);
        } else {
          setFailedAll(true);
        }
      }}
      {...rest}
    />
  );
}
