interface PropsType {
    imageUrl: string
}

export const Welcome: React.FC<PropsType> = ({imageUrl})=>{
    return (
        <>
        <h3>WELCOME INDIA</h3>
        <input type="text" id="fname" name="fname"><br><br></br>
         <img
            src={imageUrl || '../assets/template-images/courses/vidocto_image.png'}
            alt=""
            className="img-fluid image-cover"
            />
        </>
    )
}