import React from 'react';

// object destructuring

// const person = {
//     name: 'Andrew',
//     age: 18,
//     location: {
//         city: 'Poznan',
//         temp: '20c'
//     },
// }

// const { city, temp } = person.location;

// if(city && temp) {
//     console.log(`today its ${temp} in ${city}`);
// }

// const book = {
//     title: '"Ego is the Enemy"',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Pinguin'
//     },
// }

// const { title } = book;
// const {name: publisherName = 'self published'} = book.publisher;

// console.log(`${title} was published by ${publisherName}`)


// Array destructuring

const adress = ['szkolna 18', 'wroclaw', 'polska', '44-449'];
const [street, city, country, zip] = adress;

console.log(`You are in ${city} in ${country}`)

const menu = ['coffee (hot)', '$2.00', '$2.50', '$3.00']
const [cofee, , medium,] = menu

console.log(`medium ${cofee} costs ${medium}`)

const bazaLudzi = {
    online: [{
        imie: '',
        nazwisko: '',
        wiek: undefined
    }],
    offline: [{
        imie: '',
        nazwisko: '',
        wiek: undefined
    }],
};

const dodajOffline = ({ imie, nazwisko, wiek}) => {
    return bazaLudzi.offline = [...bazaLudzi.offline, {imie, nazwisko, wiek}]
};

dodajOffline({imie: 'lukasz', nazwisko: 'nowak', wiek: 24});
dodajOffline({imie: 'kasz', nasko: 'nak', wiek: 4});
console.log(bazaLudzi);

//mapowanie

const aaa = ({imie, nazwisko, wiek}) => {
    console.log({imie})
    console.log({nazwisko})
    console.log({wiek})
    }


const mapowanie = (coChcesz) => {
return coChcesz.offline.map((element) => {
    return aaa(element)
});
}

mapowanie(bazaLudzi);
