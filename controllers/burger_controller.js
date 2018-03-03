var express = require("express");

var router = express.Router();
var burgers = require("../models/burger.js");

router.put("/update", function(req, res, next) {

    burgers.update({ 'devoured': true }, 'burger_name="' + req.body.burger_name + '"', function() {
        res.redirect("/");
    });
});

router.get("/", function(req, res) {
    burgers.all(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    console.log(req.body);
    burgers.create([

        "burger_name", "devoured"
    ], [
        req.body.burger_name, false
    ], function() {
        res.redirect("/");
    });
});


module.exports = router;