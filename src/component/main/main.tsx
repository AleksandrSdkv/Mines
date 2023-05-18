import React, { useState } from 'react';
import Cell from './cell/cell';
import './main.css'
function Main() {
    const Mine = -1;
    const size = 16;
    const dimension = new Array(size).fill(null)
    const [field, setField] = useState<number[]>(() => createField(size))
    function createField(size: number): number[] {
        const field: number[] = new Array(size * size).fill(0);


        function inc(x: number, y: number) {
            if (x >= 0 && x < size && y >= 0 && y < size) {
                if (field[y * size + x] === Mine) return;
                field[y * size + x] += 1
            }
        }

        for (let i = 0; i < size;) {
            const x = Math.floor(Math.random() * size);
            const y = Math.floor(Math.random() * size);

            if (field[y * size + x] === Mine) continue;

            field[y * size + x] = Mine;

            i += 1;
            inc(x + 1, y)
            inc(x - 1, y)
            inc(y - 1, x)
            inc(y + 1, x)
            inc(x + 1, y - 1)
            inc(x - 1, y + 1)
            inc(x - 1, y - 1)
            inc(x + 1, y + 1)
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
                    {dimension.map((_, y) => {
                        return (<div key={y}>
                            {dimension.map((_, x) => {
                                return (<div key={x} >{field[y * size + x]} </div>)
                            })}
                        </div>)
                    })
                    }
                </ul>
            </div>
        </main>
    )
}
export default Main;