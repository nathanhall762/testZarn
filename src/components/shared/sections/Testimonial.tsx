interface Props {
  content: {
    heading: string;
    body: string;
  };
}

const Testimonial: React.FC<Props> = ({ content }) => {
  return (
    <>
      <div className='p-4'>
        <h2>{content.heading}</h2>
        <p>{content.body}</p>
      </div>
    </>
  );
};

export default Testimonial;
