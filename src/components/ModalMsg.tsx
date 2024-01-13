import { useEffect } from "react";

// Componentes, funciones e interfaces

import { ModalMsgProps } from "../Helpers/interfaces";

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
