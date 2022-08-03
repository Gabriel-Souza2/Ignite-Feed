import style from './Comment.module.css';
import { User } from './Post';
import { Trash, ThumbsUp } from "phosphor-react";
import { useState } from 'react';

export interface CommentProps {
    id: string,
    user: User;
    message: string;
    likes: number,
    published_at: string
}

interface Props {
    data: CommentProps;
}

export function Comment({ data }: Props) {
    const [likes, setLike] = useState(data.likes);

    function handleLike() {
        setLike(() => {
            return likes + 1
        });
    }

    return (

    <div className={style.commentWrapper}>
        <img src={data.user.img}/>
        <div>
            <div className={style.comment}>
                <header>
                    <div className={style.userInfo}>
                        <strong>{data.user.name}</strong>
                        <span>Cerca de 2h</span>
                    </div>
                    <Trash size={24} className={style.icon}/>
                </header>
                <main>
                    <p>{data.message}</p>
                </main>
            </div>
            <button className={style.like} onClick={handleLike}> 
                <ThumbsUp size={20} /> 
                Aplaudir . {likes}
            </button>
        </div>
    </div>
    );
}