function registerUser(userName, userPasword) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName, password: userPasword })
    };

    return fetch("http://localhost:8080/user/register", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Registration successful:", data);
            return data;
        })
        .catch(error => {
            console.error("Registration failed:", error);
            throw error;
        });
}

function loginUser(userName, userPasword) {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName, password: userPasword })
    };

    return fetch("http://localhost:8080/user/login", requestOptions)
        .then(response => {
            if (response.status === 400) {
                throw new Error("Bad request: Invalid input parameters");
            }
            else if (response.status === 401) {
                throw new Error("Unauthorized: Incorrect username or password");
            }
            else if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Login successful:");
            return data;
        })
        .catch(error => {
            console.error("Login failed:", error);
            throw error;
        });
}
// Get user from server
function getUser() {
    const requestOptions = {
        method: "GET",
        credentials: "include"
    };

    const user = JSON.parse(sessionStorage.getItem("user"));

    if (!user) {
        // User not logged in, handle error
        console.error("User not logged in");
    }

    return fetch("http://localhost:8080/user/getUser", requestOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log("Get user successful:", data);
            return data;
        })
        .catch(error => {
            console.error("Get user failed:", error);
            throw error;
        });
}

export { registerUser, loginUser, getUser }
