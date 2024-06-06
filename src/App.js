import LandingPage from "./landing-page/LandingPage";
import MenuPage from "./menu-page/MenuPage";
import { HeaderNavBar, PageBottom } from "./shared-content/SharedContent";

function App() {
  return (
    <div>
      <HeaderNavBar />
      <MenuPage />
      <PageBottom />
    </div>
  );
}

export default App;
