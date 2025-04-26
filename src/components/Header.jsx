import React from 'react';

const Header = ({ content }) => {
  const { name, role, contact } = content;

  return (
    <header className="personal-info">
      <h1 className="name">{`${name.firstName} ${name.lastName}`}</h1>
      <p className="role">{role}</p>
      <div className="contact-info">
        <p className="email">Email: {contact.email}</p>
        <p className="mobile">Mobile: {contact.mobile}</p>
        <p className="telephone">Telephone: {contact.telephone}</p>
        <p className="location">Location: {contact.location}</p>
        {/* <p className="github">
          GitHub:{' '}
          <a href={contact.github} target="_blank" rel="noopener noreferrer">
            {contact.github}
          </a>
        </p> */}
        <p className="linkedin">
          LinkedIn:{' '}
          <a href={contact.linkedIn} target="_blank" rel="noopener noreferrer">
            {contact.linkedIn}
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
