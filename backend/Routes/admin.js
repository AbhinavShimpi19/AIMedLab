import express from "express";
import { authenticate, restrict } from "../auth/verifyToken";
import { deleteUser, getAllUsers } from "../Controllers/userController";


const router = express.Router();

router.route("/users").get(authenticate, restrict(["admin"]), getAllUsers);
router.delete(
  "/users/delete/:id",
  authenticate,
  restrict(["admin"]),
  deleteUserById
);
router.delete(
  "/doctors/delete/:id",
  authenticate,
  restrict(["admin"]),
  deleteDoctorById
);


router.route("/doctors").get(authenticate, restrict(["admin"]), getAllDoctors);
router
  .route("/doctors/:id")
  .put(authenticate, restrict(["admin"]), updateDoctorApprovalStatus);
router
  .route("/bookings")
  .get(authenticate, restrict(["admin"]), getAllBookings);

export default router;
