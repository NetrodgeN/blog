import React from 'react';
import avatar from './avatar.jpg';
import FeaturedWorks from '../FeaturedWorks';

const Home = () => {
  return (
    <main className='main'>
      <section className='get-started'>
        <div className='get-started__container'>
          <div className='get-started__content'>
            <div className='block-text'>
              <h1 className='block-text__title'>Привет, <br />меня зовут Ярослав,<br />frontend разработчик</h1>
              <div className='block-text__text'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </div>
              <button className='block-text__button button'>Загрузить резюме</button>
            </div>
          </div>
          <div className='get-started__image'>
            <img className='get-started-image__avatar' src={avatar} alt='avatar' />
          </div>
        </div>
      </section>
      <section className='recent-posts'>
        <div className='recent-posts__container'>
          <div className='recent-posts__column'>
            <span className='recent-posts__title'>Recent posts</span>
            <a className='recent-posts__link' href='#'>View all</a>
          </div>
            <div className='recent-posts__cards recent-posts__column'>
              <div className='recent-post__card'>
                <h2 className='card__title'>Making a design system from scratch</h2>
                <div className='card__date'>12 Feb 2020</div>
                <p className='card__content'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
              <div className='recent-post__card'>
                <h2 className='card__title'>Making a design system from scratch</h2>
                <div className='card__date'>12 Feb 2020</div>
                <p className='card__content'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
          </div>
        </div>
      </section>
      <FeaturedWorks/>

    </main>
  );
};

export default Home;