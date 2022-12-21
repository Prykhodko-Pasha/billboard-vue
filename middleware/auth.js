import { getCookies } from "~~/helpers/cookies";

export default defineNuxtRouteMiddleware((to, from) => {
  // isAuthenticated() is an example method verifying if an user is authenticated

  if (getCookies()) {
    switch (to) {
      case "/profile":
        return navigateTo("/login");
      case "/bill/edit":
        return navigateTo("/login");
      case "/bill/edit/[id]":
        return navigateTo("/login");
      case "/user/edit/[id]":
        return navigateTo("/login");
      default:
        break;
    }
  } else {
    switch (to) {
      case "/login":
        return navigateTo("/profile");
      case "/signup":
        return navigateTo("/profile");
      default:
        break;
    }
  }
});
