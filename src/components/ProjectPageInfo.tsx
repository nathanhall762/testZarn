interface Props {
  title: string;
  description: string;
  date: string;
  company?: string;
  credits?: string[];
}

const ProjectPageInfo: React.FC<Props> = ({
  description,
  title,
  date,
  company,
  credits,
}) => {
  return (
    <div className='bg-dkbg2 px-8 py-16 lg:px-64 lg:py-32'>
      <div className='flex grid-cols-4 flex-col gap-16 lg:grid'>
        <p className='col-span-3 break-words'>{description}</p>
        <div className='col-span-1 flex flex-col gap-4 text-center text-lg lg:text-left'>
          <h3 className=''>Credits</h3>
          <div className='flex flex-wrap justify-center gap-2 lg:justify-start'>
            {credits &&
              credits.map((credit) => <p className='text-base'>{credit}</p>)}
          </div>
          <h3 className='text-base'>{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProjectPageInfo;
