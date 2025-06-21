import { useEffect, useState, isValidElement, cloneElement } from 'react';

interface TypingTextProps {
  children: React.ReactElement;
  speed?: number;
}

const TypingText: React.FC<TypingTextProps> = ({ children, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  const fullText =
    isValidElement(children) &&
    typeof (children.props as any).children === 'string'
      ? (children.props as any).children
      : '';

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, fullText, speed]);

  const handleClick = () => {
    setDisplayedText('');
    setIndex(0);
  };

  return isValidElement(children)
    ? cloneElement(
        children,
        {
          ...(children.props as any), // Preserve existing props
          onClick: handleClick,
          style: {
            cursor: 'pointer',
          },
        },
        <>
          {displayedText}
          <span className="blinking-cursor">_</span>
        </>
      )
    : null;
};

export default TypingText;
