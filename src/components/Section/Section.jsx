import React from 'react';
import './Section.css';

const Section = ({ title, titleAlign = 'centro', link, children }) => {
  return (
    <section className="section">
      <div className={`section-header ${titleAlign === 'esquerda' ? 'left' : ''}`}>
        <h2>{title}</h2>
        {link && <a href={link.href}>{link.text}</a>}
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
