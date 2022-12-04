export default function Section() {

    const cards = [
        {
            quest: "Loki.Oficial",
            answer: "loki2",
            status: "flashcard-closed"
        },
        {
            quest: "Loki.Oficial",
            answer: "loki2",
            status: "flashcard-open"
        },
    ];

    const cardsRender = cards.map((card) => {
        return <CardPost quest={card.quest} answer={card.answer} status={card.status}/>
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
            <div data-test="flashcard" class={`flashcard ${props.status}`}>
                <p data-test="flashcard-txt">{props.answer}</p>
                <button data-test="play-btn"></button>
            </div>
        </>
    );
}