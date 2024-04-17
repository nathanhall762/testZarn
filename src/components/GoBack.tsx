interface GoBackProps {
	category: string;
}

const GoBack: React.FC<GoBackProps> = ({ category }) => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <button onClick={goBack} className="fixed top-10 lg:top-24 left-0 p-2 m-2 lg:m-4 bg-ltbg2 dark:bg-dkbg2 text-black dark:text-white rounded z-50 hidden lg:visible lg:flex items-center transition-all hover:scale-105 hover:bg-opacity-75 hover:outline">
            <svg className="h-4 w-4 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to {category}
        </button>
    );
};

export default GoBack;
