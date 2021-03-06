import styles from '../styles/list.module.css'

const List = (props) => {
    const {elements} = props;

    return (elements.length > 0) ? (
        <div className={styles.list}>
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