import Hero from "../../components/sections/Hero.jsx";
import NavBar from "../../components/sections/NavBar.jsx";

function Facilities() {
    return (
        <>
            <Hero image="/path/to/image.jpg" text="Welcome to Batam1Spa">
                <NavBar />
            </Hero>

            {/* Other content below hero */}
            <div className="">
                <p>Our mission is to make you feel amazing.</p>
            </div>
        </>
    );
}

export default Facilities;
