import { z } from "zod";
import { getMatchDetail } from "~/server/service";
import { ZMatchId } from "~/types";

const ZParams = z.object({
  id: ZMatchId,
});

export default defineEventHandler(async (event) => {
  const params = await getValidatedQuery(event, ZParams.parse);

  getMatchDetail(params.id);
});
