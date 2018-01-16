import Business from './model';
import axios from 'axios';
import CircularJSON from 'circular-json';
import { mongoConfig } from '../../config/keys';


export const createBusiness = async (req, res) => {
  const {
    name,
    name_lower,
    registered,
    about,
    contact,
    display_phone,
    location,
    image_url,
    url,
    coordinates,
    is_claimed,
    photos,
    categories,
    availability,
    lead_time,
    reviews,
    orders,
    associated_users
  } = req.body.formBusiness;

  const newBusiness = new Business({
    name,
    name_lower,
    registered,
    about,
    contact,
    display_phone,
    location,
    image_url,
    url,
    coordinates,
    is_claimed,
    photos,
    categories,
    availability,
    lead_time,
    reviews,
    orders,
    associated_users
  });

  console.log(newBusiness);

  try {
    const business = await newBusiness.save();

    return res.status(201).json( business );
  } catch(e) {
    return res.status(422)
      .json({ error: true, message: e.message });
  }
};

export const getBusinesses = async (req, res) => {
  const category = req.query.category;
  if (category) {
    try {
      return res.status(200).json({ businesses: await Business.find({ "category" : category }) })
    } catch (e) {
      return res.status(404)
        .json({ error: true, message: 'Cannot find businesses with that category'})
    }
  } else {
    try {
      return res.status(200).json({ businesses: await Business.find() });
    } catch (e) {
      return res.status(404)
      .json({ error: true, message: 'Error with Business' });
    }
  }
};

// export const getBusinessesByService = async (req, res) => {
//   // can use some other params value?
//   const service = req.params.service
//   try {
//     return res.status(200).json({ businesses: await Business.find({ "services": service }) });
//   } catch (e) {
//     return res.status(404)
//       .json({ error: true, message: 'Error with Business' });
//   }
// };

export const getBusiness = async (req, res) => {
  let businessId = req.params.businessId.split('-').join(' ').toLowerCase();

  try {
    return res.status(200).json(
      await Business.find({ "name_lower": businessId })
    );
  } catch (e) {
    console.log(businessId);
    return res.status(404)
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
