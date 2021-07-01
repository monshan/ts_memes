import { useState } from "react";

export const Display = ({ imgSrc }: { imgSrc: string }) => {

  const [caption, setCaption] = useState('');

  return (
    <div className="display">
      <img src={imgSrc} />
      <p
        className="display__caption" 
        contentEditable={true}
        onChange={() => {
          const cap = document.querySelector<HTMLParagraphElement>('display__caption')?.innerText;
          if (cap) {
            setCaption(cap);
          }
        }}> 
        ~Your caption here~
      </p>
    </div>
  )
}