const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Newsletter } = require("../../models");

// * api/newsletter

// GET all emails for the newsletter
router.get("/", (req, res) => {
  Newsletter.findAll({
    attributes: ["id", "email"],
  })
    .then((dbNewsletterData) => {
      if (!dbNewsletterData) {
        res.status(404).json({ message: "No emails found!" });
      }
      res.json(dbNewsletterData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// GET one email for the newsletter
router.get("/:id", (req, res) => {
  Newsletter.findOne({
    where: {
      id: req.body.id,
    },
    attributes: ["id", "email"],
  })
    .then((dbNewsletterData) => {
      if (!dbNewsletterData) {
        res.status(404).json({ message: "No email found with this id" });
        return;
      }
      res.json(dbNewsletterData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ADD a new email to the newsletter database
router.post("/", (req, res) => {
  Newsletter.create({
    email: req.body.email,
  })
    .then((dbNewsletterData) => res.json(dbNewsletterData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// UPDATE an existing email
router.put("/:id", (req, res) => {
  Newsletter.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbNewsletterData) => {
      if (!dbNewsletterData) {
        res.status(404).json({ message: "No email found with this id" });
        return;
      }
      res.json(dbNewsletterData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE an existing email
router.delete("/:id", (req, res) => {
  Newsletter.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbNewsletterData) => {
      if (!dbNewsletterData) {
        res.status(404).json({ message: "No email found with this id" });
        return;
      }
      res.json(dbNewsletterData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
