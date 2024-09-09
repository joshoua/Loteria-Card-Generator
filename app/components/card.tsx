import Square from "./square";

export default function Card() {

    let selection : number[] = [];

    while (selection.length != 16) {
        let randomCard = Math.floor(Math.random() * 54 + 1);

        if (!selection.includes(randomCard)) {
            console.log(randomCard);
            selection.push(randomCard);
        }
    }

    return (
        <div className="bg-orange-100 border-orange-50 border-[1px] h-full p-[20px] grid gap-2 grid-cols-4 grid-rows-4">
            {selection.map(num => (<Square num={num}></Square>))}
        </div>
    );
}