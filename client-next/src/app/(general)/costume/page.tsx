"use client";

import { PlusIcon } from "@/assets/svg";
import { DataList, Search } from "@/components";
import Button from "@/components/button-cmp/Button";
import { Table } from "./components/Table";
import { Filters } from "./components/Filters";
import { useModal } from "@/modal";
import { useEffect, useState } from "react";
import { fetchGetAll } from "@/app/lib/fetching";
import { Costume } from "@/app/lib/definitions";

export default function CostumePage() {
  // const { openModal } = useModal();
  const [costumes, setCostumes] = useState<Costume[]>([]);
  const [filters, setFilters] = useState<Costume[]>([]);

  const handleFilters = (query: string) => {
    const filtered = costumes.filter((costume) =>
      costume.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilters(filtered);
  };

  const getCostumes = async () => {
    const data: Costume[] = await fetchGetAll("costumes");
    setCostumes(data);
  };

  useEffect(() => {
    getCostumes();
  }, []);

  return (
    <div className='w-full px-5 mt-10'>
      <DataList
        title='Disfraz'
        // setViewMode={viewModeType.TABLE}
        element={<Table data={filters} />}
      >
        <div>
          <DataList.Header>
            <div className='flex gap-5 my-2'>
              <div className='flex-1'>
                <Search
                  placeholder='Buscar disfraz'
                  onNewValue={handleFilters}
                />
              </div>
              <Button
                className='gap-3 lg:w-52 btn btn-primary md:w-80'
                /* onClick={() => openModal(<h1>Modal</h1>)} */
                //onClick={() => createCostume()}
              >
                <div className='flex items-center gap-5'>
                  <PlusIcon />
                  Nuevo Disfraz
                </div>
              </Button>
            </div>
          </DataList.Header>
          <DataList.Filters>
            <Filters filters={{}} />
          </DataList.Filters>
        </div>
      </DataList>
      {/* {totalPages > 1 && (
        <Paginated
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )} */}
    </div>
  );
}
