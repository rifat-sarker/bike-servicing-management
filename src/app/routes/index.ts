import { Router } from "express";
import { CustomerRoutes } from "../modules/customer/customer.route";
import { BikesRoutes } from "../modules/bike/bike.route";

const router = Router();
const moduleRoutes = [
  {
    path: "/customers",
    route: CustomerRoutes,
  },
  {
    path: "/bikes",
    route: BikesRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
  