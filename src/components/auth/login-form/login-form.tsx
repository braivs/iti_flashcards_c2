import {useController, useForm} from 'react-hook-form'
import {Button} from "@/components/ui/Button"
import {Textfield} from "@/components/ui/Textfield"
import {Checkbox} from "@/components/ui/Checkbox"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"


/*type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}*/

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export const LoginForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  console.log(errors)

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textfield {...register('email')} label={'email'} errorMessage={errors.email?.message} />
      <Textfield {...register('password')} label={'password'} errorMessage={errors.password?.message} />
      <Checkbox checked={value} onValueChange={onChange} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}

type FormValues = z.infer<typeof loginSchema>