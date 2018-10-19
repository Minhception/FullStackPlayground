import React from 'react'
import { Link } from "react-router-dom";
class Navigation extends React.Component {
    render() {
        return (
            <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Page">Page</Link>
                </li>
            </ul>
        )
    }
}
export default Navigation