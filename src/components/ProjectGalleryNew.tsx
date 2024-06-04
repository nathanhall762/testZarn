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
  const filteredProjects = projects.filter(project => project.title.toLowerCase() !== 'buick');

  return (
    <>
      <div className='my-8 lg:my-16 lg:px-8'>
        <h3 className='mb-4 text-center text-lg font-bold lg:text-3xl'>{galleryHeader}</h3>
        <div className='mb-8 h-[2px] w-3/4 mx-auto max-w-2xl bg-primary-md1'></div>
        <ul className='align-center m-0 flex flex-wrap justify-center text-center gap-4 hover:cursor-pointer group-hover:shadow'>
          {filteredProjects.map((project) => (
            <li
              key={project.slug} // Use the slug as a unique key for each project
              className='card-zoom group relative z-10 flex rounded-md h-32 lg:h-64 w-md lg:w-xl bg-cover bg-center'
            >
              <div className='size-full'>
                <a
                  className='flex size-full items-center justify-center hover:scale-100'
                  href={`/${project.parent_route ? project.parent_route + '/' : ''}${project.slug}`}
                >
                  <div
                    className='card-zoom-image group-hover:zoom-in z-0 group-hover:brightness-100 brightness-0 transition-opacity duration-slow ease-in-out'
                    style={{
                      backgroundImage: `url(${project.content[0].value.image})`,
                    }}
                  ></div>
                  <div className="flex flex-row lg:flex-col items-center justify-center absolute inset-0 z-20">
                    <Icon
                      icon={getIcon(project.title.toLowerCase())}
                      className='text-[5rem] lg:text-[10rem] text-neutral-1 transition-all duration-md ease-in-out group-hover:opacity-0'
                    />
                    <span
                      className='z-50 hidden lg:flex mt-2 rounded bg-white bg-opacity-50 p-2 text-xl lg:text-2xl text-black transition-all duration-300 ease-in-out hover:bg-opacity-100 group-hover:opacity-100 dark:bg-black dark:text-white'
                    >
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
