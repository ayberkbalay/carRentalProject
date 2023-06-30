"use client";
import React from 'react'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt="magnifying glass"
            width={40}
            height={40}
            className="object-contain"
        />
    </button>
);


const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const Router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(manufacturer==="" && model==="") {
            return alert('Please fill the search bar');
        }
        updatedSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };
    const updatedSearchParams = (model: string, manufacturer:string) => {
        const searchParams = new URLSearchParams(window.location.search);
        if(model) {
            searchParams.set('model', model)
        }
        else {
            searchParams.delete('model')
        }

        if(manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        }
        else {
            searchParams.delete('manufacturer');
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`

        Router.push(newPathName);
    };

    return (
        <form className="searchbar"
            onSubmit={handleSearch}>
            <div className="searchbar__item">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className="searchbar__item">
                <Image
                    src="/model-icon.png"
                    alt="car model"
                    width={25}
                    height={25}
                    className="absolute w-[20px] h-[20px] ml-4"
                />
                <input
                    type="text"
                    placeholder="Tiguan"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    name="model"
                    className="searchbar__input"
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
    )
}

export default SearchBar