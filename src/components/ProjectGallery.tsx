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
      <div className='mb-10'>
        <h2 className='large:py-10 bg-ltbg2 py-4 text-center text-4xl text-black dark:bg-dkbg2 dark:text-white'>
          {galleryHeader}
        </h2>
        <ul className='align-center grid grid-cols-1 text-center hover:cursor-pointer group-hover:shadow-inner sm:grid-cols-2'>
          {projects.map((project) => (
            <li
              key={project.slug} // Use the slug as a unique key for each project
              className='card-zoom group relative z-10 flex h-64 bg-cover bg-center'
            >
              <a
                className='flex size-full items-center justify-center  hover:scale-100'
                href={`/${project.project_category.toLowerCase()}/${project.slug}`}
              >
                <div
                  className='card-zoom-image group-hover:zoom-in z-0 group-hover:brightness-50 lg:brightness-100'
                  style={{
                    backgroundImage: `url(${project.hero_section.project_hero_photo})`,
                  }}
                ></div>
                <span className='z-50 rounded bg-white bg-opacity-50 p-2 text-xl text-black transition-all duration-300 ease-in-out hover:bg-opacity-100 group-hover:opacity-100 lg:opacity-0 dark:bg-black dark:text-white'>
                  {project.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProjectGallery;
