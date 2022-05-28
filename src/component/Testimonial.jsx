function Testimonial (props) {
    return (
        <section id="testimonial">
            <div className="container-fluid">
                    <div className="row text-center my-4">
                        <div className="Testimo col">
                        <h3>Testimonial</h3>
                        <p>Berbagai review positif dari para pelanggan kami</p> 
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className=" col d-flex justify-content-center">
                            <div id="carouselExampleIndicators" className="Carrausel carousel slide" data-bs-ride="carousel">
                                    <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" className="carousel-control-prev active" aria-current="true">
                                        <img src="asset/Left button.png" alt="" />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" className="carousel-control-next active" aria-current="true">
                                        <img src="asset/Right button.png" alt="" />
                                    </button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card d-flex flex-row align-items-center bg-light">
                                        <div className="px-5">
                                            <img src="./asset/man.png" alt="..." width= "80px" height= "80px" />
                                        </div>
                                        <div className="card-body">
                                            <img src="./asset/img/Rate.svg==" alt="" />
                                            <p className="card-text my-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h6 className="card-text">John Dee 32, Bromo</h6>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card d-flex flex-row align-items-center bg-light" width= "619px" height ="270px">
                                        <div className="px-5">
                                            <img src="./asset/bussineswoman.png" alt="..." width= "80px" height= "80px" />
                                        </div>
                                        <div className="card-body">
                                            <img src="img/Rate.svg" alt="" />
                                            <p className="card-text my-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h6 className="card-text">John Dee 32, Bromo</h6>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card d-flex flex-row align-items-center bg-light" width= "619px" height= "270px">
                                        <div className="px-5">
                                            <img src="./asset/man1.png" alt="..." width= "80px" height= "80px" />
                                        </div>
                                        <div className="card-body">
                                            <img src="img/Rate.svg" alt="" />
                                            <p className="card-text my-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                            <h6 className="card-text">John Dee 32, Bromo</h6>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>

    )
}

export default Testimonial