import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/shared/Header'
import { transformationTypes } from '@/constants';
import TransformationForm from '@/components/shared/TransformationForm';
import { auth } from '@clerk/nextjs/server';
import { getUserById } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import { transformationMetadata } from '@/constants/transformationMetadata';

export async function generateMetadata(request: {
  params: Promise<{ type: string }>
}): Promise<Metadata> {
  const { type } = await request.params 

  const transformation = transformationMetadata[type]

  if (!transformation) {
    return {
      title: 'AI Transformation | ClearPic',
      description: 'Use AI to enhance and edit your images.',
    }
  }

  return {
    title: `${transformation.title} | ClearPic`,
    description: transformation.subTitle,
  }
}

const AddTransformationTypePage = async ({ params }: SearchParamProps) => {
  const { type } = await params;
  const transformation = transformationTypes[type];
  const { userId } = await auth();

  if (!userId) {
    redirect('/sign-in');
  }
  const user = await getUserById(userId);

  return (
    <>
      <Header
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      <section className='mt-10'>
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage;
