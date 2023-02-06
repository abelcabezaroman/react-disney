import { Link } from "react-router-dom";
import Card from "../Card/Card";

export default function Gallery({ list }) {
  return (
    <div>
      {list.map((item, index) => (
        <Link key={index} to={"/characters/" + item._id}>
          <Card data={item}></Card>
        </Link>
      ))}
    </div>
  );
}
