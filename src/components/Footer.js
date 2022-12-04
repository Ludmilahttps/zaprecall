import Cards from "./Cards"

function Footer(props) {
    return (
        <footer data-teste="footr">
            {props.done}/{Cards.length} Concluídos
        </footer>
    );
}
export default Footer;