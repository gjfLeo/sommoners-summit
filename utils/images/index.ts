import md5 from "crypto-js/md5";
import { ALL_ACTION_CARDS_INFO, ALL_CHARACTER_CARDS_INFO } from "../cards";
import type { ActionCard, CharacterCard } from "~/utils/types";

const fandomFilenameOverrides: Record<string, string> = {
  212111: "Hear Me — Let Us Raise the Chalice of Love! Equipment Card.png",
};

function getImageUrl(filename: string) {
  filename = filename.replaceAll(":", "");
  filename = filename.replaceAll("?", "");
  filename = filename.replaceAll(" ", "_");
  const hash = md5(filename).toString();
  filename = filename.replace("'", "%27");
  filename = filename.replace("\"", "%22");
  return `https://static.wikia.nocookie.net/gensin-impact/images/${hash.charAt(0)}/${hash.slice(0, 2)}/${filename}`;
}

export const cardImages = Object.fromEntries(
  [
    ...Object.entries(ALL_CHARACTER_CARDS_INFO)
      .map(([card, { nameEn }]) => [card, getImageUrl(`${nameEn} Character Card.png`)]),
    ...Object.entries(ALL_ACTION_CARDS_INFO)
      .map(([card, { nameEn, type }]) => [card, getImageUrl(`${fandomFilenameOverrides[card] || nameEn} ${type} Card.png`)]),
  ],
) as Record<CharacterCard | ActionCard, string>;

export const characterAvatarImages = Object.fromEntries(
  Object.entries(ALL_CHARACTER_CARDS_INFO)
    .map(([card, { nameEn }]) => [card, getImageUrl(`${nameEn} TCG Avatar Icon.png`)]),
) as Record<CharacterCard, string>;
