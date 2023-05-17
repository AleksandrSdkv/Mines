import React from 'react';
import Cell from './cell/cell';
import './main.css'
function Main() {
    const Mine = -1;
    function createField(size: number): number[] {
        const field: number[] = new Array(size * size).fill(0);
        for (let i = 0; i < size;) {
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);

            if (field[y * size + x] === Mine) continue;

            field[y * size + x] = Mine;

            i += 1;
        }

        return field
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

                </ul>
            </div>
        </main>
    )
}
export default Main;