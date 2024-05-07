const ComparisonSection = () => {

  return (
	<div className="h-[80vh] py-10 px-20 flex flex-row">
		<div className="h-full w-1/2 bg-ltbg3 shadow-xl z-20 rounded-2xl flex flex-col p-10 text-black font-bold">
			<h2 className="text-center text-2xl">Our Company</h2>
			<ul className="m-10 leading-10">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</div>
		<div className="h-5/6 w-1/2 bg-dkbg3 self-center shadow-lg z-10 rounded-e-2xl p-10">
			<h2 className="text-center text-2xl">Our Competitors</h2>
			<ul className="m-10 leading-10">
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
			</ul>
		</div>
	</div>
  );
}

export default ComparisonSection;