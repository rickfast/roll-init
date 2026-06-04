interface Props {
    hp: number;
    max?: number;
    temp?: number;
}

const hpColor = (ratio: number) => {
    if (ratio > 0.5) return "var(--tr-hp-good)";
    if (ratio > 0.25) return "var(--tr-hp-warn)";
    return "var(--tr-hp-bad)";
};

export const HpBar = ({ hp, max, temp }: Props) => {
    const ceiling = max && max > 0 ? max : Math.max(hp, 1);
    const ratio = Math.max(0, Math.min(1, hp / ceiling));
    // temp HP renders as an overlay segment sized relative to the same ceiling
    const tempRatio = temp ? Math.min(1, temp / ceiling) : 0;

    return (
        <div className="hp-bar">
            <div
                className="hp-bar-fill"
                style={{
                    width: `${ratio * 100}%`,
                    background: hpColor(ratio),
                }}
            />
            {tempRatio > 0 && (
                <div
                    className="hp-bar-temp"
                    style={{
                        left: `${ratio * 100}%`,
                        width: `${tempRatio * 100}%`,
                    }}
                />
            )}
            <div className="hp-bar-label">
                <span>
                    {hp}
                    {max !== undefined && (
                        <span style={{ opacity: 0.7 }}> / {max}</span>
                    )}
                </span>
                {temp ? <span className="temp-tag">+{temp}</span> : null}
            </div>
        </div>
    );
};
