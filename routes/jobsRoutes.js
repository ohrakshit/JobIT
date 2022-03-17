import express from "express";
const router = express.Router();

import {
  createJob,
  deleteJob,
  updateJob,
  showStats,
  getAllJobs,
} from "../controllers/jobsController.js";

export default router;

router.route("/").post(createJob).get(getAllJobs);
// remeber about :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);