import { UserType } from "@/app/types/types";

export const Header = async (props: UserType) => {
  return (
    <>
      <header>
        <h1>Здравсвуйте, {props.name}</h1>
        <h3>Сегодня у вас {props.id} новых оценок</h3>
      </header>
    </>
  );
};
