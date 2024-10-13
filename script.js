const root = document.querySelector('#root');

const API_URL = 'https://countriesnow.space/api/v0.1/countries'

const getData = async () => {
    const datas = await fetch(API_URL);
    const data = await datas.json();

    return data
}

const showUI = async () => {
    const countries = await getData();

    countries.data.forEach(country => {
        const div = document.createElement('div');    
        const h5 = document.createElement('h5');
        h5.innerText = country.country 
        div.appendChild(h5)
        root.appendChild(div)
    });
}

showUI()

