import React, { useEffect, useState } from "react";

interface Props {
  text: string;
  delay: number;
  infinite: boolean;
}
const TypeWriter = ({ text, delay, infinite }: Props) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [maxCurrentIndex, setMaxCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      // if (currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentIndex == text.length - 1) {
          setMaxCurrentIndex(currentIndex);
        }
      }, delay);
    } else if (maxCurrentIndex >= 0) {
      const timeoutDesc = setTimeout(() => {
        setCurrentText(text.substring(0, maxCurrentIndex));
        setMaxCurrentIndex(maxCurrentIndex - 1);
        if (maxCurrentIndex == 0) {
          setCurrentIndex(0);
        }
      }, delay);
    }
  }, [currentIndex, delay, text, maxCurrentIndex]);

  return <span>{currentText}</span>;
};

export default TypeWriter;
