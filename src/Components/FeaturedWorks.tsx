import React from 'react';
import primer from './Pages/primer.png';

const FeaturedWorks = () => {
  return (
    <section className='featured-works'>
      <div className='featured-works__container'>
        <span className='featured__title'>Featured works</span>

        <div className='featured-works__list'>

          <div className='featured__card'>
            <img src={primer} alt='#' className='featured__image'/>
            <div className='featured__card-container'>
              <h3 className='featured__card-title'>Designing Dashboards</h3>
              <div className='featured-tag'>
                <span className='featured-tag__year'>2022</span>
                <span className='featured-tag__tagname'>Dashboard</span>
              </div>
              <p className='featured__content'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div className='featured__card'>
            <img src={primer} alt='#' className='featured__image'/>
            <div className='featured__card-container'>
              <h3 className='featured__card-title'>Designing Dashboards</h3>
              <div className='featured-tag'>
                <span className='featured-tag__year'>2022</span>
                <span className='featured-tag__tagname'>Dashboard</span>
              </div>
              <p className='featured__content'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

          <div className='featured__card'>
            <img src={primer} alt='#' className='featured__image'/>
            <div className='featured__card-container'>
              <h3 className='featured__card-title'>Designing Dashboards</h3>
              <div className='featured-tag'>
                <span className='featured-tag__year'>2022</span>
                <span className='featured-tag__tagname'>Dashboard</span>
              </div>
              <p className='featured__content'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;