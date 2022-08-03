import { Comment, CommentProps as Comments } from './Comment';
import style from './Post.module.css';


export interface User {
    id: string;
    name: string;
    bio: string;
    img: string;
}

interface Post {
    id: string;
    message: string;
    links?: string[];
    hashtags?: string[]; 
    comments?: Comments[];
    published_at: string;
}

interface Props {
    data: {
        user: User;
        post: Post;
    }
}

export function Post({ data }: Props) {
    return (
        <article className={style.post}>
            <header className={style.header}>          
                <div className={style.profile}>
                    <img src={data.user.img}/>
                    <div className={style.userInfo}>
                        <strong>{data.user.name}</strong>
                        <span>{data.user.bio}</span>
                    </div>
                </div>

                <time dateTime='2022-06-30 10:43'>Há 1 hora atrás</time>
            </header>

            <div className={style.content}>
                <p>{data.post.message}</p>

                {
                    data.post.links?.map((link, index) => {
                        return <p key={index}><a href="#">{link}</a></p>
                    })
                }

                {
                    data.post.hashtags?.map((hashtag, index) => {
                        return <a href="#" key={index}>{hashtag} </a>
                    })
                }
            </div>

            <div className={style.footer}>
                <strong>Deixe seu feedback</strong>
                <form>
                    <textarea placeholder='Deixe seu comentario...' />
                    <div>
                        <button type="submit">Publicar</button>
                    </div>
                </form>
            </div>
            {
                data.post.comments?.map((data) => {
                    return <Comment data={data} key={data.id} />
                })
            }
        </article>
    );
}