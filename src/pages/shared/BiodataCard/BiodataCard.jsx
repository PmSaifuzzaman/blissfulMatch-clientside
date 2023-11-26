import PropTypes from 'prop-types';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const BiodataCard = ({ biodata }) => {

    const { ProfileImage, Biodata, Occupation, BiodataNumber, Age, PermanentDivisionName, _id } = biodata

    return (
        <Card className="bg-pink-50">
            <CardHeader shadow={false} floated={false} className="h-96">
                <img
                    src={ProfileImage}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <div>
                    <Typography color="blue-gray" className="font-medium">
                        Id : <span className="font-bold">{BiodataNumber}</span>
                    </Typography>
                </div>
                <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                        <span className="font-bold text-pink-400">{Biodata}</span>
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                        Age : <span className="bg-pink-200 p-1 rounded-full text-black font-bold">{Age}</span>
                    </Typography>
                </div>
                <Typography
                    color="gray"
                    className=""
                >
                    Occupation : <span className="bg-pink-200 p-1 rounded-full text-white">{Occupation}</span>
                </Typography>
                <div>
                    <Typography color="blue-gray" className="font-medium">
                        Permanent Address : <span className="">{PermanentDivisionName}</span>
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to={`/details/${_id}`}>
                    <Button                        
                        ripple={false}
                        fullWidth={true}
                        className="bg-pink-400 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                    >
                        View Profile
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default BiodataCard;




BiodataCard.propTypes = {
    biodata: PropTypes.object,
}