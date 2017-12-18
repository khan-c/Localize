import Business from './model';
import axios from 'axios';
import CircularJSON from 'circular-json';

export const createBusiness = async (req, res) => {
  const {
    name,
    contact,
    location,
    image_url,
    url,
    coordinates,
    is_claimed,
    photos,
    categories,
    services,
    availability,
    lead_time,
    reviews,
    orders,
    associated_users,
    testimonials
  } = req.body;

  const newBusiness = new Business({
    name,
    contact,
    location,
    image_url,
    url,
    coordinates,
    is_claimed,
    photos,
    categories,
    services,
    availability,
    lead_time,
    reviews,
    orders,
    associated_users,
    testimonials
  });

  try {
    return res.status(201).json({ business: await newBusiness.save() });
  } catch(e) {
    return res.status(e.status)
      .json({ error: true, message: 'Error with Business' });
  }
};

export const getAllBusinesses = async (req, res) => {
  try {
    return res.status(200).json({ businesses: await Business.find() });
  } catch (e) {
    return res.status(e.status)
      .json({ error: true, message: 'Error with Business' });
  }
};

export const getBusiness = async (req, res) => {
  const businessId = req.params.businessId;
  try {
    return res.status(200).json(
      { business: "test" }
    );
  } catch (e) {
    return res.status(e.status)
      .json({ error: true, message: 'Error with Business' });
  }
}

export const updateBusiness = async (req, res) => {
  const businessId = req.params.businessId;
  await Business.findById(businessId, (err, business) => {
    if (err) {
      return res.status(404)
        .json({ error: true, message: 'Error with Business' });
    }
    business.set(req.body);
    business.save((err, updatedBusiness) => {
      if (err) {
        return res.status(422)
          .json({ error: true, message: 'Error with Business'});
      }
      res.status(200).json({ business });
    })
  })
}

// export const getTestimonials = async (req, res) => {
//   const
// }
