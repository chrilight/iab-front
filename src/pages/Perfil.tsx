import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Paper,
    styled,
    TextField,
    Typography,
} from "@mui/material";
import { StyledTitle } from "../components/Styled/StyledTitle";
import EditIcon from "@mui/icons-material/Edit";
import BadgeIcon from "@mui/icons-material/Badge";
import { useEffect, useState } from "react";
import defaultImg from "../assets/defaultProfilePhoto.png";
import formMock from "../mocks/formMock.json";
import { defaultFormData, FormDataProps, FormObjectProps } from "../types/Formdata";
import ModalCarteirinha from "../components/ModalCarteirinha";

export const StyledSubtitle = styled(Typography)({
    fontSize: "1.5rem",
    color: "#BF1515",
    marginBottom: "2.5rem",
});

const FormTextField = ({ isEditing, ...rest }) => (
    <TextField size="small" variant="outlined" disabled={!isEditing} {...rest} />
);

const mockForm = formMock as FormObjectProps;


export function Perfil() {
    const [checkbox, setCheckbox] = useState("Arquiteto");
    const [isEditing, setIsEditing] = useState(false);
    const [defaultFormState, setDefaultFormState] = useState(defaultFormData);
    const [formState, setFormState] = useState(defaultFormData);
    const [carteirinhaModal, setCarteirinhaModal] = useState(false);

    const CheckboxButton = ({ name }: { name: string }) => (
        <Checkbox
            name={name}
            color="error"
            checked={checkbox === name}
            onClick={() => setCheckbox(name)}
            onChange={(e) => {
                const { target } = e;
            }}
            disabled={!isEditing}
        />
    );

    useEffect(() => {
        Object.keys(mockForm).map((name) => {
            if (name in defaultFormData) {
                setFormState((prevState) => {
                    return { ...prevState, [name]: mockForm[name] };
                });
                setDefaultFormState((prevState) => {
                    return { ...prevState, [name]: mockForm[name] };
                });
            }
        });
    }, []);

    const cancel = () => {
        setIsEditing(false);
        setFormState(defaultFormState)
    }

    const confirm = () => {

    }

    return (
        <Box
            sx={{
                maxWidth: "800px",
                margin: "0 auto",
                padding: "2rem",
            }}
        >
            <StyledTitle>Meu perfil</StyledTitle>
            <Box sx={{ display: "flex", justifyContent: "end", gap: "1.5rem" }}>
                <Button variant="outlined" color="error" disabled={isEditing} endIcon={<BadgeIcon />} onClick={() => setCarteirinhaModal(true)}>
                    Visualizar Carteirinha
                </Button>
                <Button variant="outlined" disabled={isEditing} onClick={() => setIsEditing(true)} color="error" endIcon={<EditIcon />}>
                    Alterar
                </Button>
            </Box>
            <Paper
                sx={{
                    marginTop: "2.5rem",
                    py: "2rem",
                    px: "2.625rem",
                }}
            >
                <StyledSubtitle>Dados Pessoais</StyledSubtitle>
                <Box display="flex" gap="1rem" justifyContent="space-between" marginBottom="1.75rem">
                    <Box
                        sx={{
                            width: "75%",
                        }}
                    >
                        <FormTextField
                            isEditing={isEditing}
                            fullWidth
                            label="Nome Completo"
                            value={formState?.nome || ''}
                            sx={{ marginBottom: "1.5rem" }}
                        />
                        <FormTextField
                            isEditing={isEditing}
                            fullWidth
                            label="Email"
                            value={formState?.email || ''}
                            sx={{ marginBottom: "1.5rem" }}
                        />
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                            <FormTextField
                                isEditing={false}
                                label="CPF"
                                value={formState?.cpf || ''}
                            />
                            <FormTextField
                                isEditing={isEditing}
                                label="Celular"
                                value={formState?.celular || ''}
                            />
                        </Box>

                        <Box sx={{ marginTop: "1.5rem" }}>
                            <Typography>Profissão</Typography>
                            <FormControlLabel
                                control={<CheckboxButton name={"Arquiteto"} />}
                                label="Arquiteto"
                            />
                            <FormControlLabel
                                control={<CheckboxButton name={"Estudante"} />}
                                label="Estudante"
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <img width="150px" src={defaultImg} />
                        <Typography sx={{ fontWeight: "medium" }}>
                            Foto de carteirinha
                        </Typography>
                        <Button variant="contained" color="error" disabled={!isEditing}>
                            Alterar Imagem
                        </Button>
                    </Box>
                </Box>

                <StyledSubtitle>Endereço Pessoal</StyledSubtitle>
                <Box display="flex" gap="1rem" justifyContent="space-between" sx={{ marginBottom: "1.75rem"}}>
                    <Box>
                        <FormTextField
                            isEditing={isEditing}
                            label="CEP"
                            value={formState?.endereco_primario?.cep || ''}
                            sx={{ marginBottom: "1.5rem" }}
                        />
                        <FormTextField
                            isEditing={isEditing}
                            fullWidth
                            label="Logradouro"
                            value={formState?.endereco_primario?.logradouro || ''}
                            sx={{ marginBottom: "1.5rem" }}
                        />
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                            <FormTextField
                                isEditing={isEditing}
                                label="Cidade"
                                value={formState?.endereco_primario?.cidade || ''}
                            />
                            <FormTextField
                                isEditing={isEditing}
                                label="Bairro"
                                value={formState?.endereco_primario?.bairro || ''}
                            />
                        </Box>
                    </Box>
                </Box>
                <StyledSubtitle>Endereço Comercial</StyledSubtitle>
                <Box display="flex" gap="1rem" justifyContent="space-between" sx={{ marginBottom: "1.75rem"}}>
                    <Box>
                        <FormTextField
                            isEditing={isEditing}
                            label="CEP"
                            value={formState?.endereco_secundario?.cep || ''}
                            sx={{ marginBottom: "1.5rem" }}
                        />
                        <FormTextField
                            isEditing={isEditing}
                            fullWidth
                            label="Logradouro"
                            value={formState?.endereco_secundario?.logradouro || ''}
                            sx={{ marginBottom: "1.5rem" }}
                        />
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                            <FormTextField
                                isEditing={isEditing}
                                label="Cidade"
                                value={formState?.endereco_secundario?.cidade || ''}
                            />
                            <FormTextField
                                isEditing={isEditing}
                                label="Bairro"
                                value={formState?.endereco_secundario?.bairro || ''}
                            />
                        </Box>
                    </Box>
                </Box>

                <StyledSubtitle>Informações Extras</StyledSubtitle>
                <Box>
                    <Box>
                        <FormTextField
                            isEditing={isEditing}
                            label="Site"
                            value={formState?.site || ''}
                            sx={{ marginBottom: "1.5rem" }}
                        />
                        <FormTextField
                            isEditing={isEditing}
                            fullWidth
                            label="Instituição de Ensino (Estudantes)"
                            value={formState?.instituicao_ensino || ''}
                            sx={{ marginBottom: "1.5rem" }}
                        />
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                            <FormTextField
                                isEditing={isEditing}
                                label="Número CAU"
                                value={formState?.numero_cau || ''}
                            />
                            <FormTextField
                                isEditing={isEditing}
                                label="Ano Estimado de Conclusão"
                                value={formState?.ano_estimado_conclusao || ''}
                            />
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: isEditing ? "flex" : "none",
                        justifyContent: "end",
                        gap: "3rem",
                        marginTop: "2rem",
                    }}
                >
                    <Button variant="outlined" color="inherit" onClick={cancel}>
                        Cancelar
                    </Button>
                    <Button variant="contained" color="error" onClick={confirm}>
                        Confirmar Alterações
                    </Button>
                </Box>
            </Paper>

                    <ModalCarteirinha onClose={() => setCarteirinhaModal(false)} open={carteirinhaModal}/>
        </Box>
    );
}
