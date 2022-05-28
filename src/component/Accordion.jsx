function Accordion (props) {
    return (
        <section id="faq">
            <div class="container my-5 pt-5">
                <div class="row">
                        <div class="accordion col-md">
                        <h4>Frequently Asked Question</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div class="col">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item border my-3">
                            <p class="accordion-header" id="flush-heading1">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">Apa saja syarat yang dibutuhkan?</button>
                            </p>
                            <div id="flush-collapse1" class="accordion-collapse collapse" aria-labelledby="flush-heading1" data-bs-parent="#accordingFlushExample">
                                <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum optio hic atque enim, tempora illo consequuntur neque fugit tempore unde a voluptatem nobis ipsum dignissimos voluptates ea itaque. Quasi!</p>
                                </div>
                            </div>
                            </div>
                            <div class="accordion-item border my-3">
                            <p class="accordion-header" id="flush-heading2">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">Berapa hari minimal sewa mobil lepas kunci?</button>
                            </p>
                            <div id="flush-collapse2" class="accordion-collapse collapse" aria-labelledby="flush-heading2" data-bs-parent="#accordingFlushExample">
                                <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum optio hic atque enim, tempora illo consequuntur neque fugit tempore unde a voluptatem nobis ipsum dignissimos voluptates ea itaque. Quasi!</p>
                                </div>
                            </div>
                            </div>
                            <div class="accordion-item border my-3">
                            <p class="accordion-header" id="flush-heading3">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">Berapa hari sebelumnya sabaiknya booking sewa mobil?</button>
                            </p>
                            <div id="flush-collapse3" class="accordion-collapse collapse" aria-labelledby="flush-heading3" data-bs-parent="#accordingFlushExample">
                                <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum optio hic atque enim, tempora illo consequuntur neque fugit tempore unde a voluptatem nobis ipsum dignissimos voluptates ea itaque. Quasi!</p>
                                </div>
                            </div>
                            </div>
                            <div class="accordion-item border my-3">
                            <p class="accordion-header" id="flush-heading4">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">Apakah Ada biaya antar-jemput?</button>
                            </p>
                            <div id="flush-collapse4" class="accordion-collapse collapse" aria-labelledby="flush-heading4" data-bs-parent="#accordingFlushExample">
                                <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum optio hic atque enim, tempora illo consequuntur neque fugit tempore unde a voluptatem nobis ipsum dignissimos voluptates ea itaque. Quasi!</p>
                                </div>
                            </div>
                            </div>
                            <div class="accordion-item border my-3">
                            <p class="accordion-header" id="flush-heading5">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">Bagaimana jika terjadi kecelakaan</button>
                            </p>
                            <div id="flush-collapse5" class="accordion-collapse collapse" aria-labelledby="flush-heading5" data-bs-parent="#accordingFlushExample">
                                <div class="accordion-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cum optio hic atque enim, tempora illo consequuntur neque fugit tempore unde a voluptatem nobis ipsum dignissimos voluptates ea itaque. Quasi!</p>
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

export default Accordion ;