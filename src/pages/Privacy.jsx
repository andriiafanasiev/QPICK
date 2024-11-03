function Privacy() {
  const InfoCard = ({ title, content }) => (
    <div className="bg-white text-start py-4 px-7 shadow-primary-shadow rounded-3xl">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <p className="ml-3 text-lg">{content}</p>
    </div>
  );
  const content =
    'The task of the organization, especially the course on a socially-oriented national project, requires us to systematically analyze the development model! Thus, constant information and technical support of our activities requires us to analyze the system of large-scale changes in a number of parameters! On the other hand, socio-economic development directly depends on comprehensively balanced innovations?';

  return (
    <div className="gap-8 pt-11 pb-20 max-w-[1100px] w-full flex flex-col mx-auto">
      <InfoCard title="Service Terms" content={content} />
      <InfoCard title="Delivery Terms" content={content} />
      <InfoCard title="Return Terms" content={content} />
    </div>
  );
}

export default Privacy;
