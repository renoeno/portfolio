import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import client from '../../apolloClient';
import { AboutSection } from '../modules/about/components/AboutSection';
import { HomeTitle } from '../modules/homePage/components/HomeSection';
import { ProjectsSection } from '../modules/project/components/ProjectsSection';
import { HomeProps } from '../types';

export default function Home({ projects, abouts }: HomeProps) {
  return (
    <>
      <HomeTitle />
      <ProjectsSection projects={projects} />
      <AboutSection about={abouts[0]} />
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
