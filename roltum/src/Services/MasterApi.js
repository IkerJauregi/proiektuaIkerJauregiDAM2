var url = "http://localhost:8080/"
function displayAllMaster() {
    fetch("http://localhost:8080/master/allMaster")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // aquí puedes hacer algo con los datos recibidos
      })
      .catch((error) => {
        console.error(error);
      });
  }
  