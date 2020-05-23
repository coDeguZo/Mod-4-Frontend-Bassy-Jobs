import React from "react"

// let phantom = {
//     display: 'block',
//     padding: '20px',
//     height: '60px',
//     width: '100%',
//   }

class Footer extends React.Component {

    render() {
        let style = {
            backgroundColor: "#F8F8F8",
            borderTop: "1px solid #E7E7E7",
            textAlign: "center",
            padding: "20px",
            left: "0",
            bottom: "0",
            right: "0",
            height: "60px",
            width: "100%"
        };
        return (
            <div >
                <div style={style}>
                    Footer
                </div>
            </div>
        );
    }
}

export default Footer;