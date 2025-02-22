import { Router } from "express";
import {getAllCompanies,getCompanyById,createCompany,updateCompany,deleteCompany} from "../controllers/company.controller.js";
import {getAllPartners,getPartnerById,createPartner,updatePartner,deletePartner} from "../controllers/partner.controller.js";
import {getAffiliates,createAffiliate,updateAffiliate,deleteAffiliate} from "../controllers/affiliate.controller.js";
import {getDashboardStats} from "../controllers/dashboard.controller.js";
import {getAllCustomers,getCustomerById,createCustomer,updateCustomer,deleteCustomer} from "../controllers/customer.controller.js"
const router = Router();

// Customer Routes
router.get("/customers", getAllCustomers);
router.get("/customers/:id", getCustomerById);
router.post("/customers", createCustomer);
router.put("/customers/:id", updateCustomer);
router.delete("/customers/:id", deleteCustomer);

// Company Routes
router.get("/companies", getAllCompanies);
router.get("/companies/:id", getCompanyById);
router.post("/companies", createCompany);
router.put("/companies/:id", updateCompany);
router.delete("/companies/:id", deleteCompany);

// Partner Routes
router.get("/partners", getAllPartners);
router.get("/partners/:id", getPartnerById);
router.post("/partners", createPartner);
router.put("/partners/:id", updatePartner);
router.delete("/partners/:id", deletePartner);

// Affiliate Routes
router.get("/affiliates", getAffiliates);
// router.get("/affiliates/:id", getAffiliateById);
router.post("/affiliates", createAffiliate);
router.put("/affiliates/:id", updateAffiliate);
router.delete("/affiliates/:id", deleteAffiliate);

// Dashboard Route
router.get("/dashboard", getDashboardStats);

export default router;