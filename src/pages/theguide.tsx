import ResourcesTable from "../components/ResourcesTable";
import { Item } from "../types";
import { api } from "../utils/api";

interface Props {
  data: string | Item[];
}

// export async function getServerSideProps() { return {
//     props: {
//       data,
//     },
//   };
// }

const theguide: React.FC<Props> = () => {
  let data = api.resources.resourcesTable.useQuery().data
  
  return (
    <>
      <main className="text-white">
        <h1>The Guide</h1>
        <ResourcesTable data={data} />
      </main>
    </>
  );
};

export default theguide;
