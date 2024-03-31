import Carousel from "../components/Carousel"

const Home = () =>{
    const title = [
        "geometry",
        "harun",
        "nubis",
        "aldrich gbs main"
    ];
    const src = [];
    return(
        <>
            <Carousel title={title} src={src}/>
            <div className="about">
                <div className="content">
                    <div className="title">Bimbel Rumah Ilmiah</div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi accusamus voluptates nam omnis exercitationem, rerum quod maiores magni vitae illo pariatur dolorem fugit accusantium doloribus veritatis tempore quas sint delectus.</p>
                </div>
            </div>
        </>
    )
}

export default Home;