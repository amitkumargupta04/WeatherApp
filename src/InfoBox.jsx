import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import FlareIcon from '@mui/icons-material/Flare';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';


export default function InfoBox({ info }){

    const imageURL = "https://cdn1.byjus.com/wp-content/uploads/2022/10/Hanle-Ladakh-Observatory.jpg"
    const hotURL = "https://t4.ftcdn.net/jpg/01/07/69/37/360_F_107693707_vU3ntM1eV9YhwA6nQ1JmwP7sz0xOYbXJ.jpg"
    const coldURL = "https://img.freepik.com/free-photo/snowy-mountain_1160-141.jpg"
    const rainyURL = "https://t3.ftcdn.net/jpg/01/19/10/00/360_F_119100073_bbP1qP0Nq2YRUtfE5DfFEEXtsMjLdNu5.jpg"

    return(
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
               sx={{ height: 140 }}
                 image={info.humidity > 80 ? rainyURL: info.temp > 15 ? hotURL: coldURL}
                 title="green iguana"
              />
              <CardContent>
             <Typography gutterBottom variant="h5" component="div">
              {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <FlareIcon/>: <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
             <p>Temprature = {info.temp}&deg;C</p>
             <p>Minimum Tempreature = {info.tempMin}&deg;C</p>
             <p>Maximum Temprature = {info.temMax}&deg;C</p>
             <p>Humidity = {info.humidity}</p>
             <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C  </p>
           </Typography>
          </CardContent>
          <CardActions>
         </CardActions>
         </Card>
        </div>
        </div>
    );
}