import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Download from "./components/Download";
import Support from "./components/Support";
import Loading from "./components/Loading";
import { useRecoilValue } from "recoil";
import { Loader } from "./components/Atom";
import Formats from "./components/Formats";

export default function App() {
  const isLoading = useRecoilValue(Loader);
  return (
    <div className="relative ">
      
      {isLoading && <Loading />}
      <Header />
      <Hero />
      <main className="relative z-30">
        <Download />
        <Features />
        <Support />
      </main>
      <Formats />
    </div>
  )
}