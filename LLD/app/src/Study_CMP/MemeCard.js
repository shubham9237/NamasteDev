export const MemeCard = ({data}) => {
    const {url, title, author} = data; 
    return (
        <div className="p-5 m-5 border border-black rounded-lg">
            <img className="w-64 h-64" src={url}></img>
            <p>{author}</p>
        </div>
    );
}