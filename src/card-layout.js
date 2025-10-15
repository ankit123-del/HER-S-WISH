import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";


function CardLayout({ data }) {
  return (
    <>
    <div className="row container card-row">
      {data.map((item, index) => (
        <div className="card-s col-lg-4 col-sm-6 col-md-6 col-6" style={{ flexGrow: "1", padding: "2% 5%","@media (max-width: 768px)":{padding:"2% 2% !important"}}} key={index}>
          <Link to={`/product/${item.id}`} style={{textDecoration:"none",color:"black"}}>
          <Card sx={{ maxWidth: 345,background:"none",boxShadow:"none",paddingTop:"10px"}} className="prod-card">
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={item.img}
                alt={item.head}
                className="card-img card-layout-img"
              />
              <CardContent>
                <Typography gutterBottom variant="inherit" component="div" className="card-details">
                  <b className="card-head">{item.head}</b><br></br>
                  {item.description}<br></br>
                  <b className="card-price">₹{item.price}/-</b>
                  <strike className="card-strike">₹{item.prePrice}</strike>
                  {item.discount}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
        </div>
      ))}
    </div>
    </>
  );
}
export default CardLayout;