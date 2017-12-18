import React from 'react';
import BusinessAboutSectionContainer from './business_about_section_container';
import ContactSection from './contact_section';

class BusinessShow extends React.Component {
  componentWillMount() {
    console.log(this.props.businessId);
    this.props.showBusiness(this.props.businessId);
  }

  render() {
    const { business } = this.props;
    return (
      <div className='business-show'>
        <BusinessAboutSectionContainer />
        <ContactSection business={business} />
      </div>
    );
  }
}

export default BusinessShow;
