function displayAllMasters() {
  return fetch("http://localhost:8080/master/allMaster")
    .then(response => response.json())
    .catch(error => console.log(error));
}
function displaySelectedMaster(idMaster) {
  return fetch(`http://localhost:8080/master/findMaster/${idMaster}`)
    .then(response => response.json())
    .then(data => {
      const master = data;
      const campaigns = master.campaign || [];
      return { master, campaigns };
    })
    .catch(error => console.log(error));
}
export { displayAllMasters, displaySelectedMaster };
