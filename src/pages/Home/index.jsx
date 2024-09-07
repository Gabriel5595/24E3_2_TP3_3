import styles from "./home.module.css"

import Greeting from "../../components/Greeting"

export default function Home() {
    return (
        <div>
            < Greeting name="Gabriel" age="30"/>
            < Greeting name="Zé" age="56"/>
            < Greeting name="Ricardo" age="16"/>
        </div>
    )
}