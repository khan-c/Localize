import React from 'react';
import CategoryIconIndex from './category_icon_index';
import MissionStatementLeft from './mission_statement_left';
import MissionStatementRight from './mission_statement_right';

const MissionSection = () => (
  <div className='mission-page'>
    <CategoryIconIndex />
    <MissionStatementLeft />
    <MissionStatementRight />
  </div>
);

export default MissionSection;
