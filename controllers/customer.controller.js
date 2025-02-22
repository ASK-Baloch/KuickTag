import Customer from "../models/Customer.model.js";
import csvParser from "csv-parser";
import fs from "fs";

// Get All Customers with Filters
export const getAllCustomers = async (req, res) => {
    try {
        // Use req.query for filtering if needed
        const filters = req.query;
        const customers = await Customer.find(filters)
          .populate('company')
          .populate('referredBy')
          .populate('createdBy');
        res.status(200).json(customers);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

// Get Single Customer by ID
export const getCustomerById = async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id)
          .populate('company')
          .populate('referredBy')
          .populate('createdBy');
        if (!customer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(customer);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

// Create Customer
export const createCustomer = async (req, res) => {
    try {
        const newCustomer = new Customer(req.body);
        await newCustomer.save();
        res.status(201).json(newCustomer);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

// Update Customer
export const updateCustomer = async (req, res) => {
    try {
        const updatedCustomer = await Customer.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );
        if (!updatedCustomer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(updatedCustomer);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

// Delete Customer
export const deleteCustomer = async (req, res) => {
    try {
        const deletedCustomer = await Customer.findByIdAndDelete(req.params.id);
        if (!deletedCustomer) return res.status(404).json({ message: "Customer not found" });
        res.status(200).json({ message: "Customer deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Suspend/Terminate Customer
export const changeCustomerStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const updatedCustomer = await Customer.findByIdAndUpdate(
          req.params.id,
          { status },
          { new: true }
        );
        if (!updatedCustomer) return res.status(404).json({ message: 'Customer not found' });
        res.status(200).json(updatedCustomer);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

// Import Customers via CSV
export const importCustomersCSV = async (req, res) => {
    try {
        const customers = [];
        fs.createReadStream(req.file.path)
            .pipe(csvParser())
            .on("data", (row) => customers.push(row))
            .on("end", async () => {
                await Customer.insertMany(customers);
                res.status(200).json({ message: "Customers imported successfully" });
            });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get Customer Analytics
export const getCustomerAnalytics = async (req, res) => {
    try {
        const totalCustomers = await Customer.countDocuments();
        const activeCustomers = await Customer.countDocuments({ status: 'active' });
        const suspendedCustomers = await Customer.countDocuments({ status: 'suspended' });
        // You can add more analytics here if needed
        res.status(200).json({ totalCustomers, activeCustomers, suspendedCustomers });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};
