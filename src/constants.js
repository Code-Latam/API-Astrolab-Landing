import {
  REACT_APP_DEV_URL,
  REACT_APP_PROD_URL,
  BACKEND_DEV_URL,
  BACKEND_PROD_URL,
  PUBLIC_ENV,
} from "astro:env/client";

const isDev = PUBLIC_ENV === "development";
const REACT_APP_URL = isDev ? REACT_APP_DEV_URL : REACT_APP_PROD_URL;
const BACKEND_URL = isDev ? BACKEND_DEV_URL : BACKEND_PROD_URL;

export const links = {
  login: `${REACT_APP_URL}/login`,
  acceptInvite: `${REACT_APP_URL}/acceptinvite`,
};

export const endpoints = {
  sendInvite: `${BACKEND_URL}/invitation/landing-invite`,
  contactUs: `${BACKEND_URL}/send/contact`,
};

export const emails = {
  info: "info@red-coupons.com",
};

export const regex = {
  EMAIL:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
};
