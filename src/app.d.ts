import type { User } from '@prisma/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: User;
		};
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
