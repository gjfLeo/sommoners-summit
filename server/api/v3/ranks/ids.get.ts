import { getRanksList } from "~/server/service";

export default defineEventHandler(async () => {
  const rankIds = getRanksList().map(rank => rank.id);
  return responseData({ rankIds });
});
