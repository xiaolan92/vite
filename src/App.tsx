import React, {useState, FC} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button} from 'antd';

export const App: FC = () => {
    const [count, setCount] = useState<Number>(0)

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1 className="text-3xl font-bold bg-[red]">Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <Button type='primary' onClick={() => setCount((count) => count + 1)}>点击我</Button>
            </div>
        </>
    )
}
