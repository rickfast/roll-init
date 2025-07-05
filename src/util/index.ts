export const getModifier = (score: number) => {
    return Math.floor((score - 10) / 2);
};

export const formatModifier = (modifier: number) => {
    return modifier >= 0 ? `+${modifier}` : `${modifier}`;
};
