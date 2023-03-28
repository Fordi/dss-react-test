/*
When button#showCountrInfo is clicked, query the Rest Countries API,
and update p#countryInfo with the "Capital, Country" values,
of Peru. 

See `useFetch`.

Discussion: How would you update this to allow a user to select their favorite country?

Discussion: How would you detect and handle API request failures?
*/

// Replace (nameParamHere) with your country of choice.
const countriesAPI = "https://restcountries.com/v2/name/(nameParamHere)";

const Part2 = () => {
  return (
    <section>
      <h2 className="part-two">Part 2</h2>
      <p id="countryInfo">{/* Capital, Country */}</p>
      <button id="showCountryInfo">Show country info for Peru</button>
    </section>
  );
};

export default Part2;
