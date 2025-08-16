import { conditionMapping } from "../../model/Condition";

interface Props {
    conditions: string[];
}

export const ConditionDisplay = ({ conditions }: Props) => {
    const length = conditions.length;

    return (
        <>
            {conditions.map((name, index) => {
                const condition = conditionMapping.get(name);

                return (
                    <>
                        <div>
                            <strong>{name}</strong>
                            <div>{condition}</div>
                        </div>
                        {index < length - 1 && <br />}
                    </>
                );
            })}
        </>
    );
};
