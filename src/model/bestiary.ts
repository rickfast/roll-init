export const bestiary = {
  "Aarakocra Aeromancer": {
    "name": "Aarakocra Aeromancer",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 4,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 66,
      "hitDice": "12d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 16,
      "con": 12,
      "int": 13,
      "wis": 17,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Aarakocra",
      "Primordial (Auran)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The aarakocra makes two Wind Staff attacks, and it can use Spellcasting to cast Gust of Wind."
      },
      {
        "name": "Wind Staff",
        "desc": "m,r Roll: +5, reach 5 ft. or range 120 ft. {@h}7 (1d8) Bludgeoning damage plus 11 (2d10) Lightning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Aarakocra Skirmisher": {
    "name": "Aarakocra Skirmisher",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 14,
      "con": 12,
      "int": 11,
      "wis": 12,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Aarakocra",
      "Primordial (Auran)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Talons",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Slashing damage, or 9 (3d4) Slashing damage if the aarakocra moved 30+ feet straight toward the target immediately before the hit."
      },
      {
        "name": "Wind Javelin",
        "desc": "m,r Roll: +4, reach 5 ft. or range 30/120 ft. {@h}5 (1d6) Piercing damage plus 2 (1d4) Thunder damage. {@hom}The javelin magically returns to the aarakocra's hand immediately after a ranged attack."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Aberrant Cultist": {
    "name": "Aberrant Cultist",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 8,
    "alignment": "Neutral Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 137,
      "hitDice": "25d8 + 25"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 19,
      "con": 12,
      "int": 16,
      "wis": 18,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 6,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Deep Speech; telepathy 30 ft."
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cultist makes two Tentacle Lash attacks. It can replace any attack with a use of Mind Rot."
      },
      {
        "name": "Tentacle Lash",
        "desc": "m Roll: +7, reach 10 ft. {@h}7 (1d6) Slashing damage plus 14 (4d6) Psychic damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 14) from one of two tentacles, and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Mind Rot",
        "desc": "wis 15, one creature the cultist can see within 90 feet. {@actSaveFail} 27 (6d8) Psychic damage, and the target has the Poisoned condition until the start of the cultist's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Aboleth": {
    "name": "Aboleth",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 10,
    "alignment": "Lawful Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 150,
      "hitDice": "20d10 + 40"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 9,
      "con": 15,
      "int": 18,
      "wis": 15,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 6,
      "int": 8,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Deep Speech; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The aboleth can breathe air and water."
      },
      {
        "name": "Eldritch Restoration",
        "desc": "If destroyed, the aboleth gains a new body in 5d10 days, reviving with all its Hit in the Far Realm or another location chosen by the DM."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the aboleth fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Mucus Cloud",
        "desc": "While underwater, the aboleth is surrounded by mucus. con 14, each creature in a 5-foot Emanation originating from the aboleth at the end of the aboleth's turn. {@actSaveFail} The target is cursed. Until the curse ends, the target's skin becomes slimy, the target can breathe air and water, and it can't regain Hit unless it is underwater. While the cursed creature is outside a body of water, the creature takes 6 (1d12) Acid damage at the end of every 10 minutes unless moisture is applied to its skin before those minutes have passed."
      },
      {
        "name": "Probing Telepathy",
        "desc": "If a creature the aboleth can see communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The aboleth makes two Tentacle attacks and uses either Consume Memories or Dominate Mind if available."
      },
      {
        "name": "Tentacle",
        "desc": "m Roll: +9, reach 15 ft. {@h}12 (2d6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 14) from one of four tentacles."
      },
      {
        "name": "Consume Memories",
        "desc": "int 16, one creature within 30 feet that is Charmed or Grappled by the aboleth. {@actSaveFail} 10 (3d6) Psychic damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} The aboleth gains the target's memories if the target is a Humanoid and is reduced to 0 Hit by this action."
      },
      {
        "name": "Dominate Mind (2/Day)",
        "desc": "wis 16, one creature the aboleth can see within 30 feet. {@actSaveFail} The target has the Charmed condition until the aboleth dies or is on a different plane of existence from the target. While Charmed, the target acts as an ally to the aboleth and is under its control while within 60 feet of it. In addition, the aboleth and the target can communicate telepathically with each other over any distance. The target repeats the save whenever it takes damage as well as after every 24 hours it spends at least 1 mile away from the aboleth, ending the effect on itself on a success."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Abominable Yeti": {
    "name": "Abominable Yeti",
    "size": "Huge",
    "type": "monstrosity",
    "challengeRating": 9,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 137,
      "hitDice": "11d12 + 66"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 24,
      "dex": 10,
      "con": 22,
      "int": 9,
      "wis": 13,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Yeti"
    ],
    "traits": [
      {
        "name": "Fear of Fire",
        "desc": "If the yeti takes Fire damage, it has Disadvantage|XPHB on attack rolls and ability checks until the end of its next turn."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The yeti can use its Chilling Gaze and makes two attacks, using Claw or Ice Throw in any combination."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +11, reach 5 ft. {@h}14 (2d6) Slashing damage plus 7 (2d6) Cold damage."
      },
      {
        "name": "Ice Throw",
        "desc": "r Roll: +11, range 60/240 ft. {@h}12 (2d4) Bludgeoning damage plus 7 (2d6) Cold damage."
      },
      {
        "name": "Chilling Gaze",
        "desc": "con 18, one creature the yeti can see within 30 feet. {@actSaveFail} 21 (6d6) Cold damage, and the target has the Paralyzed condition until the start of the yeti's next turn unless the target has Immunity|XPHB to Cold damage. {@actSaveSuccess} The target is immune to this yeti's Chilling Gaze for 1 hour."
      },
      {
        "name": "Cold Breath {@recharge}",
        "desc": "con 18, each creature in a 30-foot Cone. {@actSaveFail} 45 (10d8) Cold damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Black Dragon": {
    "name": "Adult Black Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 14,
    "alignment": "Chaotic Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 195,
      "hitDice": "17d12 + 85"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 14,
      "con": 21,
      "int": 14,
      "wis": 13,
      "cha": 19
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Melf's Acid Arrow (level 3 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +11, reach 10 ft. {@h}13 (2d6) Slashing damage plus 4 (1d8) Acid damage."
      },
      {
        "name": "Acid Breath 5",
        "desc": "dex 18, each creature in a 60-foot-long, 5-foot-wide Line. {@actSaveFail} 54 (12d8) Acid damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Blue Dragon": {
    "name": "Adult Blue Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 16,
    "alignment": "Lawful Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 212,
      "hitDice": "17d12 + 102"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 25,
      "dex": 10,
      "con": 23,
      "int": 16,
      "wis": 15,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Shatter."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +12, reach 10 ft. {@h}16 (2d8) Slashing damage plus 5 (1d10) Lightning damage."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 19, each creature in a 90-foot-long, 5-foot-wide Line. {@actSaveFail} 60 (11d10) Lightning damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Brass Dragon": {
    "name": "Adult Brass Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 13,
    "alignment": "Chaotic Good",
    "armorClass": 18,
    "hitPoints": {
      "value": 172,
      "hitDice": "15d12 + 75"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 10,
      "con": 21,
      "int": 14,
      "wis": 13,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast Scorching Ray."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +11, reach 10 ft. {@h}17 (2d10) Slashing damage plus 4 (1d8) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 18, each creature in a 60-foot-long, 5-foot-wide Line. {@actSaveFail} 45 (10d8) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Sleep Breath",
        "desc": "con 18, each creature in a 60-foot Cone. {@actSaveFail} The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. 2 The target has the Unconscious condition for 10 minutes. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Bronze Dragon": {
    "name": "Adult Bronze Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 15,
    "alignment": "Lawful Good",
    "armorClass": 18,
    "hitPoints": {
      "value": 212,
      "hitDice": "17d12 + 102"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 25,
      "dex": 10,
      "con": 23,
      "int": 16,
      "wis": 15,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Repulsion Breath or (B) Spellcasting to cast Guiding Bolt (level 2 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +12, reach 10 ft. {@h}16 (2d8) Slashing damage plus 5 (1d10) Lightning damage."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 19, each creature in a 90-foot-long, 5-foot-wide Line. {@actSaveFail} 55 (10d10) Lightning damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Repulsion Breath",
        "desc": "str 19, each creature in a 30-foot Cone. {@actSaveFail} The target is pushed up to 60 feet straight away from the dragon and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Copper Dragon": {
    "name": "Adult Copper Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 14,
    "alignment": "Chaotic Good",
    "armorClass": 18,
    "hitPoints": {
      "value": 184,
      "hitDice": "16d12 + 80"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 12,
      "con": 21,
      "int": 18,
      "wis": 15,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast Mind Spike (level 4 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +11, reach 10 ft. {@h}17 (2d10) Slashing damage plus 4 (1d8) Acid damage."
      },
      {
        "name": "Acid Breath 5",
        "desc": "dex 18, each creature in an 60-foot-long, 5-foot-wide Line. {@actSaveFail} 54 (12d8) Acid damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Slowing Breath",
        "desc": "con 18, each creature in a 60-foot Cone. {@actSaveFail} The target can't take Reactions; its Speed|XPHB is halved; and it can take either an action or a Bonus on its turn, not both. This effect lasts until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Gold Dragon": {
    "name": "Adult Gold Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 17,
    "alignment": "Lawful Good",
    "armorClass": 19,
    "hitPoints": {
      "value": 243,
      "hitDice": "18d12 + 126"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 14,
      "con": 25,
      "int": 16,
      "wis": 15,
      "cha": 24
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 0,
      "int": 0,
      "wis": 8,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast Guiding Bolt (level 2 version) or (B) Weakening Breath."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +14, reach 10 ft. {@h}17 (2d8) Slashing damage plus 4 (1d8) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 21, each creature in a 60-foot Cone. {@actSaveFail} 66 (12d10) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Weakening Breath",
        "desc": "str 21, each creature that isn't currently affected by this breath in a 60-foot Cone. {@actSaveFail} The target has Disadvantage|XPHB on Strength-based D20 and subtracts 3 (1d6) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Green Dragon": {
    "name": "Adult Green Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 15,
    "alignment": "Lawful Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 207,
      "hitDice": "18d12 + 90"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 12,
      "con": 21,
      "int": 18,
      "wis": 15,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Mind Spike (level 3 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +11, reach 10 ft. {@h}15 (2d8) Slashing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Poison Breath 5",
        "desc": "con 18, each creature in a 60-foot Cone. {@actSaveFail} 56 (16d6) Poison damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Red Dragon": {
    "name": "Adult Red Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 17,
    "alignment": "Chaotic Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 256,
      "hitDice": "19d12 + 133"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 10,
      "con": 25,
      "int": 16,
      "wis": 13,
      "cha": 23
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Scorching Ray."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +14, reach 10 ft. {@h}13 (1d10) Slashing damage plus 5 (2d4) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 21, each creature in a 60-foot Cone. {@actSaveFail} 59 (17d6) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult Silver Dragon": {
    "name": "Adult Silver Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 16,
    "alignment": "Lawful Good",
    "armorClass": 19,
    "hitPoints": {
      "value": 216,
      "hitDice": "16d12 + 112"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 10,
      "con": 25,
      "int": 16,
      "wis": 13,
      "cha": 22
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast Ice Knife."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +13, reach 10 ft. {@h}17 (2d8) Slashing damage plus 4 (1d8) Cold damage."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 20, each creature in a 60-foot Cone. {@actSaveFail} 54 (12d8) Cold damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Paralyzing Breath",
        "desc": "con 20, each creature in a 60-foot Cone. 1 The target has the Incapacitated condition until the end of its next turn, when it repeats the save. 2 The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Adult White Dragon": {
    "name": "Adult White Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 13,
    "alignment": "Chaotic Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 200,
      "hitDice": "16d12 + 96"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 10,
      "con": 22,
      "int": 8,
      "wis": 12,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Ice Walk",
        "desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult composed of ice or snow doesn't cost it extra movement."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +11, reach 10 ft. {@h}13 (2d6) Slashing damage plus 4 (1d8) Cold damage."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 19, each creature in a 60-foot Cone. {@actSaveFail} 54 (12d8) Cold damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Air Elemental": {
    "name": "Air Elemental",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 90,
      "hitDice": "12d10 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 20,
      "con": 14,
      "int": 6,
      "wis": 10,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "poison",
      "thunder"
    ],
    "damageResistances": [
      "bludgeoning",
      "lightning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Auran)"
    ],
    "traits": [
      {
        "name": "Air Form",
        "desc": "The elemental can enter a creature's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The elemental makes two Thunderous Slam attacks."
      },
      {
        "name": "Thunderous Slam",
        "desc": "m Roll: +8, reach 10 ft. {@h}14 (2d8) Thunder damage."
      },
      {
        "name": "Whirlwind 4",
        "desc": "str 13, one Medium or smaller creature in the elemental's space. {@actSaveFail} 24 (4d10) Thunder damage, and the target is pushed up to 20 feet straight away from the elemental and has the Prone condition. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Allosaurus": {
    "name": "Allosaurus",
    "size": "Large",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 51,
      "hitDice": "6d10 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 13,
      "con": 17,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 5 ft. {@h}15 (2d10) Piercing damage."
      },
      {
        "name": "Claws",
        "desc": "m Roll: +6, reach 5 ft. {@h}8 (1d8) Slashing damage. If the target is a Large or smaller creature and the allosaurus moved 30+ feet straight toward it immediately before the hit, the target has the Prone condition, and the allosaurus can make one Bite attack against it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Black Dragon": {
    "name": "Ancient Black Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 21,
    "alignment": "Chaotic Evil",
    "armorClass": 22,
    "hitPoints": {
      "value": 367,
      "hitDice": "21d20 + 147"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 14,
      "con": 25,
      "int": 16,
      "wis": 15,
      "cha": 22
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 0,
      "int": 0,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Melf's Acid Arrow (level 4 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +15, reach 15 ft. {@h}17 (2d8) Slashing damage plus 9 (2d8) Acid damage."
      },
      {
        "name": "Acid Breath 5",
        "desc": "dex 22, each creature in a 90-foot-long, 10-foot-wide Line. {@actSaveFail} 67 (15d8) Acid damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Blue Dragon": {
    "name": "Ancient Blue Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 23,
    "alignment": "Lawful Evil",
    "armorClass": 22,
    "hitPoints": {
      "value": 481,
      "hitDice": "26d20 + 208"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 29,
      "dex": 10,
      "con": 27,
      "int": 18,
      "wis": 17,
      "cha": 25
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 10,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Shatter (level 3 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +16, reach 15 ft. {@h}18 (2d8) Slashing damage plus 11 (2d10) Lightning damage."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 23, each creature in a 120-foot-long, 10-foot-wide Line. {@actSaveFail} 88 (16d10) Lightning damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Brass Dragon": {
    "name": "Ancient Brass Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 20,
    "alignment": "Chaotic Good",
    "armorClass": 20,
    "hitPoints": {
      "value": 332,
      "hitDice": "19d20 + 133"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 10,
      "con": 25,
      "int": 16,
      "wis": 15,
      "cha": 22
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 8,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Sleep Breath or (B) Spellcasting to cast Scorching Ray (level 3 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +14, reach 15 ft. {@h}19 (2d10) Slashing damage plus 7 (2d6) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 21, each creature in a 90-foot-long, 5-foot-wide Line. {@actSaveFail} 58 (13d8) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Sleep Breath",
        "desc": "con 21, each creature in a 90-foot Cone. {@actSaveFail} The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. 2 The target has the Unconscious condition for 10 minutes. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Bronze Dragon": {
    "name": "Ancient Bronze Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 22,
    "alignment": "Lawful Good",
    "armorClass": 22,
    "hitPoints": {
      "value": 444,
      "hitDice": "24d20 + 192"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 29,
      "dex": 10,
      "con": 27,
      "int": 18,
      "wis": 17,
      "cha": 25
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 10,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Repulsion Breath or (B) Spellcasting to cast Guiding Bolt (level 2 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +16, reach 15 ft. {@h}18 (2d8) Slashing damage plus 9 (2d8) Lightning damage."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 23, each creature in a 120-foot-long, 10-foot-wide Line. {@actSaveFail} 82 (15d10) Lightning damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Repulsion Breath",
        "desc": "str 23, each creature in a 30-foot Cone. {@actSaveFail} The target is pushed up to 60 feet straight away from the dragon and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Copper Dragon": {
    "name": "Ancient Copper Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 21,
    "alignment": "Chaotic Good",
    "armorClass": 21,
    "hitPoints": {
      "value": 367,
      "hitDice": "21d20 + 147"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 12,
      "con": 25,
      "int": 20,
      "wis": 17,
      "cha": 22
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 0,
      "int": 0,
      "wis": 10,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Slowing Breath or (B) Spellcasting to cast Mind Spike (level 5 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +15, reach 15 ft. {@h}19 (2d10) Slashing damage plus 9 (2d8) Acid damage."
      },
      {
        "name": "Acid Breath 5",
        "desc": "dex 22, each creature in an 90-foot-long, 10-foot-wide Line. {@actSaveFail} 63 (14d8) Acid damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Slowing Breath",
        "desc": "con 22, each creature in a 90-foot Cone. {@actSaveFail} The target can't take Reactions; its Speed|XPHB is halved; and it can take either an action or a Bonus on its turn, not both. This effect lasts until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Gold Dragon": {
    "name": "Ancient Gold Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 24,
    "alignment": "Lawful Good",
    "armorClass": 22,
    "hitPoints": {
      "value": 546,
      "hitDice": "28d20 + 252"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 30,
      "dex": 14,
      "con": 29,
      "int": 18,
      "wis": 17,
      "cha": 28
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 0,
      "int": 0,
      "wis": 10,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Spellcasting to cast Guiding Bolt (level 4 version) or (B) Weakening Breath."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +17 to hit, reach 15 ft. {@h}19 (2d8) Slashing damage plus 9 (2d8) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 24, each creature in a 90-foot Cone. {@actSaveFail} 71 (13d10) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Weakening Breath",
        "desc": "str 24, each creature that isn't currently affected by this breath in a 90-foot Cone. {@actSaveFail} The target has Disadvantage|XPHB on Strength-based D20 and subtracts 5 (1d10) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Green Dragon": {
    "name": "Ancient Green Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 22,
    "alignment": "Lawful Evil",
    "armorClass": 21,
    "hitPoints": {
      "value": 402,
      "hitDice": "23d20 + 161"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 12,
      "con": 25,
      "int": 20,
      "wis": 17,
      "cha": 22
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 0,
      "int": 0,
      "wis": 10,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Mind Spike (level 5 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +15, reach 15 ft. {@h}17 (2d8) Slashing damage plus 10 (3d6) Poison damage."
      },
      {
        "name": "Poison Breath 5",
        "desc": "con 22, each creature in a 90-foot Cone. {@actSaveFail} 77 (22d6) Poison damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Red Dragon": {
    "name": "Ancient Red Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 24,
    "alignment": "Chaotic Evil",
    "armorClass": 22,
    "hitPoints": {
      "value": 507,
      "hitDice": "26d20 + 234"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 30,
      "dex": 10,
      "con": 29,
      "int": 18,
      "wis": 15,
      "cha": 27
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Scorching Ray (level 3 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +17, reach 15 ft. {@h}19 (2d8) Slashing damage plus 10 (3d6) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 24, each creature in a 90-foot Cone. {@actSaveFail} 91 (26d6) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient Silver Dragon": {
    "name": "Ancient Silver Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 23,
    "alignment": "Lawful Good",
    "armorClass": 22,
    "hitPoints": {
      "value": 468,
      "hitDice": "24d20 + 216"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 30,
      "dex": 10,
      "con": 29,
      "int": 18,
      "wis": 15,
      "cha": 26
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of (A) Paralyzing Breath or (B) Spellcasting to cast Ice Knife (level 2 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +17, reach 15 ft. {@h}19 (2d8) Slashing damage plus 9 (2d8) Cold damage."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 24, each creature in a 90-foot Cone. {@actSaveFail} 67 (15d8) Cold damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Paralyzing Breath",
        "desc": "con 24, each creature in a 90-foot Cone. 1 The target has the Incapacitated condition until the end of its next turn, when it repeats the save. 2 The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ancient White Dragon": {
    "name": "Ancient White Dragon",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 20,
    "alignment": "Chaotic Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 333,
      "hitDice": "18d20 + 144"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 26,
      "dex": 10,
      "con": 26,
      "int": 10,
      "wis": 13,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Ice Walk",
        "desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult composed of ice or snow doesn't cost it extra movement."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +14, reach 15 ft. {@h}17 (2d8) Slashing damage plus 7 (2d6) Cold damage."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 22, each creature in a 90-foot Cone. {@actSaveFail} 63 (14d8) Cold damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Animal Lord": {
    "name": "Animal Lord",
    "size": "Medium",
    "type": "celestial",
    "challengeRating": 20,
    "alignment": "Neutral",
    "armorClass": 19,
    "hitPoints": {
      "value": 323,
      "hitDice": "34d8 + 170"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 24,
      "dex": 25,
      "con": 20,
      "int": 19,
      "wis": 23,
      "cha": 22
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 11,
      "int": 0,
      "wis": 12,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "cold",
      "fire",
      "necrotic",
      "psychic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all"
    ],
    "traits": [
      {
        "name": "Animal Lordship",
        "desc": "An animal lord represents a Forager, Hunter, or Sage (DM's choice), which determines certain traits in this stat block."
      },
      {
        "name": "Legendary Resistance (4/Day)",
        "desc": "If the animal lord fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Lordly Presence",
        "desc": "wis 20, any enemy that starts its turn in a 30-foot Emanation originating from the animal lord. {@actSaveFail} The target suffers one of the following effects: [object Object]"
      },
      {
        "name": "Magic Resistance",
        "desc": "The animal lord has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The animal lord makes two attacks, using Rend or Radiant Ray in any combination, and uses Animal Spirit."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +13, reach 5 ft. {@h}14 (2d6) Slashing damage plus 7 (2d6) Force damage."
      },
      {
        "name": "Radiant Ray",
        "desc": "r Roll: +12, range 120 ft. {@h}20 (4d6) Radiant damage."
      },
      {
        "name": "Animal Spirit",
        "desc": "The animal lord conjures an animal spirit that strikes at a creature and then disappears. dex 20, one creature the animal lord can see within 120 feet. {@actSaveFail} 28 (4d10) Radiant damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} One of the following effects occurs: [object Object]"
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Animated Armor": {
    "name": "Animated Armor",
    "size": "Medium",
    "type": "construct",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 18,
    "hitPoints": {
      "value": 33,
      "hitDice": "6d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 11,
      "con": 13,
      "int": 1,
      "wis": 3,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison",
      "psychic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The armor makes two Slam attacks."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Animated Broom": {
    "name": "Animated Broom",
    "size": "Small",
    "type": "construct",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 14,
      "hitDice": "4d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 17,
      "con": 10,
      "int": 1,
      "wis": 5,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison",
      "psychic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The broom doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Animated Flying Sword": {
    "name": "Animated Flying Sword",
    "size": "Small",
    "type": "construct",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 17,
    "hitPoints": {
      "value": 14,
      "hitDice": "4d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 15,
      "con": 11,
      "int": 1,
      "wis": 5,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison",
      "psychic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Slash",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Animated Rug of Smothering": {
    "name": "Animated Rug of Smothering",
    "size": "Large",
    "type": "construct",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 27,
      "hitDice": "5d10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 14,
      "con": 10,
      "int": 1,
      "wis": 3,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison",
      "psychic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Smother",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Bludgeoning damage. If the target is a Medium or smaller creature, the rug can give it the Grappled condition (escape 13) instead of dealing damage. Until the grapple ends, the target has the Blinded and Restrained conditions, is suffocating, and takes 10 (2d6) Bludgeoning damage at the start of each of its turns. The rug can smother only one creature at a time. While grappling the target, the rug can't take this action, the rug halves the damage it takes (round down), and the target takes the same amount of damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ankheg": {
    "name": "Ankheg",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 11,
      "con": 14,
      "int": 1,
      "wis": 13,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Tunneler",
        "desc": "The ankheg can burrow through solid rock at half its Burrow and leaves a 10-foot-diameter tunnel in its wake."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5 (with Advantage|XPHB if the target is Grappled by the ankheg), reach 5 ft. {@h}10 (2d6) Slashing damage plus 3 (1d6) Acid damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 13)."
      },
      {
        "name": "Acid Spray {@recharge}",
        "desc": "dex 12, each creature in a 30-foot-long, 5-foot-wide Line. {@actSaveFail} 14 (4d6) Acid damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ankylosaurus": {
    "name": "Ankylosaurus",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 3,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 68,
      "hitDice": "8d12 + 16"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 11,
      "con": 15,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 6,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ankylosaurus makes two Tail attacks."
      },
      {
        "name": "Tail",
        "desc": "m Roll: +6, reach 10 ft. {@h}9 (1d10) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ape": {
    "name": "Ape",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 14,
      "int": 6,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ape makes two Fist attacks."
      },
      {
        "name": "Fist",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Bludgeoning damage."
      },
      {
        "name": "Rock {@recharge}",
        "desc": "r Roll: +5, range 25/50 ft. {@h}10 (2d6) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Arcanaloth": {
    "name": "Arcanaloth",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 12,
    "alignment": "Neutral Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 175,
      "hitDice": "27d8 + 54"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 14,
      "int": 20,
      "wis": 16,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 6,
      "int": 9,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "poisoned"
    ],
    "damageImmunities": [
      "acid",
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Fiendish Restoration",
        "desc": "If the arcanaloth dies outside Gehenna, its body dissolves into ichor, and it gains a new body instantly and revives with all its Hit in Gehenna."
      },
      {
        "name": "Magic Resistance",
        "desc": "The arcanaloth has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Soul Tome",
        "desc": "The arcanaloth has a magic tome. While holding or carrying the tome, the arcanaloth can use its Banishing Claw action. The tome has AC 17; HP 35; and Immunity|XPHB to Necrotic, Poison, and Psychic damage. The tome regains all its Hit at the end of every turn, but it turns to dust if reduced to 0 Hit or when the arcanaloth dies. If the tome is destroyed, the arcanaloth can create a new one when it finishes a Short or Long."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The arcanaloth makes three Fiendish Burst attacks. It can replace one attack with a Banishing Claw attack."
      },
      {
        "name": "Fiendish Burst",
        "desc": "m,r Roll: +9, reach 5 ft. or range 120 ft. {@h}31 (4d12) Necrotic damage."
      },
      {
        "name": "Banishing Claw (Requires Soul Tome)",
        "desc": "m Roll: +9, reach 5 ft. {@h}10 (2d4) Slashing damage plus 19 (3d12) Psychic damage. If the target is a creature, it is subjected to the following effect. cha 17. {@actSaveFail} The target is trapped in a demiplane inside the Soul Tome. While trapped there, the target has the Incapacitated condition. At the end of each of its turns, the target repeats the save, escaping the tome on a success. When the target escapes, it appears in the space it left or, if that space is occupied, the nearest unoccupied space. If the target fails three of these saves while in the demiplane, it becomes bound to the tome and can escape only if the tome is reduced to 0 Hit."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Arch-hag": {
    "name": "Arch-hag",
    "size": "Large",
    "type": "fey",
    "challengeRating": 21,
    "alignment": "Neutral Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 333,
      "hitDice": "29d10 + 174"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 24,
      "dex": 15,
      "con": 23,
      "int": 19,
      "wis": 19,
      "cha": 25
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 0,
      "int": 0,
      "wis": 11,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "cold",
      "fire",
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the hag fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The hag has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Spiteful Escape",
        "desc": "When the hag drops to 0 Hit, it dies only if it is within 30 feet of its anathema (a thing the DM chooses as the hag's most hated thing). Otherwise, the hag drops to 1 Hit and teleports to a harmless demiplane, and it can't return to the plane it left for 2d6 days. When the hag teleports away, each creature within 60 feet of the space it left is cursed. Until the curse ends, a creature has Disadvantage|XPHB on ability checks and saving throws, and the hag knows its location anywhere in the multiverse."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hag makes two Spectral Claw attacks and uses Crackling Wave."
      },
      {
        "name": "Spectral Claw",
        "desc": "m,r Roll: +14, reach 10 ft. or range 60 ft. {@h}17 (3d6) Force damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Crackling Wave",
        "desc": "dex 22, each creature in a 60-foot Cone. {@actSaveFail} 32 (5d12) Lightning damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} The target is cursed until the end of the hag's next turn. The target can't take Reactions until the curse ends."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Archelon": {
    "name": "Archelon",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 4,
    "alignment": "Unaligned",
    "armorClass": 17,
    "hitPoints": {
      "value": 90,
      "hitDice": "12d12 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 16,
      "con": 13,
      "int": 4,
      "wis": 14,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The archelon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The archelon makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 5 ft. {@h}14 (3d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Archmage": {
    "name": "Archmage",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 12,
    "alignment": "Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 170,
      "hitDice": "31d8 + 31"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 14,
      "con": 12,
      "int": 20,
      "wis": 15,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 9,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [
      "psychic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus five other languages"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The archmage has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The archmage makes four Arcane Burst attacks."
      },
      {
        "name": "Arcane Burst",
        "desc": "m,r Roll: +9, reach 5 ft. or range 150 ft. {@h}27 (4d10) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Archpriest": {
    "name": "Archpriest",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 12,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 240,
      "hitDice": "32d8 + 96"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 12,
      "con": 17,
      "int": 14,
      "wis": 21,
      "cha": 14
    },
    "savingThrows": {
      "str": 7,
      "dex": 0,
      "con": 7,
      "int": 6,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The archpriest makes three Radiant Burst attacks."
      },
      {
        "name": "Radiant Burst",
        "desc": "m,r Roll: +9, reach 5 ft. or range 60 ft. {@h}27 (4d10) Radiant damage."
      },
      {
        "name": "Holy Word 4",
        "desc": "wis 17, each enemy in a 20-foot Emanation originating from the archpriest. {@actSaveFail} 21 (6d6) Radiant damage, and the target has the Stunned condition until the end of the archpriest's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Assassin": {
    "name": "Assassin",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 8,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 97,
      "hitDice": "15d8 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 18,
      "con": 14,
      "int": 16,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 6,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "poison"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Thieves' cant"
    ],
    "traits": [
      {
        "name": "Evasion",
        "desc": "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the save and only half damage if it fails. It can't use this trait if it has the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The assassin makes three attacks, using Shortsword or Light Crossbow in any combination."
      },
      {
        "name": "Shortsword",
        "desc": "m Roll: +7, reach 5 ft. {@h}7 (1d6) Piercing damage plus 17 (5d6) Poison damage, and the target has the Poisoned condition until the start of the assassin's next turn."
      },
      {
        "name": "Light Crossbow",
        "desc": "r Roll: +7, range 80/320 ft. {@h}8 (1d8) Piercing damage plus 21 (6d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Awakened Shrub": {
    "name": "Awakened Shrub",
    "size": "Small",
    "type": "plant",
    "challengeRating": 0,
    "alignment": "Neutral",
    "armorClass": 9,
    "hitPoints": {
      "value": 10,
      "hitDice": "3d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 8,
      "con": 11,
      "int": 10,
      "wis": 10,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "piercing"
    ],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Rake",
        "desc": "m Roll: +1, reach 5 ft. {@h}1 Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Awakened Tree": {
    "name": "Awakened Tree",
    "size": "Huge",
    "type": "plant",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 59,
      "hitDice": "7d12 + 14"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 6,
      "con": 15,
      "int": 10,
      "wis": 10,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing"
    ],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +6, reach 10 ft. {@h}13 (2d8) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Axe Beak": {
    "name": "Axe Beak",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d10 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 12,
      "con": 12,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Beak",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Azer Pyromancer": {
    "name": "Azer Pyromancer",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 6,
    "alignment": "Lawful Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 97,
      "hitDice": "13d8 + 39"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 16,
      "int": 12,
      "wis": 18,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 6,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Ignan)"
    ],
    "traits": [
      {
        "name": "Fire Aura",
        "desc": "At the end of each of the azer's turns, each creature of the azer's choice in a 5-foot Emanation originating from the azer takes 11 (2d10) Fire damage unless the azer has the Incapacitated condition."
      },
      {
        "name": "Illumination",
        "desc": "The azer sheds Bright in a 10-foot radius and Dim for an additional 10 feet."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The azer makes two Flame Burst attacks."
      },
      {
        "name": "Flame Burst",
        "desc": "m,r Roll: +7, reach 5 ft. or range 120 ft. {@h}15 (2d10) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Azer Sentinel": {
    "name": "Azer Sentinel",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 2,
    "alignment": "Lawful Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 39,
      "hitDice": "6d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 15,
      "int": 12,
      "wis": 13,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 4,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Ignan)"
    ],
    "traits": [
      {
        "name": "Fire Aura",
        "desc": "At the end of each of the azer's turns, each creature of the azer's choice in a 5-foot Emanation originating from the azer takes 5 (1d10) Fire damage unless the azer has the Incapacitated condition."
      },
      {
        "name": "Illumination",
        "desc": "The azer sheds Bright in a 10-foot radius and Dim for an additional 10 feet."
      }
    ],
    "actions": [
      {
        "name": "Burning Hammer",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (1d10) Bludgeoning damage plus 3 (1d6) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Baboon": {
    "name": "Baboon",
    "size": "Small",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 3,
      "hitDice": "1d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 14,
      "con": 11,
      "int": 4,
      "wis": 12,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The baboon has Advantage|XPHB on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +1, reach 5 ft. {@h}1 (1d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Badger": {
    "name": "Badger",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 5,
      "hitDice": "1d4 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 11,
      "con": 16,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "poison"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +2, reach 5 ft. {@h}1 Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Balor": {
    "name": "Balor",
    "size": "Huge",
    "type": "fiend",
    "challengeRating": 19,
    "alignment": "Chaotic Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 287,
      "hitDice": "23d12 + 138"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 26,
      "dex": 15,
      "con": 22,
      "int": 20,
      "wis": 16,
      "cha": 22
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 12,
      "int": 0,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Death Throes",
        "desc": "The balor explodes when it dies. dex 20, each creature in a 30-foot Emanation originating from the balor. {@actSaveFail} 31 (9d6) Fire damage plus 31 (9d6) Force damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} If the balor dies outside the Abyss, it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Fire Aura",
        "desc": "At the end of each of the balor's turns, each creature in a 5-foot Emanation originating from the balor takes 13 (3d8) Fire damage."
      },
      {
        "name": "Legendary Resistance (3/Day)",
        "desc": "If the balor fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The balor has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The balor makes one Flame Whip attack and one Lightning Blade attack."
      },
      {
        "name": "Flame Whip",
        "desc": "m Roll: +14, reach 30 ft. {@h}18 (3d6) Force damage plus 17 (5d6) Fire damage. If the target is a Huge or smaller creature, the balor pulls the target up to 25 feet straight toward itself, and the target has the Prone condition."
      },
      {
        "name": "Lightning Blade",
        "desc": "m Roll: +14, reach 10 ft. {@h}21 (3d8) Force damage plus 22 (4d10) Lightning damage, and the target can't take Reactions until the start of the balor's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bandit": {
    "name": "Bandit",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 12,
      "con": 12,
      "int": 10,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Thieves' cant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Scimitar",
        "desc": "m Roll: +3, reach 5 ft. {@h}4 (1d6) Slashing damage."
      },
      {
        "name": "Light Crossbow",
        "desc": "r Roll: +3, range 80/320 ft. {@h}5 (1d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bandit Captain": {
    "name": "Bandit Captain",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 52,
      "hitDice": "8d8 + 16"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 16,
      "con": 14,
      "int": 14,
      "wis": 11,
      "cha": 14
    },
    "savingThrows": {
      "str": 4,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Thieves' cant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bandit makes two attacks, using Scimitar and Pistol in any combination."
      },
      {
        "name": "Scimitar",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Slashing damage."
      },
      {
        "name": "Pistol",
        "desc": "r Roll: +5, range 30/90 ft. {@h}8 (1d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bandit Crime Lord": {
    "name": "Bandit Crime Lord",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 11,
    "alignment": "Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 169,
      "hitDice": "26d8 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 20,
      "con": 14,
      "int": 18,
      "wis": 14,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 6,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Thieves' cant"
    ],
    "traits": [
      {
        "name": "Evasion",
        "desc": "If the bandit is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the bandit instead takes no damage if it succeeds on the save and only half damage if it fails. It can't use this trait if it has the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bandit makes three attacks, using Scimitar or Pistol in any combination."
      },
      {
        "name": "Scimitar",
        "desc": "m Roll: +9, reach 5 ft. {@h}12 (2d6) Slashing damage plus 14 (4d6) Poison damage."
      },
      {
        "name": "Pistol",
        "desc": "r Roll: +9, range 30/90 ft. {@h}10 (1d10) Piercing damage plus 14 (4d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bandit Deceiver": {
    "name": "Bandit Deceiver",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 7,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 130,
      "hitDice": "20d8 + 40"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 16,
      "con": 14,
      "int": 17,
      "wis": 12,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 6,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Thieves' cant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bandit makes three Dagger attacks."
      },
      {
        "name": "Dagger",
        "desc": "m,r Roll: +6, reach 5 ft. or range 20/60 ft. {@h}8 (2d4) Piercing damage plus 10 (3d6) Poison damage."
      },
      {
        "name": "Blinding Flash 4",
        "desc": "con 14, each creature in a 10-foot-radius Sphere centered on a point the bandit can see within 120 feet. {@actSaveFail} 13 (3d6) Radiant damage, and the target has the Blinded condition until the start of the bandit's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Banshee": {
    "name": "Banshee",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 54,
      "hitDice": "12d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 14,
      "con": 10,
      "int": 12,
      "wis": 11,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained"
    ],
    "damageImmunities": [
      "cold",
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "acid",
      "bludgeoning",
      "fire",
      "lightning",
      "piercing",
      "slashing",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Elvish"
    ],
    "traits": [
      {
        "name": "Detect Life",
        "desc": "The banshee magically senses the direction of creatures up to 1 mile away that aren't Constructs or Undead."
      },
      {
        "name": "Incorporeal Movement",
        "desc": "The banshee can move through other creatures and objects as if they were Difficult. It takes 5 (1d10) Force damage if it ends its turn inside an object."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The banshee makes two Corrupting Touch attacks and uses Horrify."
      },
      {
        "name": "Corrupting Touch",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Necrotic damage."
      },
      {
        "name": "Horrify",
        "desc": "wis 13, one creature the banshee can see within 60 feet that can see the banshee. {@actSaveFail} The target has the Frightened condition until the start of the banshee's next turn. {@actSaveSuccess} The target is immune to this banshee's Horrify for 24 hours."
      },
      {
        "name": "Deathly Wail (1/Day)",
        "desc": "The banshee releases a mournful wail if it isn't in sunlight. con 13, each creature within 30 feet that can hear the wail and isn't a Construct or an Undead. {@actSaveFail} If the target has 25 Hit or fewer, it drops to 0 Hit. Otherwise, the target takes 10 (3d6) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Barbed Devil": {
    "name": "Barbed Devil",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 5,
    "alignment": "Lawful Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 110,
      "hitDice": "13d8 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 17,
      "con": 18,
      "int": 12,
      "wis": 14,
      "cha": 14
    },
    "savingThrows": {
      "str": 6,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 5,
      "cha": 5
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Barbed Hide",
        "desc": "At the start of each of its turns, the devil deals 5 (1d10) Piercing damage to any creature it is grappling or any creature grappling it."
      },
      {
        "name": "Diabolical Restoration",
        "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "desc": "The devil has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The devil makes one Claws attack and one Tail attack, or it makes two Hurl Flame attacks."
      },
      {
        "name": "Claws",
        "desc": "m Roll: +6, reach 5 ft. {@h}10 (2d6) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 13) from both claws."
      },
      {
        "name": "Tail",
        "desc": "m Roll: +6, reach 10 ft. {@h}14 (2d10) Slashing damage."
      },
      {
        "name": "Hurl Flame",
        "desc": "r Roll: +5, range 150 ft. {@h}17 (5d6) Fire damage. If the target is a flammable object that isn't being worn or carried, it starts burning|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Barlgura": {
    "name": "Barlgura",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 5,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 85,
      "hitDice": "10d10 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 7,
      "wis": 14,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 6,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the barlgura dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The barlgura makes one Tormenting Bite attack and two Thrash attacks."
      },
      {
        "name": "Tormenting Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}11 (2d6) Piercing damage plus 13 (2d12) Psychic damage."
      },
      {
        "name": "Thrash",
        "desc": "m Roll: +7, reach 5 ft. {@h}9 (1d10) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Basilisk": {
    "name": "Basilisk",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 52,
      "hitDice": "8d8 + 16"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 8,
      "con": 15,
      "int": 2,
      "wis": 8,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Piercing damage plus 7 (2d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bat": {
    "name": "Bat",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 15,
      "con": 8,
      "int": 2,
      "wis": 12,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4 to hit, reach 5 ft. {@h}1 Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bearded Devil": {
    "name": "Bearded Devil",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 58,
      "hitDice": "9d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 15,
      "con": 15,
      "int": 9,
      "wis": 11,
      "cha": 14
    },
    "savingThrows": {
      "str": 5,
      "dex": 0,
      "con": 4,
      "int": 0,
      "wis": 0,
      "cha": 4
    },
    "conditionImmunities": [
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The devil has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The devil makes one Beard attack and one Infernal Glaive attack."
      },
      {
        "name": "Beard",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Piercing damage, and the target has the Poisoned condition until the start of the devil's next turn. Until this poison ends, the target can't regain Hit."
      },
      {
        "name": "Infernal Glaive",
        "desc": "m Roll: +5, reach 10 ft. {@h}8 (1d10) Slashing damage. If the target is a creature and doesn't already have an infernal wound, it is subjected to the following effect. con 12. {@actSaveFail} The target receives an infernal wound. While wounded, the target loses 5 (1d10) Hit at the start of each of its turns. The wound closes after 1 minute, after a spell restores Hit to the target, or after the target or a creature within 5 feet of it takes an action to stanch the wound, doing so by succeeding on a 12 Wisdom (Medicine|XPHB) check."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Behir": {
    "name": "Behir",
    "size": "Huge",
    "type": "monstrosity",
    "challengeRating": 11,
    "alignment": "Neutral Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 168,
      "hitDice": "16d12 + 64"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 16,
      "con": 18,
      "int": 7,
      "wis": 14,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The behir makes one Bite attack and uses Constrict."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +10, reach 10 ft. {@h}19 (2d12) Piercing damage plus 11 (2d10) Lightning damage."
      },
      {
        "name": "Constrict",
        "desc": "str 18, one Large or smaller creature the behir can see within 5 feet. {@actSaveFail} 28 (5d8) Bludgeoning damage. The target has the Grappled condition (escape 16), and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 16, each creature in a 90-foot-long, 5-foot-wide Line. {@actSaveFail} 66 (12d10) Lightning damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Beholder": {
    "name": "Beholder",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 13,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 190,
      "hitDice": "20d10 + 80"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 18,
      "int": 17,
      "wis": 15,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 9,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [
      "prone"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Deep Speech",
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the beholder fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The beholder uses Eye Rays three times."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +8, reach 5 ft. {@h}13 (3d6) Piercing damage."
      },
      {
        "name": "Eye Rays",
        "desc": "The beholder randomly shoots one of the following magical rays at a target it can see within 120 feet of itself (roll 1d10; reroll if the beholder has already used that ray during this turn): [object Object]"
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Beholder Zombie": {
    "name": "Beholder Zombie",
    "size": "Large",
    "type": "undead",
    "challengeRating": 5,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 93,
      "hitDice": "11d10 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 8,
      "con": 16,
      "int": 3,
      "wis": 8,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned",
      "prone"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Deep Speech and Undercommon but can't speak"
    ],
    "traits": [
      {
        "name": "Undead Fortitude",
        "desc": "If damage reduces the zombie to 0 Hit, it makes a Constitution saving throw (5 plus the damage taken) unless the damage is Radiant or from a Critical. On a successful save, the zombie drops to 1 Hit instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The zombie uses Eye Rays twice."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}16 (4d6) Piercing damage."
      },
      {
        "name": "Eye Rays",
        "desc": "The zombie randomly shoots one of the following magical rays at a target it can see within 120 feet of itself (roll 1d4; reroll if the zombie has already used that ray during this turn): [object Object]"
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Berserker": {
    "name": "Berserker",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 67,
      "hitDice": "9d8 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 12,
      "con": 17,
      "int": 9,
      "wis": 11,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [
      {
        "name": "Bloodied Frenzy",
        "desc": "While Bloodied|XPHB, the berserker has Advantage|XPHB on attack rolls and saving throws."
      }
    ],
    "actions": [
      {
        "name": "Greataxe",
        "desc": "m Roll: +5, reach 5 ft. {@h}9 (1d12) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Berserker Commander": {
    "name": "Berserker Commander",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 8,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 136,
      "hitDice": "16d8 + 64"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 14,
      "con": 19,
      "int": 10,
      "wis": 14,
      "cha": 9
    },
    "savingThrows": {
      "str": 7,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [
      {
        "name": "Bloodied Frenzy",
        "desc": "While Bloodied|XPHB, the berserker has Advantage|XPHB on attack rolls and saving throws."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The berserker makes three attacks, using Greataxe or Javelin in any combination."
      },
      {
        "name": "Greataxe",
        "desc": "m Roll: +7, reach 5 ft. {@h}10 (1d12) Slashing damage, plus 10 (3d6) Thunder damage to the target or another creature within 5 feet of the target."
      },
      {
        "name": "Javelin",
        "desc": "m,r Roll: +7, reach 5 ft. or range 30/120 ft. {@h}18 (4d6) Piercing damage, and the target's Speed|XPHB decreases by 5 feet until the start of the berserker's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Black Bear": {
    "name": "Black Bear",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 12,
      "con": 14,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bear makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Black Dragon Wyrmling": {
    "name": "Black Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 33,
      "hitDice": "6d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 13,
      "int": 10,
      "wis": 11,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Slashing damage plus 2 (1d4) Acid damage."
      },
      {
        "name": "Acid Breath 5",
        "desc": "dex 11, each creature in a 15-foot-long, 5-foot-wide Line. {@actSaveFail} 22 (5d8) Acid damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Black Pudding": {
    "name": "Black Pudding",
    "size": "Large",
    "type": "ooze",
    "challengeRating": 4,
    "alignment": "Unaligned",
    "armorClass": 7,
    "hitPoints": {
      "value": 68,
      "hitDice": "8d10 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 5,
      "con": 16,
      "int": 1,
      "wis": 6,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "grappled",
      "prone",
      "restrained"
    ],
    "damageImmunities": [
      "acid",
      "cold",
      "lightning",
      "slashing"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amorphous",
        "desc": "The pudding can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Corrosive Form",
        "desc": "A creature that hits the pudding with a melee attack roll takes 4 (1d8) Acid damage. Nonmagical ammunition is destroyed immediately after hitting the pudding and dealing any damage. Any nonmagical weapon takes a cumulative -1 penalty to attack rolls immediately after dealing damage to the pudding and coming into contact with it. The weapon is destroyed if the penalty reaches -5. The penalty can be removed by casting the Mending spell on the weapon. In 1 minute, the pudding can eat through 2 feet of nonmagical wood or metal."
      },
      {
        "name": "Spider Climb",
        "desc": "The pudding can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Dissolving Pseudopod",
        "desc": "m Roll: +5, reach 10 ft. {@h}17 (4d6) Acid damage. Nonmagical armor worn by the target takes a -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the Mending spell on the armor."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Blink Dog": {
    "name": "Blink Dog",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Lawful Good",
    "armorClass": 13,
    "hitPoints": {
      "value": 22,
      "hitDice": "4d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 17,
      "con": 12,
      "int": 10,
      "wis": 13,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Elvish and Sylvan but can't speak them"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Blob of Annihilation": {
    "name": "Blob of Annihilation",
    "size": "Gargantuan",
    "type": "ooze",
    "challengeRating": 23,
    "alignment": "Neutral Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 448,
      "hitDice": "23d20 + 207"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 14,
      "con": 28,
      "int": 10,
      "wis": 16,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 16,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "stunned",
      "unconscious"
    ],
    "damageImmunities": [
      "acid",
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Astral Implosion",
        "desc": "If the blob is reduced to 0 Hit, it implodes and ejects any creatures and objects engulfed by it into the Astral Sea. The blob itself vanishes, leaving behind a layer of slime on everything that was within 600 feet of it. In 1d20 years, the blob reconstitutes on a random world in the Material Plane."
      },
      {
        "name": "Legendary Resistance (4/Day)",
        "desc": "If the blob fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The blob has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The blob makes two Pseudopod attacks and uses Engulf. It can replace one attack with a use of Restraining Glob."
      },
      {
        "name": "Pseudopod",
        "desc": "m Roll: +15, reach 30 ft. {@h}24 (3d10) Force damage."
      },
      {
        "name": "Engulf",
        "desc": "The blob moves up to its Speed|XPHB and can move through the spaces of Huge or smaller creatures and objects. str 23, each creature or object whose space the blob enters for the first time during this move. {@actSaveFail} The target is engulfed. While engulfed, a target has Cover|XPHB|Total against attacks and other effects outside the blob, and when the blob moves, the engulfed target moves with it. A nonmagical object is destroyed after spending 1 minute engulfed. While engulfed, a creature takes 21 (6d6) Force damage at the start of each of its turns, is suffocating, has the Restrained condition, and repeats the save at the end of each of its turns. An engulfed creature that is reduced to 0 Hit dissolves into ash, which is ejected into the Astral Sea. {@actSaveSuccess} The target escapes and enters the nearest unoccupied space."
      },
      {
        "name": "Restraining Glob",
        "desc": "The blob lobs a slimy glob at one Large or smaller creature it can see within 600 feet of itself. dex 23, the targeted creature. {@actSaveFail} 18 (3d6) Acid damage. The glob rolls the target 60 feet straight toward the blob, and the target has the Restrained condition until the end of its next turn, when the glob harmlessly dissolves. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Blood Hawk": {
    "name": "Blood Hawk",
    "size": "Small",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 7,
      "hitDice": "2d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 14,
      "con": 10,
      "int": 3,
      "wis": 14,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The hawk has Advantage|XPHB on an attack roll against a creature if at least one of the hawk's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Piercing damage, or 6 (1d8) Piercing damage if the target is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Blue Dragon Wyrmling": {
    "name": "Blue Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 65,
      "hitDice": "10d8 + 20"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 10,
      "con": 15,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 2,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (1d10) Slashing damage plus 3 (1d6) Lightning damage."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 12, each creature in a 30-foot-long, 5-foot-wide Line. {@actSaveFail} 21 (6d6) Lightning damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Blue Slaad": {
    "name": "Blue Slaad",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 7,
    "alignment": "Chaotic Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 133,
      "hitDice": "14d10 + 56"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 15,
      "con": 18,
      "int": 7,
      "wis": 7,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Slaad; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The slaad has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Regeneration",
        "desc": "The slaad regains 10 Hit at the start of each of its turns if it has at least 1 Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The slaad makes three Mutating Claw attacks."
      },
      {
        "name": "Mutating Claw",
        "desc": "m Roll: +8, reach 10 ft. {@h}12 (2d6) Slashing damage plus 3 (1d6) Poison damage. If the target is a Humanoid not cursed by a slaad, it is subjected to the following effect. con 15. {@actSaveFail} The target is cursed. The cursed target can't regain Hit, and its Hit maximum decreases by 10 (3d6) after every 24 hours and doesn't return to normal after finishing a Long. If the curse reduces the target's Hit maximum to 0, the curse ends, and instead of dying, the target instantly transforms into a Red Slaad or, if it can cast spells of level 3 or higher, a Green Slaad. Only a Wish spell can reverse this transformation."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Boar": {
    "name": "Boar",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 13,
      "hitDice": "2d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 11,
      "con": 14,
      "int": 2,
      "wis": 9,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Bloodied Fury",
        "desc": "While Bloodied|XPHB, the boar has Advantage|XPHB on attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Gore",
        "desc": "m Roll: +3, reach 5 ft. {@h}4 (1d6) Piercing damage. If the target is a Medium or smaller creature and the boar moved 20+ feet straight toward it immediately before the hit, the target takes an extra 3 (1d6) Piercing damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bone Devil": {
    "name": "Bone Devil",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 9,
    "alignment": "Lawful Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 161,
      "hitDice": "17d10 + 68"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 16,
      "con": 18,
      "int": 13,
      "wis": 14,
      "cha": 16
    },
    "savingThrows": {
      "str": 8,
      "dex": 0,
      "con": 0,
      "int": 5,
      "wis": 6,
      "cha": 7
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Diabolical Restoration",
        "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "desc": "The devil has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The devil makes two Claw attacks and one Infernal Sting attack."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +8, reach 10 ft. {@h}13 (2d8) Slashing damage."
      },
      {
        "name": "Infernal Sting",
        "desc": "m Roll: +8, reach 10 ft. {@h}15 (2d10) Piercing damage plus 18 (4d8) Poison damage, and the target has the Poisoned condition until the start of the devil's next turn. While Poisoned, the target can't regain Hit."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bone Naga": {
    "name": "Bone Naga",
    "size": "Large",
    "type": "undead",
    "challengeRating": 4,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 65,
      "hitDice": "10d10 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 16,
      "con": 12,
      "int": 16,
      "wis": 15,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "paralyzed",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The naga makes two Bite attacks. It can replace any attack with a use of Serpentine Gaze."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 10 ft. {@h}10 (2d6) Piercing damage plus 7 (2d6) Necrotic damage."
      },
      {
        "name": "Serpentine Gaze",
        "desc": "wis 13, one creature the naga can see within 60 feet. {@actSaveFail} 13 (3d6) Psychic damage, and the target has the Charmed condition until the start of the naga's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Brass Dragon Wyrmling": {
    "name": "Brass Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 1,
    "alignment": "Chaotic Good",
    "armorClass": 15,
    "hitPoints": {
      "value": 22,
      "hitDice": "4d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 10,
      "con": 13,
      "int": 10,
      "wis": 11,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 2,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (1d10) Slashing damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 11, each creature in a 20-foot-long, 5-foot-wide Line. {@actSaveFail} 14 (4d6) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Sleep Breath",
        "desc": "con 11, each creature in a 15-foot Cone. {@actSaveFail} The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. 2 The target has the Unconscious condition for 1 minute. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Brazen Gorgon": {
    "name": "Brazen Gorgon",
    "size": "Large",
    "type": "construct",
    "challengeRating": 9,
    "alignment": "Unaligned",
    "armorClass": 19,
    "hitPoints": {
      "value": 161,
      "hitDice": "17d10 + 68"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 19,
      "int": 2,
      "wis": 14,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "petrified"
    ],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Flame Aura",
        "desc": "At the end of each of the gorgon's turns, each creature in a 5-foot Emanation originating from the gorgon takes 13 (3d8) Fire damage."
      },
      {
        "name": "Illumination",
        "desc": "The gorgon sheds Bright in a 10-foot radius and Dim for an additional 10 feet."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The gorgon makes two Gore attacks."
      },
      {
        "name": "Gore",
        "desc": "m Roll: +8, reach 5 ft. {@h}11 (2d6) Piercing damage plus 10 (3d6) Fire damage."
      },
      {
        "name": "Smelting Charge 5",
        "desc": "The gorgon moves up to its Speed|XPHB without provoking Opportunity Attacks and can move through the spaces of Medium or smaller creatures. Each time the gorgon enters a creature's space for the first time during this move, that target is subjected to the following effect. dex 16. {@actSaveFail} 13 (2d8) Piercing damage plus 13 (3d8) Fire damage, and the target is pulled into the gorgon's space and has the Grappled condition (escape 14); if the gorgon already has a creature Grappled, the target has the Prone condition instead. Until the grapple ends, the target has the Restrained condition. When the gorgon moves, the Grappled target moves with it, costing no extra movement."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bronze Dragon Wyrmling": {
    "name": "Bronze Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 2,
    "alignment": "Lawful Good",
    "armorClass": 15,
    "hitPoints": {
      "value": 39,
      "hitDice": "6d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 10,
      "con": 15,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 2,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (1d10) Slashing damage."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 12, each creature in a 40-foot-long, 5-foot-wide Line. {@actSaveFail} 16 (3d10) Lightning damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Repulsion Breath",
        "desc": "str 12, each creature in a 30-foot Cone. {@actSaveFail} The target is pushed up to 30 feet straight away from the dragon and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Brown Bear": {
    "name": "Brown Bear",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 22,
      "hitDice": "3d10 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 15,
      "int": 2,
      "wis": 13,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bear makes one Bite attack and one Claw attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Piercing damage."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bugbear Stalker": {
    "name": "Bugbear Stalker",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 3,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 65,
      "hitDice": "10d8 + 20"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 14,
      "con": 14,
      "int": 11,
      "wis": 12,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 4,
      "int": 0,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [
      {
        "name": "Abduct",
        "desc": "The bugbear needn't spend extra movement to move a creature it is grappling."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bugbear makes two Javelin or Morningstar attacks."
      },
      {
        "name": "Javelin",
        "desc": "m,r Roll: +5, reach 10 ft. or range 30/120 ft. {@h}13 (3d6) Piercing damage."
      },
      {
        "name": "Morningstar",
        "desc": "m Roll: +5 (with Advantage|XPHB if the target is Grappled by the bugbear), reach 10 ft. {@h}12 (2d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bugbear Warrior": {
    "name": "Bugbear Warrior",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 33,
      "hitDice": "6d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 13,
      "int": 8,
      "wis": 11,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [
      {
        "name": "Abduct",
        "desc": "The bugbear needn't spend extra movement to move a creature it is grappling."
      }
    ],
    "actions": [
      {
        "name": "Grab",
        "desc": "m Roll: +4, reach 10 ft. {@h}9 (2d6) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 12)."
      },
      {
        "name": "Light Hammer",
        "desc": "m,r Roll: +4 (with Advantage|XPHB if the target is Grappled by the bugbear), reach 10 ft. or range 20/60 ft. {@h}9 (3d4) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bulette": {
    "name": "Bulette",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 5,
    "alignment": "Unaligned",
    "armorClass": 17,
    "hitPoints": {
      "value": 94,
      "hitDice": "9d10 + 45"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 11,
      "con": 21,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bulette makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}17 (2d12) Piercing damage."
      },
      {
        "name": "Deadly Leap",
        "desc": "The bulette spends 5 feet of movement to jump to a space within 15 feet that contains one or more Large or smaller creatures. dex 15, each creature in the bulette's destination space. {@actSaveFail} 19 (3d12) Bludgeoning damage, and the target has the Prone condition. {@actSaveSuccess} Half damage, and the target is pushed 5 feet straight away from the bulette."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bulette Pup": {
    "name": "Bulette Pup",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 16,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 8,
      "con": 17,
      "int": 2,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}14 (2d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bullywug Bog Sage": {
    "name": "Bullywug Bog Sage",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 4,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 52,
      "hitDice": "8d8 + 16"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 16,
      "con": 14,
      "int": 10,
      "wis": 16,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 4,
      "int": 0,
      "wis": 5,
      "cha": 3
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Bullywug",
      "Common"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The bullywug can breathe air and water."
      },
      {
        "name": "Speak with Frogs and Toads",
        "desc": "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bullywug makes two Bog Staff attacks. It can replace any attack with a use of Spellcasting to cast Ray of Sickness."
      },
      {
        "name": "Bog Staff",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Bludgeoning damage plus 10 (3d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Bullywug Warrior": {
    "name": "Bullywug Warrior",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 14,
      "con": 13,
      "int": 7,
      "wis": 10,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Bullywug",
      "Common"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The bullywug can breathe air and water."
      },
      {
        "name": "Speak with Frogs and Toads",
        "desc": "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug."
      }
    ],
    "actions": [
      {
        "name": "Insectile Rapier",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Piercing damage plus 2 (1d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cambion": {
    "name": "Cambion",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 5,
    "alignment": "Neutral Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 105,
      "hitDice": "14d8 + 42"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 18,
      "con": 16,
      "int": 14,
      "wis": 12,
      "cha": 16
    },
    "savingThrows": {
      "str": 7,
      "dex": 0,
      "con": 6,
      "int": 5,
      "wis": 0,
      "cha": 6
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "cold",
      "fire",
      "lightning",
      "poison"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Infernal"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cambion makes two attacks, using Claw or Fire Ray in any combination."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +7, reach 5 ft. {@h}8 (1d8) Slashing damage plus 7 (2d6) Fire damage."
      },
      {
        "name": "Fire Ray",
        "desc": "r Roll: +7, range 120 ft. {@h}13 (3d6) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Camel": {
    "name": "Camel",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 17,
      "hitDice": "2d10 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 8,
      "con": 17,
      "int": 2,
      "wis": 11,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 5,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Carrion Crawler": {
    "name": "Carrion Crawler",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 51,
      "hitDice": "6d10 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 13,
      "con": 16,
      "int": 1,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The carrion crawler can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The carrion crawler uses Paralyzing Tentacles and makes one Bite attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (2d4) Piercing damage plus 3 (1d6) Poison damage."
      },
      {
        "name": "Paralyzing Tentacles",
        "desc": "con 12, one creature the carrion crawler can see within 10 feet. {@actSaveFail} The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. While Poisoned, the target has the Paralyzed condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cat": {
    "name": "Cat",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 2,
      "hitDice": "1d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 15,
      "con": 10,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Jumper",
        "desc": "The cat's jump distance is determined using its Dexterity rather than its Strength."
      }
    ],
    "actions": [
      {
        "name": "Scratch",
        "desc": "m Roll: +4, reach 5 ft. {@h}1 Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Centaur Trooper": {
    "name": "Centaur Trooper",
    "size": "Large",
    "type": "fey",
    "challengeRating": 2,
    "alignment": "Neutral Good",
    "armorClass": 16,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 14,
      "int": 9,
      "wis": 13,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Elvish",
      "Sylvan"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The centaur makes two attacks, using Pike or Longbow in any combination."
      },
      {
        "name": "Pike",
        "desc": "m Roll: +6, reach 10 ft. {@h}9 (1d10) Piercing damage."
      },
      {
        "name": "Longbow",
        "desc": "r Roll: +4, range 150/600 ft. {@h}6 (1d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Centaur Warden": {
    "name": "Centaur Warden",
    "size": "Large",
    "type": "fey",
    "challengeRating": 7,
    "alignment": "Neutral Good",
    "armorClass": 16,
    "hitPoints": {
      "value": 105,
      "hitDice": "14d10 + 28"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 14,
      "int": 9,
      "wis": 18,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 5,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Druidic",
      "Elvish",
      "Sylvan"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The centaur makes two attacks, using Forest Staff or Sun Ray in any combination."
      },
      {
        "name": "Forest Staff",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Bludgeoning damage plus 14 (4d6) Poison damage."
      },
      {
        "name": "Sun Ray",
        "desc": "r Roll: +7, range 90 ft. {@h}14 (3d6) Radiant damage, and the target has the Blinded condition until the start of the centaur's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Chain Devil": {
    "name": "Chain Devil",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 8,
    "alignment": "Lawful Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 85,
      "hitDice": "10d8 + 40"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 18,
      "int": 11,
      "wis": 12,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "bludgeoning",
      "cold",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Diabolical Restoration",
        "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "desc": "The devil has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The devil makes two Chain attacks and uses Conjure Infernal Chain."
      },
      {
        "name": "Chain",
        "desc": "m Roll: +7, reach 10 ft. {@h}11 (2d6) Slashing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 14) from one of two chains, and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Conjure Infernal Chain",
        "desc": "The devil conjures a fiery chain to bind a creature. dex 15, one creature the devil can see within 60 feet. {@actSaveFail} 9 (2d4) Fire damage, and the target has the Restrained condition until the end of the devil's next turn, at which point the chain disappears. If the target is Large or smaller, the devil moves the target up to 30 feet straight toward itself. {@actSaveSuccess} The chain disappears."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Chasme": {
    "name": "Chasme",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 6,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 78,
      "hitDice": "12d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 15,
      "con": 12,
      "int": 11,
      "wis": 14,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the chasme dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "desc": "The chasme has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Spider Climb",
        "desc": "The chasme can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Proboscis",
        "desc": "m Roll: +5, reach 5 ft. {@h}16 (4d6) Piercing damage plus 21 (6d6) Necrotic damage. If the target is a creature, its Hit maximum decreases by an amount equal to the Necrotic damage taken."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Chimera": {
    "name": "Chimera",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 6,
    "alignment": "Chaotic Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 114,
      "hitDice": "12d10 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 11,
      "con": 19,
      "int": 3,
      "wis": 14,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Draconic but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The chimera makes one Ram attack, one Bite attack, and one Claw attack. It can replace the Claw attack with a use of Fire Breath if available."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}11 (2d6) Piercing damage, or 18 (4d6) Piercing damage if the chimera had Advantage|XPHB on the attack roll."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +7, reach 5 ft. {@h}7 (1d6) Slashing damage."
      },
      {
        "name": "Ram",
        "desc": "m Roll: +7, reach 5 ft. {@h}10 (1d12) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 15, each creature in a 15-foot Cone. {@actSaveFail} 31 (7d8) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Chuul": {
    "name": "Chuul",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 76,
      "hitDice": "9d10 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 10,
      "con": 16,
      "int": 5,
      "wis": 11,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Deep Speech but can't speak"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The chuul can breathe air and water."
      },
      {
        "name": "Sense Magic",
        "desc": "The chuul senses magic within 120 feet of itself. This trait otherwise works like the Detect Magic spell but isn't itself magical."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The chuul makes two Pincer attacks and uses Paralyzing Tentacles."
      },
      {
        "name": "Pincer",
        "desc": "m Roll: +6, reach 10 ft. {@h}9 (1d10) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 14) from one of two pincers."
      },
      {
        "name": "Paralyzing Tentacles",
        "desc": "con 13, one creature Grappled by the chuul. {@actSaveFail} The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. While Poisoned, the target has the Paralyzed condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Clay Golem": {
    "name": "Clay Golem",
    "size": "Large",
    "type": "construct",
    "challengeRating": 9,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 123,
      "hitDice": "13d10 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 9,
      "con": 18,
      "int": 3,
      "wis": 8,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "acid",
      "poison",
      "psychic"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Acid Absorption",
        "desc": "Whenever the golem is subjected to Acid damage, it takes no damage and instead regains a number of Hit equal to the Acid damage dealt."
      },
      {
        "name": "Berserk",
        "desc": "Whenever the golem starts its turn Bloodied|XPHB, roll 1d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it continues to be berserk until it is destroyed or it is no longer Bloodied|XPHB."
      },
      {
        "name": "Immutable Form",
        "desc": "The golem can't shape-shift."
      },
      {
        "name": "Magic Resistance",
        "desc": "The golem has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The golem makes two Slam attacks, or it makes three Slam attacks if it used Hasten this turn."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +9, reach 5 ft. {@h}10 (1d10) Bludgeoning damage plus 6 (1d12) Acid damage, and the target's Hit maximum decreases by an amount equal to the Acid damage taken."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cloaker": {
    "name": "Cloaker",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 8,
    "alignment": "Chaotic Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 91,
      "hitDice": "14d10 + 14"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 15,
      "con": 12,
      "int": 13,
      "wis": 14,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Deep Speech",
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Light Sensitivity",
        "desc": "While in Bright, the cloaker has Disadvantage|XPHB on attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cloaker makes one Attach attack and two Tail attacks."
      },
      {
        "name": "Attach",
        "desc": "m Roll: +6, reach 5 ft. {@h}13 (3d6) Piercing damage. If the target is a Large or smaller creature, the cloaker attaches to it. While the cloaker is attached, the target has the Blinded condition, and the cloaker can't make Attach attacks against other targets. In addition, the cloaker halves the damage it takes (round down), and the target takes the same amount of damage. The cloaker can detach itself by spending 5 feet of movement. The target or a creature within 5 feet of it can take an action to try to detach the cloaker, doing so by succeeding on a 14 Strength (Athletics|XPHB) check."
      },
      {
        "name": "Tail",
        "desc": "m Roll: +6, reach 10 ft. {@h}8 (1d10) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cloud Giant": {
    "name": "Cloud Giant",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 9,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 200,
      "hitDice": "16d12 + 96"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 27,
      "dex": 10,
      "con": 22,
      "int": 12,
      "wis": 16,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 10,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The giant makes two attacks, using Thunderous Mace or Thundercloud in any combination. It can replace one attack with a use of Spellcasting to cast Fog Cloud."
      },
      {
        "name": "Thunderous Mace",
        "desc": "m Roll: +12, reach 10 ft. {@h}21 (3d8) Bludgeoning damage plus 7 (2d6) Thunder damage."
      },
      {
        "name": "Thundercloud",
        "desc": "r Roll: +12, range 240 ft. {@h}18 (3d6) Thunder damage, and the target has the Incapacitated condition until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cockatrice": {
    "name": "Cockatrice",
    "size": "Small",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d6 + 5"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 12,
      "con": 12,
      "int": 2,
      "wis": 13,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "petrified"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Petrifying Bite",
        "desc": "m Roll: +3, reach 5 ft. {@h}3 (1d4) Piercing damage. If the target is a creature, it is subjected to the following effect. con 11. 1 The target has the Restrained condition. The target repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. 2 The target has the Petrified condition, instead of the Restrained condition, for 24 hours."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cockatrice Regent": {
    "name": "Cockatrice Regent",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 8,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 136,
      "hitDice": "16d10 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 14,
      "con": 16,
      "int": 3,
      "wis": 16,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [
      "petrified"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The cockatrice doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cockatrice makes one Petrifying Bite attack and two Talons attacks."
      },
      {
        "name": "Petrifying Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Piercing damage. If the target is a creature, it is subjected to the following effect. con 14. 1 The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. 2 The target has the Petrified condition instead of the Restrained condition."
      },
      {
        "name": "Talons",
        "desc": "m Roll: +7, reach 5 ft. {@h}18 (4d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Colossus": {
    "name": "Colossus",
    "size": "Gargantuan",
    "type": "construct",
    "challengeRating": 25,
    "alignment": "Unaligned",
    "armorClass": 23,
    "hitPoints": {
      "value": 553,
      "hitDice": "27d20 + 270"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 30,
      "dex": 11,
      "con": 30,
      "int": 3,
      "wis": 11,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 0,
      "int": 0,
      "wis": 8,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
      "stunned",
      "unconscious"
    ],
    "damageImmunities": [
      "poison",
      "psychic"
    ],
    "damageResistances": [
      "necrotic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Celestial and Common but can't speak"
    ],
    "traits": [
      {
        "name": "Immutable Form",
        "desc": "The colossus can't shape-shift."
      },
      {
        "name": "Legendary Resistance (4/Day)",
        "desc": "If the colossus fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The colossus has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Siege Monster",
        "desc": "The colossus deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The colossus makes three attacks, using Slam or Radiant Ray in any combination."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +18, reach 20 ft. {@h}32 (4d10) Bludgeoning damage, and the colossus pushes the target up to 20 feet straight away from itself."
      },
      {
        "name": "Radiant Ray",
        "desc": "r Roll: +18, range 300 ft. {@h}22 (4d10) Radiant damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Divine Beam 5",
        "desc": "dex 26, each creature in a 300-foot-long, 10-foot-wide Line. {@actSaveFail} 65 (10d12) Radiant damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} A creature reduced to 0 Hit by this beam disintegrates into dust, leaving behind any magic items it was wearing or carrying."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Commoner": {
    "name": "Commoner",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 0,
    "alignment": "Neutral",
    "armorClass": 10,
    "hitPoints": {
      "value": 4,
      "hitDice": "1d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 10,
      "con": 10,
      "int": 10,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [
      {
        "name": "Training",
        "desc": "The commoner has proficiency in one skill of the DM's choice and has Advantage|XPHB whenever it makes an ability check using that skill."
      }
    ],
    "actions": [
      {
        "name": "Club",
        "desc": "m Roll: +2, reach 5 ft. {@h}2 (1d4) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Constrictor Snake": {
    "name": "Constrictor Snake",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 13,
      "hitDice": "2d10 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 12,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Piercing damage."
      },
      {
        "name": "Constrict",
        "desc": "str 12, one Medium or smaller creature the snake can see within 5 feet. {@actSaveFail} 7 (3d4) Bludgeoning damage, and the target has the Grappled condition (escape 12)."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Copper Dragon Wyrmling": {
    "name": "Copper Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 1,
    "alignment": "Chaotic Good",
    "armorClass": 16,
    "hitPoints": {
      "value": 22,
      "hitDice": "4d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 12,
      "con": 13,
      "int": 14,
      "wis": 11,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (1d10) Slashing damage."
      },
      {
        "name": "Acid Breath 5",
        "desc": "dex 11, each creature in a 20-foot-long, 5-foot-wide Line. {@actSaveFail} 18 (4d8) Acid damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Slowing Breath",
        "desc": "con 11, each creature in a 15-foot Cone. {@actSaveFail} The target can't take Reactions; its Speed|XPHB is halved; and it can take either an action or a Bonus on its turn, not both. This effect lasts until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Couatl": {
    "name": "Couatl",
    "size": "Medium",
    "type": "celestial",
    "challengeRating": 4,
    "alignment": "Lawful Good",
    "armorClass": 19,
    "hitPoints": {
      "value": 60,
      "hitDice": "8d8 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 20,
      "con": 17,
      "int": 18,
      "wis": 20,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 5,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "psychic",
      "radiant"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Shielded Mind",
        "desc": "The couatl's thoughts can't be read by any means, and other creatures can communicate with it telepathically only if it allows them."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}11 (1d12) Piercing damage, and the target has the Poisoned condition until the end of the couatl's next turn."
      },
      {
        "name": "Constrict",
        "desc": "str 15, one Medium or smaller creature the couatl can see within 5 feet. {@actSaveFail} 8 (1d6) Bludgeoning damage. The target has the Grappled condition (escape 13), and it has the Restrained condition until the grapple ends."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Crab": {
    "name": "Crab",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 3,
      "hitDice": "1d4 + 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 11,
      "con": 12,
      "int": 1,
      "wis": 8,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The crab can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +2, reach 5 ft. {@h}1 Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Crawling Claw": {
    "name": "Crawling Claw",
    "size": "Tiny",
    "type": "undead",
    "challengeRating": 0,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 2,
      "hitDice": "1d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 14,
      "con": 11,
      "int": 5,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "incapacitated",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +3, reach 5 ft. {@h}2 Necrotic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Crocodile": {
    "name": "Crocodile",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 13,
      "hitDice": "2d10 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 10,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 3,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Hold Breath",
        "desc": "The crocodile can hold its breath for 1 hour."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 12). While Grappled, the target has the Restrained condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cultist": {
    "name": "Cultist",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 9,
      "hitDice": "2d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 12,
      "con": 10,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Ritual Sickle",
        "desc": "m Roll: +3, reach 5 ft. {@h}3 (1d4) Slashing damage plus 1 Necrotic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cultist Fanatic": {
    "name": "Cultist Fanatic",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 44,
      "hitDice": "8d8 + 8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 14,
      "con": 12,
      "int": 10,
      "wis": 14,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Pact Blade",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Slashing damage plus 7 (2d6) Necrotic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cultist Hierophant": {
    "name": "Cultist Hierophant",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 10,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 144,
      "hitDice": "17d8 + 68"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 18,
      "con": 18,
      "int": 13,
      "wis": 16,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 9
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial",
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cultist makes three attacks, using Pact Blade or Radiant Ray in any combination."
      },
      {
        "name": "Pact Blade",
        "desc": "m Roll: +9, reach 5 ft. {@h}12 (2d6) Slashing damage plus 18 (4d8) Radiant damage."
      },
      {
        "name": "Radiant Ray",
        "desc": "r Roll: +9, range 120 ft. {@h}31 (4d12) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cyclops Oracle": {
    "name": "Cyclops Oracle",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 10,
    "alignment": "Chaotic Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 207,
      "hitDice": "18d12 + 90"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 11,
      "con": 20,
      "int": 16,
      "wis": 18,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 9,
      "int": 0,
      "wis": 8,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cyclops makes three attacks, using Radiant Strike or Flash of Light in any combination."
      },
      {
        "name": "Radiant Strike",
        "desc": "m Roll: +10, reach 10 ft. {@h}22 (3d10) Radiant damage."
      },
      {
        "name": "Flash of Light",
        "desc": "r Roll: +10, range 120 ft. {@h}17 (2d10) Radiant damage, and the target has Disadvantage|XPHB on attack rolls until the end of the cyclops's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Cyclops Sentry": {
    "name": "Cyclops Sentry",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 6,
    "alignment": "Chaotic Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 138,
      "hitDice": "12d12 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 11,
      "con": 20,
      "int": 8,
      "wis": 6,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cyclops makes two attacks, using Stone Club or Rock in any combination."
      },
      {
        "name": "Stone Club",
        "desc": "m Roll: +9, reach 10 ft. {@h}16 (3d6) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      },
      {
        "name": "Rock",
        "desc": "r Roll: +9, range 30/120 ft. {@h}22 (3d10) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Dao": {
    "name": "Dao",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 11,
    "alignment": "Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 200,
      "hitDice": "16d10 + 112"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 12,
      "con": 24,
      "int": 12,
      "wis": 13,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [
      "petrified"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Terran)"
    ],
    "traits": [
      {
        "name": "Earth Glide",
        "desc": "The dao can burrow through nonmagical, unworked earth and stone. While doing so, the dao doesn't disturb the material it moves through."
      },
      {
        "name": "Elemental Restoration",
        "desc": "If the dao dies outside the Elemental Plane of Earth, its body dissolves into dirt, and it gains a new body in 1d4 days, reviving with all its Hit somewhere on the Plane of Earth."
      },
      {
        "name": "Magic Resistance",
        "desc": "The dao has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Wishes",
        "desc": "The dao has a 30 percent chance of knowing the Wish spell. If the dao knows it, the dao can cast it only on behalf of a non-genie creature who communicates a wish in a way the dao can understand. If the dao casts the spell for the creature, the dao suffers none of the spell's stress. Once the dao has cast it three times, the dao can't do so again for 365 days."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dao makes three Earthen Maul attacks or two Earth Burst attacks."
      },
      {
        "name": "Earthen Maul",
        "desc": "m Roll: +10, reach 5 ft. {@h}20 (4d6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Earth Burst",
        "desc": "r Roll: +10, range 120 ft. {@h}15 (2d8) Bludgeoning damage. {@hom}Earth explodes from the target's space, creating the following effect. dex 16, each creature in a 10-foot Emanation originating from and including the target. {@actSaveFail} 10 (3d6) Thunder damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Darkmantle": {
    "name": "Darkmantle",
    "size": "Small",
    "type": "aberration",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d6 + 5"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 12,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Crush",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Bludgeoning damage, and the darkmantle attaches to the target. If the target is a Medium or smaller creature and the darkmantle had Advantage|XPHB on the attack roll, it covers the target, which has the Blinded condition and is suffocating while the darkmantle is attached in this way. While attached to a target, the darkmantle can attack only the target but has Advantage|XPHB on its attack rolls. Its Speed|XPHB becomes 0, it can't benefit from any bonus to its Speed|XPHB, and it moves with the target. A creature can take an action to try to detach the darkmantle from itself, doing so with a successful 13 Strength (Athletics|XPHB) check. On its turn, the darkmantle can detach itself by using 5 feet of movement."
      },
      {
        "name": "Darkness Aura (1/Day)",
        "desc": "Magical Darkness|XPHB fills a 15-foot Emanation originating from the darkmantle. This effect lasts while the darkmantle maintains Concentration on it, up to 10 minutes. Darkvision can't penetrate this area, and no light can illuminate it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Death Cultist": {
    "name": "Death Cultist",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 8,
    "alignment": "Neutral Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 127,
      "hitDice": "15d8 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 12,
      "con": 18,
      "int": 12,
      "wis": 16,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cultist makes three attacks, using Dread Scythe or Deathly Ray in any combination."
      },
      {
        "name": "Dread Scythe",
        "desc": "m Roll: +7, reach 10 ft. {@h}9 (1d10) Slashing damage plus 11 (2d10) Necrotic damage, and the target can't regain Hit until the end of its next turn."
      },
      {
        "name": "Deathly Ray",
        "desc": "r Roll: +6, range 120 ft. {@h}22 (4d10) Necrotic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Death Dog": {
    "name": "Death Dog",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 39,
      "hitDice": "6d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 14,
      "int": 3,
      "wis": 13,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "stunned",
      "unconscious"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The death dog makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Piercing damage. If the target is a creature, it is subjected to the following effect. con 12. 1 The target has the Poisoned condition. While Poisoned, the target's Hit maximum doesn't return to normal when finishing a Long, and it repeats the save every 24 hours that elapse, ending the effect on itself on a success. Subsequent Failures: The Poisoned target's Hit maximum decreases by 5 (1d10)."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Death Knight": {
    "name": "Death Knight",
    "size": "Small",
    "type": "undead",
    "challengeRating": 17,
    "alignment": "Chaotic Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 199,
      "hitDice": "21d8 + 105"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 11,
      "con": 20,
      "int": 12,
      "wis": 16,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day)",
        "desc": "If the death knight fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The death knight has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Marshal Undead",
        "desc": "Undead creatures of the death knight's choice (excluding itself) in a 60-foot Emanation originating from it have Advantage|XPHB on attack rolls and saving throws. It can't use this trait if it has the Incapacitated condition."
      },
      {
        "name": "Undead Restoration",
        "desc": "If the death knight is destroyed before it atones for its evil, it gains a new body in 1d10 days, reviving with all its Hit. The new body appears in a location significant to the death knight."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The death knight makes three Dread Blade attacks."
      },
      {
        "name": "Dread Blade",
        "desc": "m Roll: +11, reach 5 ft. {@h}12 (2d6) Slashing damage plus 13 (3d8) Necrotic damage."
      },
      {
        "name": "Hellfire Orb 5",
        "desc": "dex 18, each creature in a 20-foot-radius Sphere centered on a point the death knight can see within 120 feet. {@actSaveFail} 35 (10d6) Fire damage plus 35 (10d6) Necrotic damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Death Knight Aspirant": {
    "name": "Death Knight Aspirant",
    "size": "Small",
    "type": "undead",
    "challengeRating": 11,
    "alignment": "Chaotic Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 178,
      "hitDice": "21d8 + 84"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 10,
      "con": 18,
      "int": 10,
      "wis": 12,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The aspirant has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Marshal Undead",
        "desc": "Undead creatures of the aspirant's choice (excluding itself) in a 60-foot Emanation originating from it have Advantage|XPHB on attack rolls and saving throws. It can't use this trait if it has the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The aspirant makes three Dread Blade attacks."
      },
      {
        "name": "Dread Blade",
        "desc": "m Roll: +9, reach 5 ft. {@h}14 (2d8) Slashing damage plus 10 (3d6) Necrotic damage."
      },
      {
        "name": "Hellfire Orb 5",
        "desc": "dex 15, each creature in a 20-foot-radius Sphere centered on a point the aspirant can see within 120 feet of itself. {@actSaveFail} 21 (6d6) Fire damage plus 21 (6d6) Necrotic damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Death Slaad": {
    "name": "Death Slaad",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 10,
    "alignment": "Chaotic Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 178,
      "hitDice": "21d8 + 84"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 15,
      "con": 19,
      "int": 15,
      "wis": 10,
      "cha": 19
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Slaad; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The slaad has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Regeneration",
        "desc": "The slaad regains 10 Hit at the start of each of its turns if it has at least 1 Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The slaad makes two Chaos Blade attacks."
      },
      {
        "name": "Chaos Blade",
        "desc": "m Roll: +9, reach 10 ft. {@h}11 (1d12) Slashing damage plus 10 (3d6) Necrotic damage. Until the start of the slaad's next turn, the target has a condition determined by rolling 1d4: on a 1, Charmed; on a 2, Frightened; on a 3, Poisoned; or on a 4, Incapacitated."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Death Tyrant": {
    "name": "Death Tyrant",
    "size": "Large",
    "type": "undead",
    "challengeRating": 14,
    "alignment": "Lawful Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 195,
      "hitDice": "26d10 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 14,
      "int": 19,
      "wis": 15,
      "cha": 19
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Deep Speech",
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the death tyrant fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The death tyrant uses Eye Rays three times."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +9, reach 5 feet. {@h}13 (2d8) Piercing damage."
      },
      {
        "name": "Eye Rays",
        "desc": "The death tyrant randomly shoots one of the following magical rays at a target it can see within 120 feet of itself (roll 1d10; reroll if the death tyrant has already used that ray during this turn): [object Object]"
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Deer": {
    "name": "Deer",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 4,
      "hitDice": "1d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 16,
      "con": 11,
      "int": 2,
      "wis": 14,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Agile",
        "desc": "The deer doesn't provoke an Opportunity Attack when it moves out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "desc": "m Roll: +2, reach 5 ft. {@h}2 (1d4) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Demilich": {
    "name": "Demilich",
    "size": "Tiny",
    "type": "undead",
    "challengeRating": 18,
    "alignment": "Neutral Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 180,
      "hitDice": "72d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 20,
      "con": 10,
      "int": 20,
      "wis": 17,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 6,
      "int": 11,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "stunned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison",
      "psychic"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the demilich fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Undead Restoration",
        "desc": "If the demilich is destroyed, it reforms and regains all its Hit in 1d10 days unless a Wish spell is cast on its remains."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The demilich makes three Necrotic Burst attacks."
      },
      {
        "name": "Necrotic Burst",
        "desc": "m,r Roll: +11, reach 5 ft. or range 120 ft. {@h}24 (7d6) Necrotic damage."
      },
      {
        "name": "Howl 5",
        "desc": "con 19, each creature in a 30-foot Emanation originating from the demilich. {@actSaveFail} 70 (20d6) Psychic damage. {@actSaveSuccessOrFail} The target has the Frightened condition until the start of the demilich's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Deva": {
    "name": "Deva",
    "size": "Medium",
    "type": "celestial",
    "challengeRating": 10,
    "alignment": "Lawful Good",
    "armorClass": 17,
    "hitPoints": {
      "value": 229,
      "hitDice": "27d8 + 108"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 18,
      "con": 18,
      "int": 17,
      "wis": 20,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 9,
      "cha": 9
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Exalted Restoration",
        "desc": "If the deva dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit somewhere in Mount Celestia."
      },
      {
        "name": "Magic Resistance",
        "desc": "The deva has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The deva makes two Holy Mace attacks."
      },
      {
        "name": "Holy Mace",
        "desc": "m Roll: +8, reach 5 ft. {@h}7 (1d6) Bludgeoning damage plus 18 (4d8) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Dire Wolf": {
    "name": "Dire Wolf",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 22,
      "hitDice": "3d10 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 15,
      "con": 15,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The wolf has Advantage|XPHB on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (1d10) Piercing damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Dire Worg": {
    "name": "Dire Worg",
    "size": "Huge",
    "type": "fey",
    "challengeRating": 10,
    "alignment": "Neutral Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 147,
      "hitDice": "14d12 + 56"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 14,
      "con": 18,
      "int": 7,
      "wis": 16,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Goblin",
      "Sylvan",
      "Worg"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The worg has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The worg makes three Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +10, reach 5 ft. {@h}15 (2d8) Piercing damage plus 7 (2d6) Poison damage, and the target has the Poisoned condition until the start of the worg's next turn. While Poisoned, the target can't regain Hit."
      },
      {
        "name": "Dreadful Howl 5",
        "desc": "wis 16, each creature within 30 feet that isn't a worg. {@actSaveFail} 36 (8d8) Psychic damage, and the target has the Frightened condition until the start of the worg's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Displacer Beast": {
    "name": "Displacer Beast",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 76,
      "hitDice": "9d10 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 6,
      "wis": 12,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Sylvan but can't speak"
    ],
    "traits": [
      {
        "name": "Avoidance",
        "desc": "If the displacer beast is subjected to an effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the save and half damage if it fails. It can't use this trait if it has the Incapacitated condition."
      },
      {
        "name": "Displacement",
        "desc": "Attack rolls against the displacer beast have Disadvantage|XPHB, since it projects an illusion that makes it appear to be near its actual location. This trait is suppressed while the displacer beast has the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The displacer beast makes one Rend attack and one Tentacle attack."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +6, reach 5 feet. {@h}9 (1d10) Slashing damage. If target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Tentacle",
        "desc": "m Roll: +6, reach 10 feet. {@h}11 (2d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Djinni": {
    "name": "Djinni",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 11,
    "alignment": "Chaotic Good",
    "armorClass": 17,
    "hitPoints": {
      "value": 218,
      "hitDice": "19d10 + 114"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 15,
      "con": 22,
      "int": 15,
      "wis": 16,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning",
      "thunder"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Auran)"
    ],
    "traits": [
      {
        "name": "Elemental Restoration",
        "desc": "If the djinni dies outside the Elemental Plane of Air, its body dissolves into mist, and it gains a new body in 1d4 days, reviving with all its Hit somewhere on the Plane of Air."
      },
      {
        "name": "Magic Resistance",
        "desc": "The djinni has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Wishes",
        "desc": "The djinni has a 30 percent chance of knowing the Wish spell. If the djinni knows it, the djinni can cast it only on behalf of a non-genie creature who communicates a wish in a way the djinni can understand. If the djinni casts the spell for the creature, the djinni suffers none of the spell's stress. Once the djinni has cast it three times, the djinni can't do so again for 365 days."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The djinni makes three attacks, using Storm Blade or Storm Bolt in any combination."
      },
      {
        "name": "Storm Blade",
        "desc": "m Roll: +9, reach 5 feet. {@h}12 (2d6) Slashing damage plus 7 (2d6) Lightning damage."
      },
      {
        "name": "Storm Bolt",
        "desc": "r Roll: +9, range 120 feet. {@h}13 (3d8) Thunder damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Create Whirlwind",
        "desc": "The djinni conjures a whirlwind at a point it can see within 120 feet. The whirlwind fills a 20-foot-radius, 60-foot-high Cylinder centered on that point. The whirlwind lasts until the djinni's Concentration on it ends. The djinni can move the whirlwind up to 20 feet at the start of each of its turns. Whenever the whirlwind enters a creature's space or a creature enters the whirlwind, that creature is subjected to the following effect. str 17 (a creature makes this save only once per turn, and the djinni is unaffected). {@actSaveFail} While in the whirlwind, the target has the Restrained condition and moves with the whirlwind. At the start of each of its turns, the Restrained target takes 21 (6d6) Thunder damage. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Doppelganger": {
    "name": "Doppelganger",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 52,
      "hitDice": "8d8 + 16"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 18,
      "con": 14,
      "int": 11,
      "wis": 12,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus three other languages"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The doppelganger makes two Slam attacks and uses Unsettling Visage if available."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +6 (with Advantage|XPHB during the first round of each combat), reach 5 ft. {@h}11 (2d6) Bludgeoning damage."
      },
      {
        "name": "Unsettling Visage {@recharge}",
        "desc": "wis 12, each creature in a 15-foot Emanation originating from the doppelganger that can see the doppelganger. {@actSaveFail} The target has the Frightened condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Dracolich": {
    "name": "Dracolich",
    "size": "Huge",
    "type": "undead",
    "challengeRating": 17,
    "alignment": "Lawful Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 225,
      "hitDice": "18d12 + 108"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 25,
      "dex": 10,
      "con": 23,
      "int": 19,
      "wis": 15,
      "cha": 21
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 8,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dracolich fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Life Suppression",
        "desc": "Creatures within 60 feet of the dracolich can't regain Hit."
      },
      {
        "name": "Magic Resistance",
        "desc": "The dracolich has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Soul Gem",
        "desc": "The dracolich has a magical gem. If the dracolich is destroyed while the gem is on the same plane of existence as it, the dracolich gains a new body in 1d20 days, regaining all its Hit and appearing within 5 feet of the gem. The gem is a Tiny object that has AC 20; HP 50; and Immunity|XPHB to Necrotic, Poison, and Psychic damage. The gem regains all its Hit at the end of every turn, but it turns to dust if reduced to 0 Hit. If the gem is destroyed, the dracolich can create a new one by completing an 8-hour ritual using a gem worth 1,000+ GP and by expending 5,000 GP, which the ritual consumes."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dracolich makes three Rend attacks. It can replace one attack with a use of Spellcasting to cast Ray of Sickness (level 2 version)."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +13, reach 10 ft. {@h}18 (2d10) Slashing damage plus 4 (1d8) Necrotic damage."
      },
      {
        "name": "Necrotic Breath 5",
        "desc": "con 20, each creature in a 60-foot Cone. {@actSaveFail} 52 (8d12) Necrotic damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Draft Horse": {
    "name": "Draft Horse",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 15,
      "hitDice": "2d10 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 10,
      "con": 15,
      "int": 2,
      "wis": 11,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +6, reach 5 ft. {@h}6 (1d4) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Dragon Turtle": {
    "name": "Dragon Turtle",
    "size": "Gargantuan",
    "type": "dragon",
    "challengeRating": 17,
    "alignment": "Neutral",
    "armorClass": 20,
    "hitPoints": {
      "value": 356,
      "hitDice": "23d20 + 115"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 25,
      "dex": 10,
      "con": 20,
      "int": 10,
      "wis": 12,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 11,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "fire"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic",
      "Primordial (Aquan)"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Bite attacks. It can replace one attack with a Tail attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +13, reach 15 ft. {@h}23 (3d10) Piercing damage plus 7 (2d6) Fire damage. Being underwater doesn't grant Resistance|XPHB to this Fire damage."
      },
      {
        "name": "Tail",
        "desc": "m Roll: +13, reach 15 ft. {@h}18 (2d10) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      },
      {
        "name": "Steam Breath 5",
        "desc": "con 19, each creature in a 60-foot Cone. {@actSaveFail} 56 (16d6) Fire damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} Being underwater doesn't grant Resistance|XPHB to this Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Dretch": {
    "name": "Dretch",
    "size": "Small",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 18,
      "hitDice": "4d6 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 11,
      "con": 12,
      "int": 5,
      "wis": 8,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 60 ft. (works only with creatures that understand Abyssal)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +3, reach 5 ft. {@h}4 (1d6) Slashing damage."
      },
      {
        "name": "Fetid Cloud (1/Day)",
        "desc": "con 11, each creature in a 10-foot Emanation originating from the dretch. {@actSaveFail} The target has the Poisoned condition until the end of its next turn. While Poisoned, the creature can take either an action or a Bonus on its turn, not both, and it can't take Reactions."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Drider": {
    "name": "Drider",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 6,
    "alignment": "Chaotic Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 123,
      "hitDice": "13d10 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 19,
      "con": 18,
      "int": 13,
      "wis": 16,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Elvish",
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The drider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the drider has Disadvantage|XPHB on ability checks and attack rolls."
      },
      {
        "name": "Web Walker",
        "desc": "The drider ignores movement restrictions caused by webs, and the drider knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The drider makes three attacks, using Foreleg or Poison Burst in any combination."
      },
      {
        "name": "Foreleg",
        "desc": "m Roll: +7, reach 10 ft. {@h}13 (2d8) Piercing damage."
      },
      {
        "name": "Poison Burst",
        "desc": "r Roll: +6, range 120 ft. {@h}13 (3d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Druid": {
    "name": "Druid",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 44,
      "hitDice": "8d8 + 8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 12,
      "con": 13,
      "int": 12,
      "wis": 16,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Druidic",
      "Sylvan"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The druid makes two attacks, using Vine Staff or Verdant Wisp in any combination."
      },
      {
        "name": "Vine Staff",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Bludgeoning damage plus 2 (1d4) Poison damage."
      },
      {
        "name": "Verdant Wisp",
        "desc": "r Roll: +5, range 90 ft. {@h}10 (3d6) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Dryad": {
    "name": "Dryad",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 12,
      "con": 11,
      "int": 14,
      "wis": 15,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Elvish",
      "Sylvan"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The dryad has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Speak with Beasts and Plants",
        "desc": "The dryad can communicate with Beasts and Plants as if they shared a language."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dryad makes one Vine Lash or Thorn Burst attack, and it can use Spellcasting to cast Charm Monster."
      },
      {
        "name": "Vine Lash",
        "desc": "m Roll: +6, reach 10 ft. {@h}8 (1d8) Slashing damage."
      },
      {
        "name": "Thorn Burst",
        "desc": "r Roll: +6, range 60 ft. {@h}7 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Dust Mephit": {
    "name": "Dust Mephit",
    "size": "Small",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 17,
      "hitDice": "5d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 5,
      "dex": 14,
      "con": 10,
      "int": 9,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Auran, Terran)"
    ],
    "traits": [
      {
        "name": "Death Burst",
        "desc": "The mephit explodes when it dies. dex 10, each creature in a 5-foot Emanation originating from the mephit. {@actSaveFail} 5 (2d4) Bludgeoning damage. {@actSaveSuccess} Half damage."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Slashing damage."
      },
      {
        "name": "Blinding Breath {@recharge}",
        "desc": "dex 10, each creature in a 15-foot Cone. {@actSaveFail} The target has the Blinded condition until the end of the mephit's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Eagle": {
    "name": "Eagle",
    "size": "Small",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 4,
      "hitDice": "1d6 + 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 15,
      "con": 12,
      "int": 2,
      "wis": 14,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Talons",
        "desc": "m Roll: +4, reach 5 feet. {@h}4 (1d4) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Earth Elemental": {
    "name": "Earth Elemental",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 147,
      "hitDice": "14d10 + 70"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 8,
      "con": 20,
      "int": 5,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "paralyzed",
      "petrified",
      "poisoned",
      "unconscious"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "thunder"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Terran)"
    ],
    "traits": [
      {
        "name": "Earth Glide",
        "desc": "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
      },
      {
        "name": "Siege Monster",
        "desc": "The elemental deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The elemental makes two attacks, using Slam or Rock Launch in any combination."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +8, reach 10 ft. {@h}14 (2d8) Bludgeoning damage."
      },
      {
        "name": "Rock Launch",
        "desc": "r Roll: +8, range 60 ft. {@h}8 (1d6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Efreeti": {
    "name": "Efreeti",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 11,
    "alignment": "Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 212,
      "hitDice": "17d10 + 119"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 12,
      "con": 24,
      "int": 16,
      "wis": 15,
      "cha": 19
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 6,
      "cha": 8
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Ignan)"
    ],
    "traits": [
      {
        "name": "Elemental Restoration",
        "desc": "If the efreeti dies outside the Elemental Plane of Fire, its body dissolves into ash, and it gains a new body in 1d4 days, reviving with all its Hit somewhere on the Plane of Fire."
      },
      {
        "name": "Magic Resistance",
        "desc": "The efreeti has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Wishes",
        "desc": "The efreeti has a 30 percent chance of knowing the Wish spell. If the efreeti knows it, the efreeti can cast it only on behalf of a non-genie creature who communicates a wish in a way the efreeti can understand. If the efreeti casts the spell for the creature, the efreeti suffers none of the spell's stress. Once the efreeti has cast it three times, the efreeti can't do so again for 365 days."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The efreeti makes three attacks, using Heated Blade or Hurl Flame in any combination."
      },
      {
        "name": "Heated Blade",
        "desc": "m Roll: +10, reach 5 ft. {@h}13 (2d6) Slashing damage plus 13 (2d12) Fire damage."
      },
      {
        "name": "Hurl Flame",
        "desc": "r Roll: +8, range 120 ft. {@h}24 (7d6) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Elemental Cataclysm": {
    "name": "Elemental Cataclysm",
    "size": "Gargantuan",
    "type": "elemental",
    "challengeRating": 22,
    "alignment": "Chaotic Neutral",
    "armorClass": 20,
    "hitPoints": {
      "value": 370,
      "hitDice": "20d20 + 160"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 26,
      "dex": 19,
      "con": 27,
      "int": 9,
      "wis": 14,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 11,
      "con": 15,
      "int": 0,
      "wis": 9,
      "cha": 6
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "stunned",
      "unconscious"
    ],
    "damageImmunities": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "poison",
      "thunder"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial"
    ],
    "traits": [
      {
        "name": "Earth Glide",
        "desc": "The cataclysm can burrow through nonmagical, unworked earth and stone. While doing so, the cataclysm doesn't disturb the material it moves through."
      },
      {
        "name": "Legendary Resistance (4/Day)",
        "desc": "If the cataclysm fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Siege Monster",
        "desc": "The cataclysm deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cataclysm makes two Elemental Burst attacks."
      },
      {
        "name": "Elemental Burst",
        "desc": "m,r Roll: +15, reach 30 ft. or range 150 ft. {@h}25 (5d6) damage of a type chosen by the cataclysm: Acid, Cold, Fire, Lightning, or Thunder."
      },
      {
        "name": "Cataclysmic Event 4",
        "desc": "The cataclysm creates one of the following effects at random (roll 1d4): [object Object]"
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Elemental Cultist": {
    "name": "Elemental Cultist",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 8,
    "alignment": "Chaotic Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 135,
      "hitDice": "18d8 + 54"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 12,
      "con": 16,
      "int": 14,
      "wis": 18,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 6,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Primordial"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cultist makes three attacks, using Elemental Flail or Elemental Claw in any combination."
      },
      {
        "name": "Elemental Flail",
        "desc": "m Roll: +7, reach 5 ft. {@h}25 (6d6) damage of a type chosen by the cultist: Acid, Cold, Fire, Lightning, or Thunder."
      },
      {
        "name": "Elemental Claw",
        "desc": "r Roll: +7, range 120 ft. {@h}22 (4d10) damage of a type chosen by the cultist: Acid, Cold, Fire, Lightning, or Thunder. If the target is a Medium or smaller creature, the cultist moves the target up to 10 feet straight toward or away from itself."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Elephant": {
    "name": "Elephant",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 4,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 76,
      "hitDice": "8d12 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 9,
      "con": 17,
      "int": 3,
      "wis": 11,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The elephant makes two Gore attacks."
      },
      {
        "name": "Gore",
        "desc": "m Roll: +8, reach 5 ft. {@h}15 (2d8) Piercing damage. If the target is a Huge or smaller creature and the elephant moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Elk": {
    "name": "Elk",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 10,
      "con": 11,
      "int": 2,
      "wis": 10,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Ram",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Bludgeoning damage. If the target is a Large or smaller creature and the elk moved 20+ feet straight toward it immediately before the hit, the target takes an extra 3 (1d6) Bludgeoning damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Empyrean": {
    "name": "Empyrean",
    "size": "Huge",
    "type": "celestial",
    "challengeRating": 23,
    "alignment": "Neutral",
    "armorClass": 22,
    "hitPoints": {
      "value": 346,
      "hitDice": "21d12 + 210"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 30,
      "dex": 21,
      "con": 30,
      "int": 21,
      "wis": 22,
      "cha": 27
    },
    "savingThrows": {
      "str": 17,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 13,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "necrotic",
      "radiant"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (4/Day)",
        "desc": "If the empyrean fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The empyrean has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The empyrean makes two attacks, using Sacred Weapon or Divine Ray in any combination."
      },
      {
        "name": "Sacred Weapon",
        "desc": "m Roll: +17, reach 10 ft. {@h}31 (6d6) Force damage, and the target has the Stunned condition until the start of the empyrean's next turn. The target can choose not to be Stunned, in which case it takes an extra 21 Force damage that bypasses Resistance|XPHB or Immunity|XPHB."
      },
      {
        "name": "Divine Ray",
        "desc": "r Roll: +15, range 600 ft. {@h}35 (6d8) Necrotic or Radiant damage (empyrean's choice)."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Empyrean Iota": {
    "name": "Empyrean Iota",
    "size": "Medium",
    "type": "celestial",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 14,
      "con": 10,
      "int": 15,
      "wis": 16,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "prone"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all"
    ],
    "traits": [
      {
        "name": "Incorporeal Movement",
        "desc": "The empyrean can move through other creatures and objects as if they were Difficult. It takes 5 (1d10) Force damage if it ends its turn inside an object."
      },
      {
        "name": "Magic Resistance",
        "desc": "The empyrean has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Otherworldly Strike",
        "desc": "m,r Roll: +5, reach 5 ft. or range 30 ft. {@h}7 (1d8) Necrotic or Radiant damage (empyrean's choice)."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Erinyes": {
    "name": "Erinyes",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 12,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 178,
      "hitDice": "21d8 + 84"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 16,
      "con": 18,
      "int": 14,
      "wis": 14,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 8,
      "int": 0,
      "wis": 0,
      "cha": 8
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Diabolical Restoration",
        "desc": "If the erinyes dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "desc": "The erinyes has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Magic Rope",
        "desc": "The erinyes has a magic rope. While bearing it, the erinyes can use the Entangling Rope action. The rope has AC 20, HP 90, and Immunity|XPHB to Poison and Psychic damage. The rope turns to dust if reduced to 0 Hit, if it is 5+ feet away from the erinyes for 1 hour or more, or if the erinyes dies. If the rope is damaged or destroyed, the erinyes can fully restore it when finishing a Short or Long."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The erinyes makes three Withering Sword attacks and can use Entangling Rope."
      },
      {
        "name": "Withering Sword",
        "desc": "m Roll: +8, reach 5 ft. {@h}13 (2d8) Slashing damage plus 11 (2d10) Necrotic damage."
      },
      {
        "name": "Entangling Rope (Requires Magic Rope)",
        "desc": "str 16, one creature the erinyes can see within 120 feet. {@actSaveFail} 14 (4d6) Force damage, and the target has the Restrained condition until the rope is destroyed, the erinyes uses a Bonus to release the target, or the erinyes uses Entangling Rope again."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ettercap": {
    "name": "Ettercap",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 44,
      "hitDice": "8d8 + 8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 15,
      "con": 13,
      "int": 7,
      "wis": 12,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The ettercap can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "desc": "The ettercap ignores movement restrictions caused by webs, and the ettercap knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ettercap makes one Bite attack and one Claw attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage plus 2 (1d4) Poison damage, and the target has the Poisoned condition until the start of the ettercap's next turn."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (2d4) Slashing damage."
      },
      {
        "name": "Web Strand 5",
        "desc": "dex 12, one Large or smaller creature the ettercap can see within 30 feet. {@actSaveFail} The target has the Restrained condition until the web is destroyed (AC 10; HP 5; Vulnerability|XPHB to Fire damage; Immunity|XPHB to Bludgeoning, Poison, and Psychic damage)."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ettin": {
    "name": "Ettin",
    "size": "Large",
    "type": "giant",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 85,
      "hitDice": "10d10 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 8,
      "con": 17,
      "int": 6,
      "wis": 10,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "stunned",
      "unconscious"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ettin makes one Battleaxe attack and one Morningstar attack."
      },
      {
        "name": "Battleaxe",
        "desc": "m Roll: +7, reach 5 ft. {@h}14 (2d8) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Morningstar",
        "desc": "m Roll: +7, reach 5 ft. {@h}14 (2d8) Piercing damage, and the target has Disadvantage|XPHB on the next attack roll it makes before the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Faerie Dragon Adult": {
    "name": "Faerie Dragon Adult",
    "size": "Tiny",
    "type": "dragon",
    "challengeRating": 2,
    "alignment": "Chaotic Good",
    "armorClass": 15,
    "hitPoints": {
      "value": 35,
      "hitDice": "10d4 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 20,
      "con": 13,
      "int": 12,
      "wis": 12,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic",
      "Sylvan; telepathy 60 ft. (faerie dragons only)"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The dragon has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}7 (1d4) Piercing damage plus 3 (1d6) Psychic damage."
      },
      {
        "name": "Euphoria Breath 5",
        "desc": "wis 13, each creature in a 15-foot Cone. {@actSaveFail} The target has the Incapacitated condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. While Incapacitated, the target uses all its movement on each of its turns to move in a random direction."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Faerie Dragon Youth": {
    "name": "Faerie Dragon Youth",
    "size": "Tiny",
    "type": "dragon",
    "challengeRating": 1,
    "alignment": "Chaotic Good",
    "armorClass": 13,
    "hitPoints": {
      "value": 21,
      "hitDice": "6d4 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 16,
      "con": 12,
      "int": 12,
      "wis": 12,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic",
      "Sylvan; telepathy 60 ft. (faerie dragons only)"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The dragon has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Piercing damage plus 2 (1d4) Psychic damage."
      },
      {
        "name": "Euphoria Breath 5",
        "desc": "wis 12, each creature in a 15-foot Cone. {@actSaveFail} The target has the Incapacitated condition until the end of its next turn and uses all its movement on its turn to move in a random direction."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Fiend Cultist": {
    "name": "Fiend Cultist",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 8,
    "alignment": "Neutral Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 127,
      "hitDice": "17d8 + 51"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 15,
      "con": 16,
      "int": 12,
      "wis": 18,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 6,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Infernal"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The cultist makes three Pact Axe attacks."
      },
      {
        "name": "Pact Axe",
        "desc": "m Roll: +7, reach 5 ft. {@h}10 (1d12) Slashing damage plus 13 (3d8) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Fire Elemental": {
    "name": "Fire Elemental",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 93,
      "hitDice": "11d10 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 17,
      "con": 16,
      "int": 6,
      "wis": 10,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Ignan)"
    ],
    "traits": [
      {
        "name": "Fire Aura",
        "desc": "At the end of each of the elemental's turns, each creature in a 10-foot Emanation originating from the elemental takes 5 (1d10) Fire damage. Creatures and flammable objects in the Emanation start burning|XPHB."
      },
      {
        "name": "Fire Form",
        "desc": "The elemental can move through a space as narrow as 1 inch without expending extra movement to do so, and it can enter a creature's space and stop there. The first time it enters a creature's space on a turn, that creature takes 5 (1d10) Fire damage."
      },
      {
        "name": "Illumination",
        "desc": "The elemental sheds Bright in a 30-foot radius and Dim for an additional 30 feet."
      },
      {
        "name": "Water Susceptibility",
        "desc": "The elemental takes 3 (1d6) Cold damage for every 5 feet the elemental moves in water or for every gallon of water splashed on it."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The elemental makes two Burn attacks."
      },
      {
        "name": "Burn",
        "desc": "m Roll: +6, reach 5 ft. {@h}10 (2d6) Fire damage. If the target is a creature or a flammable object, it starts burning|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Fire Giant": {
    "name": "Fire Giant",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 9,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 162,
      "hitDice": "13d12 + 78"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 25,
      "dex": 9,
      "con": 23,
      "int": 10,
      "wis": 14,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 10,
      "int": 0,
      "wis": 0,
      "cha": 5
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The giant makes two attacks, using Flame Sword or Hammer Throw in any combination."
      },
      {
        "name": "Flame Sword",
        "desc": "m Roll: +11, reach 10 ft. {@h}21 (4d6) Slashing damage plus 10 (3d6) Fire damage."
      },
      {
        "name": "Hammer Throw",
        "desc": "r Roll: +11, range 60/240 ft. {@h}23 (3d10) Bludgeoning damage plus 4 (1d8) Fire damage, and the target is pushed up to 15 feet straight away from the giant and has Disadvantage|XPHB on the next attack roll it makes before the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Flameskull": {
    "name": "Flameskull",
    "size": "Tiny",
    "type": "undead",
    "challengeRating": 4,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 40,
      "hitDice": "9d4 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 17,
      "con": 14,
      "int": 16,
      "wis": 10,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned",
      "prone"
    ],
    "damageImmunities": [
      "fire",
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [
      {
        "name": "Illumination",
        "desc": "The flameskull sheds Bright in a 15-foot radius and Dim for an additional 15 feet."
      },
      {
        "name": "Magic Resistance",
        "desc": "The flameskull has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Undead Restoration",
        "desc": "If the flameskull is destroyed, it regains all its Hit in 1 hour unless Holy Water is sprinkled on its remains or the Dispel Evil and Good spell is cast on them."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The flameskull makes two Fire Ray attacks."
      },
      {
        "name": "Fire Ray",
        "desc": "m,r Roll: +5, reach 5 ft. or range 60 ft. {@h}13 (3d6) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Flaming Skeleton": {
    "name": "Flaming Skeleton",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 65,
      "hitDice": "10d8 + 20"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 14,
      "con": 15,
      "int": 10,
      "wis": 15,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "bludgeoning"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus one other language but can't speak"
    ],
    "traits": [
      {
        "name": "Death Burst",
        "desc": "The skeleton explodes when it dies. dex 12, each creature in a 10-foot Emanation originating from the skeleton. {@actSaveFail} 14 (4d6) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Illumination",
        "desc": "The skeleton sheds Bright in a 15-foot radius and Dim for an additional 15 feet."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The skeleton makes two attacks, using Flame Scepter or Hurl Flame in any combination."
      },
      {
        "name": "Flame Scepter",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Bludgeoning damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Hurl Flame",
        "desc": "r Roll: +4, range 60 ft. {@h}7 (1d10) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Flesh Golem": {
    "name": "Flesh Golem",
    "size": "Medium",
    "type": "construct",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 9,
    "hitPoints": {
      "value": 127,
      "hitDice": "15d8 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 9,
      "con": 18,
      "int": 6,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "lightning",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus one other language but can't speak"
    ],
    "traits": [
      {
        "name": "Aversion to Fire",
        "desc": "If the golem takes Fire damage, it has Disadvantage|XPHB on attack rolls and ability checks until the end of its next turn."
      },
      {
        "name": "Berserk",
        "desc": "Whenever the golem starts its turn Bloodied|XPHB, roll 1d6. On a 6, the golem goes berserk. On each of its turns while berserk, the golem attacks the nearest creature it can see. If no creature is near enough to move to and attack, the golem attacks an object. Once the golem goes berserk, it remains so until it is destroyed or it is no longer Bloodied|XPHB. The golem's creator, if within 60 feet of the berserk golem, can try to calm it by taking an action to make a 15 Charisma (Persuasion|XPHB) check; the golem must be able to hear its creator. If this check succeeds, the golem ceases being berserk until the start of its next turn, at which point it resumes rolling for the Berserk trait again if it is still Bloodied|XPHB."
      },
      {
        "name": "Immutable Form",
        "desc": "The golem can't shape-shift."
      },
      {
        "name": "Lightning Absorption",
        "desc": "Whenever the golem is subjected to Lightning damage, it regains a number of Hit equal to the Lightning damage dealt."
      },
      {
        "name": "Magic Resistance",
        "desc": "The golem has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The golem makes two Slam attacks."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Bludgeoning damage plus 4 (1d8) Lightning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Flumph": {
    "name": "Flumph",
    "size": "Small",
    "type": "aberration",
    "challengeRating": 1,
    "alignment": "Lawful Good",
    "armorClass": 12,
    "hitPoints": {
      "value": 7,
      "hitDice": "2d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 15,
      "con": 10,
      "int": 14,
      "wis": 14,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [
      "psychic"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Undercommon but can't speak; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Advanced Telepathy",
        "desc": "The flumph perceives the content of any telepathic communication within 60 feet of it."
      },
      {
        "name": "Prone Deficiency",
        "desc": "If the flumph receives the Prone condition, roll a die. On an odd number, it has the Incapacitated condition. At the end of each of its turns, the flumph makes a 10 Dexterity saving throw, ending the Incapacitated condition on a success."
      },
      {
        "name": "Telepathic Shroud",
        "desc": "The flumph's thoughts can't be read by any means, and magic can't detect its location or observe it remotely."
      }
    ],
    "actions": [
      {
        "name": "Tentacle",
        "desc": "m Roll: +4, reach 5 feet. {@h}4 (1d4) Acid damage."
      },
      {
        "name": "Stench Spray (1/Day)",
        "desc": "dex 10, one creature the flumph can see within 15 feet. {@actSaveFail} The target is coated in a foul-smelling liquid, exudes a stench for 1d4 hours, and has the Poisoned condition while the stench lasts. Other creatures have the Poisoned condition while in a 5-foot Emanation originating from the coated target. The target can remove the stench on itself if it bathes during a Short or Long."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Flying Snake": {
    "name": "Flying Snake",
    "size": "Tiny",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 5,
      "hitDice": "2d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 4,
      "dex": 15,
      "con": 11,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The snake doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}1 Piercing damage plus 5 (2d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Fomorian": {
    "name": "Fomorian",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 8,
    "alignment": "Chaotic Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 172,
      "hitDice": "15d12 + 75"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 10,
      "con": 20,
      "int": 9,
      "wis": 14,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant",
      "Undercommon"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The fomorian makes two Stone Club attacks. It can replace one attack with a use of Warping Hex if available."
      },
      {
        "name": "Stone Club",
        "desc": "m Roll: +9, reach 15 ft. {@h}24 (4d8) Bludgeoning damage."
      },
      {
        "name": "Warping Hex 4",
        "desc": "wis 16, one creature the fomorian can see within 120 feet. {@actSaveFail} 21 (6d6) Psychic damage, and the target gains 1 Exhaustion level. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Frog": {
    "name": "Frog",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 13,
      "con": 8,
      "int": 1,
      "wis": 8,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The frog can breathe air and water."
      },
      {
        "name": "Standing Leap",
        "desc": "The frog's Long is up to 10 feet and its High is up to 5 feet with or without a running start."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +3, reach 5 ft. {@h}1 Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Frost Giant": {
    "name": "Frost Giant",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 8,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 149,
      "hitDice": "13d12 + 65"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 9,
      "con": 21,
      "int": 9,
      "wis": 10,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 8,
      "int": 0,
      "wis": 3,
      "cha": 4
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The giant makes two attacks, using Frost Axe or Great Bow in any combination."
      },
      {
        "name": "Frost Axe",
        "desc": "m Roll: +9, reach 10 ft. {@h}19 (2d12) Slashing damage plus 9 (2d8) Cold damage."
      },
      {
        "name": "Great Bow",
        "desc": "r Roll: +9, range 150/600 ft. {@h}17 (2d10) Piercing damage plus 7 (2d6) Cold damage, and the target's Speed|XPHB decreases by 10 feet until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Galeb Duhr": {
    "name": "Galeb Duhr",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 6,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 123,
      "hitDice": "13d8 + 65"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 14,
      "con": 20,
      "int": 11,
      "wis": 12,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Terran)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Avalanche Slam",
        "desc": "m Roll: +8, reach 5 ft. {@h}12 (2d6) Bludgeoning damage. If the target is a Large or smaller creature and the galeb duhr moved 20+ feet straight toward it immediately before the hit, the target takes an extra 7 (2d6) Bludgeoning damage and has the Prone condition."
      },
      {
        "name": "Animate Boulders (1/Day)",
        "desc": "The galeb duhr magically animates one or two boulders it can see within 60 feet of itself. Each boulder uses the Galeb Duhr stat block, except it has Intelligence and Charisma scores of 1 and lacks this action. The boulder takes its turn immediately after the galeb duhr on the same Initiative|XPHB count, and it obeys the galeb duhr. A boulder remains animate for 1 minute or until it or the galeb duhr dies."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gargoyle": {
    "name": "Gargoyle",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 67,
      "hitDice": "9d8 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 11,
      "con": 16,
      "int": 6,
      "wis": 11,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Terran)"
    ],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The gargoyle doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The gargoyle makes two Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (2d4) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gas Spore Fungus": {
    "name": "Gas Spore Fungus",
    "size": "Large",
    "type": "plant",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 8,
    "hitPoints": {
      "value": 13,
      "hitDice": "9d10 - 36"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 5,
      "dex": 1,
      "con": 3,
      "int": 1,
      "wis": 1,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "paralyzed",
      "poisoned",
      "prone"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Death Burst",
        "desc": "The gas spore bursts when it dies. con 10, each creature in a 20-foot Emanation originating from the gas spore. {@actSaveFail} The target takes 10 (3d6) Poison damage and has the Poisoned condition for 1d12 hours. Unless the Poisoned condition is removed, the target dies at the end of that time and sprouts 2d4 Tiny Gas Spore Fungi (each with 1 Hit). After 2d6 days, they become Large and have 13 Hit."
      }
    ],
    "actions": [
      {
        "name": "Tendril",
        "desc": "m Roll: 0, reach 5 ft. {@h}3 (1d6) Poison damage, and the target has the Poisoned condition until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gelatinous Cube": {
    "name": "Gelatinous Cube",
    "size": "Large",
    "type": "ooze",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 6,
    "hitPoints": {
      "value": 63,
      "hitDice": "6d10 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 3,
      "con": 20,
      "int": 1,
      "wis": 6,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "prone"
    ],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Ooze Cube",
        "desc": "The cube fills its entire space and is transparent. Other creatures can enter that space, but a creature that does so is subjected to the cube's Engulf and has Disadvantage|XPHB on the saving throw. Creatures inside the cube have Cover|XPHB|Total, and the cube can hold one Large creature or up to four Medium or Small creatures inside itself at a time. As an action, a creature within 5 feet of the cube can pull a creature or an object out of the cube by succeeding on a 12 Strength (Athletics|XPHB) check, and the puller takes 10 (3d6) Acid damage."
      },
      {
        "name": "Transparent",
        "desc": "Even when the cube is in plain sight, a creature must succeed on a 15 Wisdom (Perception|XPHB) check to notice the cube if the creature hasn't witnessed the cube move or otherwise act."
      }
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "desc": "m Roll: +4, reach 5 ft. {@h}12 (3d6) Acid damage."
      },
      {
        "name": "Engulf",
        "desc": "The cube moves up to its Speed|XPHB without provoking Opportunity Attacks. The cube can move through the spaces of Large or smaller creatures if it has room inside itself to contain them (see the Ooze Cube trait). dex 12, each creature whose space the cube enters for the first time during this move. {@actSaveFail} 10 (3d6) Acid damage, and the target is engulfed. An engulfed target is suffocating, can't cast spells with a Verbal component, has the Restrained condition, and takes 10 (3d6) Acid damage at the start of each of the cube's turns. When the cube moves, the engulfed target moves with it. An engulfed target can try to escape by taking an action to make a 12 Strength (Athletics|XPHB) check. On a successful check, the target escapes and enters the nearest unoccupied space. {@actSaveSuccess} Half damage, and the target moves to an unoccupied space within 5 feet of the cube. If there is no unoccupied space, the target fails the save instead."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ghast": {
    "name": "Ghast",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 36,
      "hitDice": "8d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 17,
      "con": 10,
      "int": 11,
      "wis": 10,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "necrotic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [
      {
        "name": "Stench",
        "desc": "con 10, any creature that starts its turn in a 5-foot Emanation originating from the ghast. {@actSaveFail} The target has the Poisoned condition until the start of its next turn. {@actSaveSuccess} The target is immune to this ghast's Stench for 24 hours."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Piercing damage plus 9 (2d8) Necrotic damage."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Slashing damage. If the target is a non-Undead creature, it is subjected to the following effect. con 10. {@actSaveFail} The target has the Paralyzed condition until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ghast Gravecaller": {
    "name": "Ghast Gravecaller",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 6,
    "alignment": "Chaotic Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 97,
      "hitDice": "15d8 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 17,
      "con": 14,
      "int": 18,
      "wis": 14,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 5,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common"
    ],
    "traits": [
      {
        "name": "Stench",
        "desc": "con 13, any creature that starts its turn in a 5-foot Emanation originating from the ghast. {@actSaveFail} The target has the Poisoned condition until the start of its next turn. {@actSaveSuccess} The target is immune to this ghast's Stench for 24 hours."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ghast makes two Horrific Necrosis attacks. It can replace one attack with a Claw attack."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +6, reach 5 ft. {@h}13 (3d6) Slashing damage. If the target isn't an Undead, it has the Paralyzed condition until the end of its next turn."
      },
      {
        "name": "Horrific Necrosis",
        "desc": "m,r Roll: +7, reach 5 ft. or range 120 ft. {@h}15 (2d10) Necrotic damage, and the target has the Frightened condition until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ghost": {
    "name": "Ghost",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 4,
    "alignment": "Neutral",
    "armorClass": 11,
    "hitPoints": {
      "value": 45,
      "hitDice": "10d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 7,
      "dex": 13,
      "con": 10,
      "int": 10,
      "wis": 12,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "lightning",
      "piercing",
      "slashing",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Ethereal Sight",
        "desc": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material Plane."
      },
      {
        "name": "Incorporeal Movement",
        "desc": "The ghost can move through other creatures and objects as if they were Difficult. It takes 5 (1d10) Force damage if it ends its turn inside an object."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ghost makes two Withering Touch attacks."
      },
      {
        "name": "Withering Touch",
        "desc": "m Roll: +5, reach 5 ft. {@h}19 (3d10) Necrotic damage."
      },
      {
        "name": "Horrific Visage",
        "desc": "wis 13, each creature in a 60-foot Cone that can see the ghost and isn't an Undead. {@actSaveFail} 10 (2d6) Psychic damage, and the target has the Frightened condition until the start of the ghost's next turn. {@actSaveSuccess} The target is immune to this ghost's Horrific Visage for 24 hours."
      },
      {
        "name": "Possession {@recharge}",
        "desc": "cha 13, one Humanoid the ghost can see within 5 feet. {@actSaveFail} The target is possessed by the ghost; the ghost disappears, and the target has the Incapacitated condition and loses control of its body. The ghost now controls the body, but the target retains awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that specifically target Undead. The ghost's game statistics are the same, except it uses the possessed target's Speed|XPHB, as well as the target's Strength, Dexterity, and Constitution modifiers. The possession lasts until the body drops to 0 Hit or the ghost leaves as a Bonus. When the possession ends, the ghost appears in an unoccupied space within 5 feet of the target, and the target is immune to this ghost's Possession|XPHB for 24 hours. {@actSaveSuccess} The target is immune to this ghost's Possession|XPHB for 24 hours."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ghoul": {
    "name": "Ghoul",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 15,
      "con": 10,
      "int": 7,
      "wis": 10,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ghoul makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage plus 3 (1d6) Necrotic damage."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Slashing damage. If the target is a creature that isn't an Undead or elf, it is subjected to the following effect. con 10. {@actSaveFail} The target has the Paralyzed condition until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Ape": {
    "name": "Giant Ape",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 7,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 168,
      "hitDice": "16d12 + 64"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 14,
      "con": 18,
      "int": 5,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ape makes two Fist attacks."
      },
      {
        "name": "Fist",
        "desc": "m Roll: +9, reach 10 ft. {@h}22 (3d10) Bludgeoning damage."
      },
      {
        "name": "Boulder Toss {@recharge}",
        "desc": "The ape hurls a boulder at a point it can see within 90 feet. dex 17, each creature in a 5-foot-radius Sphere centered on that point. {@actSaveFail} 24 (7d6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Axe Beak": {
    "name": "Giant Axe Beak",
    "size": "Huge",
    "type": "monstrosity",
    "challengeRating": 5,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 84,
      "hitDice": "8d12 + 32"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 14,
      "con": 19,
      "int": 3,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The axe beak makes one Sharpened Beak attack and one Talons attack."
      },
      {
        "name": "Sharpened Beak",
        "desc": "m Roll: +8, reach 10 ft. {@h}18 (2d12) Slashing damage, and a creature within 5 feet of the target (axe beak's choice) takes 6 (1d12) Slashing damage."
      },
      {
        "name": "Talons",
        "desc": "m Roll: +8, reach 5 ft. {@h}14 (2d8) Piercing damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Badger": {
    "name": "Giant Badger",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 15,
      "hitDice": "2d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 10,
      "con": 17,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "poison"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +3, reach 5 ft. {@h}6 (2d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Bat": {
    "name": "Giant Bat",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 22,
      "hitDice": "4d10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 16,
      "con": 11,
      "int": 2,
      "wis": 12,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Boar": {
    "name": "Giant Boar",
    "size": "Large",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 42,
      "hitDice": "5d10 + 15"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 10,
      "con": 16,
      "int": 2,
      "wis": 7,
      "cha": 5
    },
    "savingThrows": {
      "str": 5,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Bloodied Fury",
        "desc": "The boar has Advantage|XPHB on melee attack rolls while it is Bloodied|XPHB."
      }
    ],
    "actions": [
      {
        "name": "Gore",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Piercing damage. If the target is a Large or smaller creature and the boar moved 20+ feet straight toward it immediately before the hit, the target takes an extra 7 (2d6) Piercing damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Centipede": {
    "name": "Giant Centipede",
    "size": "Small",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 9,
      "hitDice": "2d6 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 5,
      "dex": 14,
      "con": 12,
      "int": 1,
      "wis": 7,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Piercing damage, and the target has the Poisoned condition until the start of the centipede's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Constrictor Snake": {
    "name": "Giant Constrictor Snake",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 60,
      "hitDice": "8d12 + 8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 14,
      "con": 12,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The snake makes one Bite attack and uses Constrict."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 10 ft. {@h}11 (2d6) Piercing damage."
      },
      {
        "name": "Constrict",
        "desc": "str 14, one Large or smaller creature the snake can see within 10 feet. {@actSaveFail} 13 (2d8) Bludgeoning damage, and the target has the Grappled condition (escape 14)."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Crab": {
    "name": "Giant Crab",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 13,
      "hitDice": "3d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 13,
      "con": 11,
      "int": 1,
      "wis": 9,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The crab can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +3, reach 5 ft. {@h}4 (1d6) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 11) from one of two claws."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Crocodile": {
    "name": "Giant Crocodile",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 5,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 85,
      "hitDice": "9d12 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 9,
      "con": 17,
      "int": 2,
      "wis": 10,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Hold Breath",
        "desc": "The crocodile can hold its breath for 1 hour."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The crocodile makes one Bite attack and one Tail attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +8, reach 5 ft. {@h}21 (3d10) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 15). While Grappled, the target has the Restrained condition and can't be targeted by the crocodile's Tail."
      },
      {
        "name": "Tail",
        "desc": "m Roll: +8, reach 10 ft. {@h}18 (3d8) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Eagle": {
    "name": "Giant Eagle",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 1,
    "alignment": "Neutral Good",
    "armorClass": 13,
    "hitPoints": {
      "value": 26,
      "hitDice": "4d10 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 17,
      "con": 13,
      "int": 8,
      "wis": 14,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "necrotic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial; understands Common and Primordial (Auran) but can't speak them"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The eagle makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Slashing damage plus 3 (1d6) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Elk": {
    "name": "Giant Elk",
    "size": "Huge",
    "type": "celestial",
    "challengeRating": 2,
    "alignment": "Neutral Good",
    "armorClass": 14,
    "hitPoints": {
      "value": 42,
      "hitDice": "5d12 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 18,
      "con": 14,
      "int": 7,
      "wis": 14,
      "cha": 10
    },
    "savingThrows": {
      "str": 6,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "necrotic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial; understands Common",
      "Elvish",
      "and Sylvan but can't speak them"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Ram",
        "desc": "m Roll: +6, reach 10 ft. {@h}11 (2d6) Bludgeoning damage plus 5 (2d4) Radiant damage. If the target is a Huge or smaller creature and the elk moved 20+ feet straight toward it immediately before the hit, the target takes an extra 5 (2d4) Bludgeoning damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Fire Beetle": {
    "name": "Giant Fire Beetle",
    "size": "Small",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 4,
      "hitDice": "1d6 + 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 10,
      "con": 12,
      "int": 1,
      "wis": 7,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "fire"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Illumination",
        "desc": "The beetle sheds Bright in a 10-foot radius and Dim for an additional 10 feet."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +1, reach 5 ft. {@h}1 Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Frog": {
    "name": "Giant Frog",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 18,
      "hitDice": "4d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 13,
      "con": 11,
      "int": 2,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The frog can breathe air and water."
      },
      {
        "name": "Standing Leap",
        "desc": "The frog's Long is up to 20 feet and its High is up to 10 feet with or without a running start."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +3, reach 5 ft. {@h}5 (1d6) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 11)."
      },
      {
        "name": "Swallow",
        "desc": "The frog swallows a Small or smaller target it is grappling. While swallowed, the target isn't Grappled but has the Blinded and Restrained conditions, and it has Cover|XPHB|Total against attacks and other effects outside the frog. While swallowing the target, the frog can't use Bite, and if the frog dies, the swallowed target is no longer Restrained and can escape from the corpse using 5 feet of movement, exiting with the Prone condition. At the end of the frog's next turn, the swallowed target takes 5 (2d4) Acid damage. If that damage doesn't kill it, the frog disgorges it, causing it to exit Prone."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Goat": {
    "name": "Giant Goat",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d10 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 13,
      "con": 12,
      "int": 3,
      "wis": 12,
      "cha": 6
    },
    "savingThrows": {
      "str": 5,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Ram",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Bludgeoning damage. If the target is a Large or smaller creature and the goat moved 20+ feet straight toward it immediately before the hit, the target takes an extra 5 (2d4) Bludgeoning damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Hyena": {
    "name": "Giant Hyena",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 14,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Lizard": {
    "name": "Giant Lizard",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d10 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 12,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The lizard can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Octopus": {
    "name": "Giant Octopus",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 45,
      "hitDice": "7d10 + 7"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 13,
      "con": 13,
      "int": 5,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Water Breathing",
        "desc": "The octopus can breathe only underwater. It can hold its breath for 1 hour outside water."
      }
    ],
    "actions": [
      {
        "name": "Tentacles",
        "desc": "m Roll: +5, reach 10 ft. {@h}10 (2d6) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 13) from all eight tentacles. While Grappled, the target has the Restrained condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Owl": {
    "name": "Giant Owl",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d10 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 15,
      "con": 12,
      "int": 10,
      "wis": 14,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "necrotic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial; understands Common",
      "Elvish",
      "and Sylvan but can't speak them"
    ],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The owl doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Talons",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (1d10) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Rat": {
    "name": "Giant Rat",
    "size": "Small",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 7,
      "hitDice": "2d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 7,
      "dex": 16,
      "con": 11,
      "int": 2,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The rat has Advantage|XPHB on an attack roll against a creature if at least one of the rat's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 feet. {@h}5 (1d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Scorpion": {
    "name": "Giant Scorpion",
    "size": "Large",
    "type": "beast",
    "challengeRating": 3,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 52,
      "hitDice": "7d10 + 14"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 13,
      "con": 15,
      "int": 1,
      "wis": 9,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The scorpion makes two Claw attacks and one Sting attack."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 13) from one of two claws."
      },
      {
        "name": "Sting",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Piercing damage plus 11 (2d10) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Seahorse": {
    "name": "Giant Seahorse",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 16,
      "hitDice": "3d10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 12,
      "con": 11,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Water Breathing",
        "desc": "The seahorse can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Ram",
        "desc": "m Roll: +4, reach 5 ft. {@h}9 (2d6) Bludgeoning damage, or 11 (2d8) Bludgeoning damage if the seahorse moved 20+ feet straight toward the target immediately before the hit."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Shark": {
    "name": "Giant Shark",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 5,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 92,
      "hitDice": "8d12 + 40"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 11,
      "con": 21,
      "int": 1,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Water Breathing",
        "desc": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The shark makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +9 (with Advantage|XPHB if the target doesn't have all its Hit), reach 5 ft. {@h}22 (3d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Spider": {
    "name": "Giant Spider",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 26,
      "hitDice": "4d10 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 16,
      "con": 12,
      "int": 2,
      "wis": 11,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "desc": "The spider ignores movement restrictions caused by webs, and it knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Piercing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Web 5",
        "desc": "dex 13, one creature the spider can see within 60 feet. {@actSaveFail} The target has the Restrained condition until the web is destroyed (AC 10; HP 5; Vulnerability|XPHB to Fire damage; Immunity|XPHB to Poison and Psychic damage)."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Squid": {
    "name": "Giant Squid",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 6,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 120,
      "hitDice": "16d12 + 16"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 14,
      "con": 12,
      "int": 5,
      "wis": 11,
      "cha": 4
    },
    "savingThrows": {
      "str": 9,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Water Breathing",
        "desc": "The squid can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The squid makes one Bite attack and one Tentacle attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +9, reach 5 ft. {@h}28 (4d10) Piercing damage."
      },
      {
        "name": "Tentacle",
        "desc": "m Roll: +9, reach 15 ft. {@h}19 (3d8) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Grappled condition (escape 16) from one of two tentacles, and the squid can pull the target up to 10 feet straight toward itself."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Toad": {
    "name": "Giant Toad",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 39,
      "hitDice": "6d10 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 13,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The toad can breathe air and water."
      },
      {
        "name": "Standing Leap",
        "desc": "The toad's Long is up to 20 feet and its High is up to 10 feet with or without a running start."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage plus 5 (2d4) Poison damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 12)."
      },
      {
        "name": "Swallow",
        "desc": "The toad swallows a Medium or smaller target it is grappling. While swallowed, the target isn't Grappled but has the Blinded and Restrained conditions, and it has Cover|XPHB|Total against attacks and other effects outside the toad. In addition, the target takes 10 (3d6) Acid damage at the end of each of the toad's turns. The toad can have only one target swallowed at a time, and it can't use Bite while it has a swallowed target. If the toad dies, a swallowed creature is no longer Restrained and can escape from the corpse using 5 feet of movement, exiting with the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Venomous Snake": {
    "name": "Giant Venomous Snake",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 18,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 10 ft. {@h}6 (1d4) Piercing damage plus 4 (1d8) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Vulture": {
    "name": "Giant Vulture",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 10,
    "hitPoints": {
      "value": 25,
      "hitDice": "3d10 + 9"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 10,
      "con": 16,
      "int": 6,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "necrotic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common but can't speak"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The vulture has Advantage|XPHB on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Gouge",
        "desc": "m Roll: +4, reach 5 ft. {@h}9 (2d6) Piercing damage, and the target has the Poisoned condition until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Wasp": {
    "name": "Giant Wasp",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 14,
      "con": 10,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The wasp doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Sting",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage plus 5 (2d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Weasel": {
    "name": "Giant Weasel",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 9,
      "hitDice": "2d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 17,
      "con": 10,
      "int": 4,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Giant Wolf Spider": {
    "name": "Giant Wolf Spider",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 16,
      "con": 13,
      "int": 3,
      "wis": 12,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Piercing damage plus 5 (2d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gibbering Mouther": {
    "name": "Gibbering Mouther",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 2,
    "alignment": "Chaotic Neutral",
    "armorClass": 9,
    "hitPoints": {
      "value": 52,
      "hitDice": "7d8 + 21"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 8,
      "con": 16,
      "int": 3,
      "wis": 10,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "prone"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Aberrant Ground",
        "desc": "The ground in a 10-foot Emanation originating from the mouther is Difficult."
      },
      {
        "name": "Gibbering",
        "desc": "The mouther babbles incoherently while it doesn't have the Incapacitated condition. wis 10, any creature that starts its turn within 20 feet of the mouther while it is babbling. {@actSaveFail} The target rolls 1d8 to determine what it does during the current turn: [object Object]"
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +2, reach 5 ft. {@h}7 (2d6) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition. The target dies if it is reduced to 0 Hit by this attack. Its body is then absorbed into the mouther, leaving only equipment behind."
      },
      {
        "name": "Blinding Spittle 5",
        "desc": "dex 10, each creature in a 10-foot-radius Sphere centered on a point within 30 feet. {@actSaveFail} 7 (2d6) Radiant damage, and the target has the Blinded condition until the end of the mouther's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Githyanki Dracomancer": {
    "name": "Githyanki Dracomancer",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 16,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 255,
      "hitDice": "30d8 + 120"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 16,
      "con": 18,
      "int": 20,
      "wis": 16,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 9,
      "int": 10,
      "wis": 8,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic",
      "Gith"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The githyanki makes three Draconic Strike attacks."
      },
      {
        "name": "Draconic Strike",
        "desc": "m,r Roll: +10, reach 10 ft. or range 120 ft. {@h}12 (2d6) Slashing damage plus 17 (5d6) Fire damage, and the target has the Frightened condition until the start of the githyanki's next turn."
      },
      {
        "name": "Conjured Dragon's Breath 5",
        "desc": "dex 18, each creature in a 90-foot Cone. {@actSaveFail} 27 (6d8) Fire damage plus 27 (6d8) Force damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Githyanki Knight": {
    "name": "Githyanki Knight",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 8,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 117,
      "hitDice": "18d8 + 36"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 15,
      "int": 14,
      "wis": 14,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 5,
      "int": 5,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Gith"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The githyanki makes three Silver Sword attacks. It can replace one attack with a use of Spellcasting to cast Telekinesis if available."
      },
      {
        "name": "Silver Sword",
        "desc": "m Roll: +6, reach 5 ft. {@h}10 (2d6) Slashing damage plus 14 (4d6) Psychic damage. Critical {@h}If the target is in an astral body (as with the Astral Projection spell), the githyanki can cut the silvery cord that tethers the target to its material body instead of dealing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Githyanki Warrior": {
    "name": "Githyanki Warrior",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 49,
      "hitDice": "9d8 + 9"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 12,
      "int": 13,
      "wis": 13,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 3,
      "int": 3,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Gith"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The githyanki makes two Psi Blade attacks."
      },
      {
        "name": "Psi Blade",
        "desc": "m Roll: +4, reach 5 ft. {@h}9 (2d6) Slashing damage plus 7 (2d6) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Githzerai Monk": {
    "name": "Githzerai Monk",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 2,
    "alignment": "Lawful Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 38,
      "hitDice": "7d8 + 7"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 15,
      "con": 12,
      "int": 13,
      "wis": 14,
      "cha": 10
    },
    "savingThrows": {
      "str": 3,
      "dex": 4,
      "con": 0,
      "int": 3,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Gith"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The githzerai makes two Psi Strike attacks."
      },
      {
        "name": "Psi Strike",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Bludgeoning damage plus 9 (2d8) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Githzerai Psion": {
    "name": "Githzerai Psion",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 12,
    "alignment": "Lawful Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 169,
      "hitDice": "26d8 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 18,
      "con": 15,
      "int": 19,
      "wis": 18,
      "cha": 14
    },
    "savingThrows": {
      "str": 5,
      "dex": 8,
      "con": 0,
      "int": 8,
      "wis": 8,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Gith"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The githzerai makes three Psychic Warp attacks."
      },
      {
        "name": "Psychic Warp",
        "desc": "m,r Roll: +8, reach 5 ft. or range 120 ft. {@h}26 (4d10) Psychic damage, and the target has the githzerai's choice of (A) the Charmed condition until the start of the githzerai's next turn or (B) the Prone condition, provided the target is a Large or smaller creature."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Githzerai Zerth": {
    "name": "Githzerai Zerth",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 6,
    "alignment": "Lawful Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 84,
      "hitDice": "13d8 + 26"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 18,
      "con": 15,
      "int": 16,
      "wis": 17,
      "cha": 12
    },
    "savingThrows": {
      "str": 4,
      "dex": 7,
      "con": 0,
      "int": 6,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Gith"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The githzerai makes two Psi Strike attacks."
      },
      {
        "name": "Psi Strike",
        "desc": "m Roll: +7, reach 5 ft. {@h}11 (2d6) Bludgeoning damage plus 13 (3d8) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Glabrezu": {
    "name": "Glabrezu",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 9,
    "alignment": "Chaotic Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 189,
      "hitDice": "18d10 + 90"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 15,
      "con": 21,
      "int": 19,
      "wis": 17,
      "cha": 16
    },
    "savingThrows": {
      "str": 9,
      "dex": 0,
      "con": 9,
      "int": 0,
      "wis": 7,
      "cha": 7
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the glabrezu dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "desc": "The glabrezu has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The glabrezu makes two Pincer attacks and uses Pummel or Spellcasting."
      },
      {
        "name": "Pincer",
        "desc": "m Roll: +9, reach 10 ft. {@h}16 (2d10) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 15) from one of two pincers."
      },
      {
        "name": "Pummel",
        "desc": "dex 17, one creature Grappled by the glabrezu. {@actSaveFail} 15 (3d6) Bludgeoning damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gladiator": {
    "name": "Gladiator",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 112,
      "hitDice": "15d8 + 45"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 10,
      "wis": 12,
      "cha": 15
    },
    "savingThrows": {
      "str": 7,
      "dex": 5,
      "con": 6,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The gladiator makes three Spear attacks. It can replace one attack with a use of Shield Bash."
      },
      {
        "name": "Spear",
        "desc": "m,r Roll: +7, reach 5 ft. or range 20/60 ft. {@h}11 (2d6) Piercing damage."
      },
      {
        "name": "Shield Bash",
        "desc": "str 15, one creature within 5 feet that the gladiator can see. {@actSaveFail} 9 (2d4) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gnoll Demoniac": {
    "name": "Gnoll Demoniac",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 8,
    "alignment": "Chaotic Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 135,
      "hitDice": "18d8 + 54"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 12,
      "con": 17,
      "int": 14,
      "wis": 15,
      "cha": 17
    },
    "savingThrows": {
      "str": 6,
      "dex": 0,
      "con": 6,
      "int": 0,
      "wis": 5,
      "cha": 6
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Gnoll"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The gnoll makes two Abyssal Strike attacks."
      },
      {
        "name": "Abyssal Strike",
        "desc": "m,r Roll: +6, reach 5 ft. or range 60 ft. {@h}20 (5d6) Poison damage."
      },
      {
        "name": "Hunger of Yeenoghu 5",
        "desc": "The gnoll conjures a 30-foot Cube of magical Darkness|XPHB originating from a point it can see within 60 feet, which lasts for 1 minute or until the gnoll's Concentration ends on it. This area is Difficult. dex 14, any creature that starts its turn in this area or enters it for the first time on a turn. {@actSaveFail} 28 (8d6) Necrotic damage, and the gnoll or a creature of its choice it can see gains 10 Temporary. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gnoll Fang of Yeenoghu": {
    "name": "Gnoll Fang of Yeenoghu",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 71,
      "hitDice": "11d8 + 22"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 15,
      "con": 15,
      "int": 10,
      "wis": 11,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 4,
      "int": 0,
      "wis": 2,
      "cha": 3
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Gnoll"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The gnoll makes one Bite attack and two Bone Flail attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Piercing damage plus 7 (2d6) Poison damage, and the target has the Poisoned condition until the start of the gnoll's next turn."
      },
      {
        "name": "Bone Flail",
        "desc": "m Roll: +5, reach 10 ft. {@h}7 (1d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gnoll Pack Lord": {
    "name": "Gnoll Pack Lord",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 49,
      "hitDice": "9d8 + 9"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 13,
      "int": 8,
      "wis": 11,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Gnoll"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The gnoll makes two attacks, using Bone Whip or Bone Javelin in any combination, and it uses Incite Rampage if available."
      },
      {
        "name": "Bone Whip",
        "desc": "m Roll: +5, reach 10 ft. {@h}8 (2d4) Slashing damage."
      },
      {
        "name": "Bone Javelin",
        "desc": "r Roll: +5, range 30/120 ft. {@h}7 (1d8) Piercing damage."
      },
      {
        "name": "Incite Rampage 5",
        "desc": "The gnoll targets another creature it can see within 60 feet of itself that has the Rampage Bonus. The target can take a Reaction|XPHB to make one melee attack."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gnoll Warrior": {
    "name": "Gnoll Warrior",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 27,
      "hitDice": "6d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 12,
      "con": 11,
      "int": 6,
      "wis": 10,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Gnoll"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage."
      },
      {
        "name": "Bone Bow",
        "desc": "r Roll: +3, range 150/600 ft. {@h}6 (1d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Goat": {
    "name": "Goat",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 4,
      "hitDice": "1d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 10,
      "con": 11,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 2,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Ram",
        "desc": "m Roll: +2, reach 5 ft. {@h}1 Bludgeoning damage, or 2 (1d4) Bludgeoning damage if the goat moved 20+ feet straight toward the target immediately before the hit."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Goblin Boss": {
    "name": "Goblin Boss",
    "size": "Small",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Chaotic Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 21,
      "hitDice": "6d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 15,
      "con": 10,
      "int": 10,
      "wis": 8,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The goblin makes two attacks, using Scimitar or Shortbow in any combination."
      },
      {
        "name": "Scimitar",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Slashing damage, plus 2 (1d4) Slashing damage if the attack roll had Advantage|XPHB."
      },
      {
        "name": "Shortbow",
        "desc": "r Roll: +4, range 80/320 ft. {@h}5 (1d6) Piercing damage, plus 2 (1d4) Piercing damage if the attack roll had Advantage|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Goblin Hexer": {
    "name": "Goblin Hexer",
    "size": "Small",
    "type": "fey",
    "challengeRating": 3,
    "alignment": "Chaotic Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 45,
      "hitDice": "10d6 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 16,
      "con": 12,
      "int": 16,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The goblin makes two Hex Stick attacks. It can replace one attack with a use of Spellcasting."
      },
      {
        "name": "Hex Stick",
        "desc": "m,r Roll: +5, reach 5 ft. or range 60 ft. {@h}12 (2d8) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Goblin Minion": {
    "name": "Goblin Minion",
    "size": "Small",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Chaotic Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 7,
      "hitDice": "2d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 15,
      "con": 10,
      "int": 10,
      "wis": 8,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Dagger",
        "desc": "m,r Roll: +4, reach 5 ft. or range 20/60 ft. {@h}4 (1d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Goblin Warrior": {
    "name": "Goblin Warrior",
    "size": "Small",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Chaotic Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 10,
      "hitDice": "3d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 15,
      "con": 10,
      "int": 10,
      "wis": 8,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Scimitar",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Slashing damage, plus 2 (1d4) Slashing damage if the attack roll had Advantage|XPHB."
      },
      {
        "name": "Shortbow",
        "desc": "r Roll: +4, range 80/320 ft. {@h}5 (1d6) Piercing damage, plus 2 (1d4) Piercing damage if the attack roll had Advantage|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gold Dragon Wyrmling": {
    "name": "Gold Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 3,
    "alignment": "Lawful Good",
    "armorClass": 17,
    "hitPoints": {
      "value": 60,
      "hitDice": "8d8 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 14,
      "con": 17,
      "int": 14,
      "wis": 11,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +6, reach 5 ft. {@h}9 (1d10) Slashing damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 13, each creature in a 15-foot Cone. {@actSaveFail} 22 (4d10) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Weakening Breath",
        "desc": "str 13, each creature that isn't currently affected by this breath in a 15-foot Cone. {@actSaveFail} The target has Disadvantage|XPHB on Strength-based D20 and subtracts 2 (1d4) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gorgon": {
    "name": "Gorgon",
    "size": "Large",
    "type": "construct",
    "challengeRating": 5,
    "alignment": "Unaligned",
    "armorClass": 19,
    "hitPoints": {
      "value": 114,
      "hitDice": "12d10 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 11,
      "con": 18,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "petrified"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Gore",
        "desc": "m Roll: +8, reach 5 ft. {@h}18 (2d12) Piercing damage. If the target is a Large or smaller creature and the gorgon moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
      },
      {
        "name": "Petrifying Breath 5",
        "desc": "con 15, each creature in a 30-foot Cone. 1 The target has the Restrained condition and repeats the save at the end of its next turn if it is still Restrained, ending the effect on itself on a success. 2 The target has the Petrified condition instead of the Restrained condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Goristro": {
    "name": "Goristro",
    "size": "Huge",
    "type": "fiend",
    "challengeRating": 17,
    "alignment": "Chaotic Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 310,
      "hitDice": "23d12 + 161"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 25,
      "dex": 11,
      "con": 25,
      "int": 6,
      "wis": 13,
      "cha": 14
    },
    "savingThrows": {
      "str": 13,
      "dex": 6,
      "con": 13,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal"
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the goristro dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "desc": "The goristro has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Siege Monster",
        "desc": "The goristro deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The goristro makes one Brutal Gore attack and two Slam attacks."
      },
      {
        "name": "Brutal Gore",
        "desc": "m Roll: +13, reach 10 ft. {@h}40 (6d10) Piercing damage. If the target is a Huge or smaller creature, it is pushed up to 20 feet straight away from the goristro and has the Prone condition."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +13, reach 10 ft. {@h}29 (4d10) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Graveyard Revenant": {
    "name": "Graveyard Revenant",
    "size": "Huge",
    "type": "undead",
    "challengeRating": 7,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 161,
      "hitDice": "14d12 + 70"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 14,
      "con": 20,
      "int": 13,
      "wis": 16,
      "cha": 18
    },
    "savingThrows": {
      "str": 8,
      "dex": 0,
      "con": 8,
      "int": 0,
      "wis": 6,
      "cha": 7
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
      "stunned",
      "unconscious"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "necrotic",
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [
      {
        "name": "Undead Restoration",
        "desc": "If the revenant dies, it revives 24 hours later unless Dispel Evil and Good is cast on its remains. If it revives, it animates another group of corpses elsewhere on the same plane of existence; it now looks different but uses the same stat block and returns with all its Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The revenant makes two Suffocate attacks."
      },
      {
        "name": "Suffocate",
        "desc": "m Roll: +8, reach 10 ft. {@h}10 (1d10) Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 15). Until the grapple ends, the target is suffocating. The revenant can have up to two targets Grappled in this way at a time."
      },
      {
        "name": "Haunting Glare 5",
        "desc": "wis 15, each creature in a 30-foot Emanation originating from the revenant. {@actSaveFail} The target has the Paralyzed condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gray Ooze": {
    "name": "Gray Ooze",
    "size": "Medium",
    "type": "ooze",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 9,
    "hitPoints": {
      "value": 22,
      "hitDice": "3d8 + 9"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 6,
      "con": 16,
      "int": 1,
      "wis": 6,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "grappled",
      "prone",
      "restrained"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "fire"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amorphous",
        "desc": "The ooze can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Corrosive Form",
        "desc": "Nonmagical ammunition is destroyed immediately after hitting the ooze and dealing any damage. Any nonmagical weapon takes a cumulative -1 penalty to attack rolls immediately after dealing damage to the ooze and coming into contact with it. The weapon is destroyed if the penalty reaches -5. The penalty can be removed by casting the Mending spell on the weapon. The ooze can eat through 2-inch-thick, nonmagical metal or wood in 1 round."
      }
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "desc": "m Roll: +3, reach 5 ft. {@h}10 (2d8) Acid damage. Nonmagical armor worn by the target takes a -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the Mending spell on the armor."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gray Slaad": {
    "name": "Gray Slaad",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 9,
    "alignment": "Chaotic Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 150,
      "hitDice": "20d8 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 17,
      "con": 16,
      "int": 13,
      "wis": 8,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Slaad; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The slaad has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Regeneration",
        "desc": "The slaad regains 10 Hit at the start of each of its turns if it has at least 1 Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The slaad makes two Chaos Claw attacks."
      },
      {
        "name": "Chaos Claw",
        "desc": "m Roll: +8, reach 10 ft. {@h}9 (1d10) Slashing damage plus 11 (2d10) Necrotic damage. Until the start of the slaad's next turn, the target has a condition determined by rolling 1d4: on a 1, Charmed; on a 2, Frightened; on a 3, Poisoned; or on a 4, Incapacitated."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Green Dragon Wyrmling": {
    "name": "Green Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 2,
    "alignment": "Lawful Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 38,
      "hitDice": "7d8 + 7"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 12,
      "con": 13,
      "int": 14,
      "wis": 11,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (1d10) Slashing damage plus 3 (1d6) Poison damage."
      },
      {
        "name": "Poison Breath 5",
        "desc": "con 11, each creature in a 15-foot Cone. {@actSaveFail} 21 (6d6) Poison damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Green Hag": {
    "name": "Green Hag",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 82,
      "hitDice": "11d8 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 12,
      "con": 16,
      "int": 13,
      "wis": 14,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Elvish",
      "Sylvan"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The hag can breathe air and water."
      },
      {
        "name": "Mimicry",
        "desc": "The hag can mimic animal sounds and humanoid voices. A creature that hears the sounds can tell they are imitations only with a successful 14 Wisdom (Insight|XPHB) check."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hag makes two Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +6, reach 5 ft. {@h}8 (1d8) Slashing damage plus 3 (1d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Green Slaad": {
    "name": "Green Slaad",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 8,
    "alignment": "Chaotic Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 144,
      "hitDice": "17d10 + 51"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 15,
      "con": 16,
      "int": 11,
      "wis": 8,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Slaad; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The slaad has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Regeneration",
        "desc": "The slaad regains 10 Hit at the start of each of its turns if it has at least 1 Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The slaad makes three Chaos Staff attacks."
      },
      {
        "name": "Chaos Staff",
        "desc": "m,r Roll: +7, reach 10 ft. or range 60 ft. {@h}8 (1d8) Force damage. Until the start of the slaad's next turn, the target has a condition determined by rolling 1d4: on a 1, Charmed; on a 2, Frightened; on a 3, Poisoned; or on a 4, Incapacitated."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Grell": {
    "name": "Grell",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 55,
      "hitDice": "10d8 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 13,
      "int": 12,
      "wis": 11,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "prone"
    ],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Deep Speech"
    ],
    "traits": [
      {
        "name": "Abduct",
        "desc": "The grell needn't spend extra movement to move a creature it is grappling."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The grell makes one Beak attack and one Paralyzing Tentacles attack."
      },
      {
        "name": "Beak",
        "desc": "m Roll: +4, reach 5 ft. {@h}11 (2d8) Piercing damage."
      },
      {
        "name": "Paralyzing Tentacles",
        "desc": "m Roll: +4, reach 10 ft. {@h}7 (1d10) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 12) from two of ten tentacles. The target is also subjected to the following effect. con 11. {@actSaveFail} The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. While Poisoned, the target has the Paralyzed condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Grick": {
    "name": "Grick",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 54,
      "hitDice": "12d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 14,
      "con": 11,
      "int": 3,
      "wis": 14,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The grick makes one Beak attack and one Tentacles attack."
      },
      {
        "name": "Beak",
        "desc": "m Roll: +4, reach 5 ft. {@h}9 (2d6) Piercing damage."
      },
      {
        "name": "Tentacles",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (1d10) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 12) from all four tentacles."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Grick Ancient": {
    "name": "Grick Ancient",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 7,
    "alignment": "Unaligned",
    "armorClass": 18,
    "hitPoints": {
      "value": 135,
      "hitDice": "18d10 + 36"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 16,
      "con": 15,
      "int": 4,
      "wis": 14,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The grick makes one Beak attack, one Slam attack, and one Tentacles attack."
      },
      {
        "name": "Beak",
        "desc": "m Roll: +7, reach 10 ft. {@h}22 (4d8) Piercing damage."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +7, reach 10 ft. {@h}7 (1d6) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Tentacles",
        "desc": "m Roll: +7, reach 10 ft. {@h}15 (2d10) Slashing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 14) from all four tentacles."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Griffon": {
    "name": "Griffon",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 59,
      "hitDice": "7d10 + 21"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 2,
      "wis": 13,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The griffon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +6, reach 5 ft. {@h}8 (1d8) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 14) from both of the griffon's front claws."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Grimlock": {
    "name": "Grimlock",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 12,
      "con": 12,
      "int": 9,
      "wis": 8,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bone Cudgel",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Bludgeoning damage plus 2 (1d4) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Guard": {
    "name": "Guard",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 12,
      "con": 12,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Spear",
        "desc": "m,r Roll: +3, reach 5 ft. or range 20/60 ft. {@h}4 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Guard Captain": {
    "name": "Guard Captain",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 4,
    "alignment": "Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 75,
      "hitDice": "10d8 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 16,
      "int": 12,
      "wis": 14,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The guard makes two attacks, using Javelin or Longsword in any combination."
      },
      {
        "name": "Javelin",
        "desc": "m,r Roll: +6, reach 5 ft. or range 30/120 ft. {@h}14 (3d6) Piercing damage."
      },
      {
        "name": "Longsword",
        "desc": "m Roll: +6, reach 5 ft. {@h}15 (2d10) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Guardian Naga": {
    "name": "Guardian Naga",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 10,
    "alignment": "Lawful Good",
    "armorClass": 18,
    "hitPoints": {
      "value": 136,
      "hitDice": "16d10 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 18,
      "con": 16,
      "int": 16,
      "wis": 19,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 7,
      "int": 7,
      "wis": 8,
      "cha": 8
    },
    "conditionImmunities": [
      "charmed",
      "paralyzed",
      "poisoned",
      "restrained"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial",
      "Common"
    ],
    "traits": [
      {
        "name": "Celestial Restoration",
        "desc": "If the naga dies, it returns to life in 1d6 days and regains all its Hit unless Dispel Evil and Good is cast on its remains."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The naga makes two Bite attacks. It can replace any attack with a use of Poisonous Spittle."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +8, reach 10 ft. {@h}17 (2d12) Piercing damage plus 22 (4d10) Poison damage."
      },
      {
        "name": "Poisonous Spittle",
        "desc": "con 16, one creature the naga can see within 60 feet. {@actSaveFail} 31 (7d8) Poison damage, and the target has the Blinded condition until the start of the naga's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Gulthias Blight": {
    "name": "Gulthias Blight",
    "size": "Gargantuan",
    "type": "plant",
    "challengeRating": 16,
    "alignment": "Neutral Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 264,
      "hitDice": "16d20 + 96"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 25,
      "dex": 10,
      "con": 22,
      "int": 10,
      "wis": 18,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "deafened"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "fire",
      "necrotic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Druidic"
    ],
    "traits": [
      {
        "name": "Blight Seeds",
        "desc": "When it finishes a Long, the blight expels 1d6 seeds into unoccupied spaces on the ground within 30 feet of itself. After 24 hours, the seeds become creatures under the blight's control. Roll 1d8 for each seed to determine the creature it becomes: on 1-4, Twig Blight; on 5-6, Needle Blight; on 7-8, Vine Blight."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The blight makes two attacks, using Slam or Thorn Volley in any combination. It also uses Life-Draining Root."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +12, reach 10 ft. {@h}25 (4d8) Bludgeoning damage."
      },
      {
        "name": "Thorn Volley",
        "desc": "r Roll: +12, range 60/180 ft. {@h}20 (3d8) Piercing damage."
      },
      {
        "name": "Life-Draining Root",
        "desc": "con 20, one Huge or smaller creature the blight can see within 30 feet. {@actSaveFail} 14 (2d6) Necrotic damage, and the target has the Grappled condition (escape 17) from one of six roots. Until the grapple ends, the target has the Restrained condition and takes 14 (4d6) Necrotic damage at the start of each of its turns. The target's Hit maximum decreases by an amount equal to the Necrotic damage taken, and the blight regains Hit equal to that amount."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Half-Dragon": {
    "name": "Half-Dragon",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 105,
      "hitDice": "14d8 + 42"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 14,
      "con": 16,
      "int": 10,
      "wis": 15,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Draconic Origin",
        "desc": "The half-dragon is related to a type of dragon associated with one of the following damage types (DM's choice): Acid, Cold, Fire, Lightning, or Poison. This choice affects other aspects of the stat block."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The half-dragon makes two Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +7, reach 10 ft. {@h}6 (1d4) Slashing damage plus 7 (2d6) damage of the type chosen for the Draconic Origin trait."
      },
      {
        "name": "Dragon's Breath 5",
        "desc": "dex 14, each creature in a 30-foot Cone. {@actSaveFail} 28 (8d6) damage of the type chosen for the Draconic Origin trait. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Harpy": {
    "name": "Harpy",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 38,
      "hitDice": "7d8 + 7"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 13,
      "con": 12,
      "int": 7,
      "wis": 10,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +3, reach 5 ft. {@h}6 (2d4) Slashing damage."
      },
      {
        "name": "Luring Song",
        "desc": "The harpy sings a magical melody, which lasts until the harpy's Concentration ends on it. wis 11, each Humanoid and Giant in a 300-foot Emanation originating from the harpy when the song starts. {@actSaveFail} The target has the Charmed condition until the song ends and repeats the save at the end of each of its turns. While Charmed, the target has the Incapacitated condition and ignores the Luring Song of other harpies. If the target is more than 5 feet from the harpy, the target moves on its turn toward the harpy by the most direct route, trying to get within 5 feet of the harpy. It doesn't avoid Opportunity Attacks; however, before moving into damaging terrain (such as lava or a pit) and whenever it takes damage from a source other than the harpy, the target repeats the save. {@actSaveSuccess} The target is immune to this harpy's Luring Song for 24 hours."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Haunting Revenant": {
    "name": "Haunting Revenant",
    "size": "Gargantuan",
    "type": "undead",
    "challengeRating": 10,
    "alignment": "Neutral",
    "armorClass": 20,
    "hitPoints": {
      "value": 203,
      "hitDice": "14d20 + 56"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 12,
      "con": 18,
      "int": 16,
      "wis": 18,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 8,
      "int": 0,
      "wis": 8,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "necrotic",
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [
      {
        "name": "Haunted Zone",
        "desc": "con 17, any creature that casts a spell while inside the revenant's space. {@actSaveFail} The spell fails and is wasted."
      },
      {
        "name": "Undead Restoration",
        "desc": "If the revenant dies, it revives 24 hours later unless Dispel Evil and Good is cast on its remains. If it revives, it animates another Gargantuan object or structure elsewhere on the same plane of existence; it now looks different but uses the same stat block and returns with all its Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The revenant makes two Object|XPHB Slam attacks and uses Invitation."
      },
      {
        "name": "Object Slam",
        "desc": "m,r Roll: +9 (with Advantage|XPHB if the target is inside the revenant's space), reach 10 ft. or range 30/90 ft. {@h}27 (5d8) Bludgeoning damage."
      },
      {
        "name": "Invitation",
        "desc": "cha 17, each creature in a 60-foot Cone. {@actSaveFail} The target is teleported inside the revenant's space and swallowed. A swallowed creature has Cover|XPHB|Total against attacks and other effects outside the revenant. While the revenant has Hit, a swallowed creature can leave the revenant's space only by using magic that enables planar travel, such as the Plane Shift spell."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hawk": {
    "name": "Hawk",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 5,
      "dex": 16,
      "con": 8,
      "int": 2,
      "wis": 14,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Talons",
        "desc": "m Roll: +5, reach 5 ft. {@h}1 Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hell Hound": {
    "name": "Hell Hound",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 58,
      "hitDice": "9d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 14,
      "int": 6,
      "wis": 13,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Infernal but can't speak"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The hound has Advantage|XPHB on an attack roll against a creature if at least one of the hound's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hound makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Piercing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 12, each creature in a 15-foot Cone. {@actSaveFail} 17 (5d6) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Helmed Horror": {
    "name": "Helmed Horror",
    "size": "Medium",
    "type": "construct",
    "challengeRating": 4,
    "alignment": "Neutral",
    "armorClass": 20,
    "hitPoints": {
      "value": 67,
      "hitDice": "9d8 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 13,
      "con": 16,
      "int": 10,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
      "stunned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus one other language but can't speak"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The helmed horror has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Spell Immunity",
        "desc": "The helmed horror is immune to three spells chosen by its creator. Typical choices include Heat Metal, Lightning Bolt, and Magic Missile."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The helmed horror makes two Arcane Sword attacks."
      },
      {
        "name": "Arcane Sword",
        "desc": "m Roll: +6, reach 5 ft. {@h}8 (1d8) Slashing damage plus 5 (1d10) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hezrou": {
    "name": "Hezrou",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 8,
    "alignment": "Chaotic Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 157,
      "hitDice": "15d10 + 75"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 17,
      "con": 20,
      "int": 5,
      "wis": 12,
      "cha": 13
    },
    "savingThrows": {
      "str": 7,
      "dex": 0,
      "con": 8,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the hezrou dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "desc": "The hezrou has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Stench",
        "desc": "con 16, any creature that starts its turn in a 10-foot Emanation originating from the hezrou. {@actSaveFail} The target has the Poisoned condition until the start of its next turn."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hezrou makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 5 ft. {@h}6 (1d4) Slashing damage plus 9 (2d8) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hill Giant": {
    "name": "Hill Giant",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 5,
    "alignment": "Chaotic Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 105,
      "hitDice": "10d12 + 40"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 8,
      "con": 19,
      "int": 5,
      "wis": 9,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The giant makes two attacks, using Tree Club or Trash Lob in any combination."
      },
      {
        "name": "Tree Club",
        "desc": "m Roll: +8, reach 10 ft. {@h}18 (3d8) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Trash Lob",
        "desc": "r Roll: +8, range 60/240 ft. {@h}16 (2d10) Bludgeoning damage, and the target has the Poisoned condition until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hippogriff": {
    "name": "Hippogriff",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 26,
      "hitDice": "4d10 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 13,
      "con": 13,
      "int": 2,
      "wis": 12,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The hippogriff doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hippogriff makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hippopotamus": {
    "name": "Hippopotamus",
    "size": "Large",
    "type": "beast",
    "challengeRating": 4,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 82,
      "hitDice": "11d10 + 22"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 7,
      "con": 15,
      "int": 2,
      "wis": 12,
      "cha": 4
    },
    "savingThrows": {
      "str": 7,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Hold Breath",
        "desc": "The hippopotamus can hold its breath for 10 minutes."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hippopotamus makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}16 (2d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hobgoblin Captain": {
    "name": "Hobgoblin Captain",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 58,
      "hitDice": "9d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 14,
      "int": 12,
      "wis": 10,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [
      {
        "name": "Aura of Authority",
        "desc": "While in a 10-foot Emanation originating from the hobgoblin, the hobgoblin and its allies have Advantage|XPHB on attack rolls and saving throws, provided the hobgoblin doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hobgoblin makes two attacks, using Greatsword or Longbow in any combination."
      },
      {
        "name": "Greatsword",
        "desc": "m Roll: +4, reach 5 ft. {@h}9 (2d6) Slashing damage plus 3 (1d6) Poison damage."
      },
      {
        "name": "Longbow",
        "desc": "r Roll: +4, range 150/600 ft. {@h}6 (1d8) Piercing damage plus 5 (2d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hobgoblin Warlord": {
    "name": "Hobgoblin Warlord",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 6,
    "alignment": "Lawful Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 112,
      "hitDice": "15d8 + 45"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 14,
      "con": 16,
      "int": 14,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 5,
      "wis": 3,
      "cha": 5
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [
      {
        "name": "Aura of Authority",
        "desc": "While in a 30-foot Emanation originating from the hobgoblin, the hobgoblin and its allies have Advantage|XPHB on attack rolls and saving throws, provided the hobgoblin doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hobgoblin makes three attacks, using Javelin or Longsword in any combination."
      },
      {
        "name": "Javelin",
        "desc": "m,r Roll: +6, reach 5 ft. or range 30/120 ft. {@h}11 (2d6) Piercing damage, and the target's Speed|XPHB decreases by 10 feet until the start of the hobgoblin's next turn."
      },
      {
        "name": "Longsword",
        "desc": "m Roll: +6, reach 5 ft. {@h}12 (2d8) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hobgoblin Warrior": {
    "name": "Hobgoblin Warrior",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 12,
      "con": 12,
      "int": 10,
      "wis": 10,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Goblin"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The hobgoblin has Advantage|XPHB on an attack roll against a creature if at least one of the hobgoblin's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Longsword",
        "desc": "m Roll: +3, reach 5 ft. {@h}12 (2d10) Slashing damage."
      },
      {
        "name": "Longbow",
        "desc": "r Roll: +3, range 150/600 ft. {@h}5 (1d8) Piercing damage plus 7 (3d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Homunculus": {
    "name": "Homunculus",
    "size": "Tiny",
    "type": "construct",
    "challengeRating": 0,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 4,
      "hitDice": "1d4 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 4,
      "dex": 15,
      "con": 14,
      "int": 10,
      "wis": 10,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus one other language but can't speak"
    ],
    "traits": [
      {
        "name": "Telepathic Bond",
        "desc": "While the homunculus is on the same plane of existence as its master, the two of them can communicate telepathically with each other."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}1 Piercing damage, and the target is subjected to the following effect. con 12. {@actSaveFail} The target has the Poisoned condition until the end of the homunculus's next turn. 5 The target has the Poisoned condition for 1 minute. While Poisoned, the target has the Unconscious condition, which ends early if the target takes any damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hook Horror": {
    "name": "Hook Horror",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 75,
      "hitDice": "10d10 + 20"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 10,
      "con": 15,
      "int": 6,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 4,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Hook Horror"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hook horror makes two Hook attacks."
      },
      {
        "name": "Hook",
        "desc": "m Roll: +6, reach 10 ft. {@h}11 (2d6) Piercing damage. If the target is a Large or smaller creature, the hook horror moves the target 5 feet straight toward or away from itself."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Horned Devil": {
    "name": "Horned Devil",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 11,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 199,
      "hitDice": "19d10 + 95"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 17,
      "con": 21,
      "int": 12,
      "wis": 16,
      "cha": 18
    },
    "savingThrows": {
      "str": 10,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 7,
      "cha": 8
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Diabolical Restoration",
        "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "desc": "The devil has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The devil makes three attacks, using Searing Fork or Hurl Flame in any combination. It can replace one attack with a use of Infernal Tail."
      },
      {
        "name": "Searing Fork",
        "desc": "m Roll: +10, reach 10 ft. {@h}15 (2d8) Piercing damage plus 9 (2d8) Fire damage."
      },
      {
        "name": "Hurl Flame",
        "desc": "r Roll: +8, range 150 ft. {@h}26 (5d8) Fire damage. If the target is a flammable object that isn't being worn or carried, it starts burning|XPHB."
      },
      {
        "name": "Infernal Tail",
        "desc": "dex 17, one creature the devil can see within 10 feet. {@actSaveFail} 10 (1d8) Necrotic damage, and the target receives an infernal wound if it doesn't have one. While wounded, the target loses 10 (3d6) Hit at the start of each of its turns. The wound closes after 1 minute, after a spell restores Hit to the target, or after the target or a creature within 5 feet of it takes an action to stanch the wound, doing so by succeeding on a 17 Wisdom (Medicine|XPHB) check."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hunter Shark": {
    "name": "Hunter Shark",
    "size": "Large",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 15,
      "int": 1,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Water Breathing",
        "desc": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +6 (with Advantage|XPHB if the target doesn't have all its Hit), reach 5 ft. {@h}14 (3d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hydra": {
    "name": "Hydra",
    "size": "Huge",
    "type": "monstrosity",
    "challengeRating": 8,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 184,
      "hitDice": "16d12 + 80"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 12,
      "con": 20,
      "int": 2,
      "wis": 10,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "stunned",
      "unconscious"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Hold Breath",
        "desc": "The hydra can hold its breath for 1 hour."
      },
      {
        "name": "Multiple Heads",
        "desc": "The hydra has five heads. Whenever the hydra takes 25 damage or more on a single turn, one of its heads dies. The hydra dies if all its heads are dead. At the end of each of its turns when it has at least one living head, the hydra grows two heads for each of its heads that died since its last turn, unless it has taken Fire damage since its last turn. The hydra regains 20 Hit when it grows new heads."
      },
      {
        "name": "Reactive Heads",
        "desc": "For each head the hydra has beyond one, it gets an extra Reaction|XPHB that can be used only for Opportunity Attacks."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hydra makes as many Bite attacks as it has heads."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +8, reach 10 ft. {@h}10 (1d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Hyena": {
    "name": "Hyena",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 5,
      "hitDice": "1d8 + 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 13,
      "con": 12,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The hyena has Advantage|XPHB on an attack roll against a creature if at least one of the hyena's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +2, reach 5 ft. {@h}3 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ice Devil": {
    "name": "Ice Devil",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 14,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 228,
      "hitDice": "24d10 + 96"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 14,
      "con": 18,
      "int": 18,
      "wis": 15,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 9,
      "int": 0,
      "wis": 7,
      "cha": 9
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "cold",
      "fire",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Diabolical Restoration",
        "desc": "If the devil dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit somewhere in the Nine Hells."
      },
      {
        "name": "Magic Resistance",
        "desc": "The devil has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The devil makes three Ice Spear attacks. It can replace one attack with a Tail attack."
      },
      {
        "name": "Ice Spear",
        "desc": "m,r Roll: +10, reach 5 ft. or range 30/120 ft. {@h}14 (2d8) Piercing damage plus 10 (3d6) Cold damage. Until the end of its next turn, the target can't take a Bonus or Reaction|XPHB, its Speed|XPHB decreases by 10 feet, and it can move or take one action on its turn, not both. {@hom}The spear magically returns to the devil's hand immediately after a ranged attack."
      },
      {
        "name": "Tail",
        "desc": "m Roll: +10, reach 10 ft. {@h}15 (3d6) Bludgeoning damage plus 18 (4d8) Cold damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ice Mephit": {
    "name": "Ice Mephit",
    "size": "Small",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 21,
      "hitDice": "6d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 7,
      "dex": 13,
      "con": 10,
      "int": 9,
      "wis": 11,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "cold",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Aquan, Auran)"
    ],
    "traits": [
      {
        "name": "Death Burst",
        "desc": "The mephit explodes when it dies. con 10, each creature in a 5-foot Emanation originating from the mephit. {@actSaveFail} 5 (2d4) Cold damage. {@actSaveSuccess} Half damage."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +3, reach 5 ft. {@h}3 (1d4) Slashing damage plus 2 (1d4) Cold damage."
      },
      {
        "name": "Frost Breath {@recharge}",
        "desc": "con 10, each creature in a 15-foot Cone. {@actSaveFail} 7 (3d4) Cold damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Imp": {
    "name": "Imp",
    "size": "Tiny",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Lawful Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 21,
      "hitDice": "6d4 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 17,
      "con": 13,
      "int": 11,
      "wis": 12,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Infernal"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The imp has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Sting",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Piercing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Shape-Shift",
        "desc": "The imp shape-shifts to resemble a rat (Speed|XPHB 20 ft.), a raven (20 ft., Fly 60 ft.), or a spider (20 ft., Climb 20 ft.), or it returns to its true form. Its statistics are the same in each form, except for its Speed|XPHB. Any equipment it is wearing or carrying isn't transformed."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Incubus": {
    "name": "Incubus",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 4,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 66,
      "hitDice": "12d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 17,
      "con": 13,
      "int": 15,
      "wis": 12,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "cold",
      "fire",
      "poison",
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Infernal; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Succubus Form",
        "desc": "When the incubus finishes a Long, it can shape-shift into a Succubus, using that stat block instead of this one. Any equipment it's wearing or carrying isn't transformed."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The incubus makes two Restless Touch attacks."
      },
      {
        "name": "Restless Touch",
        "desc": "m Roll: +7, reach 5 ft. {@h}15 (3d6) Psychic damage, and the target is cursed for 24 hours or until the incubus dies. Until the curse ends, the target gains no benefit from finishing Short Rests."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Intellect Devourer": {
    "name": "Intellect Devourer",
    "size": "Tiny",
    "type": "aberration",
    "challengeRating": 2,
    "alignment": "Lawful Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 28,
      "hitDice": "8d4 + 8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 14,
      "con": 13,
      "int": 14,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Deep Speech but can't speak; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Detect Intelligence",
        "desc": "The intellect devourer magically senses the location of any creature within 300 feet of itself that has an Intelligence score of 3 or higher, regardless of interposing barriers."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The intellect devourer makes one Claw attack and uses Devour Intellect."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (2d4) Slashing damage."
      },
      {
        "name": "Devour Intellect",
        "desc": "int 12, one creature the intellect devourer can see within 5 feet. {@actSaveFail} 11 (2d10) Psychic damage, and the target has the Stunned condition until the end of the intellect devourer's next turn."
      },
      {
        "name": "Steal Body",
        "desc": "int 12, one Small or Medium creature within 5 feet that has the Incapacitated condition, is a Humanoid or Beast, and has 10 Hit or fewer. {@actSaveFail} The intellect devourer possesses the target, consumes its brain, and teleports inside its skull. While there, the intellect devourer has Cover|XPHB|Total against attacks and other effects originating outside its host. The intellect devourer retains its Intelligence, Wisdom, and Charisma scores; its understanding of Deep Speech; its telepathy; and its Detect Intelligence trait. It otherwise adopts the target's game statistics. It knows everything the target knew, including spells and languages. If the host body dies, the intellect devourer must leave it. The intellect devourer is also forced out if the target regains its devoured brain by means of a Wish spell. By spending 5 feet of its movement, the intellect devourer can voluntarily leave the body, teleporting to the nearest unoccupied space within 5 feet of it. The body then dies unless its brain is restored before the end of the intellect devourer's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Invisible Stalker": {
    "name": "Invisible Stalker",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 6,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 97,
      "hitDice": "13d10 + 26"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 19,
      "con": 14,
      "int": 10,
      "wis": 15,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Primordial (Auran)"
    ],
    "traits": [
      {
        "name": "Air Form",
        "desc": "The stalker can enter an enemy's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Invisibility",
        "desc": "The stalker has the Invisible condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The stalker makes three Wind Swipe attacks. It can replace one attack with a use of Vortex."
      },
      {
        "name": "Wind Swipe",
        "desc": "m Roll: +7, reach 5 ft. {@h}11 (2d6) Force damage."
      },
      {
        "name": "Vortex",
        "desc": "con 14, one Large or smaller creature in the stalker's space. {@actSaveFail} 7 (1d8) Thunder damage, and the target has the Grappled condition (escape 13). Until the grapple ends, the target can't cast spells with a Verbal component and takes 7 (2d6) Thunder damage at the start of each of the stalker's turns."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Iron Golem": {
    "name": "Iron Golem",
    "size": "Large",
    "type": "construct",
    "challengeRating": 16,
    "alignment": "Unaligned",
    "armorClass": 20,
    "hitPoints": {
      "value": 252,
      "hitDice": "24d10 + 120"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 24,
      "dex": 9,
      "con": 20,
      "int": 3,
      "wis": 11,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison",
      "psychic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus two other languages but can't speak"
    ],
    "traits": [
      {
        "name": "Fire Absorption",
        "desc": "Whenever the golem is subjected to Fire damage, it regains a number of Hit equal to the Fire damage dealt."
      },
      {
        "name": "Immutable Form",
        "desc": "The golem can't shape-shift."
      },
      {
        "name": "Magic Resistance",
        "desc": "The golem has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The golem makes two attacks, using Bladed Arm or Fiery Bolt in any combination."
      },
      {
        "name": "Bladed Arm",
        "desc": "m Roll: +12, reach 10 ft. {@h}20 (3d8) Slashing damage plus 10 (3d6) Fire damage."
      },
      {
        "name": "Fiery Bolt",
        "desc": "r Roll: +10, range 120 ft. {@h}36 (8d8) Fire damage."
      },
      {
        "name": "Poison Breath {@recharge}",
        "desc": "con 18, each creature in a 60-foot Cone. {@actSaveFail} 55 (10d10) Poison damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Jackal": {
    "name": "Jackal",
    "size": "Small",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 3,
      "hitDice": "1d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 15,
      "con": 11,
      "int": 3,
      "wis": 12,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +1, reach 5 ft. {@h}1 (1d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Jackalwere": {
    "name": "Jackalwere",
    "size": "Small",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 18,
      "hitDice": "4d6 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 15,
      "con": 12,
      "int": 13,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The jackalwere has Advantage|XPHB on an attack roll against a creature if at least one of the jackalwere's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The jackalwere makes two Rend or Slam attacks."
      },
      {
        "name": "Rend (Jackal or Hybrid Form Only)",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage."
      },
      {
        "name": "Slam (Human or Hybrid Form Only)",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Bludgeoning damage."
      },
      {
        "name": "Sleep Gaze 5",
        "desc": "wis 10, one creature the jackalwere can see within 30 feet (Constructs and Undead succeed automatically). {@actSaveFail} The target has the Unconscious condition for 10 minutes or until it takes damage or a creature within 5 feet of it takes an action to wake it. {@actSaveSuccess} The target is immune to this jackalwere's Sleep Gaze for 24 hours."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Juvenile Shadow Dragon": {
    "name": "Juvenile Shadow Dragon",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 14,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "necrotic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Living Shadow",
        "desc": "While in Dim or Darkness|XPHB, the dragon has Resistance|XPHB to damage that isn't Force, Psychic, or Radiant."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the dragon has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 10 ft. {@h}7 (1d8) Slashing damage plus 3 (1d6) Necrotic damage."
      },
      {
        "name": "Shadow Breath 5",
        "desc": "dex 13, each creature in a 30-foot Cone. {@actSaveFail} 17 (5d6) Necrotic damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} A Humanoid reduced to 0 Hit by this damage dies, and a Shadow rises from its corpse. The shadow is under the dragon's control and shares the dragon's Initiative|XPHB count but acts immediately after the dragon."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Kenku": {
    "name": "Kenku",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 13,
      "hitDice": "3d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 16,
      "con": 10,
      "int": 11,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Primordial (Auran)"
    ],
    "traits": [
      {
        "name": "Mimicry",
        "desc": "The kenku can mimic any sounds it has heard, including voices. A creature that hears the sounds can tell they are imitations with a successful 14 Wisdom (Insight|XPHB) check."
      }
    ],
    "actions": [
      {
        "name": "Shadow Blade",
        "desc": "m,r Roll: +5, reach 5 ft. or range 60 ft. {@h}6 (1d6) Necrotic damage. {@hom}The blade magically returns to the kenku's hand immediately after a ranged attack."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Killer Whale": {
    "name": "Killer Whale",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 3,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 90,
      "hitDice": "12d12 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 14,
      "con": 13,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Hold Breath",
        "desc": "The whale can hold its breath for 30 minutes."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 5 ft. {@h}21 (5d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Knight": {
    "name": "Knight",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 3,
    "alignment": "Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 52,
      "hitDice": "8d8 + 16"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 11,
      "con": 14,
      "int": 11,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 4,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The knight makes two attacks, using Greatsword or Heavy Crossbow in any combination."
      },
      {
        "name": "Greatsword",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Slashing damage plus 4 (1d8) Radiant damage."
      },
      {
        "name": "Heavy Crossbow",
        "desc": "r Roll: +2, range 100/400 ft. {@h}11 (2d10) Piercing damage plus 4 (1d8) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Kobold Warrior": {
    "name": "Kobold Warrior",
    "size": "Small",
    "type": "dragon",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 7,
      "hitDice": "3d6 - 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 7,
      "dex": 15,
      "con": 9,
      "int": 8,
      "wis": 7,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The kobold has Advantage|XPHB on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the kobold has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Dagger",
        "desc": "m,r Roll: +4, reach 5 ft. or range 20/60 ft. {@h}4 (1d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Kraken": {
    "name": "Kraken",
    "size": "Gargantuan",
    "type": "monstrosity",
    "challengeRating": 23,
    "alignment": "Chaotic Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 481,
      "hitDice": "26d20 + 208"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 30,
      "dex": 11,
      "con": 26,
      "int": 22,
      "wis": 18,
      "cha": 20
    },
    "savingThrows": {
      "str": 17,
      "dex": 7,
      "con": 15,
      "int": 0,
      "wis": 11,
      "cha": 0
    },
    "conditionImmunities": [
      "frightened",
      "grappled",
      "paralyzed",
      "restrained"
    ],
    "damageImmunities": [
      "cold",
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Abyssal",
      "Celestial",
      "Infernal",
      "and Primordial but can't speak; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The kraken can breathe air and water."
      },
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the kraken fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Siege Monster",
        "desc": "The kraken deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The kraken makes two Tentacle attacks and uses Fling, Lightning Strike, or Swallow."
      },
      {
        "name": "Tentacle",
        "desc": "m Roll: +17, reach 30 ft. {@h}24 (4d6) Bludgeoning damage. The target has the Grappled condition (escape 20) from one of ten tentacles, and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Fling",
        "desc": "The kraken throws a Large or smaller creature Grappled by it to a space it can see within 60 feet of itself that isn't in the air. dex 25, the creature thrown and each creature in the destination space. {@actSaveFail} 18 (4d8) Bludgeoning damage, and the target has the Prone condition. {@actSaveSuccess} Half damage only."
      },
      {
        "name": "Lightning Strike",
        "desc": "dex 23, one creature the kraken can see within 120 feet. {@actSaveFail} 33 (6d10) Lightning damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Swallow",
        "desc": "dex 25, one creature Grappled by the kraken (it can have up to four creatures swallowed at a time). {@actSaveFail} 23 (3d8) Piercing damage. If the target is Large or smaller, it is swallowed and no longer Grappled. A swallowed creature has the Restrained condition, has Cover|XPHB|Total against attacks and other effects outside the kraken, and takes 24 (7d6) Acid damage at the start of each of its turns. If the kraken takes 50 damage or more on a single turn from a creature inside it, the kraken must succeed on a 25 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls in a space within 10 feet of the kraken with the Prone condition. If the kraken dies, any swallowed creature no longer has the Restrained condition and can escape from the corpse using 15 feet of movement, exiting Prone."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Kuo-toa": {
    "name": "Kuo-toa",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 18,
      "hitDice": "4d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 10,
      "con": 11,
      "int": 11,
      "wis": 10,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The kuo-toa can breathe air and water."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the kuo-toa has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Spear",
        "desc": "m,r Roll: +3, reach 5 ft. or range 20/60 ft. {@h}5 (1d8) Piercing damage."
      },
      {
        "name": "Sticky Net (1/Day)",
        "desc": "dex 10, one Large or smaller creature the kuo-toa can see within 15 feet. {@actSaveFail} The target has the Restrained condition until the net is destroyed (AC 10; HP 5; Immunity|XPHB to Bludgeoning, Poison, and Psychic damage). A creature can take an action to make a 10 Strength (Athletics|XPHB) check to free itself or another creature in a net within 5 feet, destroying the net on a success."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Kuo-toa Archpriest": {
    "name": "Kuo-toa Archpriest",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 6,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 105,
      "hitDice": "14d8 + 42"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 16,
      "int": 13,
      "wis": 16,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The kuo-toa can breathe air and water."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the kuo-toa has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The kuo-toa makes three Strange Scepter attacks."
      },
      {
        "name": "Strange Scepter",
        "desc": "m,r Roll: +6, reach 5 ft. or range 120 ft. {@h}20 (5d6) Lightning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Kuo-toa Monitor": {
    "name": "Kuo-toa Monitor",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 65,
      "hitDice": "10d8 + 20"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 10,
      "con": 14,
      "int": 12,
      "wis": 14,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The kuo-toa can breathe air and water."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the kuo-toa has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The kuo-toa makes two Bone Whip attacks."
      },
      {
        "name": "Bone Whip",
        "desc": "m Roll: +5, reach 10 ft. {@h}6 (1d6) Slashing damage plus 7 (2d6) Lightning damage, and the target can't make Opportunity Attacks until the start of the kuo-toa's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Kuo-toa Whip": {
    "name": "Kuo-toa Whip",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 45,
      "hitDice": "7d8 + 14"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 10,
      "con": 14,
      "int": 12,
      "wis": 14,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The kuo-toa can breathe air and water."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the kuo-toa has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Pincer Staff",
        "desc": "m Roll: +4, reach 10 ft. {@h}9 (2d6) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 12). Until the grapple ends, the kuo-toa can't make Pincer Staff attacks."
      },
      {
        "name": "Conjure Slimy Glob",
        "desc": "r Roll: +4, range 60 ft. {@h}9 (3d4) Acid damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Lacedon Ghoul": {
    "name": "Lacedon Ghoul",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 15,
      "con": 10,
      "int": 7,
      "wis": 10,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ghoul makes two Icy Bite attacks."
      },
      {
        "name": "Icy Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}9 (2d6) Cold damage, and the target's Speed|XPHB decreases by 5 feet until the start of the ghoul's next turn."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Slashing damage. If the target is a creature that isn't an Undead or elf, it is subjected to the following effect. con 10. {@actSaveFail} The target has the Paralyzed condition until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Lamia": {
    "name": "Lamia",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 97,
      "hitDice": "13d10 + 26"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 13,
      "con": 15,
      "int": 14,
      "wis": 15,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The lamia makes two Claw attacks. It can replace one attack with a use of Corrupting Touch."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Slashing damage plus 7 (2d6) Psychic damage."
      },
      {
        "name": "Corrupting Touch",
        "desc": "wis 13, one creature the lamia can see within 5 feet. {@actSaveFail} 13 (3d8) Psychic damage, and the target is cursed for 1 hour. Until the curse ends, the target has the Charmed and Poisoned conditions."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Larva": {
    "name": "Larva",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 0,
    "alignment": "Neutral Evil",
    "armorClass": 9,
    "hitPoints": {
      "value": 9,
      "hitDice": "2d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 9,
      "dex": 9,
      "con": 10,
      "int": 6,
      "wis": 10,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus one other language but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +1, reach 5 ft. {@h}1 (1d4) Necrotic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Lemure": {
    "name": "Lemure",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 0,
    "alignment": "Lawful Evil",
    "armorClass": 9,
    "hitPoints": {
      "value": 9,
      "hitDice": "2d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 5,
      "con": 11,
      "int": 1,
      "wis": 11,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Infernal but can't speak"
    ],
    "traits": [
      {
        "name": "Hellish Restoration",
        "desc": "If the lemure dies in the Nine Hells, it revives with all its Hit in 1d10 days unless it is killed by a creature under the effects of a Bless spell or its remains are sprinkled with Holy Water."
      }
    ],
    "actions": [
      {
        "name": "Vile Slime",
        "desc": "m Roll: +2, reach 5 ft. {@h}2 (1d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Lich": {
    "name": "Lich",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 21,
    "alignment": "Neutral Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 315,
      "hitDice": "42d8 + 126"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 16,
      "con": 16,
      "int": 21,
      "wis": 14,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 10,
      "con": 10,
      "int": 12,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "cold",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (4/Day, or 5/Day in Lair)",
        "desc": "If the lich fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Spirit Jar",
        "desc": "If destroyed, the lich reforms in 1d10 days if it has a spirit jar, reviving with all its Hit. The new body appears in an unoccupied space within the lich's lair."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The lich makes three attacks, using Eldritch Burst or Paralyzing Touch in any combination."
      },
      {
        "name": "Eldritch Burst",
        "desc": "m,r Roll: +12, reach 5 ft. or range 120 ft. {@h}31 (4d12) Force damage."
      },
      {
        "name": "Paralyzing Touch",
        "desc": "m Roll: +12, reach 5 ft. {@h}15 (3d6) Cold damage, and the target has the Paralyzed condition until the start of the lich's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Lion": {
    "name": "Lion",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 22,
      "hitDice": "4d10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 15,
      "con": 11,
      "int": 3,
      "wis": 12,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The lion has Advantage|XPHB on an attack roll against a creature if at least one of the lion's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      },
      {
        "name": "Running Leap",
        "desc": "With a 10-foot running start, the lion can Long up to 25 feet."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The lion makes two Rend attacks. It can replace one attack with a use of Roar."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Slashing damage."
      },
      {
        "name": "Roar",
        "desc": "wis 11, one creature within 15 feet. {@actSaveFail} The target has the Frightened condition until the start of the lion's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Lizard": {
    "name": "Lizard",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 2,
      "hitDice": "1d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 11,
      "con": 10,
      "int": 1,
      "wis": 8,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The lizard can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +2, reach 5 ft. {@h}1 Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Lizardfolk Geomancer": {
    "name": "Lizardfolk Geomancer",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 33,
      "hitDice": "6d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 10,
      "con": 13,
      "int": 10,
      "wis": 15,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic",
      "Primordial (Terran)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The lizardfolk makes two Earth Burst attacks."
      },
      {
        "name": "Earth Burst",
        "desc": "m,r Roll: +4, reach 5 ft. or range 60 ft. {@h}9 (2d6) Bludgeoning damage."
      },
      {
        "name": "Hail of Stone 5",
        "desc": "con 12, each creature in a 20-foot-radius, 40-foot-high Cylinder centered on a point the lizardfolk can see within 60 feet. {@actSaveFail} 15 (6d4) Bludgeoning damage, and the target has the Prone condition. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Lizardfolk Sovereign": {
    "name": "Lizardfolk Sovereign",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 4,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 78,
      "hitDice": "12d8 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 15,
      "int": 11,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 4,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic",
      "Primordial (Terran)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The lizardfolk makes one Bite attack and one Earthen Maul attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (1d10) Piercing damage. If the target is a creature that isn't a Construct or an Undead, the lizardfolk gains Temporary equal to the damage dealt."
      },
      {
        "name": "Earthen Maul",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mage": {
    "name": "Mage",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 6,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 81,
      "hitDice": "18d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 9,
      "dex": 14,
      "con": 11,
      "int": 17,
      "wis": 12,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 6,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common and any three languages"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The mage makes three Arcane Burst attacks."
      },
      {
        "name": "Arcane Burst",
        "desc": "m,r Roll: +6, reach 5 ft. or range 120 ft. {@h}16 (3d8) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mage Apprentice": {
    "name": "Mage Apprentice",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 49,
      "hitDice": "9d8 + 9"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 14,
      "con": 12,
      "int": 16,
      "wis": 13,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 5,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Arcane Burst",
        "desc": "m,r Roll: +5, reach 5 ft. or range 120 ft. {@h}14 (2d10) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Magma Mephit": {
    "name": "Magma Mephit",
    "size": "Small",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 18,
      "hitDice": "4d6 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 12,
      "con": 12,
      "int": 7,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "cold"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Ignan, Terran)"
    ],
    "traits": [
      {
        "name": "Death Burst",
        "desc": "The mephit explodes when it dies. dex 11, each creature in a 5-foot Emanation originating from the mephit. {@actSaveFail} 7 (2d6) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +3, reach 5 ft. {@h}3 (1d4) Slashing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Fire Breath {@recharge}",
        "desc": "dex 11, each creature in a 15-foot Cone. {@actSaveFail} 7 (2d6) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Magmin": {
    "name": "Magmin",
    "size": "Small",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Chaotic Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 13,
      "hitDice": "3d6 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 7,
      "dex": 15,
      "con": 12,
      "int": 8,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Ignan)"
    ],
    "traits": [
      {
        "name": "Death Burst",
        "desc": "The magmin explodes when it dies. dex 11, each creature in a 10-foot Emanation originating from the magmin. {@actSaveFail} 7 (2d6) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "actions": [
      {
        "name": "Touch",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (2d4) Fire damage. If the target is a creature or a flammable object that isn't being worn or carried, it starts burning|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mammoth": {
    "name": "Mammoth",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 6,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 126,
      "hitDice": "11d12 + 55"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 24,
      "dex": 9,
      "con": 21,
      "int": 3,
      "wis": 11,
      "cha": 6
    },
    "savingThrows": {
      "str": 10,
      "dex": 0,
      "con": 8,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The mammoth makes two Gore attacks."
      },
      {
        "name": "Gore",
        "desc": "m Roll: +10, reach 10 ft. {@h}18 (2d10) Piercing damage. If the target is a Huge or smaller creature and the mammoth moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Manes": {
    "name": "Manes",
    "size": "Small",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 9,
    "hitPoints": {
      "value": 9,
      "hitDice": "2d6 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 9,
      "con": 13,
      "int": 3,
      "wis": 8,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Abyssal but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +2, reach 5 ft. {@h}5 (2d4) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Manes Vaporspawn": {
    "name": "Manes Vaporspawn",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 12,
      "con": 15,
      "int": 5,
      "wis": 8,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "grappled",
      "poisoned",
      "restrained"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Abyssal but can't speak"
    ],
    "traits": [
      {
        "name": "Contortionist",
        "desc": "The manes can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Sickening Vapors",
        "desc": "con 12, each creature in a 5-foot Emanation originating from the manes at the end of the manes's turn. {@actSaveFail} The target has the Incapacitated condition until the end of its next turn. {@actSaveSuccess} The target is immune to this manes's Sickening Vapors for 24 hours."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Slashing damage plus 5 (2d4) Necrotic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Manticore": {
    "name": "Manticore",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 68,
      "hitDice": "8d10 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 16,
      "con": 17,
      "int": 7,
      "wis": 12,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The manticore makes three attacks, using Rend or Tail Spike in any combination."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Slashing damage."
      },
      {
        "name": "Tail Spike",
        "desc": "r Roll: +5, range 100/200 ft. {@h}7 (1d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Marid": {
    "name": "Marid",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 11,
    "alignment": "Chaotic Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 229,
      "hitDice": "17d10 + 136"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 12,
      "con": 26,
      "int": 18,
      "wis": 17,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 8
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Aquan)"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The marid can breathe air and water."
      },
      {
        "name": "Elemental Restoration",
        "desc": "If the marid dies outside the Elemental Plane of Water, its body dissolves into brine, and it gains a new body in 1d4 days, reviving with all its Hit somewhere on the Plane of Water."
      },
      {
        "name": "Wishes",
        "desc": "The marid has a 30 percent chance of knowing the Wish spell. If the marid knows it, the marid can cast it only on behalf of a non-genie creature who communicates a wish in a way the marid can understand. If the marid casts the spell for the creature, the marid suffers none of the spell's stress. Once the marid has cast it three times, the marid can't do so again for 365 days."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The marid makes three Aquatic Lash attacks."
      },
      {
        "name": "Aquatic Lash",
        "desc": "m Roll: +10, reach 15 ft. {@h}15 (2d8) Slashing damage plus 9 (2d8) Cold damage."
      },
      {
        "name": "Water Jet",
        "desc": "dex 18, each creature in a 60-foot-long, 10-foot-wide Line. {@actSaveFail} 31 (9d6) Cold damage. If the target is a Huge or smaller creature, it is pushed up to 20 feet straight away from the marid and has the Prone condition. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Marilith": {
    "name": "Marilith",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 16,
    "alignment": "Chaotic Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 220,
      "hitDice": "21d10 + 105"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 20,
      "con": 20,
      "int": 18,
      "wis": 16,
      "cha": 20
    },
    "savingThrows": {
      "str": 9,
      "dex": 0,
      "con": 10,
      "int": 0,
      "wis": 8,
      "cha": 10
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the marilith dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "desc": "The marilith has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Reactive",
        "desc": "The marilith can take one Reaction|XPHB on every turn of combat."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The marilith makes six Pact Blade attacks and uses Constrict."
      },
      {
        "name": "Pact Blade",
        "desc": "m Roll: +10, reach 5 ft. {@h}10 (1d10) Slashing damage plus 7 (2d6) Necrotic damage."
      },
      {
        "name": "Constrict",
        "desc": "str 17, one Medium or smaller creature the marilith can see within 5 feet. {@actSaveFail} 15 (2d10) Bludgeoning damage. The target has the Grappled condition (escape 14), and it has the Restrained condition until the grapple ends."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mastiff": {
    "name": "Mastiff",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 5,
      "hitDice": "1d8 + 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 14,
      "con": 12,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +3, reach 5 ft. {@h}4 (1d6) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Medusa": {
    "name": "Medusa",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 6,
    "alignment": "Lawful Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 127,
      "hitDice": "17d8 + 51"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 17,
      "con": 16,
      "int": 12,
      "wis": 13,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The medusa makes two Claw attacks and one Snake Hair attack, or it makes three Poison Ray attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +6, reach 5 ft. {@h}10 (2d6) Slashing damage."
      },
      {
        "name": "Snake Hair",
        "desc": "m Roll: +6, reach 5 ft. {@h}5 (1d4) Piercing damage plus 14 (4d6) Poison damage."
      },
      {
        "name": "Poison Ray",
        "desc": "r Roll: +5, range 150 ft. {@h}11 (2d8) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Merfolk Skirmisher": {
    "name": "Merfolk Skirmisher",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 11,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 13,
      "con": 12,
      "int": 11,
      "wis": 14,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Primordial (Aquan)"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The merfolk can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Ocean Spear",
        "desc": "m,r Roll: +2, reach 5 ft. or range 20/60 ft. {@h}3 (1d6) Piercing damage plus 2 (1d4) Cold damage. If the target is a creature, its Speed|XPHB decreases by 10 feet until the end of its next turn. {@hom}The spear magically returns to the merfolk's hand immediately after a ranged attack."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Merfolk Wavebender": {
    "name": "Merfolk Wavebender",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 6,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 97,
      "hitDice": "15d8 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 18,
      "con": 14,
      "int": 13,
      "wis": 19,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 5,
      "int": 0,
      "wis": 7,
      "cha": 5
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Primordial (Aquan)"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The merfolk can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The merfolk makes two Aquatic Burst attacks."
      },
      {
        "name": "Aquatic Burst",
        "desc": "m,r Roll: +7, reach 5 ft. or range 60 ft. {@h}20 (3d10) Cold damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Merrow": {
    "name": "Merrow",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 15,
      "int": 8,
      "wis": 10,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Primordial (Aquan)"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The merrow can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The merrow makes two attacks, using Bite, Claw, or Harpoon in any combination."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 5 ft. {@h}6 (1d4) Piercing damage, and the target has the Poisoned condition until the end of the merrow's next turn."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +6, reach 5 ft. {@h}9 (2d4) Slashing damage."
      },
      {
        "name": "Harpoon",
        "desc": "m,r Roll: +6, reach 5 ft. or range 20/60 ft. {@h}11 (2d6) Piercing damage. If the target is a Large or smaller creature, the merrow pulls the target up to 15 feet straight toward itself."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mezzoloth": {
    "name": "Mezzoloth",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 5,
    "alignment": "Neutral Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 75,
      "hitDice": "10d8 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 11,
      "con": 16,
      "int": 7,
      "wis": 14,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "acid",
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Infernal; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Fiendish Restoration",
        "desc": "If the mezzoloth dies outside Gehenna, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in Gehenna."
      },
      {
        "name": "Magic Resistance",
        "desc": "The mezzoloth has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The mezzoloth makes two attacks, using Claws or Mercurial Trident in any combination."
      },
      {
        "name": "Claws",
        "desc": "m Roll: +7, reach 5 ft. {@h}9 (2d4) Slashing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 14) from two of four claws, and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Mercurial Trident",
        "desc": "m,r Roll: +7, reach 5 ft. or range 20/60 ft. {@h}8 (1d8) Piercing damage plus 10 (3d6) Force damage. {@hom}The trident magically returns to the mezzoloth's claw immediately after a ranged attack."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mimic": {
    "name": "Mimic",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 58,
      "hitDice": "9d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 15,
      "int": 5,
      "wis": 13,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "prone"
    ],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Adhesive (Object Form Only)",
        "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature adhered to the mimic has the Grappled condition (escape 13). Ability checks made to escape this grapple have Disadvantage|XPHB."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5 (with Advantage|XPHB if the target is Grappled by the mimic), reach 5 ft. {@h}7 (1d8) Piercing damage—or 12 (2d8) Piercing damage if the target is Grappled by the mimic—plus 4 (1d8) Acid damage."
      },
      {
        "name": "Pseudopod",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Bludgeoning damage plus 4 (1d8) Acid damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 13). Ability checks made to escape this grapple have Disadvantage|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mind Flayer": {
    "name": "Mind Flayer",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 7,
    "alignment": "Lawful Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 99,
      "hitDice": "18d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 12,
      "con": 12,
      "int": 19,
      "wis": 17,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 7,
      "wis": 6,
      "cha": 6
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Deep Speech",
      "Undercommon; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The mind flayer has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Tentacles",
        "desc": "m Roll: +7, reach 5 ft. {@h}22 (4d8) Psychic damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 14) from all the mind flayer's tentacles, and the target has the Stunned condition until the grapple ends."
      },
      {
        "name": "Extract Brain",
        "desc": "con 15, one creature that is Grappled by the mind flayer's Tentacles. {@actSaveFail} 55 (10d10) Piercing damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} If this damage reduces the target to 0 Hit, the mind flayer kills it and devours its brain."
      },
      {
        "name": "Mind Blast 5",
        "desc": "int 15, each creature in a 60-foot Cone. {@actSaveFail} 31 (6d8) Psychic damage, and the target has the Stunned condition until the end of the mind flayer's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mind Flayer Arcanist": {
    "name": "Mind Flayer Arcanist",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 11,
    "alignment": "Lawful Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 143,
      "hitDice": "26d8 + 26"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 14,
      "con": 13,
      "int": 20,
      "wis": 17,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 9,
      "wis": 7,
      "cha": 7
    },
    "conditionImmunities": [
      "charmed",
      "frightened"
    ],
    "damageImmunities": [
      "psychic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Deep Speech",
      "Undercommon; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The mind flayer has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The mind flayer makes three Arcane Tentacles attacks."
      },
      {
        "name": "Arcane Tentacles",
        "desc": "m,r Roll: +9, reach 5 ft. or range 120 ft. {@h}27 (4d10) Psychic damage, and the mind flayer can teleport the target up to 30 feet to an unoccupied space the mind flayer can see on a surface or liquid large enough to support the target. If this damage reduces the target to 0 Hit, the mind flayer kills it and magically devours its brain."
      },
      {
        "name": "Mind Burst 5",
        "desc": "int 17, each creature in a 40-foot Emanation originating from the mind flayer. {@actSaveFail} 41 (8d8) Psychic damage, and the target has the Stunned condition until the end of the mind flayer's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Minotaur of Baphomet": {
    "name": "Minotaur of Baphomet",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Chaotic Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 85,
      "hitDice": "10d10 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 11,
      "con": 16,
      "int": 6,
      "wis": 16,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Abyssal Glaive",
        "desc": "m Roll: +6, reach 10 ft. {@h}10 (1d12) Slashing damage plus 10 (3d6) Necrotic damage."
      },
      {
        "name": "Gore 5",
        "desc": "m Roll: +6, reach 5 ft. {@h}18 (4d6) Piercing damage. If the target is a Large or smaller creature and the minotaur moved 10+ feet straight toward it immediately before the hit, the target takes an extra 10 (3d6) Piercing damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Minotaur Skeleton": {
    "name": "Minotaur Skeleton",
    "size": "Large",
    "type": "undead",
    "challengeRating": 2,
    "alignment": "Lawful Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 11,
      "con": 15,
      "int": 6,
      "wis": 8,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "bludgeoning"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Abyssal but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Gore",
        "desc": "m Roll: +6, reach 5 ft. {@h}11 (2d6) Piercing damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target takes an extra 9 (2d8) Piercing damage and has the Prone condition."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +6, reach 5 ft. {@h}15 (2d10) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Modron Duodrone": {
    "name": "Modron Duodrone",
    "size": "Medium",
    "type": "construct",
    "challengeRating": 1,
    "alignment": "Lawful Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 13,
      "con": 12,
      "int": 6,
      "wis": 10,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Modron"
    ],
    "traits": [
      {
        "name": "Disintegration",
        "desc": "If the modron dies, it disintegrates into dust, leaving behind anything it was wearing or carrying."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The modron makes two Clockwork Blade attacks."
      },
      {
        "name": "Clockwork Blade",
        "desc": "m,r Roll: +3, reach 5 ft. or range 30 ft. {@h}4 (1d6) Force damage. {@hom}The blade magically returns to the modron's hand immediately after a ranged attack."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Modron Monodrone": {
    "name": "Modron Monodrone",
    "size": "Medium",
    "type": "construct",
    "challengeRating": 1,
    "alignment": "Lawful Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 5,
      "hitDice": "1d8 + 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 14,
      "con": 12,
      "int": 4,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Modron"
    ],
    "traits": [
      {
        "name": "Disintegration",
        "desc": "If the modron dies, it disintegrates into dust, leaving behind anything it was wearing or carrying."
      }
    ],
    "actions": [
      {
        "name": "Gear",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Force damage."
      },
      {
        "name": "Gear Flinger",
        "desc": "r Roll: +4, range 120 ft. {@h}6 (1d8) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Modron Pentadrone": {
    "name": "Modron Pentadrone",
    "size": "Large",
    "type": "construct",
    "challengeRating": 2,
    "alignment": "Lawful Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 32,
      "hitDice": "5d10 + 5"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 12,
      "int": 10,
      "wis": 10,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Modron"
    ],
    "traits": [
      {
        "name": "Disintegration",
        "desc": "If the modron dies, it disintegrates into dust, leaving behind anything it was wearing or carrying."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The modron makes five Slam attacks or five Electrical Discharge attacks."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Force damage."
      },
      {
        "name": "Electrical Discharge",
        "desc": "r Roll: +4, range 120 ft. {@h}5 (1d6) Lightning damage."
      },
      {
        "name": "Paralysis Gas 5",
        "desc": "Constitution Saving Throws: 11, each creature in a 30-foot Cone. {@actSaveFail} The target has the Paralyzed condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Modron Quadrone": {
    "name": "Modron Quadrone",
    "size": "Medium",
    "type": "construct",
    "challengeRating": 1,
    "alignment": "Lawful Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 22,
      "hitDice": "4d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 14,
      "con": 12,
      "int": 10,
      "wis": 10,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Modron"
    ],
    "traits": [
      {
        "name": "Disintegration",
        "desc": "If the modron dies, it disintegrates into dust, leaving behind anything it was wearing or carrying."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The modron makes four Slam attacks or four Gears Launcher attacks."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Force damage."
      },
      {
        "name": "Gears Launcher",
        "desc": "r Roll: +4, range 320 ft. {@h}4 (1d4) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Modron Tridrone": {
    "name": "Modron Tridrone",
    "size": "Medium",
    "type": "construct",
    "challengeRating": 1,
    "alignment": "Lawful Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 16,
      "hitDice": "3d8 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 13,
      "con": 12,
      "int": 9,
      "wis": 10,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Modron"
    ],
    "traits": [
      {
        "name": "Disintegration",
        "desc": "If the modron dies, it disintegrates into dust, leaving behind anything it was wearing or carrying."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The modron makes three Clockwork Spear attacks."
      },
      {
        "name": "Clockwork Spear",
        "desc": "m,r Roll: +3, reach 5 ft. or range 120 ft. {@h}4 (1d6) Force damage. {@hom}The spear magically returns to the modron's hand immediately after a ranged attack."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mud Mephit": {
    "name": "Mud Mephit",
    "size": "Small",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 13,
      "hitDice": "3d6 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 12,
      "con": 12,
      "int": 9,
      "wis": 11,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Aquan, Terran)"
    ],
    "traits": [
      {
        "name": "Death Burst",
        "desc": "The mephit explodes when it dies. dex 11, each creature in a 5-foot Emanation originating from the mephit. {@actSaveFail} The target has the Restrained condition until the end of its next turn."
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +3, reach 5 ft. {@h}4 (1d6) Bludgeoning damage."
      },
      {
        "name": "Mud Breath {@recharge}",
        "desc": "dex 11, one creature the mephit can see within 15 feet. {@actSaveFail} The target has the Restrained condition until the end of the mephit's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mule": {
    "name": "Mule",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 10,
      "con": 13,
      "int": 2,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 4,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Beast of Burden",
        "desc": "The mule counts as one size larger for the purpose of determining its carrying capacity."
      }
    ],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mummy": {
    "name": "Mummy",
    "size": "Small",
    "type": "undead",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 58,
      "hitDice": "9d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 8,
      "con": 15,
      "int": 6,
      "wis": 12,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The mummy makes two Rotting Fist attacks and uses Dreadful Glare."
      },
      {
        "name": "Rotting Fist",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (1d10) Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target can't regain Hit, its Hit maximum doesn't return to normal when finishing a Long, and its Hit maximum decreases by 10 (3d6) every 24 hours that elapse. A creature dies and turns to dust if reduced to 0 Hit by this attack."
      },
      {
        "name": "Dreadful Glare",
        "desc": "wis 11, one creature the mummy can see within 60 feet. {@actSaveFail} The target has the Frightened condition until the end of the mummy's next turn. {@actSaveSuccess} The target is immune to this mummy's Dreadful Glare for 24 hours."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Mummy Lord": {
    "name": "Mummy Lord",
    "size": "Small",
    "type": "undead",
    "challengeRating": 15,
    "alignment": "Lawful Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 187,
      "hitDice": "25d8 + 75"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 10,
      "con": 17,
      "int": 11,
      "wis": 19,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 5,
      "wis": 9,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus three other languages"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the mummy fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The mummy has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Undead Restoration",
        "desc": "If destroyed, the mummy gains a new body in 24 hours if its heart is intact, reviving with all its Hit. The new body appears in an unoccupied space within the mummy's lair. The heart is a Tiny object that has AC 17, HP 10, and Immunity|XPHB to all damage except Fire."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The mummy makes one Rotting Fist or Channel Negative Energy attack, and it uses Dreadful Glare."
      },
      {
        "name": "Rotting Fist",
        "desc": "m Roll: +9, reach 5 ft. {@h}15 (2d10) Bludgeoning damage plus 10 (3d6) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target can't regain Hit, it gains no benefit from finishing a Long, and its Hit maximum decreases by 10 (3d6) every 24 hours that elapse. A creature dies and turns to dust if reduced to 0 Hit by this attack."
      },
      {
        "name": "Channel Negative Energy",
        "desc": "r Roll: +9, range 60 ft. {@h}25 (6d6) Necrotic damage."
      },
      {
        "name": "Dreadful Glare",
        "desc": "wis 17, one creature the mummy can see within 60 feet. {@actSaveFail} 25 (6d6) Psychic damage, and the target has the Paralyzed condition until the end of the mummy's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Myconid Adult": {
    "name": "Myconid Adult",
    "size": "Medium",
    "type": "plant",
    "challengeRating": 1,
    "alignment": "Lawful Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 16,
      "hitDice": "3d8 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 10,
      "con": 12,
      "int": 10,
      "wis": 13,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "telepathy 240 ft."
    ],
    "traits": [
      {
        "name": "Sun Sickness",
        "desc": "While in sunlight, the myconid has Disadvantage|XPHB on D20. The myconid dies if it spends more than 1 hour in sunlight."
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +2, reach 5 ft. {@h}4 (1d8) Bludgeoning damage plus 3 (1d6) Poison damage."
      },
      {
        "name": "Pacifying Spores (1/Day)",
        "desc": "con 11, one creature the myconid can see within 10 feet. {@actSaveFail} The target has the Stunned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Rapport Spores",
        "desc": "The myconid expels spores in a 30-foot Emanation originating from itself. Creatures in that area with an Intelligence score of 2 or higher that aren't Constructs, Elementals, or Undead gain telepathy with a range of 30 feet for 1 hour."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Myconid Sovereign": {
    "name": "Myconid Sovereign",
    "size": "Large",
    "type": "plant",
    "challengeRating": 2,
    "alignment": "Lawful Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 10,
      "con": 14,
      "int": 13,
      "wis": 15,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "telepathy 240 ft."
    ],
    "traits": [
      {
        "name": "Sun Sickness",
        "desc": "While in sunlight, the myconid has Disadvantage|XPHB on D20. The myconid dies if it spends more than 1 hour in sunlight."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The myconid makes one Slam attack and uses Pacifying Spores."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +3, reach 5 ft. {@h}6 (2d4) Bludgeoning damage plus 5 (2d4) Poison damage."
      },
      {
        "name": "Animating Spores (3/Day)",
        "desc": "The myconid releases spores at a Medium or Small corpse within 5 feet of it that wasn't a Construct or an Undead. In 24 hours, the corpse rises as a Myconid Spore Servant. The corpse stays animate for 1d4 weeks or until destroyed, and it can't be animated again in this way."
      },
      {
        "name": "Pacifying Spores",
        "desc": "con 12, one creature the myconid can see within 10 feet. {@actSaveFail} The target has the Stunned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Rapport Spores",
        "desc": "The myconid expels spores in a 30-foot Emanation originating from itself. Creatures in that area with an Intelligence score of 2 or higher that aren't Constructs, Elementals, or Undead gain telepathy with a range of 30 feet for 1 hour."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Myconid Spore Servant": {
    "name": "Myconid Spore Servant",
    "size": "Small",
    "type": "plant",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 37,
      "hitDice": "5d8 + 15"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 12,
      "con": 16,
      "int": 2,
      "wis": 6,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "frightened",
      "paralyzed",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "telepathy 30 ft."
    ],
    "traits": [],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Bludgeoning damage plus 2 (1d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Myconid Sprout": {
    "name": "Myconid Sprout",
    "size": "Small",
    "type": "plant",
    "challengeRating": 0,
    "alignment": "Lawful Neutral",
    "armorClass": 10,
    "hitPoints": {
      "value": 3,
      "hitDice": "1d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 10,
      "con": 10,
      "int": 8,
      "wis": 11,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "telepathy 240 ft."
    ],
    "traits": [
      {
        "name": "Sun Sickness",
        "desc": "While in sunlight, the myconid has Disadvantage|XPHB on D20. The myconid dies if it spends more than 1 hour in sunlight."
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +1, reach 5 ft. {@h}1 (1d4) Bludgeoning damage plus 2 (1d4) Poison damage."
      },
      {
        "name": "Rapport Spores",
        "desc": "The myconid expels spores in a 30-foot Emanation originating from itself. Creatures in that area with an Intelligence score of 2 or higher that aren't Constructs, Elementals, or Undead gain telepathy with a range of 30 feet for 1 hour."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Nalfeshnee": {
    "name": "Nalfeshnee",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 13,
    "alignment": "Chaotic Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 184,
      "hitDice": "16d10 + 96"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 10,
      "con": 22,
      "int": 19,
      "wis": 12,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 11,
      "int": 9,
      "wis": 6,
      "cha": 7
    },
    "conditionImmunities": [
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the nalfeshnee dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "desc": "The nalfeshnee has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The nalfeshnee makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +10, reach 10 ft. {@h}16 (2d10) Slashing damage plus 11 (2d10) Force damage."
      },
      {
        "name": "Teleport",
        "desc": "The nalfeshnee teleports up to 120 feet to an unoccupied space it can see."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Needle Blight": {
    "name": "Needle Blight",
    "size": "Medium",
    "type": "plant",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 16,
      "hitDice": "3d8 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 12,
      "con": 13,
      "int": 4,
      "wis": 8,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "deafened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +3, reach 5 ft. {@h}6 (2d4) Slashing damage."
      },
      {
        "name": "Needles",
        "desc": "r Roll: +3, range 30/60 ft. {@h}6 (2d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Night Hag": {
    "name": "Night Hag",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 5,
    "alignment": "Neutral Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 112,
      "hitDice": "15d8 + 45"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 16,
      "wis": 14,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "cold",
      "fire"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Infernal",
      "Primordial"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The hag has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Soul Bag",
        "desc": "The hag has a soul bag. While holding or carrying the bag, the hag can use its Nightmare Haunting action. The bag has AC 15, HP 20, and Resistance|XPHB to all damage. The bag turns to dust if reduced to 0 Hit. If the bag is destroyed, any souls the bag is holding are released. The hag can create a new bag after 7 days."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The hag makes two Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Nightmare": {
    "name": "Nightmare",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 68,
      "hitDice": "8d10 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 10,
      "wis": 13,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Abyssal",
      "Common",
      "and Infernal but can't speak"
    ],
    "traits": [
      {
        "name": "Confer Fire Resistance",
        "desc": "The nightmare can grant Resistance|XPHB to Fire damage to a rider while it is on the nightmare."
      },
      {
        "name": "Illumination",
        "desc": "The nightmare sheds Bright in a 10-foot radius and Dim for an additional 10 feet."
      }
    ],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +6, reach 5 ft. {@h}13 (2d8) Bludgeoning damage plus 10 (3d6) Fire damage."
      },
      {
        "name": "Ethereal Stride",
        "desc": "The nightmare and up to three willing creatures within 5 feet of it teleport to the Ethereal Plane from the Material Plane or vice versa."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Noble": {
    "name": "Noble",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 9,
      "hitDice": "2d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 12,
      "con": 11,
      "int": 12,
      "wis": 14,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Rapier",
        "desc": "m Roll: +3, reach 5 ft. {@h}5 (1d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Noble Prodigy": {
    "name": "Noble Prodigy",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 10,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 148,
      "hitDice": "27d8 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 16,
      "con": 12,
      "int": 15,
      "wis": 14,
      "cha": 19
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 5,
      "int": 0,
      "wis": 6,
      "cha": 8
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The noble makes three Beguiling Strike attacks."
      },
      {
        "name": "Beguiling Strike",
        "desc": "m,r Roll: +8, reach 5 ft. or range 60 ft. {@h}18 (4d6) Psychic damage, and the target has the Charmed condition until the start of the noble's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Nothic": {
    "name": "Nothic",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 2,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 16,
      "con": 16,
      "int": 13,
      "wis": 10,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Undercommon"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The nothic makes two Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (1d10) Slashing damage."
      },
      {
        "name": "Rotting Gaze",
        "desc": "con 13, one creature the nothic can see within 120 feet. {@actSaveFail} 17 (5d6) Necrotic damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Nycaloth": {
    "name": "Nycaloth",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 9,
    "alignment": "Neutral Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 152,
      "hitDice": "16d10 + 64"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 11,
      "con": 19,
      "int": 12,
      "wis": 10,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "acid",
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Infernal; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Fiendish Restoration",
        "desc": "If the nycaloth dies outside Gehenna, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in Gehenna."
      },
      {
        "name": "Magic Resistance",
        "desc": "The nycaloth has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The nycaloth makes two Mercurial Axe attacks."
      },
      {
        "name": "Mercurial Axe",
        "desc": "m,r Roll: +9, reach 10 ft. or range 30/90 ft. {@h}18 (2d12) Slashing damage plus 10 (3d6) Force damage. {@hom}The axe magically returns to the nycaloth's hand immediately after a ranged attack."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ochre Jelly": {
    "name": "Ochre Jelly",
    "size": "Large",
    "type": "ooze",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 8,
    "hitPoints": {
      "value": 52,
      "hitDice": "7d10 + 14"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 6,
      "con": 14,
      "int": 2,
      "wis": 6,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "grappled",
      "prone",
      "restrained"
    ],
    "damageImmunities": [
      "lightning",
      "slashing"
    ],
    "damageResistances": [
      "acid"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amorphous",
        "desc": "The jelly can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Spider Climb",
        "desc": "The jelly can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "desc": "m Roll: +4, reach 5 ft. {@h}12 (3d6) Acid damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Octopus": {
    "name": "Octopus",
    "size": "Small",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 3,
      "hitDice": "1d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 4,
      "dex": 15,
      "con": 11,
      "int": 3,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Compression",
        "desc": "The octopus can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Water Breathing",
        "desc": "The octopus can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Tentacles",
        "desc": "m Roll: +4, reach 5 ft. {@h}1 Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ogre": {
    "name": "Ogre",
    "size": "Large",
    "type": "giant",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 68,
      "hitDice": "8d10 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 8,
      "con": 16,
      "int": 5,
      "wis": 7,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Greatclub",
        "desc": "m Roll: +6, reach 5 ft. {@h}13 (2d8) Bludgeoning damage."
      },
      {
        "name": "Javelin",
        "desc": "m,r Roll: +6, reach 5 ft. or range 30/120 ft. {@h}11 (2d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ogre Zombie": {
    "name": "Ogre Zombie",
    "size": "Large",
    "type": "undead",
    "challengeRating": 2,
    "alignment": "Neutral Evil",
    "armorClass": 8,
    "hitPoints": {
      "value": 85,
      "hitDice": "9d10 + 36"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 6,
      "con": 18,
      "int": 3,
      "wis": 6,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common and Giant but can't speak"
    ],
    "traits": [
      {
        "name": "Undead Fortitude",
        "desc": "If damage reduces the zombie to 0 Hit, it makes a Constitution saving throw (5 plus the damage taken) unless the damage is Radiant or from a Critical. On a successful save, the zombie drops to 1 Hit instead."
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +6, reach 5 ft. {@h}13 (2d8) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ogrillon Ogre": {
    "name": "Ogrillon Ogre",
    "size": "Large",
    "type": "giant",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 52,
      "hitDice": "7d10 + 14"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 10,
      "con": 14,
      "int": 7,
      "wis": 9,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Battleaxe",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Slashing damage."
      },
      {
        "name": "Javelin",
        "desc": "m,r Roll: +5, reach 5 ft. or range 30/120 ft. {@h}6 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Oni": {
    "name": "Oni",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 7,
    "alignment": "Lawful Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 119,
      "hitDice": "14d10 + 42"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 11,
      "con": 16,
      "int": 14,
      "wis": 12,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 6,
      "int": 0,
      "wis": 4,
      "cha": 5
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Giant"
    ],
    "traits": [
      {
        "name": "Regeneration",
        "desc": "The oni regains 10 Hit at the start of each of its turns if it has at least 1 Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The oni makes two Claw or Nightmare Ray attacks. It can replace one attack with a use of Spellcasting."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +7, reach 10 ft. {@h}10 (1d12) Slashing damage plus 9 (2d8) Necrotic damage."
      },
      {
        "name": "Nightmare Ray",
        "desc": "r Roll: +5, range 60 ft. {@h}9 (2d6) Psychic damage, and the target has the Frightened condition until the start of the oni's next turn."
      },
      {
        "name": "Shape-Shift",
        "desc": "The oni shape-shifts into a Small or Medium Humanoid or a Large Giant, or it returns to its true form. Other than its size, its game statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Otyugh": {
    "name": "Otyugh",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 104,
      "hitDice": "11d10 + 44"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 11,
      "con": 19,
      "int": 6,
      "wis": 13,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Otyugh; telepathy 120 ft. (doesn't allow the receiving creature to respond telepathically)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The otyugh makes one Bite attack and two Tentacle attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 5 ft. {@h}12 (2d8) Piercing damage, and the target has the Poisoned condition. Whenever the Poisoned target finishes a Long, it is subjected to the following effect. con 15. {@actSaveFail} The target's Hit maximum decreases by 5 (1d10) and doesn't return to normal until the Poisoned condition ends on the target. {@actSaveSuccess} The Poisoned condition ends."
      },
      {
        "name": "Tentacle",
        "desc": "m Roll: +6, reach 10 ft. {@h}12 (2d8) Piercing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 13) from one of two tentacles."
      },
      {
        "name": "Tentacle Slam",
        "desc": "con 14, each creature Grappled by the otyugh. {@actSaveFail} 16 (3d8) Bludgeoning damage, and the target has the Stunned condition until the start of the otyugh's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Owl": {
    "name": "Owl",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 13,
      "con": 8,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The owl doesn't provoke Opportunity Attacks when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Talons",
        "desc": "m Roll: +3, reach 5 ft. {@h}1 Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Owlbear": {
    "name": "Owlbear",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 59,
      "hitDice": "7d10 + 21"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 12,
      "con": 17,
      "int": 3,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The owlbear makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 5 ft. {@h}14 (2d8) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Panther": {
    "name": "Panther",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 13,
      "hitDice": "3d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 16,
      "con": 10,
      "int": 3,
      "wis": 14,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pegasus": {
    "name": "Pegasus",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 2,
    "alignment": "Chaotic Good",
    "armorClass": 12,
    "hitPoints": {
      "value": 59,
      "hitDice": "7d10 + 21"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 10,
      "wis": 15,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 5,
      "int": 0,
      "wis": 4,
      "cha": 3
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Celestial",
      "Common",
      "Elvish",
      "and Sylvan but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +6, reach 5 ft. {@h}7 (1d6) Bludgeoning damage plus 5 (2d4) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Performer": {
    "name": "Performer",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 27,
      "hitDice": "5d8 + 5"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 16,
      "con": 12,
      "int": 13,
      "wis": 14,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 5
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Shortsword",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Performer Legend": {
    "name": "Performer Legend",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 10,
    "alignment": "Neutral",
    "armorClass": 20,
    "hitPoints": {
      "value": 162,
      "hitDice": "25d8 + 50"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 20,
      "con": 14,
      "int": 15,
      "wis": 16,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 0,
      "int": 6,
      "wis": 7,
      "cha": 9
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The performer makes three Bejeweled Baton attacks."
      },
      {
        "name": "Bejeweled Baton",
        "desc": "m Roll: +9, reach 5 ft. {@h}10 (2d4) Bludgeoning damage plus 10 (3d6) Psychic damage."
      },
      {
        "name": "Majestic Song",
        "desc": "wis 17, each creature in a 20-foot-radius Sphere centered on a point within 120 feet. {@actSaveFail} 22 (4d8) Psychic damage, and the target has the Charmed or Frightened condition (performer's choice) until the end of the performer's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Performer Maestro": {
    "name": "Performer Maestro",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 6,
    "alignment": "Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 110,
      "hitDice": "17d8 + 34"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 18,
      "con": 14,
      "int": 13,
      "wis": 14,
      "cha": 19
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 7
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The performer makes three Rapier attacks."
      },
      {
        "name": "Rapier",
        "desc": "m Roll: +7, reach 5 ft. {@h}8 (1d8) Piercing damage plus 7 (2d6) Psychic damage."
      },
      {
        "name": "Beguiling Song",
        "desc": "wis 15, each creature in a 20-foot-radius Sphere centered on a point within 120 feet. {@actSaveFail} 20 (3d10) Psychic damage, and the target has the Charmed condition until the end of the performer's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Peryton": {
    "name": "Peryton",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 33,
      "hitDice": "6d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 12,
      "con": 13,
      "int": 9,
      "wis": 12,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common and Elvish but can't speak"
    ],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The peryton doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The peryton makes one Gore attack and one Talons attack."
      },
      {
        "name": "Gore",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Piercing damage. If the peryton moved 30+ feet straight toward the target immediately before the hit, the target takes an extra 9 (2d8) Piercing damage."
      },
      {
        "name": "Talons",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (2d4) Piercing damage. If the attack reduces a Humanoid target to 0 Hit, the peryton kills the target by removing its heart."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Phase Spider": {
    "name": "Phase Spider",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 45,
      "hitDice": "7d10 + 7"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 16,
      "con": 12,
      "int": 6,
      "wis": 10,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Ethereal Sight",
        "desc": "The spider can see 60 feet into the Ethereal Plane while on the Material Plane and vice versa."
      },
      {
        "name": "Spider Climb",
        "desc": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "desc": "The spider ignores movement restrictions caused by webs, and the spider knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The spider makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (1d10) Piercing damage plus 9 (2d8) Poison damage. If this damage reduces the target to 0 Hit, the target becomes Stable|XPHB, and it has the Poisoned condition for 1 hour. While Poisoned, the target also has the Paralyzed condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Piercer": {
    "name": "Piercer",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 22,
      "hitDice": "3d8 + 9"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 13,
      "con": 16,
      "int": 1,
      "wis": 7,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The piercer can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +3, reach 5 ft. {@h}5 (1d8) Piercing damage."
      },
      {
        "name": "Drop",
        "desc": "The piercer falls. dex 11, one creature directly underneath the piercer. {@actSaveFail} 10 (3d6) Piercing damage. {@actSaveSuccessOrFail} The piercer reduces any damage it takes from the fall by 20."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Piranha": {
    "name": "Piranha",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 16,
      "con": 9,
      "int": 1,
      "wis": 7,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Water Breathing",
        "desc": "The piranha can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5 (with Advantage|XPHB if the target doesn't have all its Hit), reach 5 ft. {@h}1 Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pirate": {
    "name": "Pirate",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 33,
      "hitDice": "6d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 16,
      "con": 12,
      "int": 8,
      "wis": 12,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 4
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The pirate makes two Dagger attacks. It can replace one attack with a use of Enthralling Panache."
      },
      {
        "name": "Dagger",
        "desc": "m,r Roll: +5, reach 5 ft. or range 20/60 ft. {@h}5 (1d4) Piercing damage."
      },
      {
        "name": "Enthralling Panache",
        "desc": "wis 12, one creature the pirate can see within 30 feet. {@actSaveFail} The target has the Charmed condition until the start of the pirate's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pirate Admiral": {
    "name": "Pirate Admiral",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 12,
    "alignment": "Neutral",
    "armorClass": 20,
    "hitPoints": {
      "value": 182,
      "hitDice": "28d8 + 56"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 22,
      "con": 14,
      "int": 12,
      "wis": 14,
      "cha": 19
    },
    "savingThrows": {
      "str": 6,
      "dex": 10,
      "con": 0,
      "int": 0,
      "wis": 6,
      "cha": 8
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The pirate makes three attacks, using Scimitar or Pistol in any combination."
      },
      {
        "name": "Scimitar",
        "desc": "m Roll: +10, reach 5 ft. {@h}16 (3d6) Slashing damage plus 7 (2d6) Poison damage, and the target suffers one of the following effects of the pirate's choice: [object Object]"
      },
      {
        "name": "Pistol",
        "desc": "r Roll: +10, range 30/90 ft. {@h}28 (4d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pirate Captain": {
    "name": "Pirate Captain",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 6,
    "alignment": "Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 84,
      "hitDice": "13d8 + 26"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 18,
      "con": 14,
      "int": 10,
      "wis": 14,
      "cha": 17
    },
    "savingThrows": {
      "str": 3,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 6
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The pirate makes three attacks, using Rapier or Pistol in any combination."
      },
      {
        "name": "Rapier",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Piercing damage, and the pirate has Advantage|XPHB on the next attack roll it makes before the end of this turn."
      },
      {
        "name": "Pistol",
        "desc": "r Roll: +7, range 30/90 ft. {@h}15 (2d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pit Fiend": {
    "name": "Pit Fiend",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 20,
    "alignment": "Lawful Evil",
    "armorClass": 21,
    "hitPoints": {
      "value": 337,
      "hitDice": "27d10 + 189"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 26,
      "dex": 14,
      "con": 24,
      "int": 22,
      "wis": 18,
      "cha": 24
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 0,
      "int": 0,
      "wis": 10,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Diabolical Restoration",
        "desc": "If the pit fiend dies outside the Nine Hells, its body disappears in sulfurous smoke, and it gains a new body instantly, reviving with all its Hit somewhere in the Nine Hells."
      },
      {
        "name": "Fear Aura",
        "desc": "The pit fiend emanates an aura in a 20-foot Emanation while it doesn't have the Incapacitated condition. wis 21, any enemy that starts its turn in the aura. {@actSaveFail} The target has the Frightened condition until the start of its next turn. {@actSaveSuccess} The target is immune to this pit fiend's aura for 24 hours."
      },
      {
        "name": "Legendary Resistance (4/Day)",
        "desc": "If the pit fiend fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The pit fiend has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The pit fiend makes one Bite attack, two Devilish Claw attacks, and one Fiery Mace attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +14, reach 10 ft. {@h}18 (3d6) Piercing damage. If the target is a creature, it must make the following saving throw. con 21. {@actSaveFail} The target has the Poisoned condition. While Poisoned, the target can't regain Hit and takes 21 (6d6) Poison damage at the start of each of its turns, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Devilish Claw",
        "desc": "m Roll: +14, reach 10 ft. {@h}26 (4d8) Necrotic damage."
      },
      {
        "name": "Fiery Mace",
        "desc": "m Roll: +14, reach 10 ft. {@h}22 (4d6) Force damage plus 21 (6d6) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pixie": {
    "name": "Pixie",
    "size": "Tiny",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Neutral Good",
    "armorClass": 15,
    "hitPoints": {
      "value": 9,
      "hitDice": "6d4 - 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 20,
      "con": 8,
      "int": 10,
      "wis": 14,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Sylvan"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The pixie has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Faerie Dust",
        "desc": "m,r Roll: +4, reach 5 ft. or range 60 ft. {@h}1 Radiant damage, and the target has the Charmed or Poisoned condition (pixie's choice) until the start of the pixie's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pixie Wonderbringer": {
    "name": "Pixie Wonderbringer",
    "size": "Tiny",
    "type": "fey",
    "challengeRating": 5,
    "alignment": "Neutral Good",
    "armorClass": 15,
    "hitPoints": {
      "value": 60,
      "hitDice": "24d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 20,
      "con": 10,
      "int": 11,
      "wis": 14,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Elvish",
      "Sylvan"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The pixie has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The pixie makes two Faerie Dust attacks."
      },
      {
        "name": "Faerie Dust",
        "desc": "m,r Roll: +7, reach 5 ft. or range 60 ft. {@h}15 (2d10) Radiant damage, and the target has the Charmed or Poisoned condition (pixie's choice) until the start of the pixie's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Planetar": {
    "name": "Planetar",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 16,
    "alignment": "Lawful Good",
    "armorClass": 19,
    "hitPoints": {
      "value": 262,
      "hitDice": "21d10 + 147"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 24,
      "dex": 20,
      "con": 24,
      "int": 19,
      "wis": 22,
      "cha": 25
    },
    "savingThrows": {
      "str": 12,
      "dex": 0,
      "con": 12,
      "int": 0,
      "wis": 11,
      "cha": 12
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Divine Awareness",
        "desc": "The planetar knows if it hears a lie."
      },
      {
        "name": "Exalted Restoration",
        "desc": "If the planetar dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit somewhere in Mount Celestia."
      },
      {
        "name": "Magic Resistance",
        "desc": "The planetar has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The planetar makes three Radiant Sword attacks or uses Holy Burst twice."
      },
      {
        "name": "Radiant Sword",
        "desc": "m Roll: +12, reach 10 ft. {@h}14 (2d6) Slashing damage plus 18 (4d8) Radiant damage."
      },
      {
        "name": "Holy Burst",
        "desc": "dex 20, each enemy in a 20-foot-radius Sphere centered on a point the planetar can see within 120 feet. {@actSaveFail} 24 (7d6) Radiant damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Plesiosaurus": {
    "name": "Plesiosaurus",
    "size": "Large",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 68,
      "hitDice": "8d10 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 2,
      "wis": 12,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Hold Breath",
        "desc": "The plesiosaurus can hold its breath for 1 hour."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 10 ft. {@h}11 (2d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Polar Bear": {
    "name": "Polar Bear",
    "size": "Large",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 42,
      "hitDice": "5d10 + 15"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 14,
      "con": 16,
      "int": 2,
      "wis": 13,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The bear makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 5 ft. {@h}9 (1d8) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Poltergeist": {
    "name": "Poltergeist",
    "size": "Small",
    "type": "undead",
    "challengeRating": 2,
    "alignment": "Chaotic Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 14,
      "con": 11,
      "int": 10,
      "wis": 10,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "lightning",
      "piercing",
      "slashing",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Incorporeal Movement",
        "desc": "The poltergeist can move through other creatures and objects as if they were Difficult. It takes 5 (1d10) Force damage if it ends its turn inside an object."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The poltergeist makes one Object Slam attack and uses Telekinetic Thrust."
      },
      {
        "name": "Object Slam",
        "desc": "m,r Roll: +4, reach 5 ft. or range 30 ft. {@h}7 (2d4) Bludgeoning damage."
      },
      {
        "name": "Telekinetic Thrust",
        "desc": "str 12, one creature the poltergeist can see within 30 feet. {@actSaveFail} 9 (2d6) Force damage, and the target is pushed up to 30 feet straight away from the poltergeist."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pony": {
    "name": "Pony",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 10,
      "con": 13,
      "int": 2,
      "wis": 11,
      "cha": 7
    },
    "savingThrows": {
      "str": 4,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Priest": {
    "name": "Priest",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 2,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 38,
      "hitDice": "7d8 + 7"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 10,
      "con": 12,
      "int": 13,
      "wis": 16,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The priest makes two attacks, using Mace or Radiant Flame in any combination."
      },
      {
        "name": "Mace",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Bludgeoning damage plus 5 (2d4) Radiant damage."
      },
      {
        "name": "Radiant Flame",
        "desc": "r Roll: +5, range 60 ft. {@h}11 (2d10) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Priest Acolyte": {
    "name": "Priest Acolyte",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 10,
      "con": 12,
      "int": 10,
      "wis": 14,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Mace",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Bludgeoning damage plus 2 (1d4) Radiant damage."
      },
      {
        "name": "Radiant Flame",
        "desc": "r Roll: +4, range 60 ft. {@h}7 (2d6) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Primeval Owlbear": {
    "name": "Primeval Owlbear",
    "size": "Huge",
    "type": "monstrosity",
    "challengeRating": 7,
    "alignment": "Unaligned",
    "armorClass": 16,
    "hitPoints": {
      "value": 126,
      "hitDice": "12d12 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 14,
      "con": 19,
      "int": 8,
      "wis": 15,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The owlbear has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The owlbear makes two Ravage attacks."
      },
      {
        "name": "Ravage",
        "desc": "m Roll: +9, reach 5 ft. {@h}15 (2d8) Slashing damage. If the target is a Huge or smaller creature and the owlbear moved 20+ feet straight toward it immediately before the hit, the target takes an extra 9 (2d8) Slashing damage and has the Prone condition."
      },
      {
        "name": "Screech 5",
        "desc": "con 15, each creature in a 30-foot Emanation originating from the owlbear. {@actSaveFail} 27 (6d8) Thunder damage, and the target has the Incapacitated condition until the end of its next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pseudodragon": {
    "name": "Pseudodragon",
    "size": "Tiny",
    "type": "dragon",
    "challengeRating": 1,
    "alignment": "Neutral Good",
    "armorClass": 14,
    "hitPoints": {
      "value": 10,
      "hitDice": "3d4 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 15,
      "con": 13,
      "int": 10,
      "wis": 12,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common and Draconic but can't speak"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The pseudodragon has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The pseudodragon makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Piercing damage."
      },
      {
        "name": "Sting",
        "desc": "con 12, one creature the pseudodragon can see within 5 feet. {@actSaveFail} 5 (2d4) Poison damage, and the target has the Poisoned condition for 1 hour. 5 While Poisoned, the target also has the Unconscious condition, which ends early if the target takes damage or a creature within 5 feet of it takes an action to wake it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Psychic Gray Ooze": {
    "name": "Psychic Gray Ooze",
    "size": "Medium",
    "type": "ooze",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 9,
    "hitPoints": {
      "value": 37,
      "hitDice": "5d8 + 15"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 8,
      "con": 16,
      "int": 10,
      "wis": 6,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "exhaustion",
      "frightened",
      "grappled",
      "prone",
      "restrained"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "fire",
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amorphous",
        "desc": "The ooze can move through a space as narrow as 1 inch without expending extra movement to do so."
      }
    ],
    "actions": [
      {
        "name": "Pseudopod",
        "desc": "m Roll: +3, reach 5 ft. {@h}11 (3d6) Acid damage, and the target has Disadvantage|XPHB on Intelligence saving throws until the end of the ooze's next turn."
      },
      {
        "name": "Psychic Crush",
        "desc": "int 10, one creature the ooze can see within 60 feet. {@actSaveFail} 13 (3d8) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Pteranodon": {
    "name": "Pteranodon",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 13,
      "hitDice": "3d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 15,
      "con": 10,
      "int": 2,
      "wis": 9,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The pteranodon doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Purple Worm": {
    "name": "Purple Worm",
    "size": "Gargantuan",
    "type": "monstrosity",
    "challengeRating": 15,
    "alignment": "Unaligned",
    "armorClass": 18,
    "hitPoints": {
      "value": 247,
      "hitDice": "15d20 + 90"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 28,
      "dex": 7,
      "con": 22,
      "int": 1,
      "wis": 8,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 11,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Tunneler",
        "desc": "The worm can burrow through solid rock at half its Burrow and leaves a 10-foot-diameter tunnel in its wake."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The worm makes one Bite attack and one Tail Stinger attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +14, reach 10 ft. {@h}22 (3d8) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 19), and it has the Restrained condition until the grapple ends."
      },
      {
        "name": "Tail Stinger",
        "desc": "m Roll: +14, reach 10 ft. {@h}16 (2d6) Piercing damage plus 35 (10d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Quaggoth": {
    "name": "Quaggoth",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Chaotic Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 16,
      "int": 6,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Bloodied Fury",
        "desc": "While Bloodied|XPHB, the quaggoth has Advantage|XPHB on attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The quaggoth makes two Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Slashing damage, or 13 (3d6) Slashing damage if the quaggoth is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Quaggoth Thonot": {
    "name": "Quaggoth Thonot",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Chaotic Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 67,
      "hitDice": "9d8 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 12,
      "con": 16,
      "int": 6,
      "wis": 14,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Bloodied Fury",
        "desc": "While Bloodied|XPHB, the quaggoth has Advantage|XPHB on attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The quaggoth makes two Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Slashing damage plus 5 (2d4) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Quasit": {
    "name": "Quasit",
    "size": "Tiny",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 25,
      "hitDice": "10d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 5,
      "dex": 17,
      "con": 10,
      "int": 7,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The quasit has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Slashing damage, and the target has the Poisoned condition until the start of the quasit's next turn."
      },
      {
        "name": "Scare (1/Day)",
        "desc": "wis 10, one creature within 20 feet. {@actSaveFail} The target has the Frightened condition. At the end of each of its turns, the target repeats the save, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      },
      {
        "name": "Shape-Shift",
        "desc": "The quasit shape-shifts to resemble a bat (Speed|XPHB 10 ft., Fly 40 ft.), a centipede (40 ft., Climb 40 ft.), or a toad (40 ft., Swim 40 ft.), or it returns to its true form. Its game statistics are the same in each form, except for its Speed|XPHB. Any equipment it is wearing or carrying isn't transformed."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Questing Knight": {
    "name": "Questing Knight",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 12,
    "alignment": "Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 202,
      "hitDice": "27d8 + 81"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 16,
      "con": 16,
      "int": 11,
      "wis": 12,
      "cha": 18
    },
    "savingThrows": {
      "str": 9,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 5,
      "cha": 8
    },
    "conditionImmunities": [
      "charmed",
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Aura of Bravery",
        "desc": "Creatures of the knight's choice in a 30-foot Emanation originating from it have Immunity|XPHB to the Charmed and Frightened conditions while there."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The knight makes three attacks, using Greatsword or Longbow in any combination."
      },
      {
        "name": "Greatsword",
        "desc": "m Roll: +9, reach 5 ft. {@h}12 (2d6) Slashing damage plus 22 (5d8) Radiant damage."
      },
      {
        "name": "Longbow",
        "desc": "r Roll: +7, range 150/600 ft. {@h}12 (2d8) Piercing damage plus 22 (5d8) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Rakshasa": {
    "name": "Rakshasa",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 13,
    "alignment": "Lawful Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 221,
      "hitDice": "26d8 + 104"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 17,
      "con": 18,
      "int": 13,
      "wis": 16,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [
      "piercing"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Infernal"
    ],
    "traits": [
      {
        "name": "Greater Magic Resistance",
        "desc": "The rakshasa automatically succeeds on saving throws against spells and other magical effects, and the attack rolls of spells automatically miss it. Without the rakshasa's permission, no spell can observe the rakshasa remotely or detect its thoughts, creature type, or alignment."
      },
      {
        "name": "Fiendish Restoration",
        "desc": "If the rakshasa dies outside the Nine Hells, its body turns to ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Nine Hells."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The rakshasa makes three Cursed Touch attacks."
      },
      {
        "name": "Cursed Touch",
        "desc": "m Roll: +10, reach 5 ft. {@h}12 (2d6) Slashing damage plus 19 (3d12) Necrotic damage. If the target is a creature, it is cursed. While cursed, the target gains no benefit from finishing a Short or Long."
      },
      {
        "name": "Baleful Command 5",
        "desc": "wis 18, each enemy in a 30-foot Emanation originating from the rakshasa. {@actSaveFail} 28 (8d6) Psychic damage, and the target has the Frightened and Incapacitated conditions until the start of the rakshasa's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Rat": {
    "name": "Rat",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 11,
      "con": 9,
      "int": 2,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Agile",
        "desc": "The rat doesn't provoke Opportunity Attacks when it moves out of an enemy's reach."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +2, reach 5 ft. {@h}1 Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Raven": {
    "name": "Raven",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 2,
      "hitDice": "1d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 14,
      "con": 10,
      "int": 5,
      "wis": 13,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Mimicry",
        "desc": "The raven can mimic simple sounds it has heard, such as a whisper or chitter. A hearer can discern the sounds are imitations with a successful 10 Wisdom (Insight|XPHB) check."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "desc": "m Roll: +4, reach 5 ft. {@h}1 Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Red Dragon Wyrmling": {
    "name": "Red Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 75,
      "hitDice": "10d8 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 10,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 2,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +6, reach 5 ft. {@h}9 (1d10) Slashing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 13, each creature in a 15-foot Cone. {@actSaveFail} 24 (7d6) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Red Slaad": {
    "name": "Red Slaad",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 5,
    "alignment": "Chaotic Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 93,
      "hitDice": "11d10 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 12,
      "con": 16,
      "int": 6,
      "wis": 6,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Slaad; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The slaad has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Regeneration",
        "desc": "The slaad regains 10 Hit at the start of each of its turns if it has at least 1 Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The slaad makes three Injecting Claw attacks."
      },
      {
        "name": "Injecting Claw",
        "desc": "m Roll: +6, reach 10 ft. {@h}10 (2d6) Piercing damage. If the target is a Humanoid not cursed by a slaad, it is subjected to the following effect. con 14. {@actSaveFail} The target is cursed unawares, and a minuscule slaad egg is implanted in it. Removing the curse destroys the egg. Over 2d4 days, the egg gestates. In the final 24 hours, the cursed target feels unwell; its Speed|XPHB is halved, and it has Disadvantage|XPHB on D20. At the end of this time, the egg turns into a Slaad Tadpole, which chews out of the host and kills it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Reef Shark": {
    "name": "Reef Shark",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 22,
      "hitDice": "4d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 15,
      "con": 13,
      "int": 1,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The shark has Advantage|XPHB on an attack roll against a creature if at least one of the shark's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      },
      {
        "name": "Water Breathing",
        "desc": "The shark can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (2d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Remorhaz": {
    "name": "Remorhaz",
    "size": "Huge",
    "type": "monstrosity",
    "challengeRating": 11,
    "alignment": "Unaligned",
    "armorClass": 17,
    "hitPoints": {
      "value": 195,
      "hitDice": "17d12 + 85"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 24,
      "dex": 13,
      "con": 21,
      "int": 4,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold",
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Heat Aura",
        "desc": "At the end of each of the remorhaz's turns, each creature in a 5-foot Emanation originating from the remorhaz takes 16 (3d10) Fire damage."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +11, reach 10 ft. {@h}18 (2d10) Piercing damage plus 14 (4d6) Fire damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 17), and it has the Restrained condition until the grapple ends."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Revenant": {
    "name": "Revenant",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 127,
      "hitDice": "15d8 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 18,
      "int": 13,
      "wis": 16,
      "cha": 18
    },
    "savingThrows": {
      "str": 7,
      "dex": 0,
      "con": 7,
      "int": 0,
      "wis": 6,
      "cha": 7
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "poisoned",
      "stunned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "necrotic",
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Regeneration",
        "desc": "The revenant regains 10 Hit at the start of each of its turns. If the revenant takes Fire or Radiant damage, this trait doesn't function at the start of its next turn. Its body is destroyed only if it starts its turn with 0 Hit and doesn't regenerate."
      },
      {
        "name": "Undead Restoration",
        "desc": "If the revenant dies, it revives 24 hours later in a different body unless Dispel Evil and Good is cast on its corpse. If it revives, it animates a Humanoid corpse elsewhere on the same plane of existence; it now looks different but uses the same stat block and returns with all its Hit."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The revenant uses Vengeful Glare and makes two Slam attacks."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +7, reach 5 ft. {@h}11 (2d6) Necrotic damage."
      },
      {
        "name": "Vengeful Glare",
        "desc": "wis 15, one creature the revenant can see within 30 feet. {@actSaveFail} The target has the Frightened condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically. If the Frightened target is cursed by the revenant (see Vow of Revenge), the target also has the Paralyzed condition for the duration."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Rhinoceros": {
    "name": "Rhinoceros",
    "size": "Large",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 8,
      "con": 15,
      "int": 2,
      "wis": 12,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Gore",
        "desc": "m Roll: +7, reach 5 ft. {@h}14 (2d8) Piercing damage. If target is a Large or smaller creature and the rhinoceros moved 20+ feet straight toward it immediately before the hit, the target takes an extra 9 (2d8) Piercing damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Riding Horse": {
    "name": "Riding Horse",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 13,
      "hitDice": "2d10 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 13,
      "con": 12,
      "int": 2,
      "wis": 11,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Roc": {
    "name": "Roc",
    "size": "Gargantuan",
    "type": "monstrosity",
    "challengeRating": 11,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 248,
      "hitDice": "16d20 + 80"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 28,
      "dex": 10,
      "con": 20,
      "int": 3,
      "wis": 10,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The roc makes two Beak attacks. It can replace one attack with a Talons attack."
      },
      {
        "name": "Beak",
        "desc": "m Roll: +13, reach 10 ft. {@h}28 (3d12) Piercing damage."
      },
      {
        "name": "Talons",
        "desc": "m Roll: +13, reach 5 ft. {@h}23 (4d6) Slashing damage. If the target is a Huge or smaller creature, it has the Grappled condition (escape 19) from both talons, and it has the Restrained condition until the grapple ends."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Roper": {
    "name": "Roper",
    "size": "Large",
    "type": "aberration",
    "challengeRating": 5,
    "alignment": "Neutral Evil",
    "armorClass": 20,
    "hitPoints": {
      "value": 93,
      "hitDice": "11d10 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 8,
      "con": 17,
      "int": 7,
      "wis": 16,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The roper can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The roper makes two Tentacle attacks, uses Reel, and makes two Bite attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}17 (3d8) Piercing damage."
      },
      {
        "name": "Tentacle",
        "desc": "m Roll: +7, reach 60 ft. {@h}The target has the Grappled condition (escape 14) from one of six tentacles, and the target has the Poisoned condition until the grapple ends. The tentacle can be damaged, freeing a creature it has Grappled when destroyed (AC 20, HP 10, Immunity|XPHB to Poison and Psychic damage). Damaging the tentacle deals no damage to the roper, and a destroyed tentacle regrows at the start of the roper's next turn."
      },
      {
        "name": "Reel",
        "desc": "The roper pulls each creature Grappled by it up to 30 feet straight toward it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Rust Monster": {
    "name": "Rust Monster",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 33,
      "hitDice": "6d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 12,
      "con": 13,
      "int": 2,
      "wis": 13,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Iron Scent",
        "desc": "The rust monster can pinpoint the location of ferrous metal within 30 feet of itself."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The rust monster makes one Bite attack and uses Antennae twice."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +3, reach 5 ft. {@h}5 (1d8) Piercing damage."
      },
      {
        "name": "Antennae",
        "desc": "The rust monster targets one nonmagical metal object—armor or a weapon—worn or carried by a creature within 5 feet of itself. dex 11, the creature with the object. {@actSaveFail} The object takes a -1 penalty to the AC it offers (armor) or to its attack rolls (weapon). Armor is destroyed if the penalty reduces its AC to 10, and a weapon is destroyed if its penalty reaches -5. The penalty can be removed by casting the Mending spell on the armor or weapon."
      },
      {
        "name": "Destroy Metal",
        "desc": "The rust monster touches a nonmagical metal object within 5 feet of itself that isn't being worn or carried. The touch destroys a 1-foot Cube of the object."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Saber-Toothed Tiger": {
    "name": "Saber-Toothed Tiger",
    "size": "Large",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 52,
      "hitDice": "7d10 + 14"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 17,
      "con": 15,
      "int": 3,
      "wis": 12,
      "cha": 8
    },
    "savingThrows": {
      "str": 6,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Running Leap",
        "desc": "With a 10-foot running start, the tiger can Long up to 25 feet."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The tiger makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +6, reach 5 ft. {@h}11 (2d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sahuagin Baron": {
    "name": "Sahuagin Baron",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 5,
    "alignment": "Lawful Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 76,
      "hitDice": "9d10 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 15,
      "con": 16,
      "int": 14,
      "wis": 13,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 6,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Sahuagin"
    ],
    "traits": [
      {
        "name": "Blood Frenzy",
        "desc": "The sahuagin has Advantage|XPHB on attack rolls against any creature that doesn't have all its Hit."
      },
      {
        "name": "Limited Amphibiousness",
        "desc": "The sahuagin can breathe air and water, but it must be submerged at least once every 4 hours to avoid suffocating outside water."
      },
      {
        "name": "Shark Telepathy",
        "desc": "The sahuagin can magically control sharks within 120 feet of itself, using a special telepathy."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The sahuagin makes three Trident attacks."
      },
      {
        "name": "Trident",
        "desc": "m,r Roll: +7, reach 5 ft. or range 20/60 ft. {@h}13 (2d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sahuagin Priest": {
    "name": "Sahuagin Priest",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 2,
    "alignment": "Lawful Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 38,
      "hitDice": "7d8 + 7"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 11,
      "con": 12,
      "int": 12,
      "wis": 14,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Sahuagin"
    ],
    "traits": [
      {
        "name": "Blood Frenzy",
        "desc": "The sahuagin has Advantage|XPHB on attack rolls against any creature that doesn't have all its Hit."
      },
      {
        "name": "Limited Amphibiousness",
        "desc": "The sahuagin can breathe air and water, but it must be submerged at least once every 4 hours to avoid suffocating outside water."
      },
      {
        "name": "Shark Telepathy",
        "desc": "The sahuagin can magically control sharks within 120 feet of itself, using a special telepathy."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The sahuagin makes two Spectral Jaws attacks."
      },
      {
        "name": "Spectral Jaws",
        "desc": "m,r Roll: +4, reach 5 ft. or range 120 ft. {@h}11 (2d8) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sahuagin Warrior": {
    "name": "Sahuagin Warrior",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Lawful Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 22,
      "hitDice": "4d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 11,
      "con": 12,
      "int": 12,
      "wis": 13,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Sahuagin"
    ],
    "traits": [
      {
        "name": "Blood Frenzy",
        "desc": "The sahuagin has Advantage|XPHB on attack rolls against any creature that doesn't have all its Hit."
      },
      {
        "name": "Limited Amphibiousness",
        "desc": "The sahuagin can breathe air and water, but it must be submerged at least once every 4 hours to avoid suffocating outside water."
      },
      {
        "name": "Shark Telepathy",
        "desc": "The sahuagin can magically control sharks within 120 feet of itself, using a special telepathy."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The sahuagin makes two Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +3, reach 5 ft. {@h}4 (1d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Salamander": {
    "name": "Salamander",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 5,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 90,
      "hitDice": "12d10 + 24"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 15,
      "int": 11,
      "wis": 10,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "cold"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Ignan)"
    ],
    "traits": [
      {
        "name": "Fire Aura",
        "desc": "At the end of each of the salamander's turns, each creature of the salamander's choice in a 5-foot Emanation originating from the salamander takes 7 (2d6) Fire damage."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The salamander makes two Flame Spear attacks. It can replace one attack with a use of Constrict."
      },
      {
        "name": "Flame Spear",
        "desc": "m,r Roll: +7, reach 5 ft. or range 20/60 ft. {@h}13 (2d8) Piercing damage plus 7 (2d6) Fire damage. {@hom}The spear magically returns to the salamander's hand immediately after a ranged attack."
      },
      {
        "name": "Constrict",
        "desc": "str 15, one Large or smaller creature the salamander can see within 10 feet. {@actSaveFail} 11 (2d6) Bludgeoning damage plus 7 (2d6) Fire damage. The target has the Grappled condition (escape 14), and it has the Restrained condition until the grapple ends."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Salamander Fire Snake": {
    "name": "Salamander Fire Snake",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 27,
      "hitDice": "6d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 14,
      "con": 11,
      "int": 7,
      "wis": 10,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "cold"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Primordial but can't speak"
    ],
    "traits": [
      {
        "name": "Fire Aura",
        "desc": "At the end of each of the salamander's turns, each creature of the salamander's choice in a 5-foot Emanation originating from the salamander takes 3 (1d6) Fire damage."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Piercing damage plus 3 (1d6) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Salamander Inferno Master": {
    "name": "Salamander Inferno Master",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 15,
    "alignment": "Neutral Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 256,
      "hitDice": "27d10 + 108"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 24,
      "dex": 16,
      "con": 18,
      "int": 14,
      "wis": 10,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "cold"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Ignan)"
    ],
    "traits": [
      {
        "name": "Fire Aura",
        "desc": "At the end of each of the salamander's turns, each creature of the salamander's choice in a 10-foot Emanation originating from the salamander takes 10 (3d6) Fire damage."
      },
      {
        "name": "Magic Resistance",
        "desc": "The salamander has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The salamander makes two Flame Trident attacks."
      },
      {
        "name": "Flame Trident",
        "desc": "m,r Roll: +12, reach 5 ft. or range 30/90 ft. {@h}16 (2d8) Piercing damage plus 14 (4d6) Fire damage. {@hom}The trident magically returns to the salamander's hand immediately after a ranged attack."
      },
      {
        "name": "Inferno Blast 5",
        "desc": "dex 18, each creature in a 30-foot-radius Sphere centered on a point the salamander can see within 120 feet. {@actSaveFail} 35 (10d6) Fire damage, and the target starts burning|XPHB, taking 5 (1d10) Fire damage at the start of each of its turns instead of the normal burning|XPHB damage. The target gains 1 Exhaustion level whenever it takes this burning|XPHB damage. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Satyr": {
    "name": "Satyr",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Chaotic Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 31,
      "hitDice": "7d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 16,
      "con": 11,
      "int": 12,
      "wis": 10,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Elvish",
      "Sylvan"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The satyr has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Bludgeoning damage. If the target is a Medium or smaller creature, the satyr pushes the target up to 10 feet straight away from itself."
      },
      {
        "name": "Mockery",
        "desc": "wis 12, one creature the satyr can see within 90 feet. {@actSaveFail} 5 (1d6) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Satyr Revelmaster": {
    "name": "Satyr Revelmaster",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 6,
    "alignment": "Chaotic Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 82,
      "hitDice": "15d8 + 15"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 18,
      "con": 12,
      "int": 12,
      "wis": 14,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Elvish",
      "Sylvan"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The satyr has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The satyr makes three Prance attacks."
      },
      {
        "name": "Prance",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Bludgeoning damage, and the target has the Charmed condition until the start of the satyr's next turn."
      },
      {
        "name": "Fey Melody 4",
        "desc": "The satyr conjures a charming or frightening song. wis 14, each enemy in a 60-foot Emanation originating from the satyr. {@actSaveFail} The target is subjected to the song's effect: [object Object]"
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Scarecrow": {
    "name": "Scarecrow",
    "size": "Medium",
    "type": "construct",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 27,
      "hitDice": "6d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 13,
      "con": 11,
      "int": 10,
      "wis": 10,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned",
      "unconscious"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Fearsome Claw",
        "desc": "m Roll: +3, reach 5 ft. {@h}6 (2d4) Slashing damage, and the target has the Frightened condition until the end of the scarecrow's next turn."
      },
      {
        "name": "Terrifying Glare",
        "desc": "wis 11, one creature the scarecrow can see within 30 feet. {@actSaveFail} The target has the Frightened condition until the end of the scarecrow's next turn. While Frightened, the target has the Paralyzed condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Scorpion": {
    "name": "Scorpion",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 11,
      "con": 8,
      "int": 1,
      "wis": 8,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Sting",
        "desc": "m Roll: +2, reach 5 ft. {@h}1 Piercing damage plus 3 (1d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Scout": {
    "name": "Scout",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 16,
      "hitDice": "3d8 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 14,
      "con": 12,
      "int": 11,
      "wis": 13,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The scout makes two attacks, using Shortsword and Longbow in any combination."
      },
      {
        "name": "Shortsword",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage."
      },
      {
        "name": "Longbow",
        "desc": "r Roll: +4, range 150/600 ft. {@h}6 (1d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Scout Captain": {
    "name": "Scout Captain",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 3,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 66,
      "hitDice": "12d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 16,
      "con": 12,
      "int": 14,
      "wis": 15,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 4,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The scout makes two attacks, using Shortsword or Longbow in any combination."
      },
      {
        "name": "Shortsword",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Piercing damage, plus 10 (3d6) Piercing damage if the attack was made with Advantage|XPHB."
      },
      {
        "name": "Longbow",
        "desc": "r Roll: +5, range 150/600 ft. {@h}7 (1d8) Piercing damage, plus 10 (3d6) Piercing damage if the attack was made with Advantage|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sea Hag": {
    "name": "Sea Hag",
    "size": "Medium",
    "type": "fey",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 52,
      "hitDice": "7d8 + 21"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 13,
      "con": 16,
      "int": 12,
      "wis": 12,
      "cha": 13
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Giant",
      "Primordial (Aquan)"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The hag can breathe air and water."
      },
      {
        "name": "Vile Appearance",
        "desc": "wis 11, any Beast or Humanoid that starts its turn within 30 feet of the hag and can see the hag's true form. {@actSaveFail} The target has the Frightened condition until the start of its next turn. {@actSaveSuccess} The target is immune to this hag's Vile Appearance for 24 hours."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Slashing damage."
      },
      {
        "name": "Death Glare 5",
        "desc": "wis 11, one Frightened creature the hag can see within 30 feet. {@actSaveFail} If the target has 20 Hit or fewer, it drops to 0 Hit. Otherwise, the target takes 13 (3d8) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Seahorse": {
    "name": "Seahorse",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 12,
      "con": 8,
      "int": 1,
      "wis": 10,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Water Breathing",
        "desc": "The seahorse can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bubble Dash",
        "desc": "While underwater, the seahorse moves up to its Swim without provoking Opportunity Attacks."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Shadow": {
    "name": "Shadow",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 27,
      "hitDice": "5d8 + 5"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 14,
      "con": 13,
      "int": 6,
      "wis": 10,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "damageVulnerabilities": [
      "radiant"
    ],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Amorphous",
        "desc": "The shadow can move through a space as narrow as 1 inch without expending extra movement to do so."
      },
      {
        "name": "Sunlight Weakness",
        "desc": "While in sunlight, the shadow has Disadvantage|XPHB on D20."
      }
    ],
    "actions": [
      {
        "name": "Draining Swipe",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Necrotic damage, and the target's Strength score decreases by 1d4. The target dies if this reduces that score to 0. If a Humanoid is slain by this attack, a Shadow rises from the corpse 1d4 hours later."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Shadow Demon": {
    "name": "Shadow Demon",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 66,
      "hitDice": "12d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 17,
      "con": 12,
      "int": 14,
      "wis": 13,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 4
    },
    "conditionImmunities": [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "lightning",
      "piercing",
      "slashing",
      "thunder"
    ],
    "damageVulnerabilities": [
      "radiant"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the demon dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Incorporeal Movement",
        "desc": "The demon can move through other creatures and objects as if they were Difficult. It takes 5 (1d10) Force damage if it ends its turn inside an object."
      },
      {
        "name": "Light Sensitivity",
        "desc": "While in Bright, the demon has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Umbral Claw",
        "desc": "m Roll: +5, reach 5 ft. {@h}16 (3d8) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Shadow Dragon": {
    "name": "Shadow Dragon",
    "size": "Huge",
    "type": "dragon",
    "challengeRating": 13,
    "alignment": "Chaotic Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 189,
      "hitDice": "18d12 + 72"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 19,
      "con": 18,
      "int": 14,
      "wis": 12,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 0,
      "int": 0,
      "wis": 6,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "necrotic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Living Shadow",
        "desc": "While in Dim or Darkness|XPHB, the dragon has Resistance|XPHB to damage that isn't Force, Psychic, or Radiant."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the dragon has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +10, reach 10 ft. {@h}12 (2d6) Slashing damage plus 3 (1d6) Necrotic damage."
      },
      {
        "name": "Shadow Breath 5",
        "desc": "dex 17, each creature in a 60-foot Cone. {@actSaveFail} 35 (10d6) Necrotic damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} A Humanoid reduced to 0 Hit by this damage dies, and a Shadow rises from the corpse. The shadow is under the dragon's control and shares the dragon's Initiative|XPHB count but acts immediately after the dragon."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Shambling Mound": {
    "name": "Shambling Mound",
    "size": "Large",
    "type": "plant",
    "challengeRating": 5,
    "alignment": "Unaligned",
    "armorClass": 15,
    "hitPoints": {
      "value": 110,
      "hitDice": "13d10 + 39"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 8,
      "con": 16,
      "int": 5,
      "wis": 10,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "deafened",
      "exhaustion"
    ],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [
      "cold",
      "fire"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Lightning Absorption",
        "desc": "Whenever the shambling mound is subjected to Lightning damage, it regains a number of Hit equal to the Lightning damage dealt."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The shambling mound makes three Charged Tendril attacks. It can replace one attack with a use of Engulf."
      },
      {
        "name": "Charged Tendril",
        "desc": "m Roll: +7, reach 10 ft. {@h}7 (1d6) Bludgeoning damage plus 5 (2d4) Lightning damage. If the target is a Medium or smaller creature, the shambling mound pulls the target 5 feet straight toward itself."
      },
      {
        "name": "Engulf",
        "desc": "str 15, one Medium or smaller creature within 5 feet. {@actSaveFail} The target is pulled into the shambling mound's space and has the Grappled condition (escape 14). Until the grapple ends, the target has the Blinded and Restrained conditions, and it takes 10 (3d6) Lightning damage at the start of each of its turns. When the shambling mound moves, the Grappled target moves with it, costing it no extra movement. The shambling mound can have only one creature Grappled by this action at a time."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Shield Guardian": {
    "name": "Shield Guardian",
    "size": "Large",
    "type": "construct",
    "challengeRating": 7,
    "alignment": "Unaligned",
    "armorClass": 17,
    "hitPoints": {
      "value": 142,
      "hitDice": "15d10 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 8,
      "con": 18,
      "int": 7,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands commands given in any language but can't speak"
    ],
    "traits": [
      {
        "name": "Bound",
        "desc": "The guardian is magically bound to an amulet. While the guardian and its amulet are on the same plane of existence, the amulet's wearer can telepathically call the guardian to travel to it, and the guardian knows the distance and direction to the amulet. If the guardian is within 60 feet of the amulet's wearer, half of any damage the wearer takes (round up) is transferred to the guardian."
      },
      {
        "name": "Regeneration",
        "desc": "The guardian regains 10 Hit at the start of each of its turns if it has at least 1 Hit."
      },
      {
        "name": "Spell Storing",
        "desc": "A spellcaster who wears the guardian's amulet can cause the guardian to store one spell of level 4 or lower. To do so, the wearer must cast the spell on the guardian while within 5 feet of it. The spell has no effect but is stored within the guardian. Any previously stored spell is lost when a new spell is stored. The guardian can cast the spell stored with any parameters set by the original caster, requiring no spell components and using the caster's spellcasting ability. The stored spell is then lost."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The guardian makes two Fist attacks."
      },
      {
        "name": "Fist",
        "desc": "m Roll: +7, reach 10 ft. {@h}11 (2d6) Bludgeoning damage plus 7 (2d6) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Shrieker Fungus": {
    "name": "Shrieker Fungus",
    "size": "Medium",
    "type": "plant",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 5,
    "hitPoints": {
      "value": 13,
      "hitDice": "3d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 1,
      "con": 10,
      "int": 1,
      "wis": 3,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [],
    "source": "Monster Manual (2025)"
  },
  "Silver Dragon Wyrmling": {
    "name": "Silver Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 2,
    "alignment": "Lawful Good",
    "armorClass": 17,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d8 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 10,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 2,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +6, reach 5 ft. {@h}9 (1d10) Piercing damage."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 13, each creature in a 15-foot Cone. {@actSaveFail} 18 (4d8) Cold damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Paralyzing Breath",
        "desc": "con 13, each creature in a 15-foot Cone. 1 The target has the Incapacitated condition until the end of its next turn, when it repeats the save. 2 The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Skeleton": {
    "name": "Skeleton",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 1,
    "alignment": "Lawful Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 13,
      "hitDice": "2d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 16,
      "con": 15,
      "int": 6,
      "wis": 8,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "bludgeoning"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus one other language but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Shortsword",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Piercing damage."
      },
      {
        "name": "Shortbow",
        "desc": "r Roll: +5, range 80/320 ft. {@h}6 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Slaad Tadpole": {
    "name": "Slaad Tadpole",
    "size": "Tiny",
    "type": "aberration",
    "challengeRating": 1,
    "alignment": "Chaotic Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 7,
      "hitDice": "3d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 7,
      "dex": 15,
      "con": 10,
      "int": 3,
      "wis": 5,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "acid",
      "cold",
      "fire",
      "lightning",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Slaad but can't speak"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The slaad has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Smoke Mephit": {
    "name": "Smoke Mephit",
    "size": "Small",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 13,
      "hitDice": "3d6 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 14,
      "con": 12,
      "int": 10,
      "wis": 10,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Auran, Ignan)"
    ],
    "traits": [
      {
        "name": "Death Burst",
        "desc": "The mephit explodes when it dies. con 11, each creature in a 5-foot Emanation originating from the mephit. {@actSaveFail} The target has the Poisoned condition until the end of its next turn."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Slashing damage."
      },
      {
        "name": "Cinder Breath {@recharge}",
        "desc": "dex 11, one creature the mephit can see within 15 feet. {@actSaveFail} The target has the Blinded condition until the end of the mephit's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Solar": {
    "name": "Solar",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 21,
    "alignment": "Lawful Good",
    "armorClass": 21,
    "hitPoints": {
      "value": 297,
      "hitDice": "22d10 + 176"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 26,
      "dex": 22,
      "con": 26,
      "int": 25,
      "wis": 25,
      "cha": 30
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "poison",
      "radiant"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "all; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Divine Awareness",
        "desc": "The solar knows if it hears a lie."
      },
      {
        "name": "Exalted Restoration",
        "desc": "If the solar dies outside Mount Celestia, its body disappears, and it gains a new body instantly, reviving with all its Hit somewhere in Mount Celestia."
      },
      {
        "name": "Legendary Resistance (4/Day)",
        "desc": "If the solar fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The solar has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The solar makes two Flying Sword attacks. It can replace one attack with a use of Slaying Bow."
      },
      {
        "name": "Flying Sword",
        "desc": "m,r Roll: +15, reach 10 ft. or range 120 ft. {@h}22 (4d6) Slashing damage plus 36 (8d8) Radiant damage. {@hom}The sword magically returns to the solar's hand or hovers within 5 feet of the solar immediately after a ranged attack."
      },
      {
        "name": "Slaying Bow",
        "desc": "dex 21, one creature the solar can see within 600 feet. {@actSaveFail} If the creature has 100 Hit or fewer, it dies. It otherwise takes 24 (4d8) Piercing damage plus 36 (8d8) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Spectator": {
    "name": "Spectator",
    "size": "Medium",
    "type": "aberration",
    "challengeRating": 3,
    "alignment": "Lawful Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 45,
      "hitDice": "7d8 + 14"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 14,
      "con": 14,
      "int": 13,
      "wis": 14,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "prone"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Deep Speech",
      "Undercommon; telepathy 120 ft."
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The spectator uses Eye Rays twice."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage."
      },
      {
        "name": "Eye Rays",
        "desc": "The spectator randomly shoots one of the following magical rays at a target it can see within 90 feet of itself (roll 1d4; reroll if the spectator has already used that ray during this turn): [object Object]"
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Specter": {
    "name": "Specter",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 22,
      "hitDice": "5d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 14,
      "con": 11,
      "int": 10,
      "wis": 10,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "lightning",
      "piercing",
      "slashing",
      "thunder"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus one other language but can't speak"
    ],
    "traits": [
      {
        "name": "Incorporeal Movement",
        "desc": "The specter can move through other creatures and objects as if they were Difficult. It takes 5 (1d10) Force damage if it ends its turn inside an object."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the specter has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Life Drain",
        "desc": "m Roll: +4, reach 5 ft. {@h}7 (2d6) Necrotic damage. If the target is a creature, its Hit maximum decreases by an amount equal to the damage taken."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sphinx of Lore": {
    "name": "Sphinx of Lore",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 11,
    "alignment": "Lawful Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 170,
      "hitDice": "20d10 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 18,
      "wis": 18,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened"
    ],
    "damageImmunities": [
      "psychic"
    ],
    "damageResistances": [
      "necrotic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial",
      "Common"
    ],
    "traits": [
      {
        "name": "Inscrutable",
        "desc": "No magic can observe the sphinx remotely or detect its thoughts without its permission. Wisdom (Insight|XPHB) checks made to ascertain its intentions or sincerity are made with Disadvantage|XPHB."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the sphinx fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The sphinx makes three Claw attacks."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +8, reach 5 ft. {@h}14 (3d6) Slashing damage."
      },
      {
        "name": "Mind-Rending Roar 5",
        "desc": "wis 16, each enemy in a 300-foot Emanation originating from the sphinx. {@actSaveFail} 35 (10d6) Psychic damage, and the target has the Incapacitated condition until the start of the sphinx's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sphinx of Secrets": {
    "name": "Sphinx of Secrets",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 8,
    "alignment": "Lawful Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 136,
      "hitDice": "16d10 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 16,
      "int": 18,
      "wis": 18,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened"
    ],
    "damageImmunities": [
      "psychic"
    ],
    "damageResistances": [
      "necrotic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial",
      "Common"
    ],
    "traits": [
      {
        "name": "Inscrutable",
        "desc": "No magic can observe the sphinx remotely or detect its thoughts without its permission. Wisdom (Insight|XPHB) checks made to ascertain its intentions or sincerity are made with Disadvantage|XPHB."
      },
      {
        "name": "Magic Resistance",
        "desc": "The sphinx has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The sphinx makes three Claw attacks. It can replace one attack with a use of Curses|XPHB|Curse of the Riddle."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Slashing damage plus 7 (2d6) Radiant damage."
      },
      {
        "name": "Curse of the Riddle",
        "desc": "int 15, one creature the sphinx can see within 60 feet. {@actSaveFail} 21 (6d6) Psychic damage, and the target is cursed with a riddle. The cursed target has Disadvantage|XPHB on ability checks and attack rolls. In addition, if it takes the Magic action, it must succeed on a 15 Intelligence saving throw or that action is wasted. The cursed target can take a Study action to make a 15 Intelligence check, solving the riddle and ending the curse on a success. The curse ends early if the sphinx curses another target."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sphinx of Valor": {
    "name": "Sphinx of Valor",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 17,
    "alignment": "Lawful Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 199,
      "hitDice": "19d10 + 95"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 10,
      "con": 20,
      "int": 16,
      "wis": 23,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 11,
      "int": 9,
      "wis": 12,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened"
    ],
    "damageImmunities": [
      "psychic"
    ],
    "damageResistances": [
      "necrotic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial",
      "Common"
    ],
    "traits": [
      {
        "name": "Inscrutable",
        "desc": "No magic can observe the sphinx remotely or detect its thoughts without its permission. Wisdom (Insight|XPHB) checks made to ascertain its intentions or sincerity are made with Disadvantage|XPHB."
      },
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the sphinx fails a saving throw, it can choose to succeed instead."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The sphinx makes two Claw attacks and uses Roar."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +12, reach 5 ft. {@h}20 (4d6) Slashing damage."
      },
      {
        "name": "Roar (3/Day)",
        "desc": "The sphinx emits a magical roar. Whenever it roars, the roar has a different effect, as detailed below (the sequence resets when it takes a Long): [object Object]"
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sphinx of Wonder": {
    "name": "Sphinx of Wonder",
    "size": "Tiny",
    "type": "celestial",
    "challengeRating": 1,
    "alignment": "Lawful Good",
    "armorClass": 13,
    "hitPoints": {
      "value": 24,
      "hitDice": "7d4 + 7"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 17,
      "con": 13,
      "int": 15,
      "wis": 12,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "necrotic",
      "psychic",
      "radiant"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial",
      "Common"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The sphinx has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Slashing damage plus 7 (2d6) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Spider": {
    "name": "Spider",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 14,
      "con": 8,
      "int": 1,
      "wis": 10,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The spider can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "desc": "The spider ignores movement restrictions caused by webs, and the spider knows the location of any other creature in contact with the same web."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}1 Piercing damage plus 2 (1d4) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Spined Devil": {
    "name": "Spined Devil",
    "size": "Small",
    "type": "fiend",
    "challengeRating": 2,
    "alignment": "Lawful Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 45,
      "hitDice": "10d6 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 15,
      "con": 12,
      "int": 11,
      "wis": 14,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Flyby",
        "desc": "The devil doesn't provoke an Opportunity Attack when it flies out of an enemy's reach."
      },
      {
        "name": "Magic Resistance",
        "desc": "The devil has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The devil makes two attacks, using Infernal Fork and Tail Spine in any combination."
      },
      {
        "name": "Infernal Fork",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Tail Spine",
        "desc": "r Roll: +4, range 20/80 ft. {@h}4 (1d4) Piercing damage plus 3 (1d6) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Spirit Naga": {
    "name": "Spirit Naga",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 8,
    "alignment": "Chaotic Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 135,
      "hitDice": "18d10 + 36"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 17,
      "con": 14,
      "int": 16,
      "wis": 15,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 5,
      "int": 0,
      "wis": 5,
      "cha": 6
    },
    "conditionImmunities": [
      "charmed",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common"
    ],
    "traits": [
      {
        "name": "Fiendish Restoration",
        "desc": "If it dies, the naga returns to life in 1d6 days and regains all its Hit. Only a Wish spell can prevent this trait from functioning."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The naga makes three attacks, using Bite or Necrotic Ray in any combination."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 10 ft. {@h}7 (1d6) Piercing damage plus 14 (4d6) Poison damage."
      },
      {
        "name": "Necrotic Ray",
        "desc": "r Roll: +6, range 60 ft. {@h}21 (6d6) Necrotic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Sprite": {
    "name": "Sprite",
    "size": "Tiny",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Neutral Good",
    "armorClass": 15,
    "hitPoints": {
      "value": 10,
      "hitDice": "4d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 18,
      "con": 10,
      "int": 14,
      "wis": 13,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Elvish",
      "Sylvan"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Needle Sword",
        "desc": "m Roll: +6, reach 5 ft. {@h}6 (1d4) Piercing damage."
      },
      {
        "name": "Enchanting Bow",
        "desc": "r Roll: +6, range 40/160 ft. {@h}1 Piercing damage, and the target has the Charmed condition until the start of the sprite's next turn."
      },
      {
        "name": "Heart Sight",
        "desc": "cha 10, one creature within 5 feet the sprite can see (Celestials, Fiends, and Undead automatically fail the save). {@actSaveFail} The sprite knows the target's emotions and alignment."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Spy": {
    "name": "Spy",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 27,
      "hitDice": "6d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 15,
      "con": 10,
      "int": 12,
      "wis": 14,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Shortsword",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Hand Crossbow",
        "desc": "r Roll: +4, range 30/120 ft. {@h}5 (1d6) Piercing damage plus 7 (2d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Spy Master": {
    "name": "Spy Master",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 10,
    "alignment": "Neutral",
    "armorClass": 19,
    "hitPoints": {
      "value": 137,
      "hitDice": "25d8 + 25"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 20,
      "con": 12,
      "int": 18,
      "wis": 16,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 5,
      "int": 8,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The spy makes three attacks, using Rapier or Hand Crossbow in any combination."
      },
      {
        "name": "Rapier",
        "desc": "m Roll: +9, reach 5 ft. {@h}14 (2d8) Piercing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Hand Crossbow",
        "desc": "r Roll: +9, range 30/120 ft. {@h}12 (2d6) Piercing damage plus 9 (2d8) Poison damage."
      },
      {
        "name": "Smoke Bomb (1/Day)",
        "desc": "The spy throws a bomb to a point it can see within 30 feet of itself. con 16, each creature in a 20-foot-radius Sphere centered on that point. {@actSaveFail} 28 (8d6) Poison damage, and the target has the Blinded condition until the end of the spy's next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Steam Mephit": {
    "name": "Steam Mephit",
    "size": "Small",
    "type": "elemental",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 10,
    "hitPoints": {
      "value": 17,
      "hitDice": "5d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 5,
      "dex": 11,
      "con": 10,
      "int": 11,
      "wis": 10,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Aquan, Ignan)"
    ],
    "traits": [
      {
        "name": "Blurred Form",
        "desc": "Attack rolls against the mephit are made with Disadvantage|XPHB unless the mephit has the Incapacitated condition."
      },
      {
        "name": "Death Burst",
        "desc": "The mephit explodes when it dies. dex 10, each creature in a 5-foot Emanation originating from the mephit. {@actSaveFail} 5 (2d4) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +2, reach 5 ft. {@h}2 (1d4) Slashing damage plus 2 (1d4) Fire damage."
      },
      {
        "name": "Steam Breath {@recharge}",
        "desc": "con 10, each creature in a 15-foot Cone. {@actSaveFail} 5 (2d4) Fire damage, and the target's Speed|XPHB decreases by 10 feet until the end of the mephit's next turn. {@actSaveSuccess} Half damage only. {@actSaveSuccessOrFail} Being underwater doesn't grant Resistance|XPHB to this Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Stirge": {
    "name": "Stirge",
    "size": "Tiny",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 5,
      "hitDice": "2d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 4,
      "dex": 16,
      "con": 11,
      "int": 2,
      "wis": 8,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Proboscis",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Piercing damage, and the stirge attaches to the target. While attached, the stirge can't make Proboscis attacks, and the target takes 5 (2d4) Necrotic damage at the start of each of the stirge's turns. The stirge can detach itself by spending 5 feet of its movement. The target or a creature within 5 feet of it can detach the stirge as an action."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Stone Giant": {
    "name": "Stone Giant",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 7,
    "alignment": "Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 126,
      "hitDice": "11d12 + 55"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 15,
      "con": 20,
      "int": 10,
      "wis": 12,
      "cha": 9
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 8,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The giant makes two attacks, using Stone Club or Boulder in any combination."
      },
      {
        "name": "Stone Club",
        "desc": "m Roll: +9, reach 15 ft. {@h}22 (3d10) Bludgeoning damage."
      },
      {
        "name": "Boulder",
        "desc": "r Roll: +9, range 60/240 ft. {@h}15 (2d8) Bludgeoning damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Stone Golem": {
    "name": "Stone Golem",
    "size": "Large",
    "type": "construct",
    "challengeRating": 10,
    "alignment": "Unaligned",
    "armorClass": 18,
    "hitPoints": {
      "value": 220,
      "hitDice": "21d10 + 105"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 9,
      "con": 20,
      "int": 3,
      "wis": 11,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison",
      "psychic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus two other languages but can't speak"
    ],
    "traits": [
      {
        "name": "Immutable Form",
        "desc": "The golem can't shape-shift."
      },
      {
        "name": "Magic Resistance",
        "desc": "The golem has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The golem makes two attacks, using Slam or Force Bolt in any combination."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +10, reach 5 ft. {@h}15 (2d8) Bludgeoning damage plus 9 (2d8) Force damage."
      },
      {
        "name": "Force Bolt",
        "desc": "r Roll: +9, range 120 ft. {@h}22 (4d10) Force damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Storm Giant": {
    "name": "Storm Giant",
    "size": "Huge",
    "type": "giant",
    "challengeRating": 13,
    "alignment": "Chaotic Good",
    "armorClass": 16,
    "hitPoints": {
      "value": 230,
      "hitDice": "20d12 + 100"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 29,
      "dex": 14,
      "con": 20,
      "int": 16,
      "wis": 20,
      "cha": 18
    },
    "savingThrows": {
      "str": 14,
      "dex": 0,
      "con": 10,
      "int": 0,
      "wis": 10,
      "cha": 9
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning",
      "thunder"
    ],
    "damageResistances": [
      "cold"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Giant"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The giant can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The giant makes two attacks, using Storm Sword or Thunderbolt in any combination."
      },
      {
        "name": "Storm Sword",
        "desc": "m Roll: +14, reach 10 ft. {@h}23 (4d6) Slashing damage plus 13 (3d8) Lightning damage."
      },
      {
        "name": "Thunderbolt",
        "desc": "r Roll: +14, range 500 ft. {@h}22 (2d12) Lightning damage, and the target has the Blinded and Deafened conditions until the start of the giant's next turn."
      },
      {
        "name": "Lightning Storm 5",
        "desc": "dex 18, each creature in a 10-foot-radius, 40-foot-high Cylinder originating from a point the giant can see within 500 feet. {@actSaveFail} 55 (10d10) Lightning damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Succubus": {
    "name": "Succubus",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 4,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 71,
      "hitDice": "13d8 + 13"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 17,
      "con": 13,
      "int": 15,
      "wis": 12,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "cold",
      "fire",
      "poison",
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Infernal; telepathy 60 ft."
    ],
    "traits": [
      {
        "name": "Incubus Form",
        "desc": "When the succubus finishes a Long, it can shape-shift into an Incubus, using that stat block instead of this one."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The succubus makes one Fiendish Touch attack and uses Charm or Draining Kiss."
      },
      {
        "name": "Fiendish Touch",
        "desc": "m Roll: +7, reach 5 ft. {@h}16 (2d10) Psychic damage."
      },
      {
        "name": "Charm",
        "desc": "The succubus casts Dominate Person (level 8 version), requiring no spell components and using Charisma as the spellcasting ability (spell save 15)."
      },
      {
        "name": "Draining Kiss",
        "desc": "con 15, one creature Charmed by the succubus within 5 feet. {@actSaveFail} 13 (3d8) Psychic damage. {@actSaveSuccess} Half damage. {@actSaveSuccessOrFail} The target's Hit maximum decreases by an amount equal to the damage taken."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Bats": {
    "name": "Swarm of Bats",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 5,
      "dex": 15,
      "con": 10,
      "int": 2,
      "wis": 12,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny bat. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (2d4) Piercing damage, or 2 (1d4) Piercing damage if the swarm is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Crawling Claws": {
    "name": "Swarm of Crawling Claws",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 49,
      "hitDice": "11d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 14,
      "con": 11,
      "int": 5,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened",
      "grappled",
      "incapacitated",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common but can't speak"
    ],
    "traits": [
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny creature. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Swarm of Grasping Hands",
        "desc": "m Roll: +4, reach 5 ft. {@h}20 (4d8) Necrotic damage, or 11 (2d8) Necrotic damage if the swarm is Bloodied|XPHB. If the target is a Medium or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Dretches": {
    "name": "Swarm of Dretches",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 4,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 11,
      "con": 14,
      "int": 5,
      "wis": 8,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "bludgeoning",
      "cold",
      "fire",
      "lightning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 60 ft. (works only with creatures that understand Abyssal)"
    ],
    "traits": [
      {
        "name": "Fetid Aura",
        "desc": "con 12, any creature that starts its turn in a 10-foot Emanation originating from the swarm. {@actSaveFail} The target has the Poisoned condition until the start of its next turn. While Poisoned, the target can take either an action or a Bonus on its turn, not both, and it can't take Reactions."
      },
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Small creature. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The swarm makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}12 (3d6) Slashing damage, or 9 (3d4) Slashing damage if the swarm is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Insects": {
    "name": "Swarm of Insects",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "choose",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 13,
      "con": 14,
      "int": 1,
      "wis": 7,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "If the swarm has a Climb, the swarm can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "desc": "m Roll: +3, reach 5 ft. {@h}6 (2d4) Poison damage, or 3 (1d4) Poison damage if the swarm is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Larvae": {
    "name": "Swarm of Larvae",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 22,
      "hitDice": "3d10 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 11,
      "con": 14,
      "int": 6,
      "wis": 12,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands all but can't speak"
    ],
    "traits": [
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through an opening large enough for a Medium creature. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "desc": "m Roll: +4, reach 5 ft. {@h}9 (2d6) Necrotic damage, or 7 (2d4) Necrotic damage if the swarm is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Lemures": {
    "name": "Swarm of Lemures",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 3,
    "alignment": "Lawful Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 45,
      "hitDice": "6d10 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 7,
      "con": 14,
      "int": 1,
      "wis": 12,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "bludgeoning",
      "cold",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Infernal but can't speak"
    ],
    "traits": [
      {
        "name": "Hellish Restoration",
        "desc": "If the swarm dies in the Nine Hells, it revives with all its Hit in 1d10 days unless it is killed by a creature under the effects of a Bless spell or its remains are sprinkled with Holy Water."
      },
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through an opening large enough for a Medium creature. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The swarm makes two Vile Slime attacks."
      },
      {
        "name": "Vile Slime",
        "desc": "m Roll: +4, reach 5 ft. {@h}11 (2d8) Poison damage, or 9 (2d6) Poison damage if the swarm is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Piranhas": {
    "name": "Swarm of Piranhas",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 28,
      "hitDice": "8d8 - 8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 16,
      "con": 9,
      "int": 1,
      "wis": 7,
      "cha": 2
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny piranha. The swarm can't regain Hit or gain Temporary."
      },
      {
        "name": "Water Breathing",
        "desc": "The swarm can breathe only underwater."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "desc": "m Roll: +5 (with Advantage|XPHB if the target doesn't have all its Hit), reach 5 ft. {@h}8 (2d4) Piercing damage, or 5 (1d4) Piercing damage if the swarm is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Rats": {
    "name": "Swarm of Rats",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 14,
      "hitDice": "4d8 - 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 9,
      "dex": 11,
      "con": 9,
      "int": 2,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny rat. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "desc": "m Roll: +2, reach 5 ft. {@h}5 (2d4) Piercing damage, or 2 (1d4) Piercing damage if the swarm is Bloodied|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Ravens": {
    "name": "Swarm of Ravens",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 14,
      "con": 12,
      "int": 5,
      "wis": 12,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny raven. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Beaks",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage, or 2 (1d4) Piercing damage if the swarm is Bloodied|XPHB."
      },
      {
        "name": "Cacophony {@recharge}",
        "desc": "wis 10, one creature in the swarm's space. {@actSaveFail} The target has the Deafened condition until the start of the swarm's next turn. While Deafened, the target also has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Stirges": {
    "name": "Swarm of Stirges",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 36,
      "hitDice": "8d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 4,
      "dex": 16,
      "con": 11,
      "int": 2,
      "wis": 8,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny creature. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Swarm of Proboscises",
        "desc": "m Roll: +5, reach 5 ft. {@h}14 (2d10) Piercing damage, or 8 (1d10) Piercing damage if the swarm is Bloodied|XPHB. If the target is a Medium or smaller creature in the swarm's space, the target has the Grappled condition (escape 13). Until the grapple ends, the target takes 7 (2d6) Necrotic damage at the end of each of its turns."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Swarm of Venomous Snakes": {
    "name": "Swarm of Venomous Snakes",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 2,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 36,
      "hitDice": "8d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 8,
      "dex": 18,
      "con": 11,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "grappled",
      "paralyzed",
      "petrified",
      "prone",
      "restrained",
      "stunned"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Swarm",
        "desc": "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny snake. The swarm can't regain Hit or gain Temporary."
      }
    ],
    "actions": [
      {
        "name": "Bites",
        "desc": "m Roll: +6, reach 5 ft. {@h}8 (1d8) Piercing damage—or 6 (1d4) Piercing damage if the swarm is Bloodied|XPHB—plus 10 (3d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Tarrasque": {
    "name": "Tarrasque",
    "size": "Gargantuan",
    "type": "monstrosity",
    "challengeRating": 30,
    "alignment": "Unaligned",
    "armorClass": 25,
    "hitPoints": {
      "value": 697,
      "hitDice": "34d20 + 340"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 30,
      "dex": 11,
      "con": 30,
      "int": 3,
      "wis": 11,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 0,
      "int": 5,
      "wis": 9,
      "cha": 9
    },
    "conditionImmunities": [
      "charmed",
      "deafened",
      "frightened",
      "paralyzed",
      "poisoned"
    ],
    "damageImmunities": [
      "fire",
      "poison"
    ],
    "damageResistances": [
      "bludgeoning",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Legendary Resistance (6/Day)",
        "desc": "If the tarrasque fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The tarrasque has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Reflective Carapace",
        "desc": "If the tarrasque is targeted by a Magic Missile spell or a spell that requires a ranged attack roll, roll 1d6. On a 1-5, the tarrasque is unaffected. On a 6, the tarrasque is unaffected and reflects the spell, turning the caster into the target."
      },
      {
        "name": "Siege Monster",
        "desc": "The tarrasque deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The tarrasque makes one Bite attack and three other attacks, using Claw or Tail in any combination."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +19, reach 15 ft. {@h}36 (4d12) Piercing damage, and the target has the Grappled condition (escape 20). Until the grapple ends, the target has the Restrained condition and can't teleport."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +19, reach 15 ft. {@h}28 (4d8) Slashing damage."
      },
      {
        "name": "Tail",
        "desc": "m Roll: +19, reach 30 ft. {@h}23 (3d8) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      },
      {
        "name": "Thunderous Bellow 5",
        "desc": "con 27, each creature and each object that isn't being worn or carried in a 150-foot Cone. {@actSaveFail} 78 (12d12) Thunder damage, and the target has the Deafened and Frightened conditions until the end of its next turn. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Thri-kreen Marauder": {
    "name": "Thri-kreen Marauder",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 33,
      "hitDice": "6d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 12,
      "dex": 15,
      "con": 13,
      "int": 8,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Thri-kreen; telepathy 60 ft."
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The thri-kreen makes two attacks, using Gythka or Chatkcha in any combination."
      },
      {
        "name": "Gythka",
        "desc": "m Roll: +3, reach 5 ft. {@h}5 (1d8) Slashing damage plus 2 (1d4) Poison damage."
      },
      {
        "name": "Chatkcha",
        "desc": "r Roll: +4, range 30/120 ft. {@h}5 (1d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Thri-kreen Psion": {
    "name": "Thri-kreen Psion",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 8,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 149,
      "hitDice": "23d8 + 46"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 15,
      "con": 14,
      "int": 19,
      "wis": 12,
      "cha": 11
    },
    "savingThrows": {
      "str": 7,
      "dex": 5,
      "con": 5,
      "int": 7,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "psychic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Thri-kreen; telepathy 120 ft."
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The thri-kreen makes three Psionic Lance attacks."
      },
      {
        "name": "Psionic Lance",
        "desc": "m,r Roll: +7, reach 10 ft. or range 120 ft. {@h}18 (4d6) Psychic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Tiger": {
    "name": "Tiger",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 30,
      "hitDice": "4d10 + 8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 16,
      "con": 14,
      "int": 3,
      "wis": 12,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Slashing damage. If the target is a Large or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Tough": {
    "name": "Tough",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 32,
      "hitDice": "5d8 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 12,
      "con": 14,
      "int": 10,
      "wis": 10,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The tough has Advantage|XPHB on an attack roll against a creature if at least one of the tough's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Mace",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Bludgeoning damage."
      },
      {
        "name": "Heavy Crossbow",
        "desc": "r Roll: +3, range 100/400 ft. {@h}6 (1d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Tough Boss": {
    "name": "Tough Boss",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 4,
    "alignment": "Neutral",
    "armorClass": 16,
    "hitPoints": {
      "value": 82,
      "hitDice": "11d8 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 14,
      "con": 16,
      "int": 11,
      "wis": 10,
      "cha": 11
    },
    "savingThrows": {
      "str": 5,
      "dex": 0,
      "con": 5,
      "int": 0,
      "wis": 0,
      "cha": 2
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The tough has Advantage|XPHB on an attack roll against a creature if at least one of the tough's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The tough makes two attacks, using Warhammer or Heavy Crossbow in any combination."
      },
      {
        "name": "Warhammer",
        "desc": "m Roll: +5, reach 5 ft. {@h}12 (2d8) Bludgeoning damage. If the target is a Large or smaller creature, the tough pushes the target up to 10 feet straight away from itself."
      },
      {
        "name": "Heavy Crossbow",
        "desc": "r Roll: +4, range 100/400 ft. {@h}13 (2d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Treant": {
    "name": "Treant",
    "size": "Huge",
    "type": "plant",
    "challengeRating": 9,
    "alignment": "Chaotic Good",
    "armorClass": 16,
    "hitPoints": {
      "value": 138,
      "hitDice": "12d12 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 8,
      "con": 21,
      "int": 12,
      "wis": 16,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "bludgeoning",
      "piercing"
    ],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Druidic",
      "Elvish",
      "Sylvan"
    ],
    "traits": [
      {
        "name": "Siege Monster",
        "desc": "The treant deals double damage to objects and structures."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The treant makes two Slam attacks."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +10, reach 5 ft. {@h}16 (3d6) Bludgeoning damage."
      },
      {
        "name": "Hail of Bark",
        "desc": "r Roll: +10, range 180 ft. {@h}28 (4d10) Piercing damage."
      },
      {
        "name": "Animate Trees (1/Day)",
        "desc": "The treant magically animates up to two trees it can see within 60 feet of itself. Each tree uses the Treant stat block, except it has Intelligence and Charisma scores of 1, it can't speak, and it lacks this action. The tree takes its turn immediately after the treant on the same Initiative|XPHB count, and it obeys the treant. A tree remains animate for 1 day or until it dies, the treant dies, or it is more than 120 feet from the treant. The tree then takes root if possible."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Tree Blight": {
    "name": "Tree Blight",
    "size": "Huge",
    "type": "plant",
    "challengeRating": 7,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 115,
      "hitDice": "10d12 + 50"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 10,
      "con": 20,
      "int": 6,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "deafened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common and Druidic but can't speak"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The blight makes two Branch attacks and uses Grasping Root."
      },
      {
        "name": "Branch",
        "desc": "m Roll: +9, reach 15 ft. {@h}16 (3d6) Bludgeoning damage."
      },
      {
        "name": "Grasping Root",
        "desc": "str 17, one Large or smaller creature the blight can see within 15 feet. {@actSaveFail} The target is pulled up to 10 feet straight toward the blight and has the Grappled condition (escape 16) from one of six roots. Until the grapple ends, the target takes 13 (2d6) Bludgeoning damage at the start of each of its turns."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Triceratops": {
    "name": "Triceratops",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 5,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 114,
      "hitDice": "12d12 + 36"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 22,
      "dex": 9,
      "con": 17,
      "int": 2,
      "wis": 11,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The triceratops makes two Gore attacks."
      },
      {
        "name": "Gore",
        "desc": "m Roll: +9, reach 5 ft. {@h}19 (2d12) Piercing damage. If the target is Huge or smaller and the triceratops moved 20+ feet straight toward it immediately before the hit, the target takes an extra 9 (2d8) Piercing damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Troglodyte": {
    "name": "Troglodyte",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 13,
      "hitDice": "2d8 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 10,
      "con": 14,
      "int": 6,
      "wis": 10,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Troglodyte"
    ],
    "traits": [
      {
        "name": "Stench",
        "desc": "con 12, any creature (other than a troglodyte) that starts its turn in a 5-foot Emanation originating from the troglodyte. {@actSaveFail} The target has the Poisoned condition until the start of its next turn. {@actSaveSuccess} The target is immune to the Stench of all troglodytes for 1 hour."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the troglodyte has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Troll": {
    "name": "Troll",
    "size": "Large",
    "type": "giant",
    "challengeRating": 5,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 94,
      "hitDice": "9d10 + 45"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 13,
      "con": 20,
      "int": 7,
      "wis": 9,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Giant"
    ],
    "traits": [
      {
        "name": "Loathsome Limbs (4/Day)",
        "desc": "If the troll ends any turn Bloodied|XPHB and took 15+ Slashing damage during that turn, one of the troll's limbs is severed, falls into the troll's space, and becomes a Troll Limb. The limb acts immediately after the troll's turn. The troll has 1 Exhaustion level for each missing limb, and it grows replacement limbs the next time it regains Hit."
      },
      {
        "name": "Regeneration",
        "desc": "The troll regains 15 Hit at the start of each of its turns. If the troll takes Acid or Fire damage, this trait doesn't function on the troll's next turn. The troll dies only if it starts its turn with 0 Hit and doesn't regenerate."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The troll makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 10 ft. {@h}11 (2d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Troll Limb": {
    "name": "Troll Limb",
    "size": "Small",
    "type": "giant",
    "challengeRating": 1,
    "alignment": "Chaotic Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 14,
      "hitDice": "4d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 12,
      "con": 10,
      "int": 1,
      "wis": 9,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Regeneration",
        "desc": "The limb regains 5 Hit at the start of each of its turns. If the limb takes Acid or Fire damage, this trait doesn't function on the limb's next turn. The limb dies only if it starts its turn with 0 Hit and doesn't regenerate."
      },
      {
        "name": "Troll Spawn",
        "desc": "The limb uncannily has the same senses as a whole troll. If the limb isn't destroyed within 24 hours, roll 1d12. On a 12, the limb turns into a Troll. Otherwise, the limb withers away."
      }
    ],
    "actions": [
      {
        "name": "Rend",
        "desc": "m Roll: +6, reach 5 ft. {@h}9 (2d4) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Twig Blight": {
    "name": "Twig Blight",
    "size": "Small",
    "type": "plant",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 7,
      "hitDice": "2d6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 14,
      "con": 11,
      "int": 4,
      "wis": 8,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "deafened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [
      "fire"
    ],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common but can't speak"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The blight has Advantage|XPHB on an attack roll against a creature if at least one of the blight's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Claw",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Tyrannosaurus Rex": {
    "name": "Tyrannosaurus Rex",
    "size": "Huge",
    "type": "beast",
    "challengeRating": 8,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 136,
      "hitDice": "13d12 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 25,
      "dex": 10,
      "con": 19,
      "int": 2,
      "wis": 12,
      "cha": 9
    },
    "savingThrows": {
      "str": 10,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The tyrannosaurus makes one Bite attack and one Tail attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +10, reach 10 ft. {@h}33 (4d12) Piercing damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 17). While Grappled, the target has the Restrained condition and can't be targeted by the tyrannosaurus's Tail."
      },
      {
        "name": "Tail",
        "desc": "m Roll: +10, reach 15 ft. {@h}25 (4d8) Bludgeoning damage. If the target is a Huge or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Ultroloth": {
    "name": "Ultroloth",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 13,
    "alignment": "Neutral Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 221,
      "hitDice": "26d8 + 104"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 16,
      "con": 18,
      "int": 19,
      "wis": 15,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "acid",
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Infernal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Fiendish Restoration",
        "desc": "If the ultroloth dies outside Gehenna, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in Gehenna."
      },
      {
        "name": "Magic Resistance",
        "desc": "The ultroloth has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The ultroloth uses Hypnotic Gaze and makes two Mercurial Whip attacks."
      },
      {
        "name": "Mercurial Whip",
        "desc": "m Roll: +9, reach 15 ft. {@h}25 (6d6) Force damage, and the ultroloth can teleport the target up to 10 feet to an unoccupied space the ultroloth can see that isn't in the air."
      },
      {
        "name": "Hypnotic Gaze",
        "desc": "wis 17, each creature in a 30-foot Cone. {@actSaveFail} 10 (3d6) Psychic damage, and the target has the Stunned condition until the start of the ultroloth's next turn. {@actSaveSuccess} The target is immune to this ultroloth's Hypnotic Gaze for 24 hours."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Umber Hulk": {
    "name": "Umber Hulk",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 5,
    "alignment": "Chaotic Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 93,
      "hitDice": "11d10 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 13,
      "con": 16,
      "int": 9,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Umber Hulk"
    ],
    "traits": [
      {
        "name": "Tunneler",
        "desc": "The umber hulk can burrow through solid rock at half its Burrow and leaves a 10-foot-diameter tunnel in its wake."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The umber hulk makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +8, reach 10 ft. {@h}12 (2d6) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Unicorn": {
    "name": "Unicorn",
    "size": "Large",
    "type": "celestial",
    "challengeRating": 5,
    "alignment": "Lawful Good",
    "armorClass": 12,
    "hitPoints": {
      "value": 97,
      "hitDice": "13d10 + 26"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 15,
      "int": 11,
      "wis": 17,
      "cha": 16
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "paralyzed",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Celestial",
      "Elvish",
      "Sylvan; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day)",
        "desc": "If the unicorn fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Magic Resistance",
        "desc": "The unicorn has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The unicorn makes one Hooves attack and one Radiant Horn attack."
      },
      {
        "name": "Hooves",
        "desc": "m Roll: +7, reach 5 ft. {@h}11 (2d6) Bludgeoning damage."
      },
      {
        "name": "Radiant Horn",
        "desc": "m Roll: +7, reach 5 ft. {@h}9 (1d10) Radiant damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Vampire": {
    "name": "Vampire",
    "size": "Small",
    "type": "undead",
    "challengeRating": 13,
    "alignment": "Lawful Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 195,
      "hitDice": "23d8 + 92"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 18,
      "con": 18,
      "int": 17,
      "wis": 15,
      "cha": 18
    },
    "savingThrows": {
      "str": 0,
      "dex": 9,
      "con": 9,
      "int": 0,
      "wis": 7,
      "cha": 9
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "necrotic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Misty Escape",
        "desc": "If the vampire drops to 0 Hit outside its resting place, the vampire uses Shape-Shift to become mist (no action required). If it can't use Shape-Shift, it is destroyed. While it has 0 Hit in mist form, it can't return to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it returns to its vampire form and has the Paralyzed condition until it regains any Hit, and it regains 1 Hit after spending 1 hour there."
      },
      {
        "name": "Spider Climb",
        "desc": "The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Vampire Weakness",
        "desc": "The vampire has these weaknesses: [object Object]"
      }
    ],
    "actions": [
      {
        "name": "Multiattack (Vampire Form Only)",
        "desc": "The vampire makes two Grave Strike attacks and uses Bite."
      },
      {
        "name": "Grave Strike (Vampire Form Only)",
        "desc": "m Roll: +9, reach 5 ft. {@h}8 (1d8) Bludgeoning damage plus 7 (2d6) Necrotic damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 14) from one of two hands."
      },
      {
        "name": "Bite (Bat or Vampire Form Only)",
        "desc": "con 17, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. {@actSaveFail} 6 (1d4) Piercing damage plus 13 (3d8) Necrotic damage. The target's Hit maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit equal to that amount. A Humanoid reduced to 0 Hit by this damage and then buried rises the following sunset as a Vampire Spawn under the vampire's control."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Vampire Familiar": {
    "name": "Vampire Familiar",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 65,
      "hitDice": "10d8 + 20"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 16,
      "con": 15,
      "int": 10,
      "wis": 10,
      "cha": 14
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed"
    ],
    "damageImmunities": [],
    "damageResistances": [
      "necrotic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Vampiric Connection",
        "desc": "While the familiar and its vampire master are on the same plane of existence, the vampire can communicate with the familiar telepathically, and the vampire can perceive through the familiar's senses."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The familiar makes two Umbral Dagger attacks."
      },
      {
        "name": "Umbral Dagger",
        "desc": "m,r Roll: +5, reach 5 ft. or range 20/60 ft. {@h}5 (1d4) Piercing damage plus 7 (3d4) Necrotic damage. If the target is reduced to 0 Hit by this attack, the target becomes Stable|XPHB but has the Poisoned condition for 1 hour. While it has the Poisoned condition, the target has the Paralyzed condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Vampire Nightbringer": {
    "name": "Vampire Nightbringer",
    "size": "Small",
    "type": "undead",
    "challengeRating": 8,
    "alignment": "Neutral Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 142,
      "hitDice": "19d8 + 57"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 18,
      "con": 16,
      "int": 13,
      "wis": 14,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 7,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "frightened"
    ],
    "damageImmunities": [
      "cold",
      "necrotic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Sunlight Hypersensitivity",
        "desc": "The vampire takes 10 Radiant damage if it starts its turn in sunlight. While in sunlight, it has Disadvantage|XPHB on attack rolls and ability checks."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The vampire makes one Bite attack and one Shadow Strike attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}7 (1d6) Piercing damage plus 10 (3d6) Necrotic damage. The target's Hit maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit equal to that amount."
      },
      {
        "name": "Shadow Strike",
        "desc": "m Roll: +7, reach 5 ft. {@h}7 (1d6) Slashing damage plus 14 (4d6) Cold damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Vampire Spawn": {
    "name": "Vampire Spawn",
    "size": "Small",
    "type": "undead",
    "challengeRating": 5,
    "alignment": "Neutral Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 90,
      "hitDice": "12d8 + 36"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 16,
      "con": 16,
      "int": 11,
      "wis": 10,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [
      "necrotic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Spider Climb",
        "desc": "The vampire can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Vampire Weakness",
        "desc": "The vampire has these weaknesses: [object Object]"
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The vampire makes two Claw attacks and uses Bite."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +6, reach 5 ft. {@h}8 (2d4) Slashing damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 13) from one of two claws."
      },
      {
        "name": "Bite",
        "desc": "con 14, one creature within 5 feet that is willing or that has the Grappled, Incapacitated, or Restrained condition. {@actSaveFail} 5 (1d4) Piercing damage plus 10 (3d6) Necrotic damage. The target's Hit maximum decreases by an amount equal to the Necrotic damage taken, and the vampire regains Hit equal to that amount."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Vampire Umbral Lord": {
    "name": "Vampire Umbral Lord",
    "size": "Small",
    "type": "undead",
    "challengeRating": 15,
    "alignment": "Lawful Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 187,
      "hitDice": "22d8 + 88"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 20,
      "dex": 18,
      "con": 18,
      "int": 19,
      "wis": 16,
      "cha": 21
    },
    "savingThrows": {
      "str": 10,
      "dex": 9,
      "con": 0,
      "int": 0,
      "wis": 8,
      "cha": 10
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion"
    ],
    "damageImmunities": [
      "cold",
      "necrotic"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus three other languages"
    ],
    "traits": [
      {
        "name": "Legendary Resistance (3/Day, or 4/Day in Lair)",
        "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
      },
      {
        "name": "Shadow Escape",
        "desc": "If the vampire drops to 0 Hit outside its resting place, it teleports into its resting place unless it is in running water or sunlight. If it can't teleport, it is destroyed. Once inside its resting place, it has the Paralyzed condition for 1 hour, after which it regains 1 Hit."
      },
      {
        "name": "Vampire Weakness",
        "desc": "The vampire has these weaknesses: [object Object]"
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The vampire makes two attacks, using Grave Strike or Sickening Ray in any combination."
      },
      {
        "name": "Grave Strike",
        "desc": "m Roll: +10, reach 5 ft. {@h}9 (1d8) Slashing damage plus 13 (3d8) Necrotic damage."
      },
      {
        "name": "Sickening Ray",
        "desc": "r Roll: +10, range 120 ft. {@h}16 (2d10) Necrotic damage, and the target has the Poisoned condition until the start of the vampire's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Venomous Snake": {
    "name": "Venomous Snake",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 5,
      "hitDice": "2d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 2,
      "dex": 15,
      "con": 11,
      "int": 1,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}4 (1d4) Piercing damage plus 3 (1d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Vine Blight": {
    "name": "Vine Blight",
    "size": "Medium",
    "type": "plant",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 8,
      "con": 14,
      "int": 5,
      "wis": 10,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "deafened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Constricting Vine",
        "desc": "m Roll: +4, reach 10 ft. {@h}6 (1d8) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 12). Until the grapple ends, the target takes 4 (1d8) Bludgeoning damage at the start of each of its turns, and the blight can't make Constricting Vine attacks."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Violet Fungus": {
    "name": "Violet Fungus",
    "size": "Medium",
    "type": "plant",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 5,
    "hitPoints": {
      "value": 18,
      "hitDice": "4d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 1,
      "con": 10,
      "int": 1,
      "wis": 3,
      "cha": 1
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "frightened"
    ],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The fungus makes two Rotting Touch attacks."
      },
      {
        "name": "Rotting Touch",
        "desc": "m Roll: +2, reach 10 ft. {@h}4 (1d8) Necrotic damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Violet Fungus Necrohulk": {
    "name": "Violet Fungus Necrohulk",
    "size": "Large",
    "type": "plant",
    "challengeRating": 7,
    "alignment": "Neutral Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 123,
      "hitDice": "13d10 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 12,
      "con": 18,
      "int": 7,
      "wis": 14,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "blinded",
      "charmed",
      "deafened",
      "frightened",
      "poisoned"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The necrohulk makes two Rotting Slam attacks."
      },
      {
        "name": "Rotting Slam",
        "desc": "m Roll: +7, reach 10 ft. {@h}9 (1d10) Bludgeoning damage plus 7 (2d6) Necrotic damage."
      },
      {
        "name": "Spore Bomb 5",
        "desc": "con 15, each creature in a 20-foot-radius Sphere centered on a point the necrohulk can see within 60 feet. {@actSaveFail} 28 (8d6) Necrotic damage, and the target has the Poisoned condition until the start of the necrohulk's next turn. While Poisoned, the target can't regain Hit. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Vrock": {
    "name": "Vrock",
    "size": "Large",
    "type": "fiend",
    "challengeRating": 6,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 152,
      "hitDice": "16d10 + 64"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 15,
      "con": 18,
      "int": 8,
      "wis": 13,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 2
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal; telepathy 120 ft."
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the vrock dies outside the Abyss, its body dissolves into ichor, and it gains a new body instantly, reviving with all its Hit somewhere in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "desc": "The vrock has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The vrock makes two Shred attacks."
      },
      {
        "name": "Shred",
        "desc": "m Roll: +6, reach 5 ft. {@h}10 (2d6) Piercing damage plus 10 (3d6) Poison damage."
      },
      {
        "name": "Spores {@recharge}",
        "desc": "con 15, each creature in a 20-foot Emanation originating from the vrock. {@actSaveFail} The target has the Poisoned condition and repeats the save at the end of each of its turns, ending the effect on itself on a success. While Poisoned, the target takes 5 (1d10) Poison damage at the start of each of its turns. Emptying a flask of Holy Water on the target ends the effect early."
      },
      {
        "name": "Stunning Screech (1/Day)",
        "desc": "con 15, each creature in a 20-foot Emanation originating from the vrock (demons succeed automatically). {@actSaveFail} 10 (3d6) Thunder damage, and the target has the Stunned condition until the end of the vrock's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Vulture": {
    "name": "Vulture",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 10,
    "hitPoints": {
      "value": 5,
      "hitDice": "1d8 + 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 7,
      "dex": 10,
      "con": 13,
      "int": 2,
      "wis": 12,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The vulture has Advantage|XPHB on an attack roll against a creature if at least one of the vulture's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Beak",
        "desc": "m Roll: +2, reach 5 ft. {@h}2 (1d4) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Warhorse": {
    "name": "Warhorse",
    "size": "Large",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 11,
    "hitPoints": {
      "value": 19,
      "hitDice": "3d10 + 3"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 12,
      "con": 13,
      "int": 2,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +6, reach 5 ft. {@h}9 (2d4) Bludgeoning damage. If the target is a Large or smaller creature and the horse moved 20+ feet straight toward it immediately before the hit, the target takes an extra 5 (2d4) Bludgeoning damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Warhorse Skeleton": {
    "name": "Warhorse Skeleton",
    "size": "Large",
    "type": "undead",
    "challengeRating": 1,
    "alignment": "Lawful Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 22,
      "hitDice": "3d10 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 12,
      "con": 15,
      "int": 2,
      "wis": 8,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [
      "bludgeoning"
    ],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Hooves",
        "desc": "m Roll: +6, reach 5 ft. {@h}7 (1d6) Bludgeoning damage. If the target is a Large or smaller creature and the skeleton moved 20+ feet straight toward it immediately before the hit, the target has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Warrior Commander": {
    "name": "Warrior Commander",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 10,
    "alignment": "Neutral",
    "armorClass": 18,
    "hitPoints": {
      "value": 161,
      "hitDice": "19d8 + 76"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 20,
      "con": 18,
      "int": 14,
      "wis": 16,
      "cha": 14
    },
    "savingThrows": {
      "str": 9,
      "dex": 9,
      "con": 8,
      "int": 0,
      "wis": 7,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The warrior makes three attacks, using Greatsword or Longbow in any combination."
      },
      {
        "name": "Greatsword",
        "desc": "m Roll: +9, reach 5 ft. {@h}19 (4d6) Slashing damage. The warrior also creates one of the following effects: [object Object]"
      },
      {
        "name": "Longbow",
        "desc": "r Roll: +9, range 150/600 ft. {@h}18 (3d8) Piercing damage, and the target's Speed|XPHB decreases by 10 feet until the end of the target's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Warrior Infantry": {
    "name": "Warrior Infantry",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 9,
      "hitDice": "2d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 11,
      "con": 11,
      "int": 8,
      "wis": 11,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The warrior has Advantage|XPHB on an attack roll against a creature if at least one of the warrior's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Spear",
        "desc": "m,r Roll: +3, reach 5 ft. or range 20/60 ft. {@h}4 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Warrior Veteran": {
    "name": "Warrior Veteran",
    "size": "Small",
    "type": "humanoid",
    "challengeRating": 3,
    "alignment": "Neutral",
    "armorClass": 17,
    "hitPoints": {
      "value": 65,
      "hitDice": "10d8 + 20"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 13,
      "con": 14,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The warrior makes two Greatsword or Heavy Crossbow attacks."
      },
      {
        "name": "Greatsword",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Slashing damage."
      },
      {
        "name": "Heavy Crossbow",
        "desc": "r Roll: +3, range 100/400 ft. {@h}12 (2d10) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Water Elemental": {
    "name": "Water Elemental",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 14,
    "hitPoints": {
      "value": 114,
      "hitDice": "12d10 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 14,
      "con": 18,
      "int": 5,
      "wis": 10,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "acid",
      "fire"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Aquan)"
    ],
    "traits": [
      {
        "name": "Freeze",
        "desc": "If the elemental takes Cold damage, its Speed|XPHB decreases by 20 feet until the end of its next turn."
      },
      {
        "name": "Water Form",
        "desc": "The elemental can enter an enemy's space and stop there. It can move through a space as narrow as 1 inch without expending extra movement to do so."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The elemental makes two Slam attacks."
      },
      {
        "name": "Slam",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Bludgeoning damage. If the target is a Medium or smaller creature, it has the Prone condition."
      },
      {
        "name": "Whelm 4",
        "desc": "str 15, each creature in the elemental's space. {@actSaveFail} 22 (4d8) Bludgeoning damage. If the target is a Large or smaller creature, it has the Grappled condition (escape 14). Until the grapple ends, the target has the Restrained condition, is suffocating unless it can breathe water, and takes 9 (2d8) Bludgeoning damage at the start of each of the elemental's turns. The elemental can grapple one Large creature or up to two Medium or smaller creatures at a time with Whelm. As an action, a creature within 5 feet of the elemental can pull a creature out of it by succeeding on a 14 Strength (Athletics|XPHB) check. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Water Weird": {
    "name": "Water Weird",
    "size": "Large",
    "type": "elemental",
    "challengeRating": 3,
    "alignment": "Neutral",
    "armorClass": 13,
    "hitPoints": {
      "value": 65,
      "hitDice": "10d10 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 16,
      "con": 13,
      "int": 11,
      "wis": 10,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "fire"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Primordial but can't speak"
    ],
    "traits": [
      {
        "name": "Invisible in Water",
        "desc": "The water weird has the Invisible condition while fully immersed in water."
      },
      {
        "name": "Water Bound",
        "desc": "The water weird dies if it leaves the water to which it is bound or if that water is destroyed."
      }
    ],
    "actions": [
      {
        "name": "Surge",
        "desc": "m Roll: +5, reach 10 ft. {@h}13 (3d6) Cold damage. If the target is a Medium or smaller creature, it has the Grappled condition (escape 13), and it has the Restrained condition until the grapple ends."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Weasel": {
    "name": "Weasel",
    "size": "Tiny",
    "type": "beast",
    "challengeRating": 0,
    "alignment": "Unaligned",
    "armorClass": 13,
    "hitPoints": {
      "value": 1,
      "hitDice": "1d4 - 1"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 3,
      "dex": 16,
      "con": 8,
      "int": 2,
      "wis": 12,
      "cha": 3
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}1 Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Werebear": {
    "name": "Werebear",
    "size": "Small",
    "type": "monstrosity",
    "challengeRating": 5,
    "alignment": "Neutral Good",
    "armorClass": 15,
    "hitPoints": {
      "value": 135,
      "hitDice": "18d8 + 54"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "alternate",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 10,
      "con": 17,
      "int": 11,
      "wis": 12,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common (can't speak in bear form)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The werebear makes two attacks, using Handaxe or Rend in any combination. It can replace one attack with a Bite attack."
      },
      {
        "name": "Bite (Bear or Hybrid Form Only)",
        "desc": "m Roll: +7, reach 5 ft. {@h}17 (2d12) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. con 14. {@actSaveFail} The target is cursed. If the cursed target drops to 0 Hit, it instead becomes a Werebear under the DM's control and has 10 Hit. {@actSaveSuccess} The target is immune to this werebear's curse for 24 hours."
      },
      {
        "name": "Handaxe (Humanoid or Hybrid Form Only)",
        "desc": "m,r Roll: +7, reach 5 ft or range 20/60 ft. {@h}14 (3d6) Slashing damage."
      },
      {
        "name": "Rend (Bear or Hybrid Form Only)",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Wereboar": {
    "name": "Wereboar",
    "size": "Small",
    "type": "monstrosity",
    "challengeRating": 4,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 97,
      "hitDice": "15d8 + 30"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "alternate",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 10,
      "con": 15,
      "int": 10,
      "wis": 11,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common (can't speak in boar form)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The wereboar makes two attacks, using Javelin or Tusk in any combination. It can replace one attack with a Gore attack."
      },
      {
        "name": "Gore (Boar or Hybrid Form Only)",
        "desc": "m Roll: +5, reach 5 ft. {@h}12 (2d8) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. con 12. {@actSaveFail} The target is cursed. If the cursed target drops to 0 Hit, it instead becomes a Wereboar under the DM's control and has 10 Hit. {@actSaveSuccess} The target is immune to this wereboar's curse for 24 hours."
      },
      {
        "name": "Javelin (Humanoid or Hybrid Form Only)",
        "desc": "m,r Roll: +5, reach 5 ft. or range 30/120 ft. {@h}13 (3d6) Piercing damage."
      },
      {
        "name": "Tusk (Boar or Hybrid Form Only)",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Piercing damage. If the target is a Medium or smaller creature and the wereboar moved 20+ feet straight toward it immediately before the hit, the target takes an extra 7 (2d6) Piercing damage and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Wererat": {
    "name": "Wererat",
    "size": "Small",
    "type": "monstrosity",
    "challengeRating": 2,
    "alignment": "Lawful Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 60,
      "hitDice": "11d8 + 11"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 10,
      "dex": 16,
      "con": 12,
      "int": 11,
      "wis": 10,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common (can't speak in rat form)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The wererat makes two attacks, using Scratch or Hand Crossbow in any combination. It can replace one attack with a Bite attack."
      },
      {
        "name": "Bite (Rat or Hybrid Form Only)",
        "desc": "m Roll: +5, reach 5 ft. {@h}8 (2d4) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. con 11. {@actSaveFail} The target is cursed. If the cursed target drops to 0 Hit, it instead becomes a Wererat under the DM's control and has 10 Hit. {@actSaveSuccess} The target is immune to this wererat's curse for 24 hours."
      },
      {
        "name": "Scratch",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Slashing damage."
      },
      {
        "name": "Hand Crossbow (Humanoid or Hybrid Form Only)",
        "desc": "r Roll: +5, range 30/120 ft. {@h}6 (1d6) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Weretiger": {
    "name": "Weretiger",
    "size": "Small",
    "type": "monstrosity",
    "challengeRating": 4,
    "alignment": "Neutral",
    "armorClass": 12,
    "hitPoints": {
      "value": 120,
      "hitDice": "16d8 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "alternate",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 15,
      "con": 16,
      "int": 10,
      "wis": 13,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common (can't speak in tiger form)"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The weretiger makes two attacks, using Scratch or Longbow in any combination. It can replace one attack with a Bite attack."
      },
      {
        "name": "Bite (Tiger or Hybrid Form Only)",
        "desc": "m Roll: +5, reach 5 ft. {@h}12 (2d8) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. con 13. {@actSaveFail} The target is cursed. If the cursed target drops to 0 Hit, it instead becomes a Weretiger under the DM's control and has 10 Hit. {@actSaveSuccess} The target is immune to this weretiger's curse for 24 hours."
      },
      {
        "name": "Scratch",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Slashing damage."
      },
      {
        "name": "Longbow (Humanoid or Hybrid Form Only)",
        "desc": "r Roll: +4, range 150/600 ft. {@h}11 (2d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Werewolf": {
    "name": "Werewolf",
    "size": "Small",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 71,
      "hitDice": "11d8 + 22"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "alternate",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 14,
      "int": 10,
      "wis": 11,
      "cha": 10
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common (can't speak in wolf form)"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The werewolf has Advantage|XPHB on an attack roll against a creature if at least one of the werewolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The werewolf makes two attacks, using Scratch or Longbow in any combination. It can replace one attack with a Bite attack."
      },
      {
        "name": "Bite (Wolf or Hybrid Form Only)",
        "desc": "m Roll: +5, reach 5 ft. {@h}12 (2d8) Piercing damage. If the target is a Humanoid, it is subjected to the following effect. con 12. {@actSaveFail} The target is cursed. If the cursed target drops to 0 Hit, it instead becomes a Werewolf under the DM's control and has 10 Hit. {@actSaveSuccess} The target is immune to this werewolf's curse for 24 hours."
      },
      {
        "name": "Scratch",
        "desc": "m Roll: +5, reach 5 ft. {@h}10 (2d6) Slashing damage."
      },
      {
        "name": "Longbow (Humanoid or Hybrid Form Only)",
        "desc": "r Roll: +4, range 150/600 ft. {@h}11 (2d8) Piercing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "White Dragon Wyrmling": {
    "name": "White Dragon Wyrmling",
    "size": "Medium",
    "type": "dragon",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 16,
    "hitPoints": {
      "value": 32,
      "hitDice": "5d8 + 10"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 10,
      "con": 14,
      "int": 5,
      "wis": 10,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 2,
      "con": 0,
      "int": 0,
      "wis": 2,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Draconic"
    ],
    "traits": [
      {
        "name": "Ice Walk",
        "desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult composed of ice or snow doesn't cost it extra movement."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes two Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Slashing damage plus 2 (1d4) Cold damage."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 12, each creature in a 15-foot Cone. {@actSaveFail} 22 (5d8) Cold damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Wight": {
    "name": "Wight",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 14,
    "hitPoints": {
      "value": 82,
      "hitDice": "11d8 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 14,
      "con": 16,
      "int": 10,
      "wis": 13,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "necrotic"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the wight has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The wight makes two attacks, using Necrotic Sword or Necrotic Bow in any combination. It can replace one attack with a use of Life Drain."
      },
      {
        "name": "Necrotic Sword",
        "desc": "m Roll: +4, reach 5 ft. {@h}6 (1d8) Slashing damage plus 4 (1d8) Necrotic damage."
      },
      {
        "name": "Necrotic Bow",
        "desc": "r Roll: +4, range 150/600 ft. {@h}6 (1d8) Piercing damage plus 4 (1d8) Necrotic damage."
      },
      {
        "name": "Life Drain",
        "desc": "con 13, one creature within 5 feet. {@actSaveFail} 6 (1d8) Necrotic damage, and the target's Hit maximum decreases by an amount equal to the damage taken. A Humanoid slain by this attack rises 24 hours later as a Zombie under the wight's control, unless the Humanoid is restored to life or its body is destroyed. The wight can have no more than twelve zombies under its control at a time."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Will-o'-Wisp": {
    "name": "Will-o'-Wisp",
    "size": "Tiny",
    "type": "undead",
    "challengeRating": 2,
    "alignment": "Chaotic Evil",
    "armorClass": 19,
    "hitPoints": {
      "value": 27,
      "hitDice": "11d4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 1,
      "dex": 28,
      "con": 10,
      "int": 13,
      "wis": 14,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "lightning",
      "poison"
    ],
    "damageResistances": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "necrotic",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus one other language"
    ],
    "traits": [
      {
        "name": "Ephemeral",
        "desc": "The wisp can't wear or carry anything."
      },
      {
        "name": "Illumination",
        "desc": "The wisp sheds Bright in a 20-foot radius and Dim for an additional 20 feet."
      },
      {
        "name": "Incorporeal Movement",
        "desc": "The wisp can move through other creatures and objects as if they were Difficult. It takes 5 (1d10) Force damage if it ends its turn inside an object."
      }
    ],
    "actions": [
      {
        "name": "Shock",
        "desc": "m Roll: +4, reach 5 ft. {@h}11 (2d8) Lightning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Winged Kobold": {
    "name": "Winged Kobold",
    "size": "Small",
    "type": "dragon",
    "challengeRating": 1,
    "alignment": "Neutral",
    "armorClass": 15,
    "hitPoints": {
      "value": 10,
      "hitDice": "4d6 - 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 7,
      "dex": 16,
      "con": 9,
      "int": 8,
      "wis": 7,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The kobold has Advantage|XPHB on an attack roll against a creature if at least one of the kobold's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the kobold has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Dragon-Tooth Blade",
        "desc": "m Roll: +5, reach 5 ft. {@h}6 (1d6) Piercing damage."
      },
      {
        "name": "Chromatic Spittle",
        "desc": "r Roll: +5, range 30 ft. {@h}6 (1d6) damage of a type chosen by the kobold: Acid, Cold, Fire, Lightning, or Poison."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Winter Wolf": {
    "name": "Winter Wolf",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 75,
      "hitDice": "10d10 + 20"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 13,
      "con": 14,
      "int": 7,
      "wis": 12,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Giant"
    ],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The wolf has Advantage|XPHB on an attack roll against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 5 ft. {@h}11 (2d6) Piercing damage. If the target is a Large or smaller creature, it has the Prone condition."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 12, each creature in a 15-foot Cone. {@actSaveFail} 18 (4d8) Cold damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Wolf": {
    "name": "Wolf",
    "size": "Medium",
    "type": "beast",
    "challengeRating": 1,
    "alignment": "Unaligned",
    "armorClass": 12,
    "hitPoints": {
      "value": 11,
      "hitDice": "2d8 + 2"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 14,
      "dex": 15,
      "con": 12,
      "int": 3,
      "wis": 12,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Pack Tactics",
        "desc": "The wolf has Advantage|XPHB on attack rolls against a creature if at least one of the wolf's allies is within 5 feet of the creature and the ally doesn't have the Incapacitated condition."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +4, reach 5 ft. {@h}5 (1d6) Piercing damage. If the target is a Medium or smaller creature, it has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Worg": {
    "name": "Worg",
    "size": "Large",
    "type": "fey",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 26,
      "hitDice": "4d10 + 4"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 13,
      "con": 13,
      "int": 7,
      "wis": 11,
      "cha": 8
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Goblin",
      "Worg"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}7 (1d8) Piercing damage, and the next attack roll made against the target before the start of the worg's next turn has Advantage|XPHB."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Wraith": {
    "name": "Wraith",
    "size": "Small",
    "type": "undead",
    "challengeRating": 5,
    "alignment": "Neutral Evil",
    "armorClass": 13,
    "hitPoints": {
      "value": 67,
      "hitDice": "9d8 + 27"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "canHover",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 6,
      "dex": 16,
      "con": 16,
      "int": 12,
      "wis": 14,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "charmed",
      "exhaustion",
      "grappled",
      "paralyzed",
      "petrified",
      "poisoned",
      "prone",
      "restrained",
      "unconscious"
    ],
    "damageImmunities": [
      "necrotic",
      "poison"
    ],
    "damageResistances": [
      "acid",
      "bludgeoning",
      "cold",
      "fire",
      "piercing",
      "slashing"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common plus two other languages"
    ],
    "traits": [
      {
        "name": "Incorporeal Movement",
        "desc": "The wraith can move through other creatures and objects as if they were Difficult. It takes 5 (1d10) Force damage if it ends its turn inside an object."
      },
      {
        "name": "Sunlight Sensitivity",
        "desc": "While in sunlight, the wraith has Disadvantage|XPHB on ability checks and attack rolls."
      }
    ],
    "actions": [
      {
        "name": "Life Drain",
        "desc": "m Roll: +6, reach 5 ft. {@h}21 (4d8) Necrotic damage. If the target is a creature, its Hit maximum decreases by an amount equal to the damage taken."
      },
      {
        "name": "Create Specter",
        "desc": "The wraith targets a Humanoid corpse within 10 feet of itself that has been dead for no longer than 1 minute. The target's spirit rises as a Specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at a time."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Wyvern": {
    "name": "Wyvern",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 6,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 127,
      "hitDice": "15d10 + 45"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 10,
      "con": 16,
      "int": 5,
      "wis": 12,
      "cha": 6
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The wyvern makes one Bite attack and one Sting attack."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}13 (2d8) Piercing damage."
      },
      {
        "name": "Sting",
        "desc": "m Roll: +7, reach 10 ft. {@h}11 (2d6) Piercing damage plus 24 (7d6) Poison damage, and the target has the Poisoned condition until the start of the wyvern's next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Xorn": {
    "name": "Xorn",
    "size": "Medium",
    "type": "elemental",
    "challengeRating": 5,
    "alignment": "Neutral",
    "armorClass": 19,
    "hitPoints": {
      "value": 84,
      "hitDice": "8d8 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 17,
      "dex": 10,
      "con": 22,
      "int": 11,
      "wis": 10,
      "cha": 11
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "paralyzed",
      "petrified",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Primordial (Terran)"
    ],
    "traits": [
      {
        "name": "Earth Glide",
        "desc": "The xorn can burrow through nonmagical, unworked earth and stone. While doing so, the xorn doesn't disturb the material it moves through."
      },
      {
        "name": "Treasure Sense",
        "desc": "The xorn can pinpoint the location of precious metals and stones within 60 feet of itself."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The xorn makes one Bite attack and three Claw attacks."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +6, reach 5 ft. {@h}17 (4d6) Piercing damage."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +6, reach 5 ft. {@h}8 (1d10) Slashing damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Yeti": {
    "name": "Yeti",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Chaotic Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 51,
      "hitDice": "6d10 + 18"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 13,
      "con": 16,
      "int": 8,
      "wis": 12,
      "cha": 7
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Yeti"
    ],
    "traits": [
      {
        "name": "Fear of Fire",
        "desc": "If the yeti takes Fire damage, it has Disadvantage|XPHB on attack rolls and ability checks until the end of its next turn."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The yeti can use its Chilling Gaze and makes two attacks, using Claw or Ice Throw in any combination."
      },
      {
        "name": "Claw",
        "desc": "m Roll: +6, reach 5 ft. {@h}7 (1d6) Slashing damage plus 3 (1d6) Cold damage."
      },
      {
        "name": "Ice Throw",
        "desc": "r Roll: +6, range 30/120 ft. {@h}6 (1d4) Bludgeoning damage plus 2 (1d4) Cold damage."
      },
      {
        "name": "Chilling Gaze",
        "desc": "con 13, one creature the yeti can see within 30 feet. {@actSaveFail} 5 (2d4) Cold damage, and the target has the Paralyzed condition until the start of the yeti's next turn unless the target has Immunity|XPHB to Cold damage. {@actSaveSuccess} The target is immune to the Chilling Gaze of all yetis (but not abominable yetis) for 1 hour."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Yochlol": {
    "name": "Yochlol",
    "size": "Medium",
    "type": "fiend",
    "challengeRating": 10,
    "alignment": "Chaotic Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 153,
      "hitDice": "18d8 + 72"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 15,
      "dex": 19,
      "con": 18,
      "int": 13,
      "wis": 15,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 8,
      "con": 0,
      "int": 5,
      "wis": 6,
      "cha": 7
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [
      "cold",
      "fire",
      "lightning"
    ],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Elvish",
      "Undercommon"
    ],
    "traits": [
      {
        "name": "Demonic Restoration",
        "desc": "If the yochlol dies outside the Abyss, its body dissolves, and it gains a new body instantly, reviving with all its Hit in the Abyss."
      },
      {
        "name": "Magic Resistance",
        "desc": "The yochlol has Advantage|XPHB on saving throws against spells and other magical effects."
      },
      {
        "name": "Spider Climb",
        "desc": "The yochlol can climb difficult surfaces, including along ceilings, without needing to make an ability check."
      },
      {
        "name": "Web Walker",
        "desc": "The yochlol ignores movement restrictions caused by webs."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The yochlol makes two Caustic Lash attacks, and it can use Spellcasting to cast Web or Dominate Person if available."
      },
      {
        "name": "Caustic Lash",
        "desc": "m,r Roll: +8, reach 10 ft. or range 120 ft. {@h}25 (6d6) Acid damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Black Dragon": {
    "name": "Young Black Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 7,
    "alignment": "Chaotic Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 127,
      "hitDice": "15d10 + 45"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 14,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 5,
      "con": 0,
      "int": 0,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 10 ft. {@h}9 (2d4) Slashing damage plus 3 (1d6) Acid damage."
      },
      {
        "name": "Acid Breath 5",
        "desc": "dex 14, each creature in a 30-foot-long, 5-foot-wide Line. {@actSaveFail} 49 (14d6) Acid damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Blue Dragon": {
    "name": "Young Blue Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 9,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 152,
      "hitDice": "16d10 + 64"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 10,
      "con": 19,
      "int": 14,
      "wis": 13,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +9, reach 10 ft. {@h}12 (2d6) Slashing damage plus 5 (1d10) Lightning damage."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 16, each creature in a 60-foot-long, 5-foot-wide Line. {@actSaveFail} 55 (10d10) Lightning damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Brass Dragon": {
    "name": "Young Brass Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 6,
    "alignment": "Chaotic Good",
    "armorClass": 17,
    "hitPoints": {
      "value": 110,
      "hitDice": "13d10 + 39"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 10,
      "con": 17,
      "int": 12,
      "wis": 11,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 0,
      "int": 0,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace two attacks with a use of Sleep Breath."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 10 ft. {@h}15 (2d10) Slashing damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 14, each creature in a 40-foot-long, 5-foot-wide Line. {@actSaveFail} 38 (11d6) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Sleep Breath",
        "desc": "con 14, each creature in a 30-foot Cone. {@actSaveFail} The target has the Incapacitated condition until the end of its next turn, at which point it repeats the save. 2 The target has the Unconscious condition for 1 minute. This effect ends for the target if it takes damage or a creature within 5 feet of it takes an action to wake it."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Bronze Dragon": {
    "name": "Young Bronze Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 8,
    "alignment": "Lawful Good",
    "armorClass": 17,
    "hitPoints": {
      "value": 142,
      "hitDice": "15d10 + 60"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 21,
      "dex": 10,
      "con": 19,
      "int": 14,
      "wis": 13,
      "cha": 17
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "lightning"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Repulsion Breath."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +8, reach 10 ft. {@h}16 (2d10) Slashing damage."
      },
      {
        "name": "Lightning Breath 5",
        "desc": "dex 15, each creature in a 60-foot-long, 5-foot-wide Line. {@actSaveFail} 49 (9d10) Lightning damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Repulsion Breath",
        "desc": "str 15, each creature in a 30-foot Cone. {@actSaveFail} The target is pushed up to 40 feet straight away from the dragon and has the Prone condition."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Copper Dragon": {
    "name": "Young Copper Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 7,
    "alignment": "Chaotic Good",
    "armorClass": 17,
    "hitPoints": {
      "value": 119,
      "hitDice": "14d10 + 42"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 12,
      "con": 17,
      "int": 16,
      "wis": 13,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "acid"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Slowing Breath."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 10 ft. {@h}15 (2d10) Slashing damage."
      },
      {
        "name": "Acid Breath 5",
        "desc": "dex 14, each creature in a 40-foot-long, 5-foot-wide Line. {@actSaveFail} 40 (9d8) Acid damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Slowing Breath",
        "desc": "con 14, each creature in a 30-foot Cone. {@actSaveFail} The target can't take Reactions; its Speed|XPHB is halved; and it can take either an action or a Bonus on its turn, not both. This effect lasts until the end of its next turn."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Gold Dragon": {
    "name": "Young Gold Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 10,
    "alignment": "Lawful Good",
    "armorClass": 18,
    "hitPoints": {
      "value": 178,
      "hitDice": "17d10 + 85"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 14,
      "con": 21,
      "int": 16,
      "wis": 13,
      "cha": 20
    },
    "savingThrows": {
      "str": 0,
      "dex": 6,
      "con": 0,
      "int": 0,
      "wis": 5,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Weakening Breath."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +10, reach 10 ft. {@h}17 (2d10) Slashing damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 17, each creature in a 30-foot Cone. {@actSaveFail} 55 (10d10) Fire damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Weakening Breath",
        "desc": "str 17, each creature that isn't currently affected by this breath in a 30-foot Cone. {@actSaveFail} The target has Disadvantage|XPHB on Strength-based D20 and subtracts 3 (1d6) from its damage rolls. It repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Green Dragon": {
    "name": "Young Green Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 8,
    "alignment": "Lawful Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 136,
      "hitDice": "16d10 + 48"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 12,
      "con": 17,
      "int": 16,
      "wis": 13,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Amphibious",
        "desc": "The dragon can breathe air and water."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 10 ft. {@h}11 (2d6) Slashing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Poison Breath 5",
        "desc": "con 14, each creature in a 30-foot Cone. {@actSaveFail} 42 (12d6) Poison damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Red Dragon": {
    "name": "Young Red Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 10,
    "alignment": "Chaotic Evil",
    "armorClass": 18,
    "hitPoints": {
      "value": 178,
      "hitDice": "17d10 + 85"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 10,
      "con": 21,
      "int": 14,
      "wis": 11,
      "cha": 19
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +10, reach 10 ft. {@h}13 (2d6) Slashing damage plus 3 (1d6) Fire damage."
      },
      {
        "name": "Fire Breath 5",
        "desc": "dex 17, each creature in a 30-foot Cone. {@actSaveFail} 56 (16d6) Fire damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Remorhaz": {
    "name": "Young Remorhaz",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 5,
    "alignment": "Unaligned",
    "armorClass": 14,
    "hitPoints": {
      "value": 93,
      "hitDice": "11d10 + 33"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 13,
      "con": 17,
      "int": 3,
      "wis": 10,
      "cha": 4
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold",
      "fire"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [],
    "traits": [
      {
        "name": "Heat Aura",
        "desc": "At the end of each of the remorhaz's turns, each creature in a 5-foot Emanation originating from the remorhaz takes 11 (2d10) Fire damage."
      }
    ],
    "actions": [
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}15 (2d10) Piercing damage plus 13 (3d8) Fire damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young Silver Dragon": {
    "name": "Young Silver Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 9,
    "alignment": "Lawful Good",
    "armorClass": 18,
    "hitPoints": {
      "value": 168,
      "hitDice": "16d10 + 80"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 23,
      "dex": 10,
      "con": 21,
      "int": 14,
      "wis": 11,
      "cha": 19
    },
    "savingThrows": {
      "str": 0,
      "dex": 4,
      "con": 0,
      "int": 0,
      "wis": 4,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks. It can replace one attack with a use of Paralyzing Breath."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +10, reach 10 ft. {@h}15 (2d8) Slashing damage."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 17, each creature in a 30-foot Cone. {@actSaveFail} 49 (11d8) Cold damage. {@actSaveSuccess} Half damage."
      },
      {
        "name": "Paralyzing Breath",
        "desc": "con 17, each creature in a 30-foot Cone. 1 The target has the Incapacitated condition until the end of its next turn, when it repeats the save. 2 The target has the Paralyzed condition, and it repeats the save at the end of each of its turns, ending the effect on itself on a success. After 1 minute, it succeeds automatically."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Young White Dragon": {
    "name": "Young White Dragon",
    "size": "Large",
    "type": "dragon",
    "challengeRating": 6,
    "alignment": "Chaotic Evil",
    "armorClass": 17,
    "hitPoints": {
      "value": 123,
      "hitDice": "13d10 + 52"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "burrow",
        "speed": "0"
      },
      {
        "type": "fly",
        "speed": "0"
      },
      {
        "type": "swim",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 18,
      "dex": 10,
      "con": 18,
      "int": 6,
      "wis": 11,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 3,
      "con": 0,
      "int": 0,
      "wis": 3,
      "cha": 0
    },
    "conditionImmunities": [],
    "damageImmunities": [
      "cold"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Ice Walk",
        "desc": "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, Difficult composed of ice or snow doesn't cost it extra movement."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The dragon makes three Rend attacks."
      },
      {
        "name": "Rend",
        "desc": "m Roll: +7, reach 10 ft. {@h}9 (2d4) Slashing damage plus 2 (1d4) Cold damage."
      },
      {
        "name": "Cold Breath 5",
        "desc": "con 15, each creature in a 30-foot Cone. {@actSaveFail} 40 (9d8) Cold damage. {@actSaveSuccess} Half damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Yuan-ti Abomination": {
    "name": "Yuan-ti Abomination",
    "size": "Large",
    "type": "monstrosity",
    "challengeRating": 7,
    "alignment": "Neutral Evil",
    "armorClass": 15,
    "hitPoints": {
      "value": 127,
      "hitDice": "15d10 + 45"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 19,
      "dex": 16,
      "con": 17,
      "int": 17,
      "wis": 18,
      "cha": 15
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The yuan-ti has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The yuan-ti makes two Bite attacks, and it can use Spellcasting to cast Suggestion if available."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +7, reach 5 ft. {@h}11 (2d6) Piercing damage plus 10 (3d6) Poison damage."
      },
      {
        "name": "Constrict",
        "desc": "str 15, one Large or smaller creature within 5 feet. {@actSaveFail} 28 (7d6) Bludgeoning damage. The target has the Grappled condition (escape 14), and it has the Restrained condition until the grapple ends. {@actSaveSuccess} Half damage only."
      },
      {
        "name": "Poison Spray 5",
        "desc": "con 14, each creature in a 30-foot Cone. {@actSaveFail} 21 (6d6) Poison damage, and the target has the Poisoned condition until the end of the yuan-ti's next turn. While Poisoned, the target has the Blinded condition. {@actSaveSuccess} Half damage only."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Yuan-ti Infiltrator": {
    "name": "Yuan-ti Infiltrator",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 11,
    "hitPoints": {
      "value": 40,
      "hitDice": "9d8"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 11,
      "dex": 12,
      "con": 11,
      "int": 13,
      "wis": 14,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The yuan-ti has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The yuan-ti makes two Scimitar attacks."
      },
      {
        "name": "Scimitar",
        "desc": "m Roll: +3, reach 5 ft. {@h}4 (1d6) Slashing damage."
      },
      {
        "name": "Poison Ray",
        "desc": "r Roll: +4, range 120 ft. {@h}9 (2d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Yuan-ti Malison (Type 1)": {
    "name": "Yuan-ti Malison (Type 1)",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 66,
      "hitDice": "12d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 13,
      "int": 14,
      "wis": 16,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The yuan-ti has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The yuan-ti makes two attacks, using Bite or Poison Ray in any combination, and it can use Spellcasting to cast Suggestion if available."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 5 ft. {@h}5 (1d4) Piercing damage plus 7 (2d6) Poison damage."
      },
      {
        "name": "Poison Ray (Yuan-ti Form Only)",
        "desc": "r Roll: +5, range 120 ft. {@h}12 (2d8) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Yuan-ti Malison (Type 2)": {
    "name": "Yuan-ti Malison (Type 2)",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 66,
      "hitDice": "12d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 13,
      "int": 14,
      "wis": 16,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The yuan-ti has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The yuan-ti makes two Bite attacks, and it can use Spellcasting to cast Suggestion if available."
      },
      {
        "name": "Bite",
        "desc": "m Roll: +5, reach 10 ft. {@h}7 (1d8) Piercing damage plus 7 (2d6) Poison damage."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Yuan-ti Malison (Type 3)": {
    "name": "Yuan-ti Malison (Type 3)",
    "size": "Medium",
    "type": "monstrosity",
    "challengeRating": 3,
    "alignment": "Neutral Evil",
    "armorClass": 12,
    "hitPoints": {
      "value": 66,
      "hitDice": "12d8 + 12"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      },
      {
        "type": "climb",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 16,
      "dex": 14,
      "con": 13,
      "int": 14,
      "wis": 16,
      "cha": 12
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "Abyssal",
      "Common",
      "Draconic"
    ],
    "traits": [
      {
        "name": "Magic Resistance",
        "desc": "The yuan-ti has Advantage|XPHB on saving throws against spells and other magical effects."
      }
    ],
    "actions": [
      {
        "name": "Multiattack",
        "desc": "The yuan-ti makes two Poison Burst attacks, and it can use Spellcasting to cast Suggestion if available."
      },
      {
        "name": "Poison Burst (Yuan-ti Form Only)",
        "desc": "m,r Roll: +5, reach 5 ft. or range 120 ft. {@h}12 (2d8) Poison damage."
      },
      {
        "name": "Constrict",
        "desc": "str 13, one Medium or smaller creature within 5 feet. {@actSaveFail} 21 (4d8) Bludgeoning damage. The target has the Grappled condition (escape 13), and it has the Restrained condition until the grapple ends."
      }
    ],
    "source": "Monster Manual (2025)"
  },
  "Zombie": {
    "name": "Zombie",
    "size": "Medium",
    "type": "undead",
    "challengeRating": 1,
    "alignment": "Neutral Evil",
    "armorClass": 8,
    "hitPoints": {
      "value": 15,
      "hitDice": "2d8 + 6"
    },
    "speed": [
      {
        "type": "walk",
        "speed": "0"
      }
    ],
    "abilityScores": {
      "str": 13,
      "dex": 6,
      "con": 16,
      "int": 3,
      "wis": 6,
      "cha": 5
    },
    "savingThrows": {
      "str": 0,
      "dex": 0,
      "con": 0,
      "int": 0,
      "wis": 0,
      "cha": 0
    },
    "conditionImmunities": [
      "exhaustion",
      "poisoned"
    ],
    "damageImmunities": [
      "poison"
    ],
    "damageResistances": [],
    "damageVulnerabilities": [],
    "skill": {},
    "passive": 10,
    "languages": [
      "understands Common plus one other language but can't speak"
    ],
    "traits": [
      {
        "name": "Undead Fortitude",
        "desc": "If damage reduces the zombie to 0 Hit, it makes a Constitution saving throw (5 plus the damage taken) unless the damage is Radiant or from a Critical. On a successful save, the zombie drops to 1 Hit instead."
      }
    ],
    "actions": [
      {
        "name": "Slam",
        "desc": "m Roll: +3, reach 5 ft. {@h}5 (1d8) Bludgeoning damage."
      }
    ],
    "source": "Monster Manual (2025)"
  }
}

export const bestiaryKv = Array.from(Object.keys(bestiary));