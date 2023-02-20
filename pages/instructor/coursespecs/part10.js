import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import Cookies from "js-cookie";
import Checkbox from "@/components/checkbox/checkbox";
import InstructorDashboard from "@/components/InstructorDashboard";

const part1 = ({ cookies }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [handler, setHandler] = useState(false);
  const addOtherHander = () => {
    setHandler(!handler);
  };
  const other = useRef();
  const handleCheckboxChange = (value, isChecked) => {
    if (isChecked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== value));
    }
  };
  if (cookies.role != "instructor" || cookies.loggedInStatus != "true") {
    return <div className="error">404 could not found</div>;
  }
  const items = [
    "Classroom",
    "Smart Board",
    "Lecture Hall",
    "White Board",
    "Sound and Microphone",
    "Data Show",
    "Computer with software",
    "MIS system",
    "Internet Access",
  ];

  const contactHours = useRef();

  const specialization = useRef();

  const router = useRouter();
  // const [invalidData, setInvalidData] = useState(false);
  const submitHandler = async (e) => {
    e.preventDefault();

    /*const r = await fetch(
            "url",
            {
                method: "",

                body: JSON.stringify({
                     : code.current.value,
                     : year.current.value,
                     : special.current.value,
                     : hours.current.value,
                     : lecture.current.value,
                     : practical.current.value,
                 }),
headers: { "Content-Type": "application/json" },
             }
         );

const resp = await r.json();
console.log(resp);
Cookies.set("data", resp.data);
Cookies.set("", resp.data.);
Cookies.set("", resp.data.);
Cookies.set("", resp.data.);
Cookies.set("", resp.data.);
Cookies.set("", resp.data.);
Cookies.set("", resp.data.);*/
    // window.location.href = "/instructor/coursespecs/part2";
  };
  const printDataHandler = () => {
    console.log(selectedItems);
    if (handler) {
      // selectedItems.push()
      console.log(other.current.value);
    }
  };
  return (
    <>
      <div className="flex flex-row w-screen h-screen mt-2">
        <InstructorDashboard />
        <form
          onSubmit={submitHandler}
          className="bg-sky-50 h-screen w-screen flex flex-col justify-center items-center text-black ml-1"
        >
          <div className="contentAddUser2 flex flex-col gap-10">
            <p className=" mb-1">Facilities:</p>
            <div className="">
              <div className="grid grid-cols-3 gap-4">
                {items.map((item) => (
                  <Checkbox
                    key={item}
                    label={item}
                    value={item}
                    onChange={handleCheckboxChange}
                  />
                ))}
                <div className="flex items-center  space-x-3">
                  <input
                    type="checkbox"
                    className="w-6 h-6"
                    onChange={addOtherHander}
                  />
                  <input
                    type="text"
                    ref={other}
                    className="border input-form "
                    placeholder="Other..."
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                onClick={printDataHandler}
                type="submit"
                class="w-[6rem]  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm md:text-lg px-5 py-2.5 mx-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default part1;
