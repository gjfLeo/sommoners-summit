import { defineEventHandler, readValidatedBody } from "#imports";
import { ZMatchSaveParams, saveMatch } from "~/server/service";
import type { MatchId } from "~/types";
import { responseData, responseErrorCode } from "~/server/utils";

export default defineEventHandler(async (event) => {
  const params = await readValidatedBody(event, ZMatchSaveParams.parse);

  try {
    const id = saveMatch(params);
    return responseData<{ id: MatchId }>({ id });
  }
  catch (error) {
    if (error instanceof Error) {
      return responseErrorCode(error.message);
    }
  }
});
