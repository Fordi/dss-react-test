/*
When button#showPartialMatches is clicked,
query the Rest Countries API for all partial matches on the user's `search`,
then display the common name for each country as an li in ul#showPartialMatches.

A good example search is "united", which should come back with six countries.

Discussion: How might you reuse code from Part 1 and Part 2 here?
*/
const countrySearchAPI = ({ search }) =>
  `https://restcountries.com/v3.1/name/${search}`;

const Part3 = () => {
  return (
    <section>
      <h2>Part 3</h2>
      <label htmlFor="search">
        Search: <input id="search" />
      </label>
      <ul id="partialMatches">
        {/* List the common names of all matches here */}
      </ul>
      <button id="showPartialMatches">Show partial matches</button>
    </section>
  );
};

export default Part3;
