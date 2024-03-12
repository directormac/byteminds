import { redirect } from "@sveltejs/kit";

// export function load({ cookies, url }) {
//   if (!cookies.get("logged_in")) {
//     throw redirect(303, `/login?redirectTo=${url.pathname}`);
//   }
// }

export const load = async ({ url, locals }) => {
  if (!locals.user) {
    throw redirect(302, `/login?redirectTo=${url.pathname + url.search}`);
  }

  console.log(url);
  return { name: locals.user.firstName };
};
