import React from 'react';
import InputRange from 'react-input-range';
import MdClose from 'react-icons/lib/md/close';

class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      about: '',
      mon: { min: 8, max: 18 },
      tue: { min: 8, max: 18 },
      wed: { min: 8, max: 18 },
      thu: { min: 8, max: 18 },
      fri: { min: 8, max: 18 },
      sat: { min: 0, max: 0 },
      sun: { min: 0, max: 0 },
    };

    this.noAvail = this.noAvail.bind(this);
  }

  noAvail(day) {
    return (e) => {
      e.preventDefault();
      const value = { min: 0, max: 0 };
      this.setState({ [day]: value });
    };
  }

  generateAvailability() {
    return ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map(day => {
      const start = this.parseHour(this.state[day].min);
      const end = this.parseHour(this.state[day].max);
      let hours = `${ start } - ${ end }`;
      if (start === end) {
        hours = 'closed';
      }
      return (
        <div key={ day } className="day">
          <span className="hours">
            { day }: { hours }
          </span>
          <div className="avail-range">
            <InputRange
              maxValue={ 24 }
              minValue={ 0 }
              step= { 0.5 }
              value={ this.state[day] }
              onChange={ value => this.setState({ [day]: value })}/>
            <MdClose
              onClick={ this.noAvail(day) }
              className="closed"/>
          </div>
        </div>
      );
    });
  }

  parseHour(time) {
    let result = '';
    if (time === 0 || time === 24) {
      result = '12AM';
      return result;
    }
    if (time % 1 === .5) {
      time -= .5;
      result = ':30';
    }
    result += (time < 12) ? 'AM' : 'PM';
    if (time > 12.5) {
      result = (time - 12) + result;
    } else if (time === 0) {
      result = 12 + result;
    } else {
      result = time + result;
    }
    return result;
  }

  render() {
    const days = this.generateAvailability();

    return (
      <div className="business-form-details">
        <textarea
          className="details-textarea"
          placeholder="Tell us more about your business!"></textarea>
        <h3 className="business-form-title">Business Hours</h3>
        <div className="availability">
          { days }
        </div>
      </div>
    );
  }
}

export default BusinessDetails;
