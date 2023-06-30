import Image from 'next/image'
import React from 'react'

const ProfileHeader = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="flex w-full">
                <div className="w-1/4 h-1/4 mt-20 bg-white shadow-md rounded-md flex flex-col justify-center items-center">
                    <Image
                        src="/hero.png"
                        alt="profile"
                        width={200}
                        height={200}
                        className="mt-12 object-contain"
                    />

                    <h2 className=" justify-center ">
                        Ayberk Balay
                    </h2>
                </div>

                <div className=" flex w-3/4 h-1/4 mt-20 bg-white shadow-md rounded-md flex-col justify-center items-center  ">
                    <div className="flex justify-center items-center">
                        <h2 className="text-2xl font-bold mb-24">Profile</h2>
                        <button className="text-primary-blue rounded-full bg-white min-w-[130px]">
                            Edit
                        </button>

                    </div>
                </div>
            </div>
            </div>
            )
}

            export default ProfileHeader