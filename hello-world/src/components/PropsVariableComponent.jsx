import logo from '../assets/logo192.png';
import ArticleComponent from './articleComponent';
import "./markup.css";

export default function PropVariableCompnent () {
    const hours = new Date().getHours()
    let timeOfDay
    if (hours<12) {
        timeOfDay = "morning"
    }else if (hours>=12 && hours<17) {
        timeOfDay = "afternoon"
    }else if (hours>=17 && hours<20) {
        timeOfDay = "evening"
    }else {
        timeOfDay = "night"
    }
  return(
    <ArticleComponent
    name="Mr Whiskerson"
    contact="(20)20202131"
    email="whisk@gmail.com"/>
  )
}