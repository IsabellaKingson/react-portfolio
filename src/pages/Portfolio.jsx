import chefable from "../assets/chefable.png";
import gamersParadise from "../assets/gamers-paradise.png";
import weatherApp from "../assets/weather-app.png";
import jsQuiz from "../assets/js-quiz.png";
import workScheduler from "../assets/workday-scheduler.png";
import passwordGenerator from "../assets/password-generator.png";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="card text-center col-4-lg col-6-md col-12-sm">
        <div className="card-body">
          <a href="https://github.com/IsabellaKingson/chef-able">
            <h3 className="card-title">Chefable</h3>
            <img className="card-img-bottom" src={chefable}></img>
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <a href="https://github.com/jaxongrosam/gamers-paradise">
            <h3 className="card-title">Gamer's Paradise</h3>
            <img className="card-img-bottom" src={gamersParadise}></img>
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <a href="https://github.com/IsabellaKingson/weather-app">
            <h3 className="card-title">Weather App</h3>
            <img className="card-img-bottom" src={weatherApp}></img>
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <a href="https://github.com/IsabellaKingson/JS-Quiz">
            <h3 className="card-title">JavaScript Fundamentals Quiz</h3>
            <img className="card-img-bottom" src={jsQuiz}></img>
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <a href="https://github.com/IsabellaKingson/work-day-scheduler">
            <h3 className="card-title">Work Day Scheduler</h3>
            <img className="card-img-bottom" src={workScheduler}></img>
          </a>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <a href="https://github.com/IsabellaKingson/password-generator">
            <h3 className="card-title">Password Generator</h3>
            <img className="card-img-bottom" src={passwordGenerator}></img>
          </a>
        </div>
      </div>
    </div>
  );
}
