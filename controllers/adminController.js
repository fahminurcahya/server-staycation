const Category = require("../models/Category");
const Bank = require("../models/Bank");
const { eventNames } = require("../models/Bank");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/view_dashboard", {
      title: "Stycation | Dashboard",
    });
  },
  viewCategory: async (req, res) => {
    try {
      const category = await Category.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/category/view_category", {
        category,
        alert,
        title: "Stycation | Category",
      });
    } catch (error) {
      req.flash("alertMessage", `$error.message`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.create({ name });
      req.flash("alertMessage", "Success Add Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `$error.message`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  editCategory: async (req, res) => {
    try {
      const { id, name } = req.body;
      const category = await Category.findOne({ _id: id });
      category.name = name;
      await category.save();
      req.flash("alertMessage", "Success Add Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `$error.message`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ _id: id });
      console.log(id);
      await category.remove();
      req.flash("alertMessage", "Success Add Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/category");
    } catch (error) {
      req.flash("alertMessage", `$error.message`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  viewItem: (req, res) => {
    res.render("admin/item/view_item", {
      title: "Stycation | Item",
    });
  },

  viewBank: async (req, res) => {
    try {
      const bank = await Bank.find();
      const alertMessage = req.flash("alertMessage");
      const alertStatus = req.flash("alertStatus");
      const alert = { message: alertMessage, status: alertStatus };
      res.render("admin/bank/view_bank", {
        bank,
        title: "Stycation | Bank",
        alert,
      });
    } catch (error) {
      req.flash("alertMessage", `$error.message`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/category");
    }
  },

  addBank: async (req, res) => {
    try {
      const { nameBank, nomorRekening, name } = req.body;
      await Bank.create({
        nameBank,
        nomorRekening,
        name,
        imageUrl: `images/${req.file.filename}`,
      });
      req.flash("alertMessage", "Success Add Category");
      req.flash("alertStatus", "success");
      res.redirect("/admin/bank");
    } catch (error) {
      req.flash("alertMessage", `$error.message`);
      req.flash("alertStatus", "danger");
      res.redirect("/admin/bank");
    }
  },

  viewBooking: (req, res) => {
    res.render("admin/booking/view_booking", {
      title: "Stycation | Booking",
    });
  },
};
