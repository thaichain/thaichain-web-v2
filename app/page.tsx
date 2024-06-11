import Spot from "../components/spot";
import Sticky from "../components/sticky";
import { Spark } from "../components/spark";
import NavbarDemo from "../components/menu";
import Tab from "@/components/tab";
import Build from "@/components/build";
import Animated from "@/components/animated";
import Typewriter from "@/components/typewriter";


export default function Home() {
  return (
    <main className="bg-black">
      <Spot />
      <NavbarDemo />
      {/* <w3m-button /> */}
      <Spark />
      <Tab />
      <Sticky />
      <Build />
      <Animated />
      <Typewriter />
    </main>
  );
}
