import Card from "../components/Card";
import Logo from "../components/Logo";
import github from "/github.svg";
import { BUTTONS } from "../data/util";

const HomeScreen = () => {
  return (
    <>
      <div className="bg w-full h-full bg-fixed">
        <Logo />
        <div className="text-center flex-col justify-center items-center text-white space-y-4 mt-44">
          <h1 className="text-4xl lg:text-7xl md:text-5xl sm:text-4xl font-medium overflow-hidden">
            Collection of Modern,
          </h1>
          <span className="text-4xl lg:text-7xl gradient font-medium md:text-5xl sm:text-4xl">
            button snippets
          </span>
          <p className="mt-10 sm:text md:text-sm lg:text-xl space-y-3 w-auto leading-relaxed">
            Discover and copy beautifully designed, <br /> ready-to-use{" "}
            <span className="gradient">Tailwind CSS</span> button styles to
            elevate your web projects.
          </p>
          <a href="">
            <button className="m-auto flex items-center w-auto h-auto mt-5 bg-white px-5 py-3 text-black rounded-md">
              <img src={github} alt="GitHub logo" className="h-5 w-5 mr-2" />
              Go To GitHub
            </button>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 px-4">
          {BUTTONS.map((ButtonComponent, index) => (
            <Card key={index}>
              <ButtonComponent />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomeScreen;