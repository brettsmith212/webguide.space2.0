import { createTRPCRouter } from "./trpc";
import { exampleRouter } from "./routers/example";
import { resourcesRouter } from "./routers/resources";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  resources: resourcesRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
