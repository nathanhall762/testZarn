// @ts-nocheck
import type { DocumentData } from 'firebase/firestore';
import { Icon } from '@iconify-icon/react';

interface ProjectGalleryProps {
  projects: DocumentData[];
  galleryHeader: string;
}

const getIcon = (projectTitle: string): string | undefined => {
  switch (projectTitle.toLowerCase()) {
    case 'land rover':
      return 'simple-icons:landrover';
    case 'lexus':
      return 'cbi:lexus';
    default:
      return `simple-icons:${projectTitle}`;
  }
};

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projects,
  galleryHeader,
}) => {
  const filteredProjects = projects.filter(
    (project) => project.title.toLowerCase() !== 'buick'
  );

  return (
    <>
      <div className='my-8 lg:my-16 '>
        <h3 className='mb-4 text-center text-lg font-bold lg:text-3xl'>
          {galleryHeader}
        </h3>
        <div className='mx-auto mb-8 h-[2px] w-3/4 max-w-2xl bg-primary-md1'></div>
        <ul className='m-0 flex snap-x snap-mandatory overflow-x-scroll bg-neutral-8 px-2 py-2 text-center hover:cursor-pointer group-hover:shadow lg:px-8'>
          {filteredProjects.map((project) => (
            <li
              key={project.slug} // Use the slug as a unique key for each project
              className='card-zoom group relative z-10 mx-4 flex h-32 w-md flex-shrink-0 snap-center snap-always rounded-md bg-cover bg-center lg:h-64 lg:w-xl'
            >
              <div className='size-full'>
                <a
                  className='flex size-full items-center justify-center hover:scale-100'
                  href={`/${project.parent_route ? project.parent_route + '/' : ''}${project.slug}`}
                >
                  <div
                    className='card-zoom-image group-hover:zoom-in z-0 brightness-0 transition-opacity duration-slow ease-in-out group-hover:brightness-100'
                    style={{
                      backgroundImage: `url(${project.content[0].value.image})`,
                    }}
                  ></div>
                  <div className='absolute inset-0 z-20 flex flex-row items-center justify-center lg:flex-col'>
                    <Icon
                      icon={getIcon(project.title.toLowerCase())}
                      className='text-[5rem] text-neutral-1 transition-all duration-md ease-in-out group-hover:opacity-0 lg:text-[10rem]'
                    />
                    <span className='z-50 mt-2 hidden rounded bg-white bg-opacity-50 p-2 text-xl text-black transition-all duration-300 ease-in-out hover:bg-opacity-100 group-hover:opacity-100 lg:flex lg:text-2xl dark:bg-black dark:text-white'>
                      {project.title}
                    </span>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectGallery;
