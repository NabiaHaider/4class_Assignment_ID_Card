import React from "react";
import Cards from "./components/Cards/page"

const Home = () => {
    return (
        <div className="bg-emerald-100 flex flex-wrap h-screen place-content-center justify-center gap-4 p-4">
            <Cards Name="Nabia" Age="20" RollNo="1234" Day="Monday" Class="12" />
            <Cards Name="Saira" Age="23" RollNo="3456" Day="Wednesday" Class="7" />
            <Cards Name="Ayesha" Age="21" RollNo="9872" Day="Saturday" Class="5" />
            <Cards Name="Laiba" Age="19" RollNo="3654" Day="Tuesday" Class="9" />
        </div>
    )
}

export default Home;

