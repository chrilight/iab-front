import { forwardRef } from "react";
import { IMaskInput } from "react-imask";



interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}


const CpfMaskComponent = forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="000.000.000-00"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref}
                onAccept={(value) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);

const CepMaskComponent = forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="00000-000"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref}
                onAccept={(value) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);

const TelefoneMaskComponent = forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="(00) 00000-0000"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref}
                onAccept={(value) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);

const AnoMaskComponent = forwardRef<HTMLInputElement, CustomProps>(
    function TextMaskCustom(props, ref) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="0000"
                definitions={{
                    '#': /[1-9]/,
                }}
                inputRef={ref}
                onAccept={(value) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);


export const TelefoneMask = {
    input: {
        inputComponent: TelefoneMaskComponent as never,
    },
}

export const CpfMask = {
    input: {
        inputComponent: CpfMaskComponent as never,
    },
}

export const CepMask = {
    input: {
        inputComponent: CepMaskComponent as never,
    },
}

export const AnoMask = {
    input: {
        inputComponent: AnoMaskComponent as never,
    },
}

