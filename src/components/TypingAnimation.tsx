import React, { useState, useEffect } from 'react';

const phrases = ["I'm craving a biryani", "I'm craving a samosa", "I'm craving a chaat"];

export default function TypingAnimation() {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (text !== currentPhrase) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          // Wait before starting to delete
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (text === '') {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
          setText(currentPhrase.slice(0, text.length - 1));
        }
      }
    }, isDeleting ? 50 : 150); // Faster deletion, slower typing
    
    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting]);

  return (
    <div className="h-6 text-lg text-brand-gold font-light tracking-widest">
      {text}
      <span className="animate-pulse">|</span>
    </div>
  );
}