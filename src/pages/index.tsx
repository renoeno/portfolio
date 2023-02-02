import { gql } from '@apollo/client';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import client from '../../apolloClient';
import { AboutSection } from '../modules/about/components/AboutSection';
import { HomeTitle } from '../modules/homePage/components/HomeSection';
import { ThemeToggler } from '../modules/homePage/components/ThemeToggler';
import { ProjectsSection } from '../modules/project/components/ProjectsSection';
import { HomeProps } from '../types';

export default function Home({ projects, abouts }: HomeProps) {
  return (
    <>
      <Head>
        <title>Portfolio de Reno Almeida</title>
        <meta name="description" content="Portfolio de Reno Almeida" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <ThemeToggler />
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
