import { defineMiddleware } from "astro/middleware";
import { getRandomNumber, getRandomQuery } from "./utils";

const pathsToAddQuery = ["/canada-immigrant-jobs-loans-visa/user/317575", ,];

export const onRequest = defineMiddleware((context, next) => {
	/**
	 * The middleware runs every time a page or endpoint is about to be rendered.
	 * Only redirect if this is the home page
	 */

	/**
	 * Construct a full URL by passing `context.url` as the base URL
	 */

	// Return the element at the random index
	let redirectURL = false;

	pathsToAddQuery.forEach((x) => {
		if (context.url.origin + x === context.url.href) {
			redirectURL = true;
		}
	});

	// console.log(path, redirectPath, redirectURL);

	if (redirectURL) {
		const path = context.url.pathname;
		const redirectPath = path.slice(0, path.lastIndexOf("/"));

		return context.redirect(
			`${redirectPath}/${getRandomNumber()}?travel-usa-canada=${getRandomQuery()}`,
			301
		);
	}

	/**
	 * You may also redirect using `context.redirect` as shown below:
	 * =========================================
	 * return context.redirect("/redirected", 302);
	 * =========================================
	 * Note that this only works in SSR mode
	 */

	// return Response.redirect(
	// 	new URL(
	// 		`${redirectPath}/${getRandomNumber()}?travel-usa-canada=${getRandomQuery()}`,
	// 		context.url
	// 	),
	// 	301
	// );

	return next();
});
