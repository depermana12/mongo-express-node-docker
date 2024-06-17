import { Router } from "express";
const router = Router();

import {
  aliasTopTours,
  getAllTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} from "../controllers/tourController.js";
import { protect, restrictTo } from "../controllers/authController.js";

router.route("/top-five-cheap").get(aliasTopTours, getAllTours);
router.route("/").get(protect, getAllTours).post(createTour);
router
  .route("/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(protect, restrictTo("admin", "lead-guide"), deleteTour);

export default router;
