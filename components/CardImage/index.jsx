import { getPokemonSpriteUrl } from "../../api/utils";
import "../../styles/Card.css";

function CardImage({ currentId }) {
  return (
    <div>
      <img src={getPokemonSpriteUrl(currentId)} />
    </div>
  );
}

export default CardImage;
