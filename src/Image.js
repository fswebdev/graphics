import React from 'react';

function Image({ src, alt, width, height, caption }) {
  return (
    <fieldset>
      <figure>
        <img src={src} className="size" width={width} height={height} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    </fieldset>
  );
}

export default Image;
