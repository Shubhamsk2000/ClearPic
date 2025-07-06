export const transformationMetadata: Record<string, {
  title: string;
  subTitle: string;
  type: string;
}> = {
  restore: {
    title: 'Image Restore',
    subTitle: 'Fix and restore your old or blurry images using AI.',
    type: 'restore',
  },
  fill: {
    title: 'Generative Fill',
    subTitle: 'Fill missing parts of images using AI.',
    type: 'fill',
  },
  remove: {
    title: 'Object Remove',
    subTitle: 'Remove unwanted objects from images.',
    type: 'remove',
  },
  recolor: {
    title: 'Object Recolor',
    subTitle: 'Recolor objects using AI-powered editing.',
    type: 'recolor',
  },
  removeBackground: {
    title: 'Background Remove',
    subTitle: 'Remove the background from images with one click.',
    type: 'removeBackground',
  },
};
