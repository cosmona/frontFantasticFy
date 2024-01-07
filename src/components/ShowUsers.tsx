import React, { useEffect } from "react";

//Funciones e interfaces
import { fetchGlobal } from "../Helpers/helpers";
import { ShowUsersProps, UserData } from "../Helpers/interfaces";

//material-ui
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

//Estilos
import "./ShowUsers.css";

const ShowUsers: React.FC<ShowUsersProps> = (prompt) => {
	const { users, setUsers } = prompt;

	useEffect(() => {
		fetchGlobal(
			"https://apifantasticfy.onrender.com/users/",
			"GET",
			setUsers
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handelUp = () => {
		window.scrollBy({
			top: -document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<div className="Cards_ShowUsers">
				{users &&
					users.map((user: UserData) => {
						return (
							<div className="UserCard_ShowUsers">
								<div>
									<div className="Title_ShowUsers">Id</div>
									<div>{user._id}</div>
								</div>
								<div>
									<div className="Title_ShowUsers">
										Username
									</div>
									<div>{user.username}</div>
								</div>

								<div>
									<div className="Title_ShowUsers">Name</div>
									<div>{user.name}</div>
								</div>

								<div>
									<div className="Title_ShowUsers">Email</div>
									<div>{user.email}</div>
								</div>

								<div>
									<div className="Title_ShowUsers">
										Street
									</div>
									<div>{user.address.street}</div>
								</div>

								<div>
									<div className="Title_ShowUsers">City</div>
									<div>{user.address.city}</div>
								</div>

								<div>
									<div className="Title_ShowUsers">
										Country
									</div>
									<div>{user.address.country}</div>
								</div>

								<div>
									<div className="Title_ShowUsers">
										External_id
									</div>
									<div>{user.external_id}</div>
								</div>
							</div>
						);
					})}
			</div>
			<ArrowCircleUpIcon
				onClick={handelUp}
				fontSize="large"
				className="Up_ShowUsers"
			/>
		</div>
	);
};

export default ShowUsers;
