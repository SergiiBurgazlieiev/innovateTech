/** @type {import('next').NextConfig} */
const nextConfig = {
	// This is how we can add images with external URLs
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.unsplash.com',
			},
		],
	},
};

export default nextConfig;
