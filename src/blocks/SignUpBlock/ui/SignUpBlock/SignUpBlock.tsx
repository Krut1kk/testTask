// react
import { useState } from "react";
// features
import {
  useGetPositionsQuery,
  useGetTokenQuery,
  useRegisterUserMutation,
} from "@/features/signUp/api/signUpApi";
// libs
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// validation
import { signUpValidationSchema } from "../../model/validationSchema/signUpValidationSchema";
// ui
import { Input } from "@/shared/ui/Input";
import { SignUpChoosePositions } from "../SignUpChoosePositions/SignUpChoosePositions";
import { Button } from "@/shared/ui/Button";
import { FileInput } from "@/shared/ui/FileInput/FileInput";
// styles
import styles from "./SignUpBlock.module.scss";

export const SignUpBlock = ({}) => {
  const [registerUser] = useRegisterUserMutation();

  const { data, error: positionsError } = useGetPositionsQuery();

  const {
    watch,
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
    mode: "onChange",
  });

  const [selectedImage, setSelectedImage] = useState<string>("");

  const [position, setPosition] = useState<string>("");

  const { error: tokenError, isLoading: tokenIsLoading } = useGetTokenQuery(
    null,
    {
      skip:
        !watch("email") ||
        !watch("phone") ||
        !watch("username") ||
        !position ||
        !selectedImage,
    }
  );

  const onChangePosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
  };

  const isValidData = isValid && position && selectedImage;

  const onClickSignUp = () => {
    if (!tokenIsLoading && !tokenError) {
      registerUser({
        username: watch("username") as string,
        email: watch("email") as string,
        phone: watch("phone") as string,
        positionId: position,
        photo: selectedImage,
      });
    }
  };

  if (positionsError || tokenError) {
    return <div>Error</div>;
  }

  return (
    <form onSubmit={handleSubmit(onClickSignUp)} className={styles.SignUpBlock}>
      <div className={styles.title}>Working with POST request</div>
      <div className={styles.form}>
        <div className={styles.inputContainer}>
          <Input
            placeholder="Username"
            register={register("username")}
            errors={errors.username?.message}
          />
          <Input
            placeholder="Email"
            register={register("email")}
            errors={errors.email?.message}
          />
          <Input
            placeholder="Phone"
            register={register("phone")}
            errors={errors.phone?.message}
          />
        </div>
        <FileInput setSelectedImage={setSelectedImage} />
      </div>
      <SignUpChoosePositions
        onChange={onChangePosition}
        positions={data?.positions || []}
      />
      <div className={styles.button}>
        <Button type="submit" disabled={!isValidData}>
          Sign Up
        </Button>
      </div>
    </form>
  );
};
