import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux";
import { importCar, carsFilter } from "../slicer";
import Card from "./card"

export default function SearchBody() {
    const dispatch = useDispatch();

    const getData = () => {
    axios
        .get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json")
        .then((res) => {
        dispatch(importCar(res.data));
        })
        .catch((err) => {
        console.log(err);
        });
    };

    useEffect(() => {
    getData();
    }, []);

    const initialValue = {
    driver: "",
    date: "",
    time: "",
    capacity: 0,
    };

    const [inputs, setInputs] = useState(initialValue);

    const handleSubmit = () => {
    if(JSON.stringify(inputs) === JSON.stringify(initialValue)) {
    getData();
    } else {
    dispatch(carsFilter(inputs));
    }
  };

  const handleChange = (e) => {
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
  };
  const FilterCar = useSelector((state) => state.sliceReducer.data);
    return (
        <section>
            <div class="container-fluid" id="cari-mobil" margin ="50px">
                <div class=" card shadow " id="cm-search">
                    <form id="cm-form">
                            <div class="row p-5 m-2">
                                <div class="col">
                                    <p>Tipe Driver</p>
                                        <div class="input-group-mb-3">
                                            <select class="form-select" id="list" onChange={handleChange} name="driver">
                                                <option hidden>Pilih Tipe Driver</option>
                                                <option value="true">Dengan Supir</option>
                                                <option value="false">Tanpa Supir (Lepas Kunci)</option>
                                            </select>
                                        </div>
                                </div>
                                <div class="col" >
                                        <p>Tanggal</p>
                                            <div class="input-group mb-3">
                                                <input type="date" class="form-control" id="list2date" placeholder="Pilih Tanggal" aria-label="Pilih Tanggal" onChange={handleChange} name="date" value={inputs.date} />
                                            </div>
                                </div>
                                    <div class="col">
                                        <p>Waktu Jemput/Ambil</p>
                                            <div class="input-group mb-3">
                                                <select class="form-select" id="list3" onChange={handleChange} name="time" value={inputs.time}>
                                                    <option hidden>Pilih Waktu</option>
                                                        <option value="8">08.00 WIB</option>
                                                        <option value="9">09.00 WIB</option>
                                                        <option value="10">10.00 WIB</option>
                                                        <option value="11">11.00 WIB</option>
                                                        <option value="12">12.00 WIB</option>    
                                                        <option value="13">13.00 WIB</option>    
                                                        <option value="14">14.00 WIB</option>    
                                                        <option value="15">15.00 WIB</option>    
                                                        <option value="16">16.00 WIB</option>    
                                                </select>
                                            </div>
                                    </div>
                                    <div class="col">
                                        <p>Jumlah Penumpang (optional)</p>
                                            <div mb-3>
                                                <select class="form-select" id="Penumpang" onChange={handleChange} name="capacity"  value={inputs.capacity}>
                                                    <option value="0">Jumlah Penumpang</option>
                                                    <option value="2">2</option>
                                                    <option value="4">4</option>
                                                    <option value="6">6</option>
                                                    <option value="6">8</option>
                                                </select>
                                            </div> 
                                    </div>                   
                                        <div class="col">
                                            <button type="button" id="tombolButton" class="buttonSearch btn btn-success" width= "150px" height= "40px" margin= "30px" onClick={handleSubmit}>Cari Mobil</button>
                                        </div>
                            </div>
                    </form>
                </div> 
            </div>
                <div class="row row-cols-4 row-cols-lg" id="ambil-cars" >
                <div class="result-container">
        <div class = "col-3">
        <div id="card-car" class="result">
        {
                    FilterCar.map((item, index) => <Card key={index} product={item} />)
                }
        </div>
        </div>
        
    </div>
</div>
        </section>
        
    )
}
