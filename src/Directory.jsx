function Directory() {
        function display(x) {
        if (x.type === "folder") {
            return (
                <>
                    <p>{x.name}, {x.type}</p>
                    {x.children.map(
                        (y) =>
                            display(y)

                    )}
                </>
            )
        } else {
            return (
                <>
                    <p>{x.name}, {x.type}</p>
                </>
            )
        }
    }
}

export default Directory