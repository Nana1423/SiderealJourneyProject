export default function BackgroundVideo({ video }) {
    return (
        <div className="div-video">
            <video autoPlay muted loop src={video}></video>
        </div>
    )
}