// Componentes, funciones e interfaces
import { fetchGlobal } from "../Helpers/helpers";
import { ModalNewProps } from "../Helpers/interfaces";

//material-ui
import SyncIcon from "@mui/icons-material/Sync";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

//Estilos
import "./OptionsBar.css";

const OptionsBar: React.FC<ModalNewProps> = (promps) => {
	const { setOpenModalNew, setUsers } = promps;

	const fetchSync = async () => {
		await fetchGlobal("https://apifantasticfy.onrender.com/sync/", "POST");
		fetchGlobal(
			"https://apifantasticfy.onrender.com/users/",
			"GET",
			setUsers
		);
	};

	const fetchNew = async () => {
		setOpenModalNew(true);
	};

	return (
		<div className="Container_OptionsBar">
			<div className="Button_OptionsBar" onClick={() => fetchSync()}>
				<SyncIcon />
			</div>
			<div className="Button_OptionsBar" onClick={() => fetchNew()}>
				<LibraryAddIcon />
			</div>
		</div>
	);
};

export default OptionsBar;
