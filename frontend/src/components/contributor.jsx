import React from 'react';
import linkedInLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';

const Contributor = ({ img_url, name, linkedinUrl, githubUrl }) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-15 h-15 rounded-full overflow-hidden flex justify-center items-center"
        style={{
          backgroundImage: `url(${img_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className="text-[14px] font-semibold">
        {name}
      </div>
      <div className="flex justify-center">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" >
          <img
            src={linkedInLogo}
            alt="LinkedIn"
            className='w-8 h-8'
            />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={githubLogo}
            alt="GitHub"
            className='w-8 h-8'
            
          />
        </a>
      </div>
    </div>
  );
};

export default Contributor;