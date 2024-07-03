import type { DocumentData } from 'firebase/firestore';

interface ProjectGalleryProps {
  projects: DocumentData[];
  galleryHeader: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  projects,
  galleryHeader,
}) => {
  return (
    <>
      <div className='my-8 lg:my-16 lg:px-8'>
        <h3 className='mb-4 text-center text-lg font-bold lg:text-3xl'>
          {galleryHeader}
        </h3>
        <div className='mx-auto mb-8 h-[2px] w-3/4 max-w-2xl bg-primary-md1'></div>
        <ul className='m-0 mx-auto flex max-w-7xl flex-col flex-wrap items-center justify-center gap-4 text-center hover:cursor-pointer group-hover:shadow-inner sm:flex-row lg:gap-8'>
          {projects.map((project) => (
            <li
              key={project.slug} // Use the slug as a unique key for each project
              className='card-zoom group relative z-10 flex h-64 w-[320px] bg-cover bg-center'
            >
              <div className='size-full'>
                <a
                  className='flex size-full items-center justify-center  hover:scale-100'
                  href={`/${project.parent_route ? project.parent_route + '/' : ''}${project.slug}`}
                >
                  <div
                    className='card-zoom-image group-hover:zoom-in z-0 brightness-50 group-hover:brightness-100'
                    style={{
                      backgroundImage: `url(${project.content[0].value.image})`,
                    }}
                  ></div>
                  <span className='z-50 rounded bg-white bg-opacity-50 p-2 text-xl text-black transition-all duration-300 ease-in-out hover:bg-opacity-100 group-hover:opacity-100 dark:bg-black dark:text-white'>
                    {project.title}
                  </span>
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
