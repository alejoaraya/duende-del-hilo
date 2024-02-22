"use client";

import { PlusIcon } from "@/assets/svg";
import { DataList, Search } from "@/components";
import Button from "@/components/button-cmp/Button";
import { Table } from "./components/Table";
import { Filters } from "./components/Filters";
import { useModal } from "@/modal";
import { useEffect, useState } from "react";
import { fetchGetAllNoActives } from "@/app/lib/fetching";
import { Costume } from "@/app/lib/definitions";
import { SearchInputIcon } from "@/assets/svg";
import { deleteAction } from "@/app/lib/data/funciones";

export default function CostumeNoActivesPage() {
  const [costumes, setCostumes] = useState<Costume[]>([]);
  const [search, setSearch] = useState("");

  const result = !costumes
    ? costumes
    : costumes.filter((costume) =>
        costume.name.toLowerCase().includes(search.toLowerCase())
      );

  const handleChange = (e: { target: { value: any } }) => {
    setSearch(e.target.value);
  };

  const getCostumes = async () => {
    const data: Costume[] = await fetchGetAllNoActives("costumes");
    setCostumes(data);
  };

  const deleteCostume = (id: string) => {
    deleteAction(id, "costumes")
  }

  useEffect(() => {
    getCostumes();
  }, []);

  return (
    <div className='w-full px-5 mt-10'>
      <DataList
        title='Disfraz'
        // setViewMode={viewModeType.TABLE}
        element={<Table data={result} deleteCostume={deleteCostume}/>}
      >
        <div>
          <DataList.Header>
            <div className='flex gap-5 my-2'>
              <div className='flex-1'>
                <div className='flex items-center justify-between p-2 rounded-md  bg-base-200'>
                  <form className='w-full'>
                    <input
                      autoComplete='false'
                      className='w-full flex-grow p-1 outline-none text-secondary bg-base-200 text-md'
                      placeholder='Buscar disfraz'
                      type='text'
                      name='search'
                      value={search}
                      onChange={handleChange}
                    />
                  </form>
                  <span>
                    <SearchInputIcon className='w-6 h-6 cursor-pointer [&>path]:hover:stroke-primary-focus ' />
                  </span>
                </div>
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