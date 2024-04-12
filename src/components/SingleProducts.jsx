import React from "react";
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export const SingleProducts = ({id,title,category,description,price,thumbnail,}) => {
  console.log(title);
  return (
    <div>
      <Card key={id}
        style={{
          width: "18rem",
          height: "100%"
        }}
      >
        <img alt="Sample" src={thumbnail}/>
        <CardBody style={{display:"flex", flexDirection:"column", justifyContent: "space-between"}}>
          <CardTitle tag="h5">{title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {category}
          </CardSubtitle>
          <CardText>
            {description}
          </CardText>
          <CardText>
            Price: {price} €
          </CardText>
          <Button style={{background: "green"}}>Add to cart</Button>
        </CardBody>
      </Card>
    </div>
  );
};
