import React from "react";
import { Button } from "@carbon/react";
import '../card-container/_cards.scss';
const Card = (props) => {
  return (
    
      <div className="card_container_div1 ">
        <div className="card_container_div1_div1">
          <div className=" card_container_div1_div1_div1">
            <img
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
              src={props.img}
              alt=""
            />
          </div>
        </div>
        <div className="card_container_div1_div2">
          <div className=" card_container_div1_div2_div1">
            <b>{props.p}</b>
          </div>
          <div className="card_container_div1_div2_div2">
            <Button kind="secondary">Featured Story</Button>
          </div>
        </div>
      </div>
   
  );
};

export default Card;
