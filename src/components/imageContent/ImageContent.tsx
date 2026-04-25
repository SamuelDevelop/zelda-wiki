
type Props = {
    imagem: string
    largura: number
    altura: number
}

function ImageContent({imagem, largura, altura} : Props){
    return(
        <img
            src={imagem}
            width={largura}
            height={altura}
        />
    )
}

export default ImageContent;