import Link from "next/link";
import ThemeProvider from "../components/theme-provider";
import ThemeStatus from "../components/theme-status";
import '@/app/globals.css'

export default function LocalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Link href={"/artist/Bret"}>Bret</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Antonette"}>Antonette</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Samantha"}>Samantha</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Karianne"}>Karianne</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Kamren"}>Kamren</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Leopoldo_Corkery"}>Leopoldo_Corkery</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Elwyn.Skiles"}>Elwyn.Skiles</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Maxime_Nienow"}>Maxime_Nienow</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Delphine"}>Delphine</Link>&nbsp; | &nbsp;
        <Link href={"/artist/Moriah.Stanton"}>Moriah.Stanton</Link>
      </header>
      {children}
    </>
  );
}
