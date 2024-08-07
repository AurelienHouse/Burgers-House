/* eslint-disable react/no-unescaped-entities */
import Picto from "../../../medias/svg/picto-burger-house.svg";
import Icone from "../../../medias/svg/ico-bag-clickAndCollect.svg";
import Button from "../../elements/Button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="relative z-10 flex items-center justify-between py-10">

<div className="w-full relative flex items-center">
  <img src={Picto} alt="logo Veggie House App" className="w-10" />
  <h1 className="uppercase text-3xl ml-2">Veggie House</h1>
</div>



      <div className=" w-full text-secondary ">
        <div className="items-center justify-end hidden md:flex">
          <img src={Icone} alt="" className="w-5 h-5 mr-1" />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className="md:mt-5 flex items-center justify-end">
          <Link to="/Signup">
            <Button className="tracking-widest mr-3">Inscription</Button>
          </Link>
          <Link to="/Signup">
            <Button className="tracking-widest" color="secondary">
              Connexion
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
