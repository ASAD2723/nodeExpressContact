const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});

const createContact = asyncHandler(async (req, res) => {
  console.log("The reques body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandotary");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contact);
});

const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findbyId(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contact);
});

const updateContact = asyncHandler(async (req, res) => {
  //   const contact = await Contact.findbyId(req.params.id);
  //   if (!contact) {
  //     res.status(404);
  //     throw new Error("Contact not found");
  //   }
  res.status(200).json({ message: `Update contacts for ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(201).json({ message: `Delete contacts for ${req.params.id}` });
});

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
