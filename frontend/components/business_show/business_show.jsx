import React from 'react';
import BusinessAboutSectionContainer from './business_about_section_container';
import ContactSection from './contact_section';

class BusinessShow extends React.Component {
  componentDidMount() {
    const businessShow = document.getElementById('business-show');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= 65) {
        businessShow.classList.add('sticky-padding');
      } else {
        businessShow.classList.remove('sticky-padding');
      }
    });
  }

  componentWillMount() {
    this.props.showBusiness(this.props.businessId);
  }

  render() {
    const { business, singleBusinessLoading } = this.props;
    return (
      <div className='business-show' id='business-show'>
        <BusinessAboutSectionContainer />
        <ContactSection business={business} singleBusinessLoading={singleBusinessLoading} />
      </div>
    );
  }
}

export default BusinessShow;
