import Cards from "./Cards"
import Buttons from "./Buttons"

export default function Section() {

    const cardsRender = Cards.map((card) => {
        return <CardPost quest={card.quest} answer={card.answer}/>
    })

    return (
        <section>
            {cardsRender}
        </section>
    );
  }
  
function CardPost(props) {

    return (
        <>
            <div data-test="flashcard" className={`flashcard`}>
                <p data-test="flashcard-txt">{props.answer}</p>
                <button data-test="play-btn"></button>
            </div>
        </>
    );
}