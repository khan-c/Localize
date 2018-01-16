import React from 'react';
import BusinessAboutSectionContainer from './business_about_section_container';
import ContactSection from './contact_section';
import Footer from '../footer/footer';

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
    if (this.props.match.path.includes("reg")) {
      this.props.showRegBusiness(this.props.businessId);
    } else {
      this.props.showBusiness(this.props.businessId);
    }
  }

  renderFooter(loading) {
    if (loading) {
      return null;
    } else {
      return (
        <Footer />
      );
    }
  }

  render() {
    const { business, singleBusinessLoading } = this.props;
    return (
      <div className='business-show-page'>
        <div className='business-show' id='business-show'>
          <BusinessAboutSectionContainer />
          <ContactSection business={business} singleBusinessLoading={singleBusinessLoading} />
        </div>
        {this.renderFooter(singleBusinessLoading)}
      </div>
    );
  }
}

export default BusinessShow;
