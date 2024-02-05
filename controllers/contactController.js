const getContacts = (req, res) => {
  res.status(200).json({ message: "get all contacts" });
};

const createContact = (req, res) => {
  console.log("The reques body is :", req.body);
  const { name, email, ohone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandotary");
  }
  res.status(201).json({ message: "Create Contacts" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `Get Contacts for ${req.params.id}` });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contacts for ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(201).json({ message: `Delete contacts for ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
