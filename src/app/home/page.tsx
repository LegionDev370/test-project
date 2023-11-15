import Home from "@/app/components/Home/home";
import Navbar from "../components/Navbar/navbar";
import HeaderMenu from "../components/Header/header-menu";

const HomePage = () => {
  return (
    <>
      <Home>
        <HeaderMenu>
          <Navbar />
        </HeaderMenu>
      </Home>
    </>
  );
};
export default HomePage;
