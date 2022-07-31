import style from './Sidebar.module.css'; 

import { PencilSimpleLine } from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={style.sidebar}>
            <img 
                className={style.cover}
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" 
            />

            <div className={style.profile}>
                <img src="https://github.com/Gabriel-Souza2.png"/>
                <strong>Gabriel Souza</strong>
                <span>Desenvolvedor React | React Native</span>
            </div>

            <footer>
                <a href="#"> 
                    <PencilSimpleLine size={20} weight="bold"/> 
                    <span>Editar seu perfil</span>
                </a>
            </footer>
        </aside>
    );
}