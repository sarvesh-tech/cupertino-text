import React, { useState, useEffect, useRef } from 'react';

const CupertinoText = ({ 
  children, 
  delay = 0, 
  duration = 800, 
  stagger = 80, 
  distance = 60, 
  className = '', 
  style = {},
  lines = false,
  triggerOnce = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) setHasTriggered(true);
          }, delay);
        } else if (!triggerOnce && !entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [delay, triggerOnce, hasTriggered]);

  const processText = (text) => {
    if (lines) {
      return text.split('\n').map((line, index) => ({
        content: line,
        index
      }));
    } else {
      const words = text.split(' ');
      return words.map((word, index) => ({
        content: word,
        index
      }));
    }
  };

  const renderContent = () => {
    if (typeof children !== 'string') {
      return (
        <span
          style={{
            display: 'inline-block',
            transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
            opacity: isVisible ? 1 : 0,
            transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
            transitionDelay: `${delay}ms`
          }}
        >
          {children}
        </span>
      );
    }

    const textParts = processText(children);

    return textParts.map((part, index) => (
      <span
        key={index}
        style={{
          display: lines ? 'block' : 'inline-block',
          transform: isVisible ? 'translateY(0)' : `translateY(${distance}px)`,
          opacity: isVisible ? 1 : 0,
          transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
          transitionDelay: `${index * stagger + delay}ms`,
          marginRight: lines ? '0' : '0.25em'
        }}
      >
        {part.content}
        {lines && index < textParts.length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        overflow: 'hidden',
        ...style
      }}
    >
      {renderContent()}
    </div>
  );
};

export default CupertinoText;