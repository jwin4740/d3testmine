// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/scatter", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/scatterTemplate.html"));
    });

    app.get("/line", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/lineTemplate.html"));
    });

    app.get("/realline", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/realLine.html"));
    });


    app.get("/real", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/real.html"));
    });

    app.use(function(req, res, next) {
        res.status(404).send("<div style='text-align: center;'><h1> 404 Error</h1><h3> The page you requested can't be found </h3><img src='http://www.fairfaxunderground.com/forum/file.php?40,file=223627,filename=get_out_trump.jpg' alt='trumpImage'></div>");
    });
};