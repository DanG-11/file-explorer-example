import File from './File.jsx'
import Directory from './Directory.jsx'

function FullFile( { fileSystem } ) {
    return (
        <>
            {
                fileSystem.children.map(
                    (x) => {
                        if (x.type === "file"){
                            return <File name={x.name} type={x.type}/>
                        }

                        return <Directory name={x.name} type={x.type}/>
                    }
                )
            }
        </>
    )
}

export default FullFile
