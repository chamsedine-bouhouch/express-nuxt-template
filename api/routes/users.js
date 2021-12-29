const { Router } = require("express");

const router = Router();
const User = require("../models/User");
// Mock Users

const users = [{ name: "Alexandre" }, { name: "Pooya" }, { name: "Sébastien" }];

/* GET users listing. */
router.get("/users", function (req, res, next) {
  res.json(data);
});
/* POST users listing. */
router.post("/users", function (req, res, next) {
  console.log(req.body);
  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  // });
  // user
  //   .save()
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     res.json({ message: err });
  //   });
});

/* GET user by ID. */
router.get("/users/:id", function (req, res, next) {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    res.json(users[id]);
  } else {
    res.sendStatus(404);
  }
});

module.exports = router;
