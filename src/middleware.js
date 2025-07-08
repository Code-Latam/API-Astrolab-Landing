import { defineMiddleware } from "astro:middleware";

export async function onRequest(context, next) {
  const foreignNotFound = context.originPathname.startsWith("/en/");

  const response = await next();
  if (response.status === 404 && foreignNotFound) {
    return context.rewrite("/en/404");
  }

  return response;
}
