import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from './db';
import { User } from './models';
import bcrypt from 'bcryptjs';
import { authConfig } from './auth.config';

const logInWithCredentials = async (credentials) => {
	const { username, password } = credentials;
	try {
		connectToDB();
		const user = await User.findOne({ username });

		if (!user) {
			throw new Error('User not found!');
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);

		if (!isPasswordCorrect) {
			throw new Error('Wrong user credentials!');
		}

		return user;
	} catch (err) {
		console.log(err);
		throw new Error(err);
	}
};

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	providers: [
		GitHub({
			clientId: process.env.AUTH_GITHUB_ID,
			clientSecret: process.env.AUTH_GITHUB_SECRET,
		}),
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = await logInWithCredentials(credentials);
					return user;
				} catch (err) {
					console.log(err);
					return null;
				}
			},
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
		...authConfig.callbacks,
	},
});
