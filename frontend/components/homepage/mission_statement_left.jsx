import React from 'react';
import ReactSVG from 'react-svg';

class MissionStatementLeft extends React.Component {
  componentDidMount() {
    const missionLeftArt = document.getElementById('mission-left-art');
    window.addEventListener('scroll', () => (
      this.addSlideAnimation(
        missionLeftArt,
        'mission-left-art-background',
        'mission-art-slide-animation')
      )
    );
  }

  addSlideAnimation(wrapper, elToAnimate, scssClass) {
    if (this.elementInViewport(wrapper)) {
      const background = document.getElementsByClassName(elToAnimate)[0];
      background.classList.add(scssClass);
    }
  }

  elementInViewport(el) {
    let top = el.offsetTop;
    let left = el.offsetLeft;
    let width = el.offsetWidth;
    let height = el.offsetHeight;

    while(el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top >= window.pageYOffset &&
      left >= window.pageXOffset &&
      (top + height) <= (window.pageYOffset + window.innerHeight) &&
      (left + width) <= (window.pageXOffset + window.innerWidth)
    );
  }

  render() {
    return (
      <div className='mission-statement'>
        <div className='mission-text-wrapper'>
          <h2 className='mission-left-title'>Quality is better locally</h2>
          <span className='mission-left-text display-text'>
            Larger companies have found a way to meet the needs of their
            business while supporting the local community and keeping businesses going. Our
            partners have begun regularly scheduling deliveries of flowers, bread, laundry, and
            cleaning services from their local communities.
          </span>
        </div>
        <div className='mission-left-art-cropper' id='mission-left-art'>
          <ReactSVG
            path='../../assets/images/b2B-background.svg'
            className='mission-left-art-background'
          />
          <ReactSVG
            path='../../assets/images/b2B-truck.svg'
            className='mission-left-art-truck'
          />
        </div>
      </div>
    );
  }
}
export default MissionStatementLeft;
