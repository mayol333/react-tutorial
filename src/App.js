import logo from "./logo.svg";
import "./App.css";
import { Text } from "./Text";
import { Link } from "./Link";
import { useEffect, useState } from "react";

function App() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);
    useEffect(() => {
        console.log("sdffsdfs");
    }, [count, age]);
    const TestFunction = () => {};
    const handleCount = () => {
        setCount(count + 1);
    };
    const handleAge = () => {
        setAge(age + 1);
    };
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Text method={TestFunction} />
                <Link text={"Learn React"} />
                <Link text={"Master React"} />
                <button onClick={handleCount}>{count}</button>
                <button onClick={handleAge}>{age}</button>
            </header>
        </div>
    );
}

export default App;
