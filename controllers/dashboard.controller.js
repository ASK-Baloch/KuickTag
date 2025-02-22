import Company from "../models/Company.model.js";
import Customer from "../models/Customer.model.js";
import Affiliate from "../models/affiliate.model.js";
import Partner from "../models/Partner.model.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalCompanies = await Company.countDocuments();
    const activeCompanies = await Company.countDocuments({ status: "active" });
    const totalCustomers = await Customer.countDocuments();
    const activeCustomers = await Customer.countDocuments({ status: "active" });
    const totalAffiliates = await Affiliate.countDocuments();
    const activeAffiliates = await Affiliate.countDocuments({ status: "active" });
    const totalSales = await Partner.aggregate([{ $group: { _id: null, total: { $sum: "$totalEarnings" } } }]);

    res.json({
      totalCompanies,
      activeCompanies,
      totalCustomers,
      activeCustomers,
      totalAffiliates,
      activeAffiliates,
      totalSales: totalSales[0]?.total || 0,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching dashboard stats", error });
  }
};