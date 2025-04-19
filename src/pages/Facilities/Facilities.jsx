import Hero from "../../components/secttions/Hero.jsx";
import Header from "../components/Header";

function Facilities() {
    return (
        <>
            <Hero image="/path/to/image.jpg" text="Welcome to Batam1Spa">
                <Header />
            </Hero>

            {/* Other content below hero */}
            <div className="">
                <p>Our mission is to make you feel amazing.</p>
            </div>
        </>
    );
}

export default Facilities;
