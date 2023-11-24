import axios from "axios";

const films = async () => {
  let allfilms;
  try {
    allfilms = await axios.get("https://swapi.dev/api/films/");
    console.log(allfilms?.data?.results);
  } catch (E) {
    console.log(E);
  }
  return allfilms?.data?.results;
};

const placeholderAddress = async () => {
  try {
    const response = await axios.get("https://picsum.photos/400/300", {
      responseType: "arraybuffer",
    });
    const base64 = btoa(
      new Uint8Array(response.data).reduce(
        (data, byte) => data + String.fromCharCode(byte),
        ""
      )
    );
    const imageUrl = `data:${response.headers[
      "content-type"
    ].toLowerCase()};base64,${base64}`;
    return imageUrl;
  } catch (E) {
    console.log(E);
    return null;
  }
};


const people = async () => {
  let allpeople;
  try {
    allpeople = await axios.get("https://swapi.dev/api/people/");
    console.log(allpeople?.data?.results);
  } catch (E) {
    console.log(E);
  }
  return allpeople?.data?.results;
};


const plantes = async () => {
  let allplanets;
  try {
    allplanets = await axios.get("https://swapi.dev/api/planets/");
    console.log(allplanets?.data?.results);
  } catch (E) {
    console.log(E);
  }
  return allplanets?.data?.results;
};



const species = async () => {
  let allspecies;
  try {
    allspecies = await axios.get("https://swapi.dev/api/species/");
    console.log(allspecies?.data?.results);
  } catch (E) {
    console.log(E);
  }
  return allspecies?.data?.results;
};


const fetch = async (item) => {
  let allitems;
  try {
    allitems = await axios.get(`https://swapi.dev/api/${item}/`);
    console.log(allitems?.data?.results);
  } catch (E) {
    console.log(E);
  }
  return allitems?.data?.results;
};


export { films, placeholderAddress, fetch, species, plantes, people };
