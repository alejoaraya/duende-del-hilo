"use client";

import { PlusIcon } from "@/assets/svg";
import { DataList, Search } from "@/components";
import Button from "@/components/button-cmp/Button";
import { Table } from "./components/Table";
import { Filters } from "./components/Filters";
import { useEffect, useState } from "react";
import { fetchGetAllActives } from "@/app/lib/fetching";
import { Costume } from "@/app/lib/definitions";
import { SearchInputIcon } from "@/assets/svg";
import { deleteAction } from "@/app/lib/data/funciones";
import ConfirmationModal from "@/components/modal-cmp/ConfirmationModal";
import FormNewCostume from "./components/FormNewCostume";
import { useCostume } from "@/hook/useCostume";

export default function CostumePage() {
  const { getAllCostumes, costumes } = useCostume();
  const [confirmationModalOpen, setConfirmationModalOpen] =
    useState<boolean>(false);

  const [search, setSearch] = useState("");

  const initial = costumes.filter(
    (category) => category.dischargeDate?.length === 0
  );
  const result = !costumes
    ? initial
    : initial.filter(
        (costume: Costume) =>
          costume.name.toLowerCase().includes(search.toLowerCase()) ||
          costume.category.toLowerCase().includes(search.toLowerCase()) ||
          costume.price.toString().toLowerCase().includes(search.toLowerCase())
      );

  const handleChange = (e: { target: { value: any } }) => {
    setSearch(e.target.value);
  };

  // const getCostumes = async () => {
  //   const data: Costume[] = await fetchGetAllActives("costumes");
  //   setCostumes(data);
  // };

  useEffect(() => {
    getAllCostumes();
  });

  return (
    <>
      <div className='w-full px-5 mt-10'>
        <DataList
          title='Disfraz'
          // setViewMode={viewModeType.TABLE}
          element={<Table data={result} />}
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
                  onClick={() =>
                    setConfirmationModalOpen(!confirmationModalOpen)
                  }
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
      {confirmationModalOpen && (
        <ConfirmationModal
          title='CREAR DISFRAZ'
          isOpen={confirmationModalOpen}
          handleClose={() => setConfirmationModalOpen(!confirmationModalOpen)}
        >
          <div className='overflow-auto h-[462px]'>
            <FormNewCostume />
          </div>
        </ConfirmationModal>
      )}
    </>
  );
}
