import { UserData } from "./interfaces";

export const fetchGlobal = async (
	url: string,
	method: string,
	setUsers?: React.Dispatch<React.SetStateAction<UserData[]>>,
	formData?: UserData
) => {
	try {
		const res = await fetch(url, {
			method: method,
			headers: {
				"Access-Control": "Allow-Origin",
				"Content-Type": "application/json",
			},
			body: formData ? JSON.stringify(formData) : undefined,
		});

		if (!res.ok) {
			throw new Error("Error");
		}

		const data = await res.json();
		if (setUsers) setUsers(data.usuarios);
	} catch (error: any) {
		console.error(error.message);
	}
};

/* export const fetchUsers = async (
	setUsers: React.Dispatch<React.SetStateAction<UserData[]>>
) => {
	try {
		const res = await fetch("http://localhost:3000/users/", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			throw new Error("Error al obtener usuarios");
		}

		const data = await res.json();
		setUsers(data.usuarios); // Aquí seteamos directamente el resultado al estado
	} catch (error: any) {
		console.error(error.message);
	}
}; */
