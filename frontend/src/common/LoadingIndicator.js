import React from 'react';
import OverlayLoader from 'react-loading-indicator-overlay/lib/OverlayLoader'

export default function LoadingIndicator() {


    const style = {
        position: "absolute",
        top: "40%",
        left: "25%",

        width: "50%",
        fontSize: "35px",
    };

    return (
        <div style={style}>
            <OverlayLoader
                color={'red'}
                size={25}
                loader="ScaleLoader"
                text="Loading... Please wait!"
                active={true}
                backgroundColor={'red'}
                opacity=".9"
            >
            </OverlayLoader>
        </div>
    );
}