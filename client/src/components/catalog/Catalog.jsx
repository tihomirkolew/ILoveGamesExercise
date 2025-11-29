import GameCard from "../gameCard/GameCard";
import useRequest from "../../hooks/useRequest";

export default function Catalog() {
    const { data: games } = useRequest('/data/games', []);

    // useEffect(() => {
        // fetch('http://localhost:3030/jsonstore/games?sortBy=_createdOn%20desc')
        //     .then(response => response.json())
        //     .then(result => setGames(Object.values(result)))
        //     .catch(err => alert(err.message))
    // }, [request]);

    return (
        <>
            <section id="catalog-page">
                <h1>Catalog</h1>

                {games.length === 0 && <h3 className="no-articles">No Added Games Yet</h3>}

                <div className="catalog-container">
                    {games.map(game => <GameCard key={game._id} {...game} />)}
                </div>
            </section>
        </>
    );
}
