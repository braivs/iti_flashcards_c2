import s from "./App.module.scss"
import {Router} from "@/router.tsx"

export function App() {

  return (
    <div className={s.app}>
      <Router />
    </div>
  )
}
