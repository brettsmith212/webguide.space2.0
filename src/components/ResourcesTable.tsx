import Link from "next/link";
import { useEffect, useState } from "react";
import { Item } from "../types";

interface Props {
  data: string | Item[] | undefined;
}

const ResourcesTable: React.FC<Props> = ({ data }) => {
  const [resources, setResources] = useState<JSX.Element[]>();

  useEffect(() => {
    if (Array.isArray(data)) {
      const resourcesArr = data.map((item) => (
        <Link href={item.url} target="_blank" key={item.id}>
          <div className="min-h-96 mb-6 flex h-fit w-96 flex-col items-center gap-4 rounded-md p-6 text-center shadow-lg hover:scale-105 hover:bg-violet-50 md:h-96 md:w-80">
            <h3 className="text-3xl text-cyan-400 md:text-xl">{item.title}</h3>
            <img
              className="h-32 rounded-md"
              src={item.image}
              alt={item.subtitle}
            />
            <p className="text-xl md:text-lg">{item.subtitle}</p>
            <p className="md:text-sm">{item.description}</p>
          </div>
        </Link>
      ));

      setResources(resourcesArr);
    }
  }, [data]);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-evenly gap-4">
        {resources}
      </div>
    </div>
  );
};

export default ResourcesTable;
