import Footer from "../FOOTER/Footer";
import Details from "../MAIN/Details";
import Modules from "../MAIN/Modules";
import HeaderA from "./HeaderA";
import NavbarA from "./NavbarA";
import styles from "./Navigation.module.css";
function Navigation() {
  
  return (
    <div className={styles.main}>  
        <NavbarA/>  
        <HeaderA/>
        <Modules/>
        <Details/> 
        <Footer/>
    </div>
  )
}

export default Navigation
