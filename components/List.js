const List = (props) => {
    const {elements} = props;

    return (elements.length > 0) ? (
        <div>
            {elements.map(element => {
                return <img
                            src={element.urls.small} 
                            alt={element.alt_description} 
                            key={element.id}
                        />
                    }
                )
            }
        </div>
    ): ( null );
}

export default List;