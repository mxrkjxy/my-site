import React from 'react';

const SKILLS = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Node.js',
  'Git',
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Node.js',
  'Git',
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Node.js',
  'Git',
];

const Banner: React.FC = () => {
  return (
    <section className="flex">
      {SKILLS.map((skill, index) => (
        <React.Fragment key={index}>
          <div className="px-2 flex items-center">
            <span>{skill}</span>
          </div>
          {index < SKILLS.length - 1 && <span className="px-1">/</span>}
        </React.Fragment>
      ))}
    </section>
  );
}

export default Banner;