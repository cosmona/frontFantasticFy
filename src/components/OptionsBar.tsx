// Componentes, funciones e interfaces
import { fetchGlobal } from "../Helpers/helpers";
import { OptionsBarProps } from "../Helpers/interfaces";

//material-ui
import SyncIcon from "@mui/icons-material/Sync";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

//Estilos
import "./OptionsBar.css";
import { useState } from "react";

const OptionsBar: React.FC<OptionsBarProps> = (promps) => {
	const { setTextModalMsg, setOpenModalNew, setOpenModalMsg, setUsers } =
		promps;
	const [onClick, setOnclick] = useState(false);

	const fetchSync = async () => {
		const res = await fetchGlobal(
			"https://apifantasticfy.fly.dev/sync/",
			"POST"
		);

		fetchGlobal("https://apifantasticfy.fly.dev/users/", "GET", setUsers);

		setOnclick(true);
		setTimeout(() => {
			setOnclick(false);
		}, 5000);

		if (res && !res.ok) {
			setTextModalMsg("Error");
		} else {
			setTextModalMsg("Registros actualizados");
		}
		setOpenModalMsg(true);
	};

	const fetchNew = async () => {
		setOpenModalNew(true);
	};

	return (
		<div className="Container_OptionsBar">
			<div
				className={
					onClick ? "Button_OptionsBar_onClick" : "Button_OptionsBar"
				}
				onClick={() => fetchSync()}
			>
				<SyncIcon />
			</div>
			<div className="Button_OptionsBar" onClick={() => fetchNew()}>
				<LibraryAddIcon />
			</div>
		</div>
	);
};

export default OptionsBar;
