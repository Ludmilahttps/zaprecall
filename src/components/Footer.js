import Cards from "./Cards"

function Footer(props) {
    return (
        <footer data-teste="footr">
            {props.aux}/{Cards.length} Concluídos
        </footer>
    );
}
export default Footer;