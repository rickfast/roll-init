import { IconType } from "react-icons";
import {
  // Conditions
  GiBlindfold,
  GiChainedHeart,
  GiSoundOff,
  GiScreaming,
  GiGrab,
  GiKnockedOutStars,
  GiInvisible,
  GiFrozenBody,
  GiStoneBust,
  GiPoison,
  GiFallDown,
  GiRopeCoil,
  GiKnockout,
  GiNightSleep,
  // Status effects
  GiHolySymbol,
  GiCursedStar,
  GiMusicalNotes,
  GiSparkles,
  GiLaurelsTrophy,
  GiPentacle,
  GiHumanTarget,
  GiVoodooDoll,
  GiFairy,
  GiRun,
  GiSnail,
  GiCrossShield,
  GiHealthIncrease,
  GiEnrage,
  // Other statuses
  GiBrain,
  GiHourglass,
  GiAura,
} from "react-icons/gi";

/**
 * Maps each D&D condition / status effect (matching the names used in the
 * Roll Initiative app's Condition.ts) to a react-icons glyph shown next to a
 * combatant's name on the player display.
 */
export const conditionIcons: Record<string, IconType> = {
  // Conditions
  Blinded: GiBlindfold,
  Charmed: GiChainedHeart,
  Deafened: GiSoundOff,
  Frightened: GiScreaming,
  Grappled: GiGrab,
  Incapacitated: GiKnockedOutStars,
  Invisible: GiInvisible,
  Paralyzed: GiFrozenBody,
  Petrified: GiStoneBust,
  Poisoned: GiPoison,
  Prone: GiFallDown,
  Restrained: GiRopeCoil,
  Stunned: GiKnockout,
  Unconscious: GiNightSleep,
  // Status effects
  Bless: GiHolySymbol,
  Bane: GiCursedStar,
  "Bardic Inspiration": GiMusicalNotes,
  Guidance: GiSparkles,
  Heroism: GiLaurelsTrophy,
  Hex: GiPentacle,
  "Hunter's Mark": GiHumanTarget,
  "Hexblade's Curse": GiVoodooDoll,
  "Faerie Fire": GiFairy,
  Hasted: GiRun,
  Slowed: GiSnail,
  "Shield of Faith": GiCrossShield,
  Aid: GiHealthIncrease,
  Raging: GiEnrage,
  // Other statuses
  Concentration: GiBrain,
  "Readied Action": GiHourglass,
  Inspiration: GiAura,
};
