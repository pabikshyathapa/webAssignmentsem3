import "./Footer.css";
function Footer() {
    return (
        <>
            <footer>
                <div className="footercontainer">
                    <div className="footernav">
                        <ul>
                            <li>
                                <a href="">Gift Card</a>
                            </li>
                            <li>
                                <a href="">Find Store</a>
                            </li>
                            <li>
                                <a href="/registration">Become a member</a>
                            </li>
                            <li>
                                <a href="/contact">Get Help</a>
                            </li>
                            <li>
                                <a href="">Promotion & Discount</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footerbottom">
                    <p>
                        Copyright &copy; 2024 Designed by{" "}
                        <span className="Designer">Blissful Skin</span>
                    </p>
                </div>
            </footer>
        </>
    );
}
export default Footer;