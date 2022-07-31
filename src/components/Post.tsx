import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header className={style.header}>          
                <div className={style.profile}>
                    <img src="https://github.com/Gabriel-Souza2.png"/>
                    <div className={style.userInfo}>
                        <strong>Gabriel Souza</strong>
                        <span>Desenvolvedor React | React Native</span>
                    </div>
                </div>

                <time dateTime='2022-06-30 10:43'>Há 1 hora atrás</time>
            </header>

            <div className={style.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                </p>
                <p><a href='#'>👉 jane.design/doctorcare</a></p>

                <a  href="#">#novoprojeto</a>  <a href="#">#nlw</a> <a href='#'>#rocketseat</a>
            </div>

            <footer className={style.footer}>
                <strong>Deixe seu feedback</strong>
                <form>
                    <textarea placeholder='Deixe seu comentario...' />
                    <button type="submit">Publicar</button>
                </form>
            </footer>
        </article>
    );
}