import SearchArea from "../components/search-area/SearchArea";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import ImageContent from "../components/imageContent/ImageContent";

function Home(){
    return (
        <>
            <Header />
            <main>
                <ImageContent 
                    imagem="/link.png"
                    largura={120}
                    altura={120}
                />
                <SearchArea></SearchArea>
            </main>
            <Footer />
        </>
    )
}

export default Home;