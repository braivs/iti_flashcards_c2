import s from "./App.module.scss"
import {LoginForm} from "@/components/auth/login-form/login-form.tsx"

export function App() {

  return (
    <div className={s.app}>
      <LoginForm />
    </div>
  )
}
