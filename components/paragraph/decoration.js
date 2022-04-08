const ParagraphDecoration = ({ className }) => {

    return (
        <div className={'bg-gray-200 h-2 w-8 mt-4 rounded-xl ' + (className || '')}></div>
    );
}


export default ParagraphDecoration;
