import Company from './model';

export const createCompany = async (req, res) => {
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
    associated_users
  } = req.body;

  const newCompany = new Company({
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
    associated_users
  });

  try {
    return res.status(201).json({ company: await newCompany.save() });
  } catch(e) {
    return res.status(e.status)
      .json({ error: true, message: 'Error with Company' });
  }
};

export const getAllCompanies = async (req, res) => {
  try {
    return res.status(200).json({ companies: await Company.find() })
  } catch (e) {
    return res.status(e.status)
      .json({ error: true, message: 'Error with Company' });
  }
};
