import { useState } from "react";
import request from "../../../utils/request";
import { useParams } from "react-router";

export default function CreateComment({
    user,
}) {
    console.log(user.email);
    
    const { gameId } = useParams();
    const [comment, setComment] = useState('');

    const changeHandler = (e) => {
        setComment(e.target.value);
    }

    const submitHandler = async () => {
        await request('/comments', 'POST', {
            author: user.email,
            message: comment,
            gameId,
        });
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={submitHandler}>
                <textarea
                    name="comment"
                    onChange={changeHandler}
                    value={comment}
                    placeholder="Comment......">
                </textarea>
                <input
                    className="btn submit"
                    type="submit"
                    value="Add Comment"
                />
            </form>
        </article>
    );
}
