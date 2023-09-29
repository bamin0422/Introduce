import { useTheme } from "next-themes";
import { AiFillGithub } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import LinkButton, { LinkButtonProps } from "../LinkButton";

const githubProps: LinkButtonProps = {
  linkTo: "https://github.com/bamin0422",
};

const mailProps: LinkButtonProps = {
  linkTo: "mailto:bamin0422@gmail.com",
};

const phoneProps: LinkButtonProps = {
  linkTo: "tel:010-9958-5781",
};

export function ContactList() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === undefined ? systemTheme : theme;

  return (
    <div className="flex flex-row justify-center md:justify-start">
      <LinkButton {...githubProps}>
        <AiFillGithub
          size={22}
          color={currentTheme === "dark" ? "white" : "black"}
        />
      </LinkButton>
      <LinkButton {...mailProps}>
        <MdEmail
          size={22}
          color={currentTheme === "dark" ? "white" : "black"}
        />
      </LinkButton>
      <LinkButton {...phoneProps}>
        <BsFillTelephoneFill
          size={22}
          color={currentTheme === "dark" ? "white" : "black"}
        />
      </LinkButton>
      <button></button>
    </div>
  );
}
