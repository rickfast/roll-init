import { Feature } from "../model/StatBlock";

interface Props {
    features: Feature[];
}

export const FeatureDisplay = ({ features }: Props) => {
    return (
        <div>
            {features.map((feature, index) => (
                <div key={index} style={{ marginTop: '1rem' }}>
                    <b>{feature.name}</b> <span dangerouslySetInnerHTML={{__html: feature.desc}} />
                    {feature.usage && feature.usage.recharge && (
                        <span><b>Recharge:</b> {feature.usage.recharge}</span>
                    )}
                </div>
            ))}
        </div>
    );
}