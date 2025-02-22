import Partner from '../models/Partner.model.js';

// GET all partners
export const getAllPartners = async (req, res) => {
  try {
    const filters = req.query;
    const partners = await Partner.find(filters);
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET single partner
export const getPartnerById = async (req, res) => {
  try {
    const partner = await Partner.findById(req.params.id);
    if (!partner) return res.status(404).json({ message: 'Partner not found' });
    res.status(200).json(partner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE partner
export const createPartner = async (req, res) => {
  try {
    const newPartner = new Partner(req.body);
    await newPartner.save();
    res.status(201).json(newPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATE partner
export const updatePartner = async (req, res) => {
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPartner) return res.status(404).json({ message: 'Partner not found' });
    res.status(200).json(updatedPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// DELETE partner
export const deletePartner = async (req, res) => {
  try {
    const deletedPartner = await Partner.findByIdAndDelete(req.params.id);
    if (!deletedPartner) return res.status(404).json({ message: 'Partner not found' });
    res.status(200).json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// SUSPEND / REACTIVATE partner
export const changePartnerStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updatedPartner) return res.status(404).json({ message: 'Partner not found' });
    res.status(200).json(updatedPartner);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
