import File from './File.jsx'
import Directory from './Directory.jsx'

function FullFile( { fileSystem } ) {
    return (
        <>
            {
                fileSystem.children.map(
                    (x) => {
                        if (x.type === "folder"){
                            return <Directory name={x.name} type={x.type}/>
                        }

                          return <File name={x.name} type={x.type}/>
                    }
                )
            }
        </>
    )
}

export default FullFile
