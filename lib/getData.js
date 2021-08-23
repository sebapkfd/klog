const getData = async (value) => {
    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?per_page=4&query=${value}`, {
        method: 'GET',
        headers: {"Authorization": 'Client-ID ' + process.env.ACCESS_KEY},
        });
        const data = await response.json();
        const { results } = data;
        return results;
    }
    catch (error) {
        console.log(error);
    }
}

export default getData;