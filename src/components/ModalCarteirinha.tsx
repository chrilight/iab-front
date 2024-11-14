import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Carteirinha from "./Carteirinha.tsx";

const ModalCarteirinha = ({ open, onClose }) => {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            {/* Título do Modal com um botão de fechar */}
            <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
                Visualizar Carteirinha
                <IconButton edge="end" color="inherit" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent>
                <Carteirinha />
            </DialogContent>
        </Dialog>
    );
};

export default ModalCarteirinha;
