"use client";
import Image from 'next/image'
import React from 'react'
import { ProfileProps } from '@/types'
import {useState, Fragment} from 'react'
import {useRouter} from 'next/navigation'

const ProfileHeader = ({licenseEndDate, licenseType, lastCarRented, totalKMRented,id}: ProfileProps) => {
    licenseEndDate = "2021-12-12"
    licenseType = "B"
    lastCarRented = "BMW"
    totalKMRented = 1000
    id = 1


    return (
        <div className="flex h-fit bg-gray-100 border-2">
            <div className="flex w-full">
                <div className="w-1/4 h-fit mt-20 bg-white shadow-md rounded-md flex flex-col justify-center items-center">
                    <Image
                        src="/avatar.jpg"
                        alt="profile"
                        width={100}
                        height={300}
                        
                    />
                    <h2 className="  justify-center shadow-md font-bold ">
                        Ayberk Balay
                    </h2>
                </div>

                <div className=" flex w-3/4 h-fit mt-20 bg-white shadow-md rounded-md flex-row justify-center items-center  ">
                

                        
                        
                        <div className=" space-y-2 w-full">
                        <h2 className="text-2xl font-bold mb-12 ">Profile</h2>
                        <div >
                            <h3> Drivers License Type:    {licenseType}</h3>
                            <h3> Drivers End Date:    {licenseEndDate}</h3>
                            <h3> Last Car Rented:   {lastCarRented}</h3>
                            <h3> Total KM with CarHub:    {totalKMRented}</h3>
                            </div>
                        </div>
                        <button className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-1 px-2 mb-40 rounded ">
                                Edit Profile
                        </button>

                </div>
            </div>
            </div>
            )
}

            export default ProfileHeader