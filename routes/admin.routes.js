import express from "express";
import customerController from "./controllers/customer.controller.js";
import companyController from "./controllers/company.controller.js";
import partnerController from "./controllers/partner.controller.js";
import affiliateController from "./controllers/affiliate.controller.js";
import dashboardController from "./controllers/dashboard.controller.js";

const router = express.Router();

// Customer Routes
router.get("/customers", customerController.getAllCustomers);
router.get("/customers/:id", customerController.getCustomerById);
router.post("/customers", customerController.createCustomer);
router.put("/customers/:id", customerController.updateCustomer);
router.delete("/customers/:id", customerController.deleteCustomer);

// Company Routes
router.get("/companies", companyController.getAllCompanies);
router.get("/companies/:id", companyController.getCompanyById);
router.post("/companies", companyController.createCompany);
router.put("/companies/:id", companyController.updateCompany);
router.delete("/companies/:id", companyController.deleteCompany);

// Partner Routes
router.get("/partners", partnerController.getAllPartners);
router.get("/partners/:id", partnerController.getPartnerById);
router.post("/partners", partnerController.createPartner);
router.put("/partners/:id", partnerController.updatePartner);
router.delete("/partners/:id", partnerController.deletePartner);

// Affiliate Routes
router.get("/affiliates", affiliateController.getAllAffiliates);
router.get("/affiliates/:id", affiliateController.getAffiliateById);
router.post("/affiliates", affiliateController.createAffiliate);
router.put("/affiliates/:id", affiliateController.updateAffiliate);
router.delete("/affiliates/:id", affiliateController.deleteAffiliate);

// Dashboard Route
router.get("/dashboard", dashboardController.getDashboardStats);

export default router;