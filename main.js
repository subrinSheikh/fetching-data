
fetch("https://api.npoint.io/7bbd3a59c401f616bb89")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network isn't ok");
        }
        return response.json();
    })
    .then((data) => {
        //checking its array or not
        const content = document.getElementById("content");
        if (Array.isArray(data)) {
            data.forEach((place) => {
                const newDiv = document.createElement('div');
                newDiv.classList.add("newDiv");
                newDiv.innerHTML = `  <h3>Name:</h3> ${data.places.name}`;
                const infoDiv = document.createElement('div');
                infoDiv.classList.add("infoDiv");
                infoDiv.innerHTML = `  <h3>Info:</h3> ${data.places.info}`;
                content.appendChild(newDiv);
                content.appendChild(infoDiv);
            });
        }
        else {
            //assume its an object

            data.places.forEach((obj) => {
                const newDiv = document.createElement('div');
                newDiv.classList.add("newDiv");
                newDiv.innerHTML = `<h3>Name:</h3> <h4>${obj.name}</h4>`;
                const infoDiv = document.createElement('div');
                infoDiv.classList.add("infoDiv");
                infoDiv.innerHTML = `  <h3>Info:</h3> ${obj.info}`;
                content.appendChild(newDiv);
                content.appendChild(infoDiv);
            })

        }
    })
    .catch((data) => {
        const content = document.getElementById("content");
        content.innerHTML = '<p> Error fetching data.please try again later.</P>'

    })

