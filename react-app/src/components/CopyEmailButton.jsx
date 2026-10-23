import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ContentCopyIcon, CheckIcon } from './Icons';
import { SITE_METADATA } from '../data/portfolioData';

export default function CopyEmailButton({ email = SITE_METADATA.email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <motion.button
      type="button"
      onClick={handleCopy}
      whileTap={{ scale: 0.98 }}
      style={{
        backgroundColor: 'var(--token-097e5e4e-b67d-4d65-beed-3f1507fb8554, #ffffff)',
        border: 'none',
        borderRadius: '2px',
        padding: '12px 24px',
        display: 'inline-flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        cursor: 'pointer',
      }}
    >
      {copied ? (
        <CheckIcon size={20} color="#000000" />
      ) : (
        <ContentCopyIcon size={20} color="#000000" />
      )}
      <span
        className="preset-20-regular"
        style={{
          color: 'var(--token-eeb1eb49-7dca-481d-a3c9-3b91b8d5ae2e, #000000)',
          userSelect: 'none',
          whiteSpace: 'pre',
        }}
      >
        {copied ? 'Email Copied!' : 'Copy email'}
      </span>
    </motion.button>
  );
}
