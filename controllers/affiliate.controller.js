import Affiliate from "../models/affiliate.model.js";

export const createAffiliate = async (req, res) => {
    try {
      const affiliate = new Affiliate(req.body);
      await affiliate.save();
      res.status(201).json(affiliate);
    } catch (error) {
      res.status(400).json({ message: "Error creating affiliate", error });
    }
  };
  
  export const getAffiliates = async (req, res) => {
    try {
      const affiliates = await Affiliate.find();
      res.json(affiliates);
    } catch (error) {
      res.status(500).json({ message: "Error fetching affiliates", error });
    }
  };
  
  export const updateAffiliate = async (req, res) => {
    try {
      const affiliate = await Affiliate.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(affiliate);
    } catch (error) {
      res.status(400).json({ message: "Error updating affiliate", error });
    }
  };
  
  export const deleteAffiliate = async (req, res) => {
    try {
      await Affiliate.findByIdAndDelete(req.params.id);
      res.json({ message: "Affiliate deleted" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting affiliate", error });
    }
  };
  