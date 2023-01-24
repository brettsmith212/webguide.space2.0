// import { supabase } from "../utils/supabaseClient";

const theguide = () => {
  // const getResourceTable = async () => {
  //   const { data, error } = await supabase.from("resources").select("*");
  //   if (error) {
  //     console.log("ERROR", error);
  //   } else if (data) {
  //     console.log(data);
  //   }
  // };
  return (
    <>
      <main className="text-white">
        <h1>The Guide</h1>
        {/* <button
          className="ml-10 transform rounded-lg bg-cyan-600 px-6 py-2 font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-300 focus:ring-opacity-80"
          onClick={getResourceTable}
        >
          SUPABASE!
        </button> */}
      </main>
    </>
  );
};

export default theguide;
