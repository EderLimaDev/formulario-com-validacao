import React from 'react'
import { Input } from '../../components/Input/Input'
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { userValidationSchema } from '../../validations/userValidation'
import { Button } from '../../components/Button/Button'



export const Cadastro = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema)
  });

  const onSubmit = (data) => {
    console.log(data + "nossa")
  }



  return (
    <main className='w-full flex flex-col items-center justify-center'>
      <header className='p-8 text-center'>
        <h1 className='text-3xl font-bold'>Cadastro de Membros</h1>
        <p className='text-yellow-300'>Seja Bem vindo ao processo seletivo Frontend Fusion</p>
      </header>

      <form className='max-w-sm w-full md:px-0 px-9' onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Nome Completo"
            type="text"
            name="fullname"
            register={register}
            errorMessage={errors.fullname}
          />
           <Input
            placeholder="Email"
            type="text"
            name="email"
            register={register}
            errorMessage={errors.email}
          />
           <Input
            placeholder="Telefone"
            type="text"
            name="telefone"
            register={register}
            errorMessage={errors.telefone}
          />

          <Input
            placeholder="LinkedIn"
            type="text"
            name="linkedin"
            register={register}
          />

          <Input
            placeholder="Github"
            type="text"
            name="github"
            register={register}
          />
       
          <div className='w-full flex justify-center mt-6'>
            <Button
              title="submit"
              onClick={handleSubmit} 
            />
          </div>


      </form>
    
    </main>
  )
}
