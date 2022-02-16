import Link from "next/link";

export interface LogoImage {
  as: "image";
  alt: string;
  title: string;
  el: any;
}

export interface LogoText {
  as: "text";
  title: string;
}

export type LogoProps = LogoImage | LogoText;

export const Logo = (logo: LogoProps) => {
  if (logo.as === "text") {
    return (
      <div className="dark:text-white text-black">
        <Link href="/">{logo.title}</Link>
      </div>
    );
  }

  return (
    <Link href="/">
      <a className="dark:text-white text-black">
        {logo.el}
        <span className="sr-only">{logo.title}</span>
      </a>
    </Link>
  );
};

Logo.displayName = "Logo";
