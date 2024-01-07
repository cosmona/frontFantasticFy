import { ChangeEvent, useState } from "react";
import { ModalNewProps, UserData } from "../Helpers/interfaces";
import { fetchGlobal } from "../Helpers/helpers";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";

import "./ModalNew.css";

const ModalNew: React.FC<ModalNewProps> = (prompt) => {
	const { setUsers, setOpenModalNew } = prompt;

	const [formData, setFormData] = useState<UserData>({
		name: "",
		username: "",
		email: "",
		address: {
			street: "",
			city: "",
			country: "",
		},
	});

	const HandleCloseModalNew = () => {
		setOpenModalNew(false);
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		fetchGlobal("http://localhost:3000/users/", "PUT", setUsers, formData);
		setOpenModalNew(false);
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevData: UserData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<div className="Container_ModalNew">
			<div className="Form_ModalNew">
				<h1>Nuevo Usuario</h1>
				<form className="FormCont_ModalNew" onSubmit={handleSubmit}>
					<div>
						<input
							className="Input_ModalNew"
							id="name"
							name="name"
							onChange={handleChange}
							type="text"
							placeholder="Name"
						/>
					</div>
					<div>
						<input
							className="Input_ModalNew"
							id="username"
							name="username"
							onChange={handleChange}
							type="text"
							placeholder="Username"
						/>
					</div>
					<div>
						<input
							className="Input_ModalNew"
							id="email"
							name="email"
							onChange={handleChange}
							type="email"
							placeholder="Email"
						/>
					</div>
					<div>
						<input
							className="Input_ModalNew"
							id="street"
							name="street"
							onChange={handleChange}
							type="text"
							placeholder="Street"
						/>

						<div>
							<input
								className="Input_ModalNew"
								id="city"
								name="city"
								onChange={handleChange}
								type="text"
								placeholder="City"
							/>
						</div>

						<div>
							<input
								className="Input_ModalNew"
								id="country"
								name="country"
								onChange={handleChange}
								type="text"
								placeholder="Country"
							/>
						</div>
					</div>
					<div>
						<button className="Ok_ModalNew" type="submit">
							<CheckCircleOutlineIcon fontSize="large" />
						</button>
						<button
							className="Ko_ModalNew"
							onClick={HandleCloseModalNew}
						>
							<CancelIcon fontSize="large" />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ModalNew;
