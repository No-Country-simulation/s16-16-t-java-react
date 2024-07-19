import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function SearchInput() {
  const [cleanInput, setCleanInput] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    setCleanInput(value !== '');
  }
  const handleClear = () => {
    setSearch('');
    setCleanInput(false);
  }

  return (
    <>
      <div className="rounded-lg border-2 border-cyan-600 w-[720px] flex items-center bg-neutral-normal-hover">
        <input
          type="text"
          onChange={handleChange}
          value={search}
          className="rounded-lg pl-6 w-full h-14 font-normal leading-snu text-lg bg-neutral-normal-hover placeholder:text-neutral-500 text-neutral-darker border-none outline-none"
          placeholder="¿Qué estás buscando?"
        />
        {cleanInput &&
          <IoClose
            onClick={handleClear}
            className="cursor-pointer h-7 w-7 fill-neutral-darker"
          />
        }
        <div className="ml-14 pr-6">
          <IoIosSearch className="cursor-pointer text-3xl fill-cyan-600" />
        </div>
      </div>
    </>
  )
}

export default SearchInput