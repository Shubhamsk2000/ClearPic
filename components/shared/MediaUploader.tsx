"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { toast } from "sonner";
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { dataUrl, getImageSize } from '@/lib/utils';
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props';

type mediaUploaderProps = {
    onValueChange: (value: string) => void;
    setImage: React.Dispatch<any>;
    publicId: string;
    image: any;
    type: string;
}


const MediaUploader = ({
    onValueChange,
    setImage,
    image,
    publicId,
    type
}: mediaUploaderProps) => {
    const onUploadSuccessHandler = (result: any) => {
        setImage((prevState: any) => ({
            ...prevState,
            publicId: result?.info?.public_id,
            width: result?.info?.width,
            height: result?.info?.height,
            secureURL: result?.info?.secure_url
        }))

        onValueChange(result?.info?.public_id);
        
        toast.success('Image uploaded Successfully', {
            description: '1 credit is deducted from your account',
        });

    }
    const onUploadeErrorHandler = () => {
        toast.error("Something went wrong while uploading. Please try again.");
    }
    return (
        <CldUploadWidget
            uploadPreset='clearpic'
            options={{
                multiple: false,
                resourceType: "image"
            }}
            onSuccess={onUploadSuccessHandler}
            onError={onUploadeErrorHandler}
        >
            {({ open }) => (
                <div className='flex flex-col gap-4'>
                    <h3 className='h3-bold text-dark-600'>Original</h3>
                    {publicId ? (
                        <div className='cursor-pointer overflow-hidden rounded-[10px]'>
                            <CldImage
                                width={getImageSize(type, image, "width")}
                                height={getImageSize(type, image, "height")}
                                src={publicId}
                                alt="image"
                                sizes={"(max-width: 767px) 100vw, 50vw"}
                                placeholder={dataUrl as PlaceholderValue}
                                className='media-uploader_cldImage'
                            />
                        </div>
                    ) : (
                        <div className='media-uploader_cta'
                            onClick={() => open()}
                        >
                            <div className="media-uploader_cta-image">
                                <Image
                                    src='/assets/icons/add.svg'
                                    alt="Add Image"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <p className="p-14-medium">Click here to upload image</p>
                        </div>
                    )}
                </div>
            )}
        </CldUploadWidget>
    )
}

export default MediaUploader
