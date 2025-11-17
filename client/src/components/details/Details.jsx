import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Details(
) {
    const { gameId } = useParams();
    const [game, setGame] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/games/${gameId}`)
            .then(response => response.json())
            .then(result => setGame(result))
            .catch(err => alert(err.message));
    }, [gameId]);

    return (
        <>
            <section id="game-details">
                <h1>Game Details</h1>
                <div class="info-section">

                    <div class="header-and-image">
                        <img class="game-img" src={game.imageUrl} alt="Elden Ring Cover Art" />

                        <div class="meta-info">
                            <h1 class="game-name">{game.title}</h1>

                            <p class="data-row">
                                <span class="label">Genre:</span>
                                <span class="value">{game.genre}</span>
                            </p>

                            <p class="data-row">
                                <span class="label">Active Players:</span>
                                <span class="value">{game.players}</span>
                            </p>

                            <p class="data-row">
                                <span class="label">Release Date:</span>
                                <span class="value">{game.date}</span>
                            </p>
                        </div>
                        <div class="summary-section">
                            <h2>Summary:</h2>
                            <p class="text-summary">
                                {game.summary}
                            </p>
                        </div>
                    </div>


                    {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                    <div class="buttons">
                        <a href="#" class="button">Edit</a>
                        <a href="#" class="button">Delete</a>
                    </div>

                    <div class="details-comments">
                        <h2>Comments:</h2>
                        <ul>
                            <li class="comment">
                                <p>Content: A masterpiece of world design, though the boss fights are brutal.</p>
                            </li>
                            <li class="comment">
                                <p>Content: Truly feels like a next-gen evolution of the Souls formula!</p>
                            </li>
                        </ul>
                        {/* <!-- Display paragraph: If there are no games in the database --> */}
                        {/* <!-- <p class="no-comment">No comments.</p> --> */}
                    </div>

                </div>
                <article class="create-comment">
                    <label>Add new comment:</label>
                    <form class="form">
                        <textarea name="comment" placeholder="Comment......"></textarea>
                        <input class="btn submit" type="submit" value="Add Comment" />
                    </form>
                </article>
            </section>
        </>
    );
}