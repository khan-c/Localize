import React from 'react';

const style = {
  categoryWrapper: {
    overflow: 'scroll',
    backgroundColor: RED,
    width: '100%',
    display: 'flex',
  },
  categoriesUl: {
    display: 'flex',
  },
  category: {
    marginLeft: '10px',
    cursor: 'pointer'
  },
  arrowLeft: {
    height: '20px',
    width: '20px'
  },
  arrowRight: {
    height: '20px',
    width: '20px',
    transform: 'scaleX(-1)',
    hover: {

    }
  }
};

class Categories extends React.Component {
  render() {
    return (
      <div style={style.categoryWrapper}>
        <img
          src="../../assets/images/arrow.svg"
          style={style.arrowLeft}
        />
      <ul style={style.categoriesUl}>
          <li>
            <a style={style.category} className="text-font">category</a>
          </li>
          <li>
            <a style={style.category} className="text-font">category</a>
          </li>
          <li>
            <a style={style.category} className="text-font">category</a>
          </li>
          <li>
            <a style={style.category} className="text-font">category</a>
          </li>
        </ul>
        <img
          src="../../assets/images/arrow.svg"
          style={style.arrowRight}
        />
      </div>
    );
  }
}

export default Categories;
