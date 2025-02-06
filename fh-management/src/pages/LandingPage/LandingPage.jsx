import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/Footer";
import AllCards from "./components/AllCards";

function LandingPage() {
  return (
    <>
      <NavBar title="FH MANAGEMENT" />
      <div className="pt-20">
        <AllCards />
      </div>
      <Footer />
    </>
  );
}
export default LandingPage;
