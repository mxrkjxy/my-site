import React from 'react';

import {
  camelToProperCase,
  camelToKebabCase,
  pluralSafeString,
} from '../utils/string_utils';

import { isDataEmpty } from '../utils/type_utils';

const Content = ({ title, content }) => {
  if (isDataEmpty(content)) return;

  return (
    <section className={camelToKebabCase(title)}>
      <h1>{camelToProperCase(title)}</h1>

      {title === "summary" && content.descriptions && (
        <p className="description">{content.descriptions.join(' ')}</p>
      )}

      {title === "education" && content.universities && (
        <ul className="university-list">
          {content.universities.map((university, index) => (
            <li key={index} className="education-item">
              <h2 className="university">{university.name}</h2>
              <p className="degree">{university.degree}</p>
              <p className="yearAttended">
                {university.yearStarted} - {university.yearGraduated}
              </p>
              <p className="location">{university.location}</p>
              <p className="awards">
                {`${pluralSafeString("Award", university.awards)}: ${university.awards.join(', ')}`}
              </p>
            </li>
          ))}
        </ul>
      )}

      {title === "workExperience" && content.companies && (
        <ul className="company-list">
          {content.companies.map((company, index) => {
            const startDate = `${company.startDate.month} ${company.startDate.year}`;
            const endDate =
              company.endDate.month === '' && company.endDate.year === ''
                ? 'Present'
                : `${company.endDate.month} ${company.endDate.year}`;

            return (
              <li key={index} className="work-experience-item">
                <h2 className="role">{company.role}</h2>
                <p className="name">{company.name}</p>
                <p className="location">{company.location}</p>
                <p className="date">{`${startDate} - ${endDate}`}</p>
                {company.description && (
                  <ul className="work-description-list">
                    {company.description.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                )}
                {company.awards && (
                  <p className="awards">
                    {`${pluralSafeString("Award", company.awards)}: ${company.awards.join(', ')}`}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {title === "skills" && (
        <ul className="skills-list">
          {content.technologies && (
            <li className="technologies-section">
              <h3 className="technologies">Technologies</h3>
              <ul className="technology-list">
                {content.technologies.map((techGroup, index) => (
                  <React.Fragment key={index}>
                    {Object.entries(techGroup).map(([category, items]) => (
                      <React.Fragment key={category}>
                        <li className={camelToKebabCase(category)}>
                          <h4>{camelToProperCase(category)}</h4>
                          <ul className={`technology-list-${category}`}>
                            {items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </li>
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                ))}
              </ul>
            </li>
          )}

          {content.softSkills && (
            <li className="soft-skills-section">
              <h3 className="soft-skills">Soft Skills</h3>
              <ul className="soft-skills-list">
                {content.softSkills.map((skill, index) => (
                  <li key={index} className="soft-skill">
                    {skill}
                  </li>
                ))}
              </ul>
            </li>
          )}
        </ul>
      )}
    </section>
  );
};

export default Content;
