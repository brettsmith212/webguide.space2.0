import { supabase } from "../../../utils/supabaseClient";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const resourcesRouter = createTRPCRouter({
  resourcesTable: publicProcedure.query(async () => {
    try {
      const { data, error } = await supabase.from("resources").select("*");
      if (error) throw error;
      return data;
    } catch (error) {
      return JSON.stringify(error);
    }
  }),
});
