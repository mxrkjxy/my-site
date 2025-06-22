import { useEffect, useState, isValidElement, cloneElement } from 'react';

interface TypingTextProps {
  children: React.ReactElement;
  speed?: number;
}

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const TypingText: React.FC<TypingTextProps> = ({ children, speed = 100 }) => {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [glitchText, setGlitchText] = useState('');

  const fullText =
    isValidElement(children) &&
    typeof (children.props as any).children === 'string'
      ? (children.props as any).children
      : '';

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        const nextChar = fullText[index];
        setTypedText((prev) => prev + nextChar);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, speed]);

  // Glitch effect after typing
  useEffect(() => {
    if (index >= fullText.length) {
      const interval = setInterval(() => {
        const glitched = typedText
          .split('')
          .map((char) =>
            VOWELS.includes(char.toLowerCase()) && Math.random() < 0.3
              ? 'x'
              : char
          )
          .join('');
        setGlitchText(glitched);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [index, typedText]);

  const handleClick = () => {
    setTypedText('');
    setGlitchText('');
    setIndex(0);
  };

  const isTyping = index < fullText.length;
  const output = isTyping ? typedText : glitchText || typedText;

  return isValidElement(children)
    ? cloneElement(
        children,
        {
          ...(children.props as any),
          onClick: handleClick,
          style: { cursor: 'pointer' },
        },
        <>
          {output}
          <span className="blinking-cursor">_</span>
        </>
      )
    : null;
};

export default TypingText;
