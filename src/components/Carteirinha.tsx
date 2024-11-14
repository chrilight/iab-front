import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import defaultImg from "../assets/defaultProfilePhoto.png"
import formMock from "../mocks/formMock.json"

const Carteirinha = () => {

    // usando mock por agora
    // const { formData } = useContext(FormContext)
    const formData = formMock
    const {
        cpf,
        nome,
        instituicao_ensino,
        foto,
    } = formData;
    const id = "1234567890"
    return (
        <Card
            sx={{
                maxWidth: 400,
                margin: "0 auto",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 3,
                position: "relative",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "#bf1515",
                    color: "#fff",
                    padding: "8px 16px",
                    textAlign: "center",
                }}
            >
                <Typography variant="h6" component="div">
                    {`Id: ${id}`}
                </Typography>
            </Box>

            {/* Conteúdo Principal */}
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: "16px",
                    gap: 2,
                }}
            >
                <Avatar
                    alt={nome}
                    src={foto || defaultImg}
                    sx={{
                        width: 80,
                        height: 80,
                        borderRadius: "10px",
                        border: "2px solid #bf1515",
                    }}
                />
                <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                        {nome}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`cpf: ${cpf}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {`instituição de ensino: ${instituicao_ensino}`}
                    </Typography>
                    {id && (
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ marginTop: 1 }}
                        >
                            ID: {id}
                        </Typography>
                    )}
                </Box>
            </CardContent>

            {/* Barra Inferior */}
            <Box
                sx={{
                    backgroundColor: "#f5f5f5",
                    padding: "8px 16px",
                    textAlign: "center",
                    borderTop: "1px solid #ddd",
                }}
            >
                <Typography variant="caption" color="text.secondary">
                    Válido até: 12/2025
                </Typography>
            </Box>
        </Card>
    );
};

export default Carteirinha;
