import React from "react";
import Button from "@mui/material/Button";

const PageNotFound: React.FC = (): JSX.Element => {
    return (
        <div>
            <img src={window.location.origin + '/images/404-cat.jpg'} alt="404 - not found page"/>
            <h1>UH OH! You're lost.</h1>
            <p>The page you are looking for does not exist.
                How you got here is a mystery. But you can click the button below
                to go back to the homepage.
            </p>
            <Button variant="contained" href="/">
                Go Home
            </Button>
        </div>
    );
};

export default PageNotFound;
