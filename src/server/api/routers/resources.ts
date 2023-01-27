import { supabase } from "../../../utils/supabaseClient";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { Item } from "../../../types";

export const resourcesRouter = createTRPCRouter({
  resourcesTable: publicProcedure.query(async () => {
    try {
      const { data, error } = await supabase.from("resources").select("*");
      if (error) throw error;
      const item: Item[] = data;
      return item;
    } catch (error) {
      return JSON.stringify(error);
    }
  }),
});
