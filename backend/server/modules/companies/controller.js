import Company from './model';

export const createCompany = (req, res) => {
  const { name, contact, location } = req.body;
  const newCompany = new Company({ name, contact, location });
};
