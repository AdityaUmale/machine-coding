import { useEffect, useRef, useState } from "react";

const OTP_DIGITS_COUNT = 5;

export default function App() {

  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill("1"));

  const refArr = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    refArr.current[0]?.focus();
  },[]);  

  const handleOnChange = (value: string, index: number) => {
    if(isNaN(Number(value))) return;
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr)

    refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (!e.currentTarget.value && e.key === "Backspace" && index > 0) { 

      refArr.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      refArr.current[index - 1]?.focus();
    }
  }

  return (
    <div className="App">
      <h1>Validate Otp</h1>
      {inputArr.map((input, index) => {
        return <input className="otp-input" key={index} type="text" ref={(input) => { refArr.current[index] = input; }} onChange={(e) => handleOnChange(e.target.value, index)} onKeyDown={(e) => handleOnKeyDown(e, index)}/>
      })}
      
      
    </div>
  )
}