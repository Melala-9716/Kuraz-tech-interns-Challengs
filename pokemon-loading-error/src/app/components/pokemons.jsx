export default async function Pokemons() {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100"
  );

  const list = await response.json();

  const pokemons = await Promise.all(
    list.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);

      const data = await response.json();

      return data;
    })
  );

  return (
<div className="grid grid-cols-1 justify-items-center text-center my-[20px]">
      {pokemons.map((pokemon) => (
        <div className="border w-[400px] bg-purple-800 rounded-[20px] p-[10px] mb-[20px] text-[30px]" key={pokemon.id}>
          <img className="px-[140px]"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />

          <h2>{pokemon.name}</h2>

          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Base Experience: {pokemon.base_experience}</p>
        </div>
      ))}
    </div>
  );
}