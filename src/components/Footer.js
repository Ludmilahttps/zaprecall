import Cards from "./Cards"
import styled from 'styled-components';

function Footer(props) {
    return (
        <Bar data-teste="footer">
            {props.done}/{Cards.length} Completed
        </Bar>
    );
}
export default Footer;

const Bar = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    min-height: 70px;
    background: #fff;
    box-shadow: 0px -4px 6px rgba(0,0,0,0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;