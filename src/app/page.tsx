import Image from "next/image";
import ParserTest from "@/components/Parser/parserTest";

export default function Home() {
  return (
    <main>
      <p>pagina Inicial</p>
      <button className="btn btn-primary">Button</button>
      <ParserTest />
    </main>
  );
}
