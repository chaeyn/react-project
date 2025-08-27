import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  confirmPassword: string;
  extraError?: string;
}

function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.confirmPassword) {
      setError(
        "confirmPassword",
        {
          message: "비밀번호가 일치하지 않습니다.",
        },
        { shouldFocus: true }
      );
    }
    // setError("extraError", {
    //   message: "서버가 이상합니다. 나중에 다시 시도하세요.",
    // });
    console.log(data);
  };
  console.log(errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("email", {
            required: "이메일은 필수 입력 값입니다.",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "네이버 이메일만 사용 가능합니다.",
            },
          })}
          placeholder='이메일을 입력하세요.'
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("firstName", {
            required: "이름은 필수 입력 값입니다.",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "nico는 사용할 수 없습니다." : true,
              noAdmin: (value) =>
                value.includes("admin") ? "admin은 사용할 수 없습니다." : true,
            },
          })}
          placeholder='이름을 입력하세요.'
        />
        <span>{errors?.firstName?.message}</span>
        <input
          {...register("lastName", { required: "성은 필수 입력 값입니다." })}
          placeholder='성을 입력하세요.'
        />
        <span>{errors?.lastName?.message}</span>
        <input
          {...register("username", {
            required: "사용자 이름은 필수 입력 값입니다.",
            minLength: {
              value: 5,
              message: "사용자 이름은 5자 이상이어야 합니다.",
            },
          })}
          placeholder='사용자 이름을 입력하세요.'
        />
        <span>{errors?.username?.message}</span>
        <input
          {...register("password", {
            required: "비밀번호는 필수 입력 값입니다.",
            minLength: {
              value: 5,
              message: "비밀번호는 5자 이상이어야 합니다.",
            },
          })}
          placeholder='비밀번호를 입력하세요.'
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register("confirmPassword", {
            required: "비밀번호 확인은 필수 입력 값입니다.",
            minLength: {
              value: 5,
              message: "비밀번호 확인은 5자 이상이어야 합니다.",
            },
          })}
          placeholder='비밀번호 확인을 입력하세요.'
        />
        <span>{errors?.confirmPassword?.message}</span>
        <button>추가</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default HookForm;
