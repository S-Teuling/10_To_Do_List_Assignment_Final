const baseURL = `http://localhost:3000/`;

//-------------------get data from server----------------//

const getServerData=async () => {
  try {
		const response = await fetch(baseURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();

		console.log("Get Data From Server", data);
		return data;
	} catch (err) {
		console.log(err, "No Data On Server");
	}
}

//------------------post data to server--------------//

const postServerData = async (task) => {
	try {
		const response = await fetch(baseURL, {
			method: "POST",
			body: JSON.stringify(task),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const data = response.json().then((info) => {
			console.log(`Task is posted to server`, info);
		});
	} catch (err) {
		console.log(err, "Can't Do This");
	}
};

//---------------delete data from server-------------//

const deleteServerData = async (id) => {
	try {
		const response = await fetch(baseURL + id, {
			method: "DELETE",
		});
		//console.log("deleted");
	} catch (err) {
		console.log(err, "Can't Delete");
	}
};
