function File() {
    return (
        <>
            <p>{fileSystem.name}, {fileSystem.type}</p>
            {fileSystem.children.map(
                (x) =>
                    display(x)
            )}
        </>
    )
}

export default File