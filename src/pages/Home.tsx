import SearchArea from "../components/search-area/SearchArea";
import NoteAbout from "../components/note-about/NoteAbout";
import Header from "../components/header/Header";

function Home(){
    return (
        <>
            <Header />
            <main>
                <SearchArea></SearchArea>
            </main>
            <footer>
                <NoteAbout />
            </footer>
        </>
    )
}

export default Home;