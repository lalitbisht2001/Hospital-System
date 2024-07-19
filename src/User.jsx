
import MergeAbout from "./COMPONENT/AboutHos/MergeAbout";
import Appoitment from "./COMPONENT/BOOK/Appoitment";
import Footer from "./COMPONENT/FOOTER/Footer";
import Header from "./COMPONENT/HEADER/Header";
import Navbar from "./COMPONENT/NAVBAR/Navbar";
import News from "./COMPONENT/NEWS/News";
import Price from "./COMPONENT/PRICE/Price";
import Services from "./COMPONENT/SERVICES/Services";


export default function User() {
    return (
        <>
            <Navbar />
            <Header />
            <MergeAbout />
            <Services />
            <Price />
            <News />
            <Appoitment />
            <Footer />
        </>
    );
}