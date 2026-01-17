const mainData = () => {
    console.log('maindata');
    fetch('./db.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.anime);
        })
}

mainData()