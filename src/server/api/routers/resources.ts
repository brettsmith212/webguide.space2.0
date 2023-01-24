import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const resourcesRouter = createTRPCRouter({
  resourcesTable: publicProcedure
    .query(() => {
      return {
        message: "Hello from resources table",
      };
    }),
});
