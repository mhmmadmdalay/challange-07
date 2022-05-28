import { useNavigate } from "react-router-dom";

function Banner (props) { 
    // let = navigation = useNavigate();
    // function Seacrh() {
    //     navigation ('/Search')
    // }

    return (
        <section  id="main"> 
            <div class="container-fluid bg-light d-flex flex-row pt-5 ps-3">
                <div class="banner row">
                        <div class="col-md">
                        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                        <p class="me-5 fs-6">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        <a href="/Search"><button type="button" class="btn btn-success" >Mulai Sewa Mobil</button></a>
                        </div>
                        <div class="col-md">
                            <a href="">
                            <img src="asset/car1.jpg" alt="img_car" width= "704px" height= "407px" /> 
                            </a>
                        
                        </div>
                </div>
            </div>
        </section>
    )
}


export default Banner ;