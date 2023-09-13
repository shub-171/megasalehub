// import Blog from "./Components/Blog";
import Hero from "./Components/Hero";
import ShopByCategory from "./Components/ShopByCategory";
import SubInfo from "./Components/SubInfo";
import YouMayLike from "./Components/YouMayLike";

export default function Home() {
  return (
    <>
      <div className="container-tcss">
        <Hero />
        <YouMayLike />
        <SubInfo />
        <ShopByCategory />
        {/* <Blog /> */}
      </div>
    </>
  )
}
