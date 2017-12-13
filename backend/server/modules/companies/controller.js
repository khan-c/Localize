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
    return res.status(200).json({ companies: await Company.find() });
  } catch (e) {
    return res.status(e.status)
      .json({ error: true, message: 'Error with Company' });
  }
};

export const getCompany = async (req, res) => {
  const companyId = req.params.companyId;
  try {
    return res.status(200).json(
      { company: await Company.findById(companyId) }
    );
  } catch (e) {
    return res.status(e.status)
      .json({ error: true, message: 'Error with Company' });
  }
}

export const updateCompany = async (req, res) => {
  const companyId = req.params.companyId;
  await Company.findById(companyId, (err, company) => {
    if (err) {
      return res.status(404)
        .json({ error: true, message: 'Error with Company' });
    }
    company.set(req.body);
    company.save((err, updatedCompany) => {
      if (err) {
        return res.status(422)
          .json({ error: true, message: 'Error with Company'});
      }
      res.status(200).json({ company });
    })
  })
}
