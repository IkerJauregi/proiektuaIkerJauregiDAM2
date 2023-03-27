function displayAllMasters() {
  return fetch("http://localhost:8080/master/allMaster")
    .then(response => response.json())
    .catch(error => console.log(error));
}

export { displayAllMasters };
