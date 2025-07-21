const express = require("express");
const auth = require('../utils/auth');
const router = express.Router();

const members = [
  { firstName: "Rajesh", fatherName: "Ramesh", lastName: "Maheshwari", age: 45, address: "123 Main St", city: "Jaipur", pincode: "302001", state: "Rajasthan" },
  { firstName: "Sneha", fatherName: "Suresh", lastName: "Maheshwari", age: 32, address: "456 Park Rd", city: "Indore", pincode: "452001", state: "Madhya Pradesh" },
  { firstName: "Amit", fatherName: "Naveen", lastName: "Maheshwari", age: 28, address: "789 Lotus Lane", city: "Udaipur", pincode: "313001", state: "Rajasthan" },
  { firstName: "Neha", fatherName: "Harish", lastName: "Maheshwari", age: 22, address: "11 Rose St", city: "Bhopal", pincode: "462001", state: "Madhya Pradesh" },
  { firstName: "Vikram", fatherName: "Dinesh", lastName: "Maheshwari", age: 40, address: "5 Pine Ave", city: "Ahmedabad", pincode: "380001", state: "Gujarat" },
  { firstName: "Kavita", fatherName: "Mahendra", lastName: "Maheshwari", age: 37, address: "32 Lake View", city: "Surat", pincode: "395003", state: "Gujarat" },
  { firstName: "Ravi", fatherName: "Ghanshyam", lastName: "Maheshwari", age: 31, address: "88 Sector 9", city: "Nagpur", pincode: "440001", state: "Maharashtra" },
  { firstName: "Pooja", fatherName: "Nikhil", lastName: "Maheshwari", age: 27, address: "A-101 Green Villa", city: "Jodhpur", pincode: "342001", state: "Rajasthan" },
  { firstName: "Anil", fatherName: "Sitaram", lastName: "Maheshwari", age: 48, address: "B-2 Shanti Nagar", city: "Kota", pincode: "324005", state: "Rajasthan" },
  { firstName: "Meena", fatherName: "Pradeep", lastName: "Maheshwari", age: 36, address: "C-3 Gandhi Marg", city: "Ajmer", pincode: "305001", state: "Rajasthan" },
  { firstName: "Tarun", fatherName: "Kailash", lastName: "Maheshwari", age: 39, address: "Plot 77 New Colony", city: "Delhi", pincode: "110001", state: "Delhi" },
  { firstName: "Nidhi", fatherName: "Rajendra", lastName: "Maheshwari", age: 33, address: "12 Ashok Vihar", city: "Noida", pincode: "201301", state: "Uttar Pradesh" },
  { firstName: "Deepak", fatherName: "Sharad", lastName: "Maheshwari", age: 29, address: "404 Orchid Tower", city: "Pune", pincode: "411001", state: "Maharashtra" },
  { firstName: "Kiran", fatherName: "Vikas", lastName: "Maheshwari", age: 30, address: "M-22 Skyline Apt", city: "Mumbai", pincode: "400001", state: "Maharashtra" },
  { firstName: "Bhavna", fatherName: "Raghav", lastName: "Maheshwari", age: 26, address: "Z-10 Garden City", city: "Chennai", pincode: "600001", state: "Tamil Nadu" },
  { firstName: "Sanjay", fatherName: "Prem", lastName: "Maheshwari", age: 43, address: "1 Rani Bagh", city: "Bikaner", pincode: "334001", state: "Rajasthan" },
  { firstName: "Ruchi", fatherName: "Govind", lastName: "Maheshwari", age: 35, address: "E-44 Radhika Enclave", city: "Gwalior", pincode: "474001", state: "Madhya Pradesh" },
  { firstName: "Ashok", fatherName: "Subhash", lastName: "Maheshwari", age: 51, address: "60 Vivekananda Rd", city: "Kolkata", pincode: "700001", state: "West Bengal" },
  { firstName: "Shalini", fatherName: "Kamal", lastName: "Maheshwari", age: 38, address: "B-89 Civil Lines", city: "Lucknow", pincode: "226001", state: "Uttar Pradesh" },
  { firstName: "Harsh", fatherName: "Jagdish", lastName: "Maheshwari", age: 24, address: "S-12 New Market", city: "Raipur", pincode: "492001", state: "Chhattisgarh" }
];


router.get("/", auth.isDemo, (req, res) => {
  res.render("MaheshwariSamajh", { members });
});


module.exports = router;
