import React from 'react';
import { useLocation, useHistory} from 'react-router'

function Details(props) {
    const location = useLocation();
    const history = useHistory();

    function back(){
        history.goBack()
    }


    return(
        <div className="info-container">
            <div className="ship-info">
                NAME: {location.state.name}
                <br></br>
                MODEL: {location.state.model}
                <br></br>
                <button className="return" onClick={back}>RETURN</button>
            </div>
        </div>
    )
}

export default Details