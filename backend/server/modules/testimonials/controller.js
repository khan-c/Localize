import Testimonial from './model';
import Business from '../businesses/model';

export const getAllTestimonials = async (req, res) => {
  try {
    return res.status(200).json({ testimonials: await Testimonial.find() });
  } catch (e) {
    console.log(e);
    return res.status(404)
      .json({ error: true, message: 'Error with Testimonials' });
  }
};
