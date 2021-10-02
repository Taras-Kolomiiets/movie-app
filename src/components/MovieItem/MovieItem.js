const MovieItem = ({moviesItem}) => {
    return (
        <>
            {moviesItem.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.id}</p>
                        <p>{item.overview}</p>
                    </div>
                )
            })}
        </>
    )
}

export default MovieItem;
