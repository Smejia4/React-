import "./headerHome.css";
import { NavBarHome } from "../../ui/NavBarHome/NavBarHome";
import { Logo } from "../../ui/Logo/Logo";
import { ProfilePhoto } from "../../ui/ProfilePhoto/ProfilePhoto";



export const HeaderHome = () => {
    return(
        <header className="containerHeader">
            <Logo />
            <NavBarHome />
            <ProfilePhoto />
        </header>
    )
}
