import React from 'react';

class BusinessFormPhotos extends React.Component {

  componentDidMount() {
    const input = document.querySelector('.photo-uploader');
    const label = input.nextElementSibling;
    const labelVal = label.innerHTML;

    input.addEventListener('change',
      (e) => this.handleFiles(e, label, labelVal));
  }

  componentWillUnMount() {
    const input = document.querySelector('.photo-uploader');
    input.removeEventListener('change', (e) => this.handleFiles());
  }

  handleFiles(e, label, labelVal) {
    let fileName = '';
    if (e.target.files && e.target.files.length > 1) {
      fileName = (e.target.attributes['data-multiple-caption'].value || '')
        .replace('{count}', e.target.files.length);
    } else {
      fileName = e.target.value.split( '||' ).pop();
    }

    if (fileName) {
      label.querySelector('span').innerHTML = fileName;
    } else {
      label.innerHTML = labelVal;
    }
  }

  render() {
    return (
      <div className="business-form-photos">
        <div className="business-form-photos-upload">
          <input
            type="file"
            className="photo-uploader"
            name="file"
            id="file"
            data-multiple-caption="{count} files selected"
            multiple
            />
          <label htmlFor="file"><span>Click or drag to upload photos</span></label>
          <span className="biz-form-button upload">upload</span>
        </div>
        <div>
          <h3 className="business-form-title">Your Photos</h3>
        </div>
      </div>
    );
  }
}

export default BusinessFormPhotos;
