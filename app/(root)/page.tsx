import { Collection } from '@/components/shared/Collection';
import { navLinks } from '@/constants';
import { getAllImages } from '@/lib/actions/image.actions';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Home = async ({ searchParams }: SearchParamProps) => {
  const resolvedParams = await searchParams;
  const page = Number(resolvedParams?.page) || 1;
  const searchQuery = (resolvedParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery });


  return (
    <>
      <section className='home'>
        <h1 className="home-heading">
          Unleash Your Creative Vision with ClearPic
        </h1>
        <ul className="flex-center w-full gap-20">
          {
            navLinks.slice(1, 5).map((link) => (
              <Link
                key={link.route}
                href={link.route}
                className="flex-center flex-col gap-2 transition-all duration-200 ease-in-out hover:scale-105"
              >
                <li className="flex-center rounded-full bg-white p-4 w-fit shadow-md hover:shadow-lg">
                  <Image
                    src={link.icon}
                    alt={link.label}
                    width={24}
                    height={24}
                    className="transition-transform duration-200 group-hover:rotate-6"
                  />
                </li>
                <p className="p-14-medium text-center text-white">{link.label}</p>
              </Link>
            ))
          }
        </ul>
      </section>
      <section className="sm:mt-12">
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPages}
          page={page}
        />
      </section>

    </>
  )
}

export default Home;
