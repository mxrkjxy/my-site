import { useEffect, useState, isValidElement, cloneElement } from 'react';

interface TypingTextProps {
  children: React.ReactElement;
  speed?: number;
}

const VOWELS = ['a', 'e', 'i', 'o', 'u'];

const TypingText: React.FC<TypingTextProps> = ({ children, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [glitchedText, setGlitchedText] = useState('');

  const fullText =
    isValidElement(children) &&
    typeof (children.props as any).children === 'string'
      ? (children.props as any).children
      : '';

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        const newChar = fullText[index];
        setDisplayedText((prev) => prev + newChar);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, speed]);

  useEffect(() => {
    if (index >= fullText.length) {
      const interval = setInterval(() => {
        const glitched = displayedText
          .split('')
          .map((char) => {
            if (VOWELS.includes(char.toLowerCase()) && Math.random() < 0.3) {
              return 'x';
            }
            return char;
          })
          .join('');
        setGlitchedText(glitched);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [index, displayedText]);

  const handleClick = () => {
    setDisplayedText('');
    setGlitchedText('');
    setIndex(0);
  };

  const output = index < fullText.length ? displayedText : glitchedText;

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
