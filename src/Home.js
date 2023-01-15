import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useMrUniversContext } from "./context";

const Home = () => {
  const { openSidebar, openModal } = useMrUniversContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button className="btn" onClick={openModal}>
        Modal
      </button>
    </main>
  );
};

export default Home;
