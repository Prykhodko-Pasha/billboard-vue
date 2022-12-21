import Cookies from "js-cookie";
import { getCookies } from "../helpers/cookies";
import { setBearerToken } from "../helpers/axiosHeaders";
import { getUserAPI } from "../services/users-api";

export default function isAuthenticated() {
  Cookies.get("token") ? fetchUser() : setRoute(Router.pathname);
}
