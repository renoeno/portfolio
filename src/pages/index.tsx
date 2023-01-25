import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import client from '../../apolloClient';

type ProjectProps = {
  id: string;
  description: string;
  projectUrl: string;
  tags: string;
  title: string;
  year: number;
  image: {
    url: string;
  };
};

type AboutProps = {
  aboutMe: string;
  aboutMePicture: {
    url: string;
  };
};

type HomeProps = {
  projects: ProjectProps[];
  abouts: AboutProps[];
};

export default function Home({ projects, abouts }: HomeProps) {
  return (
    <>
      <ul>
        {projects.map((project) => {
          return <li key={project.id}>{project.title}</li>;
        })}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await client.query({
    query: gql`
      query {
        projects {
          createdAt
          description
          id
          projectUrl
          publishedAt
          tags
          title
          updatedAt
          year
          image {
            url
          }
        }
        abouts {
          aboutMe
          aboutMePicture {
            url
          }
        }
      }
    `,
  });

  const { projects, abouts } = data;

  return {
    props: {
      projects,
      abouts,
    },
  };
};
