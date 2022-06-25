import React from 'react';
import linkedin from './Linkedin.png'
import github from './github.png'
import telegram from './telegram.png'
import hhru from './hhru.jpg'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <a href='https://github.com/netrodgen' target="_blank">
          <img src={github} alt='github' className='footer__img'/>
        </a>
        <a href='https://t.me/netrodgen' target="_blank">
          <img src={telegram} alt='telegram' className='footer__img'/>
        </a>
        <a href='https://www.linkedin.com/in/yaroslav-demin-b4332a243/' target="_blank">
          <img src={linkedin} alt='linkedin' className='footer__img'/>
        </a>
        <a href='https://hh.ru/resume/a34c76a9ff09490bcc0039ed1f327132743875' target="_blank">
          <img src={hhru} alt='headhunter' className='footer__img'/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;