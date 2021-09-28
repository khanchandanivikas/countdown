import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMins, setTimerMins] = useState("00");
  const [timerSecs, setTimerSecs] = useState("00");

  useEffect(() => {
    const interval = setInterval(() => {
      const today = new Date();
      const future = new Date("Jan 1, 2022 00:00:00");
      const diff = Date.parse(future) - Date.parse(today);
      let days = Math.floor(diff / (1000 * 60 * 60 * 24));
      let hour = Math.floor(diff / (1000 * 60 * 60));
      let min = Math.floor(diff / (1000 * 60));
      let sec = Math.floor(diff / 1000);
      const d = days;
      const h = hour - days * 24;
      const m = min - hour * 60;
      const s = sec - min * 60;
      setTimerDays(d);
      setTimerHours(h);
      setTimerMins(m);
      setTimerSecs(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <h1 className="encabezado">LANZAMOS PRONTO</h1>
      <div className="times">
        <div>
        <h1 className="time">{timerDays}</h1>
        <h1 className="content">Dias</h1>
        </div>
        <div>
        <h1 className="time">{timerHours}</h1>
        <h1 className="content">Horas</h1>
        </div>
        <div>
        <h1 className="time">{timerMins}</h1>
        <h1 className="content">Mins</h1>
        </div>
        <div>
        <h1 className="time">{timerSecs}</h1>
        <h1 className="content">Secs</h1>
        </div>
      </div>
      <div className="social">
        <a href="/"><i className="fab fa-facebook-square"></i></a>
        <a href="/"><i className="fab fa-pinterest"></i></a>
        <a href="/"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
}

export default App;
