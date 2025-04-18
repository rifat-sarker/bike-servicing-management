import { Router } from "express";
import { CustomerRoutes } from "../modules/customer/customer.route";
import { BikesRoutes } from "../modules/bike/bike.route";
import { ServiceRoutes } from "../modules/services/service.route";


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
  {
    path: "/services",
    route: ServiceRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
