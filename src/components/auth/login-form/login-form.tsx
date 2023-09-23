import {useForm} from 'react-hook-form'
import {Button} from "@/components/ui/Button"
import {Textfield} from "@/components/ui/Textfield"
import {z} from "zod"
import {zodResolver} from "@hookform/resolvers/zod"
import {ControlledCheckbox} from "@/components/controlled/controlled-checkbox.tsx"


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


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Textfield {...register('email')} label={'email'} errorMessage={errors.email?.message} />
      <Textfield
        {...register('password')}
        label={'password'}
        errorMessage={errors.password?.message}
      />
      <ControlledCheckbox
        name={'rememberMe'}
        control={control}
        label={'remember me'}
        position={'left'}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}

type FormValues = z.infer<typeof loginSchema>