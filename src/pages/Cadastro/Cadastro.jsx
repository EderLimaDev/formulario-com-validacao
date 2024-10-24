import React from "react";
import { Input } from "../../components/Input/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { userValidationSchema } from "../../validations/userValidation";
import { Button } from "../../components/Button/Button";
import { Select } from "../../components/Select/Select";
import optionList from "../../utils/roles";

export const Cadastro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="w-full h-screen grid lg:grid-cols-2 grid-cols-1 items-center justify-center">
      <header className="text-center">
        <h1 className="md:text-4xl text-3xl font-bold">Cadastro de Membros</h1>
        <p className="text-yellow-300">
          Seja Bem vindo ao processo seletivo Frontend Fusion
        </p>
      </header>

      <section className="flex justify-center items-center">
      <form
        className="max-w-sm w-full md:px-0 px-9"
        onSubmit={handleSubmit(onSubmit)}
      >
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
          placeholder="Tel. (99) 99999-9999 "
          type="text"
          name="telefone"
          register={register}
          errorMessage={errors.telefone}
        />

        <Select options={optionList} errorMessage={errors.cargo} />

        <Input
          placeholder="Link do LinkedIn (Opcional)"
          type="text"
          name="linkedin"
          register={register}
        />

        <Input
          placeholder="Link do Github (Opcional)"
          type="text"
          name="github"
          register={register}
        />

        <div className="w-full flex justify-center mt-6">
          <Button title="submit" type="submit" onClick={handleSubmit} />
        </div>
      </form>
      </section>
    </main>
  );
};
