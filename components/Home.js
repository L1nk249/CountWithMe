
import styles from '../styles/Home.module.css';
import {useState} from 'react'


function Home() {
 const[counternb,setCounternb]= useState(0)



const handleClick=()=>{
  setCounternb(counternb+1)
}
const removeClick =()=>{
  if (counternb>0 )
  {setCounternb (counternb-1) }}


 






  return (
    <div className={styles.container}>
      <img className={styles.logo} src="logo.png" />
      <div className={styles.counterContainer}>



        <button className={styles.decrementBtn} onClick={()=>removeClick()} id="decrementBtn" >-</button>
        <span className={styles.counter} id="counter">{ counternb}</span>
        <button className={styles.incrementBtn}onClick={()=>handleClick()} id="incrementBtn">+</button>
      </div>
    </div>
  );

}
export default Home;
//test
