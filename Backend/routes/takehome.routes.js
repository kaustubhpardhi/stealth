module.exports = (app) => {
  const takehomeassignment = require("../controllers/takehome/takehome.controller");
  const router = require("express").Router();

  router.post("/assignment/save", function (req, res) {
    takehomeassignment.savetakehomeassignment(req, res);
  });
  router.post("/assignment/download", function (req, res) {
    takehomeassignment.downloadTakeHomeAssignment(req, res);
  });

  router.post("/assignment/upload", function (req, res) {
    takehomeassignment.updateAssignmentSubmission(req, res);
  });

  router.get("/assignment/getassignments", function (req, res) {
    takehomeassignment.getAllAssignments(req, res);
  });
  router.get("/assignment/submissions", function (req, res) {
    takehomeassignment.getPendingAssignmentSubmissions(req, res);
  });
  app.use("/api", router);
};
