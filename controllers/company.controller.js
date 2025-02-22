import Company from "../models/Company.model.js"

// GET all companies
export const getAllCompanies = async (req, res) => {
  try {
    // Use req.query for filtering if needed (e.g. ?status=active)
    const filters = req.query;
    const companies = await Company.find(filters);
    res.status(200).json(companies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single company
export const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(company);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE company
export const createCompany = async (req, res) => {
  try {
    const newCompany = new Company(req.body);
    await newCompany.save();
    res.status(201).json(newCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE company
export const updateCompany = async (req, res) => {
  try {
    const updatedCompany = await Company.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedCompany) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json(updatedCompany);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE company
export const deleteCompany = async (req, res) => {
  try {
    const deletedCompany = await Company.findByIdAndDelete(req.params.id);
    if (!deletedCompany) return res.status(404).json({ message: 'Company not found' });
    res.status(200).json({ message: 'Company deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
