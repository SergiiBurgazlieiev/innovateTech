/** @type {import('next').NextConfig} */
const nextConfig = {
	// This is how we can add images with external URLs
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'plus.unsplash.com',
			},
		],
	},
};

export default nextConfig;
