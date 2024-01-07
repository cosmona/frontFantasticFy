export interface UserData {
	_id?: string;
	external_id?: string;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		city: string;
		country: string;
	};
}

export interface ModalNewProps {
	setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
	setOpenModalNew: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ShowUsersProps {
	setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
	users: UserData[];
}
