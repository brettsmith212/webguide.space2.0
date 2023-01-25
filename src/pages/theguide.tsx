import { api } from "../utils/api";

const theguide = () => {
  const result = api.resources.resourcesTable.useQuery();
  console.log(result.data);
  return (
    <>
      <main className="text-white">
        <h1>The Guide</h1>
      </main>
    </>
  );
};

export default theguide;
