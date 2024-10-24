const Item = require("../../Model/Guide/Item");

const getAllItems = async (req, res, next) => {
  let items;
  try {
    items = await Item.find();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }

  if (!items || items.length === 0) {
    return res.status(404).json({ message: "No items found" });
  }
  return res.status(200).json({ items });
};

const getItemById = async (req, res, next) => {
  const id = req.params.id;
  let item;
  try {
    item = await Item.findById(id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
  if (!item) {
    return res.status(404).json({ message: "No item found" });
  }
  return res.status(200).json({ item });
};

const addItem = async (req, res, next) => {
  const { name, image, contact, location, age, language, description } = req.body;
  let item;
  try {
    item = new Item({
      name,
      image,
      contact,
      location,
      age,
      language,
      description,
    });
    await item.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }

  if (!item) {
    return res.status(500).json({ message: "Unable to add item" });
  }
  return res.status(201).json({ item });
};

const updateItem = async (req, res, next) => {
  const id = req.params.id;
  const { name, image, contact, location, age, language, description } = req.body;
  let item;
  try {
    item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    item.name = name;
    item.image = image;
    item.contact = contact;
    item.location = location;
    item.age = age;
    item.language = language;
    item.description = description;
    await item.save();
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }

  if (!item) {
    return res.status(500).json({ message: "Unable to update item" });
  }
  return res.status(200).json({ item });
};

const deleteItem = async (req, res, next) => {
  const id = req.params.id;
  try {
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAllItems = getAllItems;
exports.addItem = addItem;
exports.getItemById = getItemById;
exports.updateItem = updateItem;
exports.deleteItem = deleteItem;
