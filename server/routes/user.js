// CRUD | CREATE - READ - UPDATE - DELETE | POST - GET - PUT - DELETE
const router = require("express").Router();
const ctrls = require("../controller/user");

router.post("/register", ctrls.register);

module.exports = router;
