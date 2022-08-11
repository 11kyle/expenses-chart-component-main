import { useEffect } from 'react';
import { useState } from 'react';
import logo from '../assets/logo.svg';

const barMaxHeight = 200;
const heightOfSibling = 28;

export default function ExpensesChart({ data }) {
  const [maxEarnings, setMaxEarnings] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);
  const [maxBarHeight, setMaxBarHeight] = useState(0);
  const [active, setActive] = useState("0");

  function sum(numbers) {
    return numbers.map((number) => number.amount).reduce((acc, amount) => acc + amount);
  }

  function max(numbers) {
    return Math.max(...numbers.map((number) => number.amount));
  }

  function convert(number) {
    return number + 10;
  }

  
  useEffect(() => {
    setMaxEarnings(sum(data));
    setMaxNumber(max(data));
    setMaxBarHeight(convert(maxNumber));
  }, [data, maxNumber, maxBarHeight]);

  return (
    <div className="w-[333px] md:w-[400px]">
      <div className="flex justify-between items-center bg-hslSoftRed rounded-xl text-hslVeryPaleOrange p-5 my-3">
        <div>
          <h1>My balance</h1>
          <p className="text-2xl font-bold">$921.48</p>
        </div>
        <img src={logo} alt="logo" />
      </div>
      <div className="bg-hslVeryPaleOrange rounded-xl">
        <h1 className="text-2xl font-bold py-5 pl-5">Spending - Last 7 days</h1>
        <div className="flex justify-between items-end space-x-3 h-[200px] px-6 py-4">
          {data.map((item, index) => (
            <div className="flex-1 relative" key={index} onMouseEnter={() => setActive(index)} onMouseLeave={() => setActive("0")}>

              {active===index && <span className="absolute -top-7 -right-2 md:-top-8 text-xs md:text-sm text-white font-bold bg-black rounded-md p-1">${item.amount}</span>}

              <div style={{ height: `${item.amount/maxBarHeight*barMaxHeight - heightOfSibling}px` }} className="bg-hslSoftRed rounded-sm"></div>
              <p className="text-sm text-hslMediumBrown text-center mt-2">{item.day}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-end pt-5 pb-8 mx-5 my-2 border-t-2">
          <div>
            <h1 className="text-hslMediumBrown">Total this month</h1>
            <p className="text-3xl font-bold">$478.33</p>
          </div>
          <div>
            <p className="font-bold text-right">+2.4%</p>
            <p className="text-hslMediumBrown">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
}


// 200 / item.amount * 100

// totalEarnings = 227.91
// mon = 52.36

// day / total = .22 * 100



// take the largest value and equal it to 90%
// turn the other values to %