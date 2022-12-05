import styled from "styled-components";


export default function Frontface(props) {
    function zap() {
        const aux = <img data-test="zap-icon" src="assets/icone_certo.png" alt="zap" />;
        props.setAux([...props.aux, aux]);
        props.setResult(aux);
        props.setStatus("zap");
        reset();
    }
    function forgotten() {
        const aux = <img data-test="no-icon" src="assets/icone_erro.png" alt="no" />;
        props.setError(true);
        props.setAux([...props.aux, aux]);
        props.setResult(aux);
        props.setStatus("forgotten");
        reset();
    }
    function partial() {
        const aux = <img data-test="partial-icon" src="assets/icone_quase.png" alt="partial" />;
        props.setAux([...props.aux, aux]);
        props.setResult(aux);
        props.setStatus("partial");
        reset();
    }
    function reset() {
        props.setDone(props.done + 1);
        props.setTurn(false);
        props.setClicked(false);
    }

    return (
        <BackDiv clicked={props.clicked ? 1 : 0}>
            <TextDiv data-test="flashcard-text">{props.answer}</TextDiv>
            <ButtonsDiv>
                <Button data-test="no-btn" onClick={forgotten} color="#ff3030">Forgotten</Button>
                <Button data-test="partial-btn" onClick={partial} color="#FF922E">Partial</Button>
                <Button data-test="zap-btn" onClick={zap} color="#2fbe34">Zap!</Button>
            </ButtonsDiv>
        </BackDiv>
    );
}

const BackDiv = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => (props.clicked ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;
    padding: 15px;
`;

const TextDiv = styled.div`
    width: 100%;
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    margin: 0 auto 10px auto;
    margin-bottom: 22px;
`;

const ButtonsDiv = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    margin: auto;
    box-sizing: border-box;
`;

const Button = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    background-color: ${props => props.color};
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    margin: 2px;
    border:none;
    margin: 0;
`;