import { useEffect } from "react";

// Componentes, funciones e interfaces
import { ModalMsgProps } from "../Helpers/interfaces";
import { fetchGlobal } from "../Helpers/helpers";

//Material-ui
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";

// Estilos
import "./ModalMsg.css";

const ModalMsg: React.FC<ModalMsgProps> = (prompt) => {
	const { textModalMsg, setOpenModalMsg } = prompt;
	useEffect(() => {
		setTimeout(() => {
			setOpenModalMsg(false);
		}, 3000);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <div className="Container_ModalMsg">{textModalMsg}</div>;
};

export default ModalMsg;
