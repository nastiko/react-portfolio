import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="w-full bg-[#1a1b21]">
        <div className="w-[500px] py-12 mx-auto">
            <Header />
            <Main />
            <Footer />
        </div>
    </div>
  );
}

export default App;
