import React from 'react';
import CategoryIconIndex from './category_icon_index';

const MissionPage = () => (
  <div className='mission-page'>
    <CategoryIconIndex />
    <div className='mission-statement'>
      <img src='' className='mission-state-img-1'/>
      <h1>Statement 1</h1>
      <span>
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Proin in elit erat. Vestibulum
        et enim bibendum, molestie ex non, ullamcorper sapien.
        Curabitur eu metus mi.
      </span>
    </div>
  </div>
);

export default MissionPage;
