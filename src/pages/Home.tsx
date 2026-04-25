import SearchArea from "../components/search-area/SearchArea";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function Home(){
    return (
        <>
            <Header />
            <main>
                <SearchArea></SearchArea>
            </main>
            <Footer />
        </>
    )
}

export default Home;