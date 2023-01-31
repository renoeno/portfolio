type ImageProps = {
  url: string;
};

export type ProjectProps = {
  id: string;
  description: string;
  projectUrl: string;
  tags: string;
  title: string;
  year: number;
  image: ImageProps[];
};

export type AboutProps = {
  aboutMe: string;
  aboutMePicture: {
    url: string;
  };
};

export type HomeProps = {
  projects: ProjectProps[];
  abouts: AboutProps[];
};
