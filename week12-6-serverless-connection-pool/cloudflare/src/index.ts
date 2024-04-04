import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export interface Env {
	DATABASE_URL: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const prisma = new PrismaClient({
			datasourceUrl: env.DATABASE_URL,
		}).$extends(withAccelerate());

		const res = await prisma.log.create({
			data: {
				level: 'info',
				message: 'abcd',
				meta: { headers: JSON.stringify(request.headers) },
			},
		});

		console.log('RESPONSE:', res);

		const { data, info } = await prisma.log
			.findMany({
				take: 20,
				orderBy: {
					id: 'desc',
				},
			})
			.withAccelerateInfo();

		console.log(`INFO:`, JSON.stringify(info));

		return new Response(`Request method: ${request.method}!`);
	},
};

const prisma = new PrismaClient().$extends(withAccelerate());
