import { defineMiddleware } from "astro/middleware";
import { getRandomNumber } from "./utils";
import { queryArr } from "./utils";

const pathsToAddQuery = [
	"/canada-immigrant-jobs-loans-visa/user/317575",
	,
];

export const onRequest = defineMiddleware((context, next) => {
	/**
	 * The middleware runs every time a page or endpoint is about to be rendered.
	 * Only redirect if this is the home page
	 */

	/**
	 * Construct a full URL by passing `context.url` as the base URL
	 */

	// Return the element at the random index
	const randomQuery = queryArr[Math.floor(Math.random() * queryArr.length)];
	let redirectURL = false;

	pathsToAddQuery.forEach((x) => {
		if (context.url.origin + x === context.url.href) {
			redirectURL = true;
		}
	});

	if (redirectURL) {
		const path = context.url.pathname;

		const redirectPath = path.slice(0, path.lastIndexOf("/"));
		return Response.redirect(
			new URL(
				`${redirectPath}/${getRandomNumber()}?travel-usa-canada=${randomQuery}`,
				context.url
			),
			302
		);
	}

	/**
	 * You may also redirect using `context.redirect` as shown below:
	 * =========================================
	 * return context.redirect("/redirected", 302);
	 * =========================================
	 * Note that this only works in SSR mode
	 */

	return next();
});
