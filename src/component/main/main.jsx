import Cell from './cell/cell';
import './main.css'
function Main() {
    const n = Array(256).fill(0)
    n.fill(0, 0, 256)
    function click(e) {
        console.log(n)

    }
    return (
        <main className='main'>
            <div className='main__container'>
                <div className='main__header'>
                    <div>timer</div>
                    <div>smile</div>
                    <div>score</div>
                </div>
                <ul className='main__cells'>
                    {n.map((e, index) => <Cell click={click} key={index} />)}
                </ul>
            </div>
        </main>
    )
}
export default Main;