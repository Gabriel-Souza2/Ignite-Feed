import style from './Header.module.css';

import IgniteLogo from '../assets/ignite-logo.png'

export function Header() {
    return (
        <header className={style.header}>
            <img src={IgniteLogo} alt="Logo do ignite fedd" />
            <h1>Ignite Feed</h1>
        </header>
    );
}