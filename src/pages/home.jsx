import { useState } from "react";
import Tabs from "../components/CategoryButton";
import Footer from "../components/Footer";
import Header from "../components/Header";


const Home = () => {
  const [searchValue, setSearchValue] = useState('')

  const upDateSearchValue = (newvalue) =>{
      setSearchValue(newvalue)
  }
  return(
    <>
      <Header value={searchValue} valueChangerFn={upDateSearchValue} />
      <Tabs value={searchValue}/> 
      <Footer/>
    </>
  )
;
};

export default Home;
