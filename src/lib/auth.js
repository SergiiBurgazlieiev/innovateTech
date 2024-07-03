import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import { connectToDB } from './db';
import { User } from './models';

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	providers: [
		GitHub({
			clientId: process.env.AUTH_GITHUB_ID,
			clientSecret: process.env.AUTH_GITHUB_SECRET,
		}),
	],
	callbacks: {
		async signIn({ user, account, profile }) {
			if (account.provider === 'github') {
				try {
					connectToDB();
					const user = await User.findOne({ email: profile.email });
					const { login, email, avatar_url } = profile;

					if (!user) {
						const newUser = new User({
							username: login,
							email,
							avatar: avatar_url,
						});
						await newUser.save();
					}
				} catch (err) {
					console.log(err);
					return false;
				}
			}
			console.log(
				'The user exists in our data base, that is why we skipped the user creation.'
			);
			return true;
		},
	},
});
