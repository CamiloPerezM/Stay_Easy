// import Swiper JS
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';




const [visibleModal, setVisibleModal] = useState(false);

function handleModal(){
    setVisibleModal(!visibleModal);
}

export default Carrusel;