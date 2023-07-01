import React from 'react'
import CarCard from './CarCard'
import { CarProps, ProfileProps } from '@/types'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import Image from 'next/image'
import { CarCardProps } from '@/types'




const ProfileBody = () => {
    const car1: CarProps = {
        make: 'Toyota',
        model: 'Corolla',
        year: 2019,
        city_mpg: 28,
        drive: 'fwd',
        transmission: 'a',
        fuel_type: 'premium',
        highway_mpg: 35,
        combination_mpg: 30,
        class: 'compact',
        cylinders: 4,
        displacement: 1.8,
    }
    const car2: CarProps = {
        make: 'Peugeot',
        model: '3008',
        year: 2019,
        city_mpg: 28,
        drive: 'fwd',
        transmission: 'a',
        fuel_type: 'premium',
        highway_mpg: 35,
        combination_mpg: 30,
        class: 'compact',
        cylinders: 4,
        displacement: 1.8,
    }
    const car: CarProps = {
        make: 'Toyota',
        model: 'Corolla',
        year: 2019,
        city_mpg: 28,
        drive: 'fwd',
        transmission: 'a',
        fuel_type: 'premium',
        highway_mpg: 35,
        combination_mpg: 30,
        class: 'compact',
        cylinders: 4,
        displacement: 1.8,
    }
    const user: ProfileProps = {
        id: 1,  
        firstName: 'John',
        lastName: 'Doe',
        email: 'ayberk.balay@gmail.com',

        }
  return (
    <div className="flex flex-col">
        <div>
            <h2 className="text-2xl font-bold">Previous Rented Cars </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <CarCard car={car1} />
                <CarCard car={car2} />
                <CarCard car={car} />
                <CarCard car={car} />
                <CarCard car={car} />
                <CarCard car={car} />

                </div>
            

        </div>
    </div>
  )
}

export default ProfileBody