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
		return res;
	} catch (error: any) {
		console.error(error.message);
	}
};
