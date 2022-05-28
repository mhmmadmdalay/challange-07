import React from 'react'
export default function Card({product}) {
    return (
            <div class = "all-car">
                <div class="card-car">
                    <img src={product.image} alt=""/>
                    <p>{product.manufacture} {product.model}</p>
                    <h5>Rp. {product.rentPerDay} / hari</h5>
                    <h6 class="desc">{product.description} </h6>
                    <div class = "text-result">
                    <h6><i class="fa fa-user-o" aria-hidden="true"></i>{product.capacity} orang</h6>
                    <h6><i class="fa fa-cogs" aria-hidden="true"></i>{product.transmission}</h6>
                    <h6><i class="fa fa-calendar-o" aria-hidden="true"></i>{product.year}</h6>
                    <button class = "button-car">Pilih Mobil</button>
                    </div>
                </div>
        </div>
        
        
    )
}