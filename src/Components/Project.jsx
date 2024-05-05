import React from 'react';

const Project = ({ image, hrefs, name }) => {
    return (
      <div className="portfolio-item">
        <div className="image">
          <img src={image} alt={name}></img>
        </div>
        <div className="hover-items">
          <h3>{name}</h3>
          <div className="icons">
            {hrefs.map((item, index) => (
              <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="icon">
                <i className={item.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Project;