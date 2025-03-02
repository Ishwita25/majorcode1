import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import PrimaryButton from "../components/Button";
import JoinRoomDialogue from "../components/joinroomDialogue";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col space-y-10 bg-gradient-to-b from-slate-800 via-bgpink to-bgdark min-h-screen text-white justify-center items-center">
      <Head>
        <title>CodeHunt</title>
        <meta
          name="description"
          content="CodeHunt is an online community for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor and open-source learning environment, where developers can create code snippets, "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex justify-center items-center mx-5 space-x-8">
        <div className=" flex flex-col justify-center items-center space-y-4 ">
          <h1 className="font-extrabold text-5xl md:text-6xl text-center">
            Code Here.{" "} 
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-textpink to-textblue">
              Code Now.
            </span>
          </h1>

          <div>
            <JoinRoomDialogue />
          </div>
        </div>

        <div className=" rounded-lg border-2 overflow-hidden">
          <Image
            src="/ww1.png"
            width="800px"
            className="aspect-square"
            height="500px"
          />
        </div>
      </div>

      <footer className="fixed bottom-2">
        Made by Group 2
        
      </footer>
    </div>
  );
};

export default Home;
