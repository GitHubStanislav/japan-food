import Header from "@/app/componenets/Layout/Header";
import Meals from "@/app/componenets/Meals/Meals";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default Home;
