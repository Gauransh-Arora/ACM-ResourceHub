import React from 'react';
import linkedInLogo from '../assets/linkedin.svg';
import githubLogo from '../assets/github.svg';
import instaLogo from '../assets/instaLogo.svg';

const Contributor = ({ img_url, name, linkedinUrl, githubUrl, instaUrl }) => {
  return (
    <div className="flex flex-col items-center px-2 py-6">
      <div
        className="w-18 h-18 rounded-full overflow-hidden flex justify-center items-center"
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
      <div className="flex justify-center items-center">
        <a href={instaUrl} target="_blank" rel="noopener noreferrer" >
          <img
            src={instaLogo}
            alt="Instagram"
            className='w-6 h-6 m-1'
            />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" >
          <img
            src={linkedInLogo}
            alt="LinkedIn"
            className='w-7 h-7 m-1'
            />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={githubLogo}
            alt="GitHub"
            className='w-7 h-7 m-1'
            
          />
        </a>
      </div>
    </div>
  );
};

export default Contributor;