import { useNavigate } from "react-router-dom"
import "./header.css"
import { Link } from "react-router-dom"
const Header: React.FC = () => {
    const navigate = useNavigate()
    return (
        <header className="site-header">
            <div className="logo" onClick={() => navigate("/")}>
                <p>ШИФТ ПОДГОТОВКА</p>
            </div>
            <nav className="main-navigation">
                <ul>
                    <li> <Link to={"/section_1"}>Занятие 1</Link></li>
                    <li> <Link to={"/section_2"}>Занятие 2</Link></li>
                </ul>
            </nav>
        </header>


    )
}

export default Header