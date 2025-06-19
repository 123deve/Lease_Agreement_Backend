import { generateRentLease } from "../utils/generateRentLease.js";
import rentLease from "../models/rentModel.js";

export const createRentLease = async (req, res) => {
  try {
    const data = req.body;
    const { rentleaseText, notes } = generateRentLease(data);
    const newLease = new rentLease({
      ...data,
      rentleaseText: rentleaseText,
      notes
    });

    const savedLease = await newLease.save();

    res.status(200).json({ rentleaseText, notes, savedLease });
  } catch (error) {
    res.status(500).json({ message: "Error while generating rent lease", error });
  }
};
