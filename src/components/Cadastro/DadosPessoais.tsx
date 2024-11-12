import {
    Box,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
    Button,
    styled,
} from "@mui/material";
import { useContext, useState } from "react";
import { ActionButtons } from "../ActionButtons";
import { FormContext } from "../../context/FormContext";
import { CpfMask, TelefoneMask } from "../MaskedInput";
import defaultImg from "../../assets/defaultProfilePhoto.png";

const Line = styled(Box)({
    display: "flex",
    gap: "2rem",
    "@media (max-width: 600px)": { flexDirection: "column" },
})



export function DadosPessoais() {
    const { formData, updateFormData, errors, addError } =
        useContext(FormContext);
    const { nome, email, cpf, celular, fixo, usuario, senha } = formData;

    const [checkbox, setCheckbox] = useState("Arquiteto");
    const [previewImg, setPreviewImg] = useState(defaultImg);

    const handleAvancar = () => {
        const newErrors = [];
        if (nome.length < 10) newErrors.push("nome");
        if (!email.includes("@")) newErrors.push("email");
        if (cpf.length < 14) newErrors.push("cpf");
        if (celular.length < 14) newErrors.push("celular");

        if (newErrors.length > 0) {
            addError(newErrors);
            return false;
        }
        return errors.length === 0;
    };

    const handlePreviewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (typeof e.target?.result === "string") {
                    setPreviewImg(e.target.result);
                }
            };
            reader.readAsDataURL(e.target.files[0]);

            setPreviewImg(reader.result !== null ? reader.result : defaultImg);
        }
        updateFormData(e.target.files);
    };

    return (
        <>
            <Box>
                <TextField
                    fullWidth
                    name="nome"
                    error={errors.includes("nome")}
                    label="Nome Completo*"
                    value={nome}
                    onChange={updateFormData}
                />
            </Box>
            <Box>
                <TextField
                    fullWidth
                    name="email"
                    error={errors.includes("email")}
                    label="Email*"
                    value={email}
                    onChange={updateFormData}
                />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", gap: "3rem" }}>
                <Box flex={1}>
                    <Box marginBottom="1.75rem">
                        <TextField
                            name="cpf"
                            error={errors.includes("cpf")}
                            label="CPF*"
                            value={cpf}
                            fullWidth
                            slotProps={CpfMask}
                            onChange={updateFormData}
                        />
                    </Box>
                    <Line marginBottom="1.75rem"
                    >
                        <TextField
                            name="celular"
                            error={errors.includes("celular")}
                            label="Celular*"
                            value={celular}
                            slotProps={TelefoneMask}
                            onChange={updateFormData}
                        />
                        <TextField
                            name="fixo"
                            error={errors.includes("fixo")}
                            label="Telefone Fixo - Opcional"
                            value={fixo}
                            slotProps={TelefoneMask}
                            onChange={updateFormData}
                        />
                    </Line>

                    <Line
                    >
                        <TextField
                            name="usuario"
                            error={errors.includes("usuario")}
                            label="Usuario*"
                            value={usuario}
                            onChange={updateFormData}
                        />
                        <TextField
                            name="senha"
                            error={errors.includes("senha")}
                            label="Senha*"
                            value={senha}
                            onChange={updateFormData}
                        />
                    </Line>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <img
                        width="150px"
                        style={{ aspectRatio: "3/4", objectFit: "cover" }}
                        src={previewImg || defaultImg}
                    />
                    <Typography sx={{ fontWeight: "medium" }}>Foto de perfil</Typography>
                    <Button variant="contained" component="label" color="error">
                        Adicionar Foto
                        <input
                            type="file"
                            accept="image/*"
                            name="foto"
                            hidden
                            onChange={handlePreviewImage}
                        />
                    </Button>
                </Box>
            </Box>

            <Typography sx={{ fontWeight: "medium" }}>Profissão</Typography>
            <Box>
                <FormControlLabel
                    control={
                        <Checkbox
                            name="Arquiteto"
                            color="error"
                            checked={checkbox === "Arquiteto"}
                            onClick={() => setCheckbox("Arquiteto")}
                            onChange={(e) => {
                                const { target } = e;
                                updateFormData({
                                    ...e,
                                    target: {
                                        ...target,
                                        name: "profissao",
                                        value: e.target.name,
                                    },
                                });
                            }}
                        />
                    }
                    label="Arquiteto"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="Estudante"
                            color="error"
                            checked={checkbox === "Estudante"}
                            onClick={() => setCheckbox("Estudante")}
                            onChange={(e) => {
                                const { target } = e;
                                updateFormData({
                                    ...e,
                                    target: {
                                        ...target,
                                        name: "profissao",
                                        value: e.target.name,
                                    },
                                });
                            }}
                        />
                    }
                    label="Estudante"
                />
            </Box>
            <ActionButtons handleCheckFields={handleAvancar} />
        </>
    );
}
